"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

const latestProjects = [...projects]
  .sort((a, b) => Number(b.year) - Number(a.year))
  .slice(0, 4);

export function ProjectsGrid() {
  return (
    <section id="projects" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <motion.span
            className="inline-block rounded-lg border border-separator bg-background px-4 py-1.5 text-sm font-normal text-[#27272A]"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Projects
          </motion.span>
          <motion.h2
            className="mt-4 font-clash text-3xl font-medium leading-tight tracking-tight text-[#27272A] sm:text-4xl lg:text-5xl lg:max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            Designed, Built, & Shipped
          </motion.h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {latestProjects.map((project, index) => (
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
              <Link href={project.href ?? "#"} className="block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#E5E5E5]">
                  <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-105">
                    {project.image ? (
                      <div className="relative h-full w-full">
                        <Image
                          src={project.image}
                          alt={project.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                        />
                      </div>
                    ) : (
                      <div
                        className="absolute inset-0"
                        style={{ background: project.gradient }}
                      />
                    )}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center">
                    <span className="rounded-full bg-white/90 px-4 py-2.5 font-clash text-sm text-[#27272A] backdrop-blur-sm">
                      <span className="font-medium">{project.name}</span>
                      <span className="font-normal"> / {project.year}</span>
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
