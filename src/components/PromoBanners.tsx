"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PromoBanners() {
  return (
    <section className="border-t border-gray-200">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-3">

        {/* Banner 1 — Pop-up market */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-[#111] p-8 md:p-10 flex flex-col justify-between min-h-[210px] relative overflow-hidden"
        >
          {/* Decorative circle */}
          <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full border-2 border-white/10" />
          <div>
            <span className="font-body text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-2 block">In-Store Event</span>
            <h3 className="font-display text-[2.4rem] leading-none text-white mb-1">NEW TO YOU</h3>
            <h3 className="font-display text-[2.4rem] leading-none text-white mb-3">MARKET</h3>
            <span className="inline-block bg-red-600 text-white font-display text-sm px-3 py-1 -rotate-1">
              Barrie — June 15 &amp; 16
            </span>
          </div>
          <Link
            href="#"
            className="mt-6 self-start font-body text-[11px] font-semibold uppercase tracking-wider text-white border border-white/30 px-4 py-2.5 hover:bg-white hover:text-black transition-all duration-200"
          >
            Learn More →
          </Link>
        </motion.div>

        {/* Banner 2 — Depop */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-[#1a1a1a] p-8 md:p-10 flex flex-col justify-between min-h-[210px]"
        >
          <div>
            <span className="font-body text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-2 block">Shop Online</span>
            <h3 className="font-display text-[2.4rem] leading-none text-white mb-2">CHECK</h3>
            <h3 className="font-display text-[2.4rem] leading-none text-white mb-3">DEPOP</h3>
            <p className="font-body text-xs text-gray-400">For 100+ trusted reviews &amp; online listings</p>
          </div>
          <Link
            href="https://www.depop.com/onthemarkvintage/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 self-start font-body text-[11px] font-semibold uppercase tracking-wider text-white border border-white/30 px-4 py-2.5 hover:bg-white hover:text-black transition-all duration-200"
          >
            View Depop Shop →
          </Link>
        </motion.div>

        {/* Banner 3 — Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-[#1a3a5c] p-8 md:p-10 flex flex-col justify-between min-h-[210px]"
        >
          <div>
            <span className="font-body text-[10px] uppercase tracking-[0.2em] text-blue-300 mb-2 block">Stay in the loop</span>
            <h3 className="font-display text-[2.4rem] leading-none text-white mb-2">MAY</h3>
            <h3 className="font-display text-[2.4rem] leading-none text-white mb-3">NEWSLETTER</h3>
            <ul className="font-body text-[11px] text-blue-200 flex flex-col gap-1">
              <li>→ News &amp; new drops</li>
              <li>→ Exclusives &amp; discounts</li>
              <li>→ New shop alerts</li>
              <li>→ &amp; more</li>
            </ul>
          </div>
          <Link
            href="#newsletter"
            className="mt-6 self-start font-body text-[11px] font-semibold uppercase tracking-wider text-white border border-white/30 px-4 py-2.5 hover:bg-white hover:text-black transition-all duration-200"
          >
            Sign Up →
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
