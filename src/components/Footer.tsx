"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const footerLinks = {
  Shop: ["New Arrivals", "Archive", "Deadstock", "Reworked", "Sale"],
  Info: ["About", "Sustainability", "Authentication", "Sizing", "Care Guide"],
  Support: ["Contact", "Shipping", "Returns", "FAQ", "Track Order"],
};

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      {/* Main footer */}
      <div className="max-w-screen-2xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr] gap-10 md:gap-8">
          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="col-span-2 md:col-span-1"
          >
            <Link href="/" className="font-display text-3xl font-light tracking-[0.15em] text-cream block mb-6">
              RELIQUE
            </Link>
            <p className="font-body text-xs text-cream/40 leading-relaxed max-w-xs">
              Archive clothing. Worn stories.<br />
              Curated from the past, worn in the present.
            </p>

            {/* Social links */}
            <div className="flex gap-5 mt-8">
              {["IG", "TK", "PIN"].map((social) => (
                <Link
                  key={social}
                  href="#"
                  className="text-label text-cream/40 hover:text-cream transition-colors duration-300"
                >
                  {social}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: (i + 1) * 0.1 }}
            >
              <span className="text-label text-warm-grey block mb-5">{category}</span>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="font-body text-xs text-cream/50 hover:text-cream transition-colors duration-300"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/10">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <span className="text-label text-cream/30">
            © 2026 Relique Archive Ltd. All rights reserved.
          </span>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-label text-cream/30 hover:text-cream/60 transition-colors duration-300"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
