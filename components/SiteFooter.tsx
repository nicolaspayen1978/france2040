import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>France 2040 · Projet de recherche indépendant</p>
      <Link className="footer-support" href="/soutenir">
        Soutenir France 2040
      </Link>
    </footer>
  );
}
