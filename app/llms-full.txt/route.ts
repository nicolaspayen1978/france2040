import { buildLlmsFull } from "@/lib/llmCorpus";

export const dynamic = "force-static";

export function GET() {
  return new Response(buildLlmsFull(), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
