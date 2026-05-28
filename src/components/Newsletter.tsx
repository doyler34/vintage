"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="bg-charcoal py-24 md:py-36 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      <div className="relative max-w-screen-2xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <span className="text-label text-warm-grey block mb-6">Stay in the archive</span>

          <h2 className="font-display text-display font-light text-cream italic leading-none mb-8 md:mb-12">
            Drops before<br />
            they land.
          </h2>

          <p className="font-body text-cream/50 text-sm leading-relaxed mb-10 max-w-sm">
            Early access to new arrivals, archive discoveries, and the stories behind each piece.
            No spam. Unsubscribe any time.
          </p>

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -10 }}
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-0 border-b border-warm-grey/40 max-w-md"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 bg-transparent font-body text-cream placeholder:text-warm-grey/50 text-sm py-4 outline-none focus:placeholder:text-warm-grey/30 transition-colors"
                />
                <motion.button
                  type="submit"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3 }}
                  className="text-label text-warm-grey hover:text-cream transition-colors duration-300 py-4 pl-4 sm:pl-8 whitespace-nowrap"
                >
                  SUBSCRIBE →
                </motion.button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="border-b border-warm-grey/40 max-w-md py-4"
              >
                <p className="font-display text-xl text-cream italic font-light">
                  You&apos;re on the list. See you in the archive.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
