"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function FeaturedDrop() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-cream py-24 md:py-36 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-12 md:mb-16"
        >
          <span className="text-label text-muted">Featured Drop</span>
          <div className="flex-1 h-px bg-ash max-w-24" />
        </motion.div>

        {/* Main layout: 60/40 split */}
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-0 md:gap-16 lg:gap-24 items-end">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/5] overflow-hidden group"
          >
            <Image
              src="https://images.unsplash.com/photo-1594938298603-c8148c4b4281?w=1200&q=90"
              alt="Featured drop — Archive Coach Jacket"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
            {/* Texture overlay */}
            <div className="absolute inset-0 bg-charcoal/5 mix-blend-multiply" />
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-end gap-8 py-8 md:py-0 md:pb-2"
          >
            <div>
              <span className="text-label text-muted block mb-4">Drop 001 — SS26</span>
              <h2 className="font-display text-display font-light text-charcoal italic leading-none mb-6">
                Archive<br />Coach
                <br />Jacket
              </h2>
              <p className="font-body text-muted text-sm leading-relaxed max-w-xs">
                Sourced from a Japanese warehouse circa 1994.
                Original selvedge nylon with period hardware.
                A true archive piece — unworn, unaltered.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-baseline gap-4">
                <span className="font-display text-3xl md:text-4xl text-charcoal font-light">€285</span>
                <span className="text-label text-warm-grey">One of one</span>
              </div>

              <div className="flex gap-4 items-center">
                <motion.button
                  whileHover={{ scale: 1.02, backgroundColor: "#1A1816", color: "#F4EFE8" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="bg-charcoal text-cream text-label px-8 py-4 flex-1 md:flex-none hover:bg-ink transition-colors duration-300"
                >
                  ADD TO BAG
                </motion.button>
                <button className="text-label text-muted hover:text-charcoal transition-colors duration-300 px-4 py-4">
                  VIEW MORE
                </button>
              </div>
            </div>

            {/* Detail specs */}
            <div className="border-t border-ash pt-6 grid grid-cols-2 gap-4">
              {[
                { label: "Condition", value: "Deadstock" },
                { label: "Origin", value: "Japan, 1994" },
                { label: "Material", value: "Nylon / Satin" },
                { label: "Size", value: "L — Oversized" },
              ].map(({ label, value }) => (
                <div key={label}>
                  <span className="text-label text-warm-grey block mb-1">{label}</span>
                  <span className="font-body text-xs text-charcoal font-medium">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
