import type { Metadata } from "next";

/** Current freeze: inherit site indexing. Older freeze: addressable, not ingested. */
export function supersededVersionRobots(isCurrent: boolean): Pick<Metadata, "robots"> {
  if (isCurrent) return {};
  return { robots: { index: false, follow: true } };
}
