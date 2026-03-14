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
    <section className="relative pt-28 pb-24 lg:pt-36 lg:pb-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          <div className="space-y-8">
            <motion.h1
              className="font-clash font-medium text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-foreground leading-[1.1] tracking-tight"
              variants={fadeUp}
            >
              Make it your own, show your work to the world.
            </motion.h1>
            <motion.p
              className="text-muted text-lg lg:text-xl max-w-xl leading-relaxed"
              variants={fadeUp}
            >
              Designer & developer focused on creating distinctive digital
              experiences. Strategy, branding and craft at the service of your
              product.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                href="#projects"
                className="inline-flex items-center justify-center rounded-button bg-accent hover:bg-accent/90 text-white font-medium px-6 py-3 transition-colors duration-200"
              >
                View on Framer
              </Link>
            </motion.div>
          </div>
          <motion.div
            className="grid grid-cols-2 gap-3 lg:gap-4"
            variants={fadeUp}
          >
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-square rounded-xl bg-separator/50 overflow-hidden"
              >
                <div
                  className="w-full h-full bg-gradient-to-br from-separator to-foreground/10"
                  style={{
                    background:
                      i === 1
                        ? "linear-gradient(135deg, #e5e5e5 0%, #f5f5f5 100%)"
                        : i === 2
                          ? "linear-gradient(135deg, #d4d4d4 0%, #e5e5e5 100%)"
                          : i === 3
                            ? "linear-gradient(135deg, #a3a3a3 0%, #d4d4d4 100%)"
                            : "linear-gradient(135deg, #737373 0%, #a3a3a3 100%)",
                  }}
                />
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
