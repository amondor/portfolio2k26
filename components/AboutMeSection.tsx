"use client";

import { motion } from "framer-motion";

const clientLogos = ["Logo Ipsum", "Logostyl", "Logoipsum", "Logo"];

const cards = [
  {
    id: 1,
    bulletColor: "bg-red-500",
    title: "What I do",
    titleColor: "text-[#27272A]",
    text: "I help brands find clarity and express it through strong, thoughtful design.",
  },
  {
    id: 2,
    bulletColor: "bg-[#71717A]",
    title: "Background",
    titleColor: "text-[#27272A]",
    text: "Originally from CDMX, I've been designing identities for 7+ years, working with startups, restaurants, hoteliers, & creative founders across Mexico.",
  },
  {
    id: 3,
    bulletColor: "bg-red-500",
    title: "My Approach",
    titleColor: "text-accent",
    text: "I believe good design starts with empathy. I ask questions, listen closely, and build brands that feel as good as they look, honest, beautiful, and built to last.",
    textWithDotAfter: "empathy.",
  },
  {
    id: 4,
    bulletColor: "bg-[#71717A]",
    title: "Career",
    titleColor: "text-[#27272A]",
    items: [
      { role: "Software Engineer", period: "2025 - Now" },
      { role: "Freelance Full Stack Developer", period: "Aug 2023 - May 2025" },
      { role: "Full Stack Developer", period: "Aug 2021 - sep 2022" },
      { role: "Full Stack Developer", period: "2019 - 2021" },
    ],
  },
];

export function AboutMeSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <motion.span
            className="inline-block rounded-lg bg-[#EBEBEB] px-4 py-1.5 text-sm font-normal text-[#27272A]"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            About me
          </motion.span>
          <motion.h2
            className="mt-4 font-clash text-[56px] font-medium leading-[1.1] tracking-tight text-[#27272A] lg:text-[64px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            Mindset, methods,
            <br />
            & experience
          </motion.h2>
        </div>

        <div className="mt-16">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className="min-h-[120px]"
              style={{ paddingTop: index === 0 ? 0 : "0.5rem" }}
            >
              <motion.article
                className="sticky top-24 rounded-2xl border border-separator bg-card p-6 shadow-lg lg:top-28 lg:p-8"
                style={{ zIndex: index + 1 }}
              >
              <div className="flex gap-4">
                <span
                  className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${card.bulletColor}`}
                  aria-hidden
                />
                <div className="min-w-0 flex-1">
                  <h3
                    className={`font-clash text-lg font-medium lg:text-xl ${card.titleColor ?? "text-[#27272A]"}`}
                  >
                    {card.title}
                  </h3>
                  {"items" in card && card.items ? (
                    <ul className="mt-4 space-y-3">
                      {card.items.map((item, i) => (
                        <li
                          key={i}
                          className="flex flex-wrap items-baseline justify-between gap-2 border-b border-separator pb-3 last:border-0 last:pb-0"
                        >
                          <span className="font-clash text-sm font-medium text-[#27272A] lg:text-base">
                            {item.role}
                          </span>
                          <span className="text-sm text-muted lg:text-base">
                            {item.period}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-2 text-sm leading-relaxed text-[#27272A] lg:text-base">
                      {card.textWithDotAfter ? (
                        <>
                          {card.text.split(card.textWithDotAfter)[0]}
                          {card.textWithDotAfter}
                          <span
                            className="ml-1 inline-block h-1.5 w-1.5 rounded-full bg-red-500 align-middle"
                            aria-hidden
                          />
                          {card.text.split(card.textWithDotAfter)[1]}
                        </>
                      ) : (
                        card.text
                      )}
                    </p>
                  )}
                </div>
              </div>
              </motion.article>
            </div>
          ))}

        </div>
      </div>

      {/* Clients & collaborators - full width 1200x300 */}
      <div className="mt-16 w-full px-6 lg:px-8">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto w-full max-w-[1200px] overflow-hidden rounded-[120px] border border-separator bg-card shadow-sm"
            style={{ height: 300 }}
          >
            <div className="flex h-full items-center gap-12 px-8">
              <h3 className="shrink-0 font-clash text-lg font-medium text-[#27272A] lg:text-xl">
                Clients & collaborators
              </h3>
              <div className="min-w-0 flex-1 overflow-hidden">
                <motion.div
                  className="flex w-max gap-16"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {[...clientLogos, ...clientLogos].map((logo, i) => (
                    <span
                      key={i}
                      className="shrink-0 font-clash text-sm font-medium text-[#27272A] lg:text-base"
                    >
                      {logo}
                    </span>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.article>
        </div>
    </section>
  );
}
