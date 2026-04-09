"use client";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-separator bg-[#EBEBEB] py-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-2 px-6 text-center lg:px-8">
        <p className="text-sm text-[#27272A]">
          © {year} Andrew Mondor. All rights reserved.
        </p>
        <p className="text-sm text-[#27272A]">
          Built with{" "}
          <span
            className="inline-block align-middle text-sm leading-none"
            aria-label="love"
            role="img"
          >
            ❤️
          </span>{" "}
          by Andrew
        </p>
      </div>
    </footer>
  );
}
