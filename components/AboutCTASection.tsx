"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function AboutCTASection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl border border-separator bg-card p-8 shadow-sm lg:p-12"
        >
          <p className="text-center text-base leading-relaxed text-[#27272A] lg:text-lg">
            I&apos;m open to projects & alliances. Feel free to reach out &
            share what you&apos;re building, even if it&apos;s an early idea.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-1.5">
            <span className="inline-flex shrink-0 text-accent" aria-hidden>
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </span>
            <span className="font-medium text-[#27272A]">4.9/5</span>
            <span className="text-muted">Helped 120+ businesses & counting</span>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:mondor.andrew@gmail.com?subject=Start%20a%20project"
              className="inline-flex items-center justify-center gap-2 rounded-button px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 lg:px-6 lg:py-3 lg:text-base"
              style={{
                background: "linear-gradient(90deg, #FF8A5C 0%, #F64617 100%)",
              }}
            >
              Start a Project
              <span aria-hidden>→</span>
            </a>
            <Link
              href="/#projects"
              className="inline-flex items-center justify-center rounded-button border border-separator bg-card px-5 py-2.5 text-sm font-medium text-[#27272A] transition-colors hover:bg-separator/30 lg:px-6 lg:py-3 lg:text-base"
            >
              See Projects
            </Link>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
