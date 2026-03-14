"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Project name",
    category: "Branding • 2023",
    gradient: "linear-gradient(135deg, #e5e5e5 0%, #d4d4d4 100%)",
  },
  {
    id: 2,
    title: "Project name",
    category: "UI/UX • 2023",
    gradient: "linear-gradient(135deg, #d4d4d4 0%, #a3a3a3 100%)",
  },
  {
    id: 3,
    title: "Project name",
    category: "Development • 2023",
    gradient: "linear-gradient(135deg, #a3a3a3 0%, #737373 100%)",
  },
  {
    id: 4,
    title: "Project name",
    category: "Strategy • 2023",
    gradient: "linear-gradient(135deg, #737373 0%, #525252 100%)",
  },
];

export function ProjectsGrid() {
  return (
    <section id="projects" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.h2
          className="font-clash font-medium text-3xl sm:text-4xl lg:text-5xl text-accent mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          Some of my favorite work.
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group"
            >
              <Link href="#" className="block">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-separator/30 mb-4">
                  <div
                    className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-105"
                    style={{ background: project.gradient }}
                  />
                </div>
                <h3 className="font-clash font-medium text-xl text-accent">
                  {project.title}
                </h3>
                <p className="text-foreground/60 text-sm mt-1">
                  {project.category}
                </p>
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {[1, 2, 3].map((dot) => (
            <span
              key={dot}
              className={`w-2 h-2 rounded-full transition-colors ${
                dot === 1 ? "bg-accent" : "bg-separator"
              }`}
              aria-hidden
            />
          ))}
        </div>

        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 transition-colors duration-200"
          >
            View all projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
