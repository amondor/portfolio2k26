"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export function AboutHero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-24 lg:pt-36 lg:pb-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          className="flex flex-col items-center text-center"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {/* Texte principal */}
          <motion.div
            className="flex flex-col items-center gap-2"
            variants={fadeUp}
          >
            <p className="flex flex-wrap items-baseline justify-center gap-x-2 gap-y-1 text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              <span className="text-[#27272A]">A</span>
              <span className="text-accent">Visual designer</span>
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent sm:h-12 sm:w-12"
                aria-hidden
              >
                <svg
                  className="h-5 w-5 text-white sm:h-6 sm:w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </span>
            </p>
            <p className="flex flex-wrap items-baseline justify-center gap-x-2 text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              <span className="text-muted">who builds</span>
              <span className="text-accent">digital experiences</span>
            </p>
            <p className="flex flex-wrap items-baseline justify-center gap-x-2 text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              <span className="text-[#27272A]">that drive</span>
              <span className="text-[#27272A]">real growth</span>
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#27272A] sm:h-12 sm:w-12"
                aria-hidden
              >
                <svg
                  className="h-5 w-5 text-white sm:h-6 sm:w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 17L17 7M17 7h-10M17 7v10"
                  />
                </svg>
              </span>
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            className="mt-12 w-full overflow-hidden rounded-2xl lg:mt-16"
            variants={fadeUp}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative aspect-[4/3] w-full max-w-2xl mx-auto">
              <Image
                src="/images/about-hero.png"
                alt="Silhouette devant un cercle lumineux orange"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 672px"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
