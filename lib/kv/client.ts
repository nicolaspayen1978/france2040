/**
 * Slim Upstash REST KV client — adapted from HEA-World utils/HEAkvUtils.js
 * and utils/kv/kvClient.js. Transport only; no HEA domain helpers.
 */

function getKVApiConfig(): { url: string; token: string } {
  const isDevKV = process.env.KV_MODE === "dev";
  const url = isDevKV
    ? process.env.DEV_KV_REST_API_URL
    : process.env.KV_REST_API_URL;
  const token = isDevKV
    ? process.env.DEV_KV_REST_API_TOKEN
    : process.env.KV_REST_API_TOKEN;

  if (!url || !token) {
    throw new Error("Missing KV_REST_API_URL or KV_REST_API_TOKEN");
  }

  return { url: url.replace(/\/+$/, ""), token };
}

export function isKVConfigured(): boolean {
  try {
    getKVApiConfig();
    return true;
  } catch {
    return false;
  }
}

function kvHeaders(): HeadersInit {
  const { token } = getKVApiConfig();
  return {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
}

function unwrapUpstashResultEnvelope(payload: unknown): unknown {
  if (
    payload &&
    typeof payload === "object" &&
    !Array.isArray(payload) &&
    Object.prototype.hasOwnProperty.call(payload, "result")
  ) {
    return (payload as { result: unknown }).result;
  }
  return payload;
}

function normalizeKVSetValue(value: unknown): string {
  if (value === null || value === undefined) return "";
  if (typeof value === "string") return value;
  try {
    return JSON.stringify(value);
  } catch {
    return String(value);
  }
}

function parseMaybeJsonString(value: unknown): unknown {
  if (typeof value !== "string") return value;
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
}

async function pipeline(cmds: unknown[][]): Promise<unknown[]> {
  const { url } = getKVApiConfig();
  const res = await fetch(`${url}/pipeline`, {
    method: "POST",
    headers: kvHeaders(),
    body: JSON.stringify(cmds),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`KV pipeline failed: HTTP ${res.status} ${text}`);
  }

  const out = (await res.json().catch(() => null)) as unknown;
  if (Array.isArray(out)) return out;
  return [];
}

function pipelineResult(entry: unknown): unknown {
  if (entry && typeof entry === "object" && "result" in entry) {
    return (entry as { result: unknown }).result;
  }
  return entry;
}

export async function kvGet(key: string): Promise<unknown> {
  const { url } = getKVApiConfig();
  const resp = await fetch(`${url}/get/${encodeURIComponent(key)}`, {
    method: "GET",
    headers: kvHeaders(),
  });

  if (!resp.ok) return null;

  const wrapped = await resp.json();
  let data = unwrapUpstashResultEnvelope(wrapped);
  if (typeof data === "string") {
    try {
      data = JSON.parse(data);
    } catch {
      /* keep string */
    }
  }
  return data ?? null;
}

export async function kvSet(key: string, value: unknown): Promise<boolean> {
  const { url } = getKVApiConfig();
  const res = await fetch(`${url}/set/${encodeURIComponent(key)}`, {
    method: "POST",
    headers: kvHeaders(),
    body: JSON.stringify(value),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Failed to set KV key ${key}: ${res.status} ${text}`);
  }

  return true;
}

export async function kvSetWithOptions(
  key: string,
  value: unknown,
  options: { nx?: boolean; xx?: boolean; ex?: number; px?: number } = {},
): Promise<boolean | unknown> {
  const cmd: unknown[] = ["SET", String(key), normalizeKVSetValue(value)];
  if (options.nx) cmd.push("NX");
  if (options.xx) cmd.push("XX");
  if (options.ex != null) cmd.push("EX", String(Math.floor(options.ex)));
  if (options.px != null) cmd.push("PX", String(Math.floor(options.px)));

  const out = await pipeline([cmd]);
  const result = pipelineResult(out[0]);

  if (options.nx || options.xx) return result === "OK";
  return result === "OK";
}

export async function kvDel(key: string): Promise<void> {
  const { url } = getKVApiConfig();
  const res = await fetch(`${url}/del/${encodeURIComponent(key)}`, {
    method: "POST",
    headers: kvHeaders(),
  });

  if (!res.ok) {
    throw new Error(`Failed to delete KV key: ${key}`);
  }
}

export async function kvIncr(key: string): Promise<number> {
  const out = await pipeline([["INCR", String(key)]]);
  const n = Number(pipelineResult(out[0]));
  if (!Number.isFinite(n)) {
    throw new Error(`kvIncr returned non-numeric result for ${key}`);
  }
  return Math.floor(n);
}

export async function kvExpire(key: string, seconds: number): Promise<void> {
  await pipeline([["EXPIRE", String(key), String(Math.floor(seconds))]]);
}

export async function kvSAdd(key: string, member: string): Promise<void> {
  await pipeline([["SADD", String(key), String(member)]]);
}

export async function kvSRem(key: string, member: string): Promise<void> {
  await pipeline([["SREM", String(key), String(member)]]);
}

export async function kvSMembers(key: string): Promise<string[]> {
  const out = await pipeline([["SMEMBERS", String(key)]]);
  const result = pipelineResult(out[0]);
  return Array.isArray(result) ? result.map(String) : [];
}

export async function kvGetJson<T>(key: string): Promise<T | null> {
  const raw = await kvGet(key);
  if (raw == null) return null;
  return parseMaybeJsonString(raw) as T;
}
