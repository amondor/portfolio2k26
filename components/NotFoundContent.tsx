"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function NotFoundContent() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-24 lg:py-32">
      <div className="w-full max-w-4xl">
        {/* Fenêtre : une seule occurrence visible à la fois */}
        <div className="mx-auto w-[340px] overflow-hidden sm:w-[400px] lg:w-[480px]">
          <div className="overflow-hidden">
            <motion.div
              className="flex w-max items-baseline whitespace-nowrap font-clash text-[96px] leading-none tracking-tight text-[#27272A]"
              style={{ fontWeight: 500 }}
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[1, 2].map((i) => (
                <span key={i} className="flex shrink-0 items-baseline px-2">
                  <span className="text-accent" aria-hidden>  </span>{" "} 404{" "}
                  <span className="text-accent" aria-hidden> • </span> Nothing
                  Found{" "}
                  <span className="text-accent" aria-hidden> • </span>{" "}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-xl text-center text-base leading-relaxed text-muted lg:text-lg">
          The page you&apos;re looking for doesn&apos;t exist, may have been
          moved, or is no longer available.
        </p>

        <div className="mt-10 flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-button px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-opacity hover:opacity-90 lg:px-6 lg:py-3 lg:text-base"
            style={{
              background: "linear-gradient(90deg, #FF8A5C 0%, #F64617 100%)",
            }}
          >
            Back to home
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
