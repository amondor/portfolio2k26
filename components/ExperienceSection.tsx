"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    year: "2022 — Present",
    role: "Lead Designer",
    company: "Studio Name",
    description:
      "Leading design direction for product and brand. Building and mentoring the design team.",
  },
  {
    year: "2019 — 2022",
    role: "Senior Designer",
    company: "Agency Co",
    description:
      "Shipped multiple product launches. Collaborated with engineering on design systems.",
  },
  {
    year: "2016 — 2019",
    role: "Product Designer",
    company: "Startup Inc",
    description:
      "End-to-end product design from research to handoff. Worked closely with founders.",
  },
];

const services = [
  {
    icon: "◆",
    title: "Strategy",
    description: "Research, positioning and roadmap to align product with business goals.",
  },
  {
    icon: "◇",
    title: "Branding",
    description: "Identity, voice and visual system that resonates with your audience.",
  },
  {
    icon: "○",
    title: "Product Design",
    description: "UI/UX and interaction design for web and mobile experiences.",
  },
  {
    icon: "▷",
    title: "Development",
    description: "Front-end implementation with attention to performance and accessibility.",
  },
];

export function ExperienceSection() {
  return (
    <>
      <section id="about" className="py-24 lg:py-32 border-t border-separator">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.h2
            className="font-clash font-medium text-3xl sm:text-4xl lg:text-5xl text-foreground mb-16 lg:mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            Who I am, what I do.
          </motion.h2>

          <div className="grid sm:grid-cols-2 gap-0">
            {services.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="py-6 lg:py-8 border-b border-separator sm:even:border-s sm:even:border-separator"
              >
                <div className="pr-6 lg:pr-8">
                  <span className="text-muted/70 text-lg" aria-hidden>
                    {item.icon}
                  </span>
                  <h3 className="font-clash font-medium text-xl text-foreground mt-2">
                    {item.title}
                  </h3>
                  <p className="text-muted mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 border-t border-separator">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.h2
            className="font-clash font-medium text-3xl sm:text-4xl lg:text-5xl text-foreground mb-16 lg:mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            My professional journey.
          </motion.h2>

          <ul className="divide-y divide-separator">
            {experiences.map((exp, index) => (
              <motion.li
                key={exp.role + exp.company}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="py-8 lg:py-10 first:pt-0"
              >
                <p className="text-muted text-sm font-medium">
                  {exp.year}
                </p>
                <h3 className="font-clash font-medium text-xl text-foreground mt-1">
                  {exp.role} · {exp.company}
                </h3>
                <p className="text-muted mt-2 leading-relaxed max-w-2xl">
                  {exp.description}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
