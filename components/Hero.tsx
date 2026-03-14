"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-24 lg:pt-36 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {/* Colonne gauche : nom + icône profil */}
          <div className="flex flex-wrap items-baseline gap-3 lg:gap-4">
            <div className="flex flex-wrap items-baseline gap-3 lg:gap-4">
              <motion.span
                className="font-clash text-[96px] font-medium leading-tight tracking-tight text-[#27272A]"
                variants={fadeUp}
              >
                Andrew
              </motion.span>
              <motion.span
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent sm:h-14 sm:w-14 lg:h-16 lg:w-16"
                variants={fadeUp}
                aria-hidden
              >
                <svg
                  className="h-6 w-6 text-white sm:h-7 sm:w-7 lg:h-8 lg:w-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </motion.span>
            </div>
            <motion.span
              className="block font-clash text-[96px] font-medium leading-tight tracking-tight text-[#27272A]"
              variants={fadeUp}
            >
              Mondor
            </motion.span>
          </div>

          {/* Colonne droite : notation, description, boutons */}
          <div className="space-y-6 lg:space-y-8">
            <motion.p
              className="flex flex-wrap items-baseline gap-1.5 text-sm lg:text-base"
              variants={fadeUp}
            >
              <span className="inline-flex shrink-0" aria-hidden>
                <svg
                  className="h-5 w-5 text-accent lg:h-5 lg:w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </span>
              <span className="font-medium text-[#27272A]">4.9/5</span>
              <span className="text-muted">Helped 120+ businesses & counting</span>
            </motion.p>
            <motion.p
              className="max-w-xl text-[#27272A] leading-relaxed lg:text-lg"
              variants={fadeUp}
            >
              I build digital experiences that drive real growth for your
              business. Let&apos;s partner to create work that gets results.
            </motion.p>
            <motion.div
              className="flex flex-wrap items-center gap-3"
              variants={fadeUp}
            >
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-button px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 lg:px-6 lg:py-3 lg:text-base"
                style={{
                  background: "linear-gradient(90deg, #FF8A5C 0%, #F64617 100%)",
                }}
              >
                Start a Project
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="#projects"
                className="inline-flex items-center justify-center rounded-button border border-separator bg-card px-5 py-2.5 text-sm font-medium text-[#27272A] transition-colors hover:bg-separator/30 lg:px-6 lg:py-3 lg:text-base"
              >
                See Projects
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Cartes horizontales (devices / visuels) */}
        <motion.div
          className="mt-12 flex gap-4 overflow-x-auto pb-2 lg:mt-16 lg:gap-6"
          variants={fadeUp}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="h-[370px] w-[280px] shrink-0 rounded-2xl bg-separator/50"
            >
              <div
                className="h-full w-full rounded-2xl"
                style={{
                  background:
                    i === 1
                      ? "linear-gradient(135deg, #e5e5e5 0%, #f5f5f5 100%)"
                      : i === 2
                        ? "linear-gradient(135deg, #d4d4d4 0%, #e5e5e5 100%)"
                        : i === 3
                          ? "linear-gradient(135deg, #a3a3a3 0%, #d4d4d4 100%)"
                          : i === 4
                            ? "linear-gradient(135deg, #737373 0%, #a3a3a3 100%)"
                            : "linear-gradient(135deg, #525252 0%, #737373 100%)",
                }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
