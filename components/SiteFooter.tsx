import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>France 2040 · Projet de recherche indépendant</p>
      <Link className="footer-participate" href="/participer">
        Participer à France 2040
      </Link>
    </footer>
  );
}
