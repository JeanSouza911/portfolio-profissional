"use client";

import Link from "next/link";
import { Container } from "@/components/container";
import { NavLink } from "@/components/nav-link";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { navItems } from "@/lib/navigation";

export function Header() {
  return (
    <header
      id="site-header"
      className="sticky top-0 z-50 border-b border-border bg-card/95 py-4 backdrop-blur-md supports-backdrop-filter:bg-card/80 sm:py-5"
    >
      <Container className="relative flex items-center justify-between gap-4">
        <Link
          href="/#hero"
          aria-label="Jean Souza — página inicial"
          className="shrink-0 rounded-sm text-lg font-semibold text-foreground sm:text-xl"
        >
          Jean Souza
        </Link>
        <div className="flex items-center gap-1 sm:gap-3">
          <nav aria-label="Navegação principal">
            <ul
              role="list"
              className="flex items-center gap-x-2 sm:gap-x-5 lg:gap-x-6"
            >
              {navItems.map(({ href, label }) => (
                <li key={href}>
                  <NavLink
                    href={href}
                    className="px-1.5 py-1 text-xs text-muted-foreground hover:text-foreground sm:px-2 sm:text-sm"
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}
