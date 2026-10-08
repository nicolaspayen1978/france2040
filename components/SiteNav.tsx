"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/documents/resume-executif", label: "Résumé" },
  { href: "/documents/pacte-v2/v/2026-10-08", label: "Le Pacte" },
  { href: "/documents", label: "Documents" },
  { href: "/en-images", label: "En images" },
  { href: "/projet", label: "Projet" },
  { href: "/participer", label: "Participer" },
];

export function SiteNav() {
  const pathname = usePathname();

  return (
    <nav className="site-nav" aria-label="Navigation principale">
      <ul>
        {links.map((link) => {
          const matches =
            link.href === "/"
              ? pathname === "/"
              : pathname === link.href || pathname.startsWith(`${link.href}/`);
          const coveredByLongerLink = links.some(
            (other) =>
              other.href.length > link.href.length &&
              (pathname === other.href || pathname.startsWith(`${other.href}/`)),
          );
          const current = matches && !coveredByLongerLink;

          return (
            <li key={link.href}>
              <Link href={link.href} aria-current={current ? "page" : undefined}>
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
