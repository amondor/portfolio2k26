"use client";

import Link from "next/link";

const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-separator">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-foreground font-clash font-medium tracking-tight"
        >
          <span className="flex gap-0.5">
            <span className="w-2.5 h-2.5 bg-accent rounded-sm" />
            <span className="w-2.5 h-2.5 bg-accent rounded-sm" />
          </span>
          <span className="text-sm font-semibold uppercase tracking-wider">
            Portfolica
          </span>
        </Link>
        <ul className="flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-foreground text-sm font-medium hover:text-accent transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
