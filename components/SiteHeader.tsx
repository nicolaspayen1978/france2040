import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/">
        <svg className="flag" viewBox="0 0 3 2" aria-hidden="true">
          <rect width="1" height="2" fill="var(--mark-blue)" />
          <rect width="1" height="2" x="1" fill="var(--paper)" />
          <rect width="1" height="2" x="2" fill="var(--mark-red)" />
        </svg>
        <span className="wordmark">France 2040</span>
      </Link>
      <SiteNav />
    </header>
  );
}
