"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    rating: "5.0",
    quote:
      "Running a small business is challenging, but Andrew Mondor made this experience smooth and completely hassle-free.",
    isSilhouette: true,
  },
  {
    id: 2,
    rating: "4.8",
    quote:
      "Running a small business is challenging, but Andrew Mondor made this experience smooth and completely hassle-free.",
    isSilhouette: true,
  },
  {
    id: 3,
    rating: "4.9",
    quote:
      "Andrew truly understood my vision & turned it into impactful designs, results went beyond my expectations!",
    isSilhouette: true,
  },
  {
    id: 4,
    rating: "5.0",
    quote:
      "Andrew truly understood my vision & turned it into impactful designs, results went beyond my expectations!",
    isSilhouette: false,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <motion.span
            className="inline-block rounded-full border border-separator bg-background px-4 py-1.5 text-sm font-normal text-[#27272A]"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Testimonials
          </motion.span>
          <motion.h2
            className="mt-4 font-clash text-[64px] font-medium leading-[1.1] tracking-tight text-[#27272A]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            Good work
            <br />
            gets noticed
          </motion.h2>
        </div>

        <div className="mt-16 flex gap-6 overflow-x-auto pb-4 lg:gap-8">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-[320px] w-[370px] shrink-0 rounded-2xl bg-card p-6 shadow-sm lg:p-8"
            >
              <div className="flex justify-end gap-1">
                <span className="text-accent" aria-hidden>
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </span>
                <span className="font-clash text-sm font-medium text-[#27272A]">
                  {item.rating}
                </span>
              </div>
              <div className="mt-4 flex justify-center">
                <span
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-[#27272A]"
                  aria-hidden
                >
                  <svg
                    className="h-8 w-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </span>
              </div>
              <p
                className="mt-4 font-clash text-4xl font-medium leading-none text-[#27272A]"
                aria-hidden
              >
                &ldquo;
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#27272A] lg:text-base">
                {item.quote}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
