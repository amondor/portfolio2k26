"use client";

import Link from "next/link";

const footerLinks = [
  { href: "#projects", label: "All Projects" },
  { href: "#contact", label: "Contact" },
  { href: "/about", label: "About" },
  { href: "/404", label: "404" },
];

const socialPills = [
  { href: "https://dribbble.com", label: "Dribbble", color: "#EA4C89" },
  { href: "https://behance.net", label: "Behance", color: "#1769FF" },
  { href: "https://figma.com", label: "Figma", color: "#F24E1E" },
  { href: "https://x.com", label: "X", color: "#000000" },
];

export function Footer() {
  return (
    <>
      {/* Section pré-footer : Socials, Links, Newsletter */}
      <section className="border-t border-separator bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
            {/* Colonne Socials */}
            <div>
              <h3 className="text-sm font-semibold tracking-wider text-[#27272A] lg:text-base">
                Socials
              </h3>
              <div className="mt-6 rounded-2xl p-4 lg:p-5">
                <div className="flex items-start gap-4">
                  <span
                    className="flex h-[178px] w-[136px] shrink-0 items-center justify-center rounded-2xl bg-accent"
                    aria-hidden
                  >
                    <svg
                      className="h-12 w-12 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden
                    >
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </span>
                  <div className="flex flex-col gap-2">
                    {socialPills.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-fit items-center gap-2 rounded-full border border-[#7F7F87] bg-transparent px-4 py-2 text-sm font-medium text-[#7F7F87] transition-colors hover:border-[#7F7F87]/80 hover:text-[#27272A]"
                      >
                        <span
                          className="h-4 w-4 rounded-full"
                          style={{ backgroundColor: item.color }}
                          aria-hidden
                        />
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Colonne Links */}
            <div>
              <h3 className="text-sm font-semibold tracking-wider text-[#27272A] lg:text-base">
                Links
              </h3>
              <div className="mt-6 rounded-2xl p-4 lg:p-5">
                <ul className="flex flex-col gap-2">
                  {footerLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-[#7F7F87] transition-colors hover:text-accent lg:text-base"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Colonne Newsletter */}
            <div>
              <h3 className="text-sm font-semibold tracking-wider text-[#27272A] lg:text-base">
                Newsletter
              </h3>
              <p className="mt-6 max-w-sm font-clash text-base font-normal leading-relaxed text-[#71717A]">
                Subscribe to get early access to special offers, design
                discounts, and exclusive project updates.
              </p>
              <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="jane@brand.com"
                  className="flex-1 rounded-full border border-separator bg-[#F4F4F5] px-4 py-3 text-sm text-[#27272A] placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                />
                <button
                  type="submit"
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-white transition-opacity hover:opacity-90"
                  aria-label="S&apos;abonner"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Barre footer : liens légaux, Built in, boutons */}
      <footer className="border-t border-separator bg-[#EBEBEB] py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 lg:flex-row lg:px-8">
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-sm text-[#27272A] transition-colors hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-[#27272A] transition-colors hover:underline"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
