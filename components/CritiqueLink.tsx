import Link from "next/link";
import { critiqueHref, type CritiqueTarget } from "@/lib/critique";

export function CritiqueLink({ target, label = "Critiquer" }: { target: CritiqueTarget; label?: string }) {
  return (
    <Link
      className="critique-link"
      href={critiqueHref(target)}
      aria-label={`${label} ce passage`}
    >
      {label}
    </Link>
  );
}
