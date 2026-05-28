"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

export default function BrandStatement() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-4%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["0%", "4%"]);

  return (
    <section
      ref={ref}
      className="bg-charcoal py-28 md:py-48 overflow-hidden"
    >
      <div className="max-w-screen-2xl mx-auto px-6 md:px-10 mb-16 md:mb-24">
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-label text-warm-grey block text-center mb-12 md:mb-16"
        >
          Our philosophy
        </motion.span>
      </div>

      {/* Large scrolling text */}
      <div className="space-y-0">
        <motion.div
          style={{ x: x1 }}
          className="overflow-hidden whitespace-nowrap"
        >
          <motion.p
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-hero font-light text-cream italic inline-block px-6"
          >
            Every thread has a past.
          </motion.p>
        </motion.div>

        <motion.div
          style={{ x: x2 }}
          className="overflow-hidden whitespace-nowrap"
        >
          <motion.p
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-hero font-light text-cream/30 italic inline-block px-6"
          >
            Worn futures.
          </motion.p>
        </motion.div>
      </div>

      {/* Supporting copy */}
      <div className="max-w-screen-2xl mx-auto px-6 md:px-10 mt-20 md:mt-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="grid md:grid-cols-[1fr_1fr_1fr] gap-10 md:gap-16 max-w-4xl"
        >
          <p className="font-body text-sm text-cream/60 leading-relaxed col-span-1">
            RELIQUE is a curation practice rooted in the belief that the best garments already exist.
            We find them, verify them, and place them in new hands.
          </p>
          <div className="md:col-start-3 flex items-end">
            <motion.button
              whileHover={{ x: 4 }}
              transition={{ duration: 0.3 }}
              className="text-label text-cream/50 hover:text-cream transition-colors duration-300"
            >
              READ OUR STORY →
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
