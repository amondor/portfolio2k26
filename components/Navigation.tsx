"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "#projects", label: "All Projects" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 lg:px-8 lg:pt-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 lg:gap-4">
        {/* Navbar (pill) : logo + links (desktop) ou burger (mobile) */}
        <nav className="flex h-11 min-w-0 items-center rounded-[20px] bg-card px-3 shadow-sm lg:h-12 lg:rounded-[56px] lg:px-5">
          <div className="flex w-full items-center justify-between gap-4 lg:justify-start lg:gap-10 xl:gap-14">
            {/* Burger (mobile) */}
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-separator bg-card lg:hidden"
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={menuOpen}
            >
              <span className="flex flex-col gap-1">
                <span className="h-0.5 w-4 bg-foreground" />
                <span className="h-0.5 w-4 bg-foreground" />
              </span>
            </button>
            {/* Logo (desktop) */}
            <Link
              href="/"
              className="hidden shrink-0 lg:flex"
              aria-label="Accueil"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent">
                <svg
                  className="h-4 w-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </span>
            </Link>
            {/* Links (desktop) */}
            <ul className="hidden items-center gap-8 lg:flex xl:gap-10">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs font-medium text-foreground transition-colors hover:text-accent lg:text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Appel + Mail : deux icônes côte à côte, alignées à droite */}
        <div className="flex shrink-0 items-center gap-2 lg:gap-3">
          <a
            href="tel:+33640755282"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[56px] bg-card text-foreground shadow-sm transition-colors hover:bg-separator/30 lg:h-12 lg:w-12"
            aria-label="Appeler le +33 6 40 75 52 82"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </a>
          <a
            href="mailto:mondor.andrew@gmail.com"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[56px] bg-card text-accent shadow-sm transition-colors hover:bg-accent/10 lg:h-12 lg:w-12"
            aria-label="Envoyer un email"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Menu mobile (overlay) */}
      {menuOpen && (
        <>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 z-40 bg-foreground/20 backdrop-blur-sm lg:hidden"
            aria-label="Fermer"
          />
          <div className="fixed left-4 top-24 z-50 w-[70%] max-w-[320px] rounded-2xl bg-card p-6 shadow-lg lg:hidden">
            <ul className="flex flex-col gap-1">
              <li>
                <Link
                  href="/"
                  className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-foreground hover:bg-separator/30"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10">
                    <svg className="h-4 w-4 text-accent" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                    </svg>
                  </span>
                  Accueil
                </Link>
              </li>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-lg px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-separator/30 hover:text-accent"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </header>
  );
}
