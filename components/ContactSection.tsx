"use client";

import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 lg:py-32 border-t border-separator"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.h2
          className="font-clash font-medium text-3xl sm:text-4xl lg:text-5xl text-accent mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          Let&apos;s connect.
        </motion.h2>

        <motion.div
          className="max-w-xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                className="w-full rounded-lg border border-separator bg-background px-4 py-3 text-foreground placeholder:text-foreground/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                className="w-full rounded-lg border border-separator bg-background px-4 py-3 text-foreground placeholder:text-foreground/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Message"
                className="w-full rounded-lg border border-separator bg-background px-4 py-3 text-foreground placeholder:text-foreground/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 transition-colors duration-200"
            >
              Send message
            </button>
          </form>
          <p className="mt-8 text-foreground/70 text-sm">
            <a href="mailto:hello@example.com" className="hover:text-accent transition-colors">
              hello@example.com
            </a>
            {" · "}
            <a href="tel:+33123456789" className="hover:text-accent transition-colors">
              +33 1 23 45 67 89
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
