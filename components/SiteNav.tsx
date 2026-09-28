"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/pacte", label: "Le Pacte" },
  { href: "/documents", label: "Documents" },
  { href: "/projet", label: "Projet" },
];

export function SiteNav() {
  const pathname = usePathname();

  return (
    <nav className="site-nav" aria-label="Navigation principale">
      <ul>
        {links.map((link) => {
          const current =
            link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

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
