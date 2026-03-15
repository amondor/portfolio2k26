"use client";

import { motion } from "framer-motion";
import { careerEntries } from "@/data/career";

export function CareerHistorySection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <motion.span
            className="inline-block rounded-lg border border-separator bg-background px-4 py-1.5 text-sm font-normal text-[#27272A]"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Work Experience
          </motion.span>
          <motion.h2
            className="mt-4 font-clash text-3xl font-medium leading-tight tracking-tight text-[#27272A] sm:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            Career history & Roles
          </motion.h2>
        </div>

        <div className="mt-16 space-y-4">
          {careerEntries.map((entry, index) => (
            <motion.article
              key={entry.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-separator bg-card px-6 py-5 shadow-sm lg:px-8 lg:py-6"
            >
              <span className="font-clash text-sm font-medium text-[#27272A] lg:text-base">
                {entry.role}
              </span>
              <div className="flex flex-1 items-center justify-center gap-3 min-w-0">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white"
                  style={{ backgroundColor: entry.logoColor }}
                  aria-hidden
                >
                  {entry.logoLetter ? (
                    <span className="text-sm font-medium">
                      {entry.logoLetter}
                    </span>
                  ) : (
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden
                    >
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  )}
                </span>
                <span className="font-clash text-sm font-medium text-[#27272A] lg:text-base truncate">
                  {entry.company}
                </span>
              </div>
              <span className="text-sm text-muted lg:text-base shrink-0">
                {entry.period}
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
