"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const banners = [
  {
    bg: "bg-[#111]",
    eyebrow: "NEW TO YOU",
    headline: "POP-UP\nMARKET",
    sub: "JUNE 15 & 16 · DUBLIN",
    badge: "FREE ENTRY",
    cta: "Learn More",
    textColor: "text-white",
    subColor: "text-gray-400",
    badgeBg: "bg-red-600",
  },
  {
    bg: "bg-[#222]",
    eyebrow: "FIND US ON",
    headline: "DEPOP",
    sub: "100+ trusted reviews",
    badge: null,
    cta: "View Shop →",
    textColor: "text-white",
    subColor: "text-gray-400",
    badgeBg: null,
  },
  {
    bg: "bg-[#1a3a5c]",
    eyebrow: "JOIN THE LIST",
    headline: "MONTHLY\nNEWSLETTER",
    sub: "Early access · Exclusive discounts · New drop alerts",
    badge: null,
    cta: "Sign Up →",
    textColor: "text-white",
    subColor: "text-blue-200",
    badgeBg: null,
  },
];

export default function PromoBanners() {
  return (
    <section className="bg-white py-0 border-t border-gray-100">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-3">
        {banners.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`${b.bg} relative p-8 md:p-10 flex flex-col justify-between min-h-[200px]`}
          >
            {b.badge && (
              <span className={`${b.badgeBg} text-white font-display text-sm px-3 py-1 self-start mb-4 rotate-[-2deg] inline-block`}>
                {b.badge}
              </span>
            )}
            <div>
              <p className={`font-body text-xs uppercase tracking-widest ${b.subColor} mb-2`}>
                {b.eyebrow}
              </p>
              <h3 className={`font-display text-4xl md:text-5xl leading-none ${b.textColor} whitespace-pre-line mb-3`}>
                {b.headline}
              </h3>
              <p className={`font-body text-xs ${b.subColor} leading-relaxed`}>{b.sub}</p>
            </div>
            <Link
              href="#"
              className={`mt-6 self-start font-body text-xs font-semibold uppercase tracking-widest ${b.textColor} border border-white/30 px-4 py-2.5 hover:bg-white hover:text-black transition-colors`}
            >
              {b.cta}
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
