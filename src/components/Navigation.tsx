"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Shop All", href: "#" },
  { label: "New In", href: "#" },
  { label: "Vintage Tees", href: "#" },
  { label: "Jackets", href: "#" },
  { label: "Sweats", href: "#" },
  { label: "Bottoms", href: "#" },
  { label: "Accessories", href: "#" },
  { label: "Sale", href: "#", highlight: true },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-[#111] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex items-center h-[60px] gap-4">
          {/* Logo */}
          <Link href="/" className="shrink-0 flex flex-col leading-none mr-4">
            <span className="font-display text-[22px] tracking-widest">ONTHEMARK</span>
            <span className="font-body text-[9px] tracking-[0.35em] text-gray-400 font-medium uppercase">Vintage</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1 flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`font-body text-[11px] font-semibold uppercase tracking-wider px-3 py-2 transition-colors whitespace-nowrap rounded-sm
                  ${link.highlight
                    ? "text-red-400 hover:text-red-300"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-3 ml-auto">
            <button aria-label="Search" className="hidden sm:flex text-gray-400 hover:text-white transition-colors p-1">
              <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>
            <Link href="#" aria-label="Bag" className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors p-1">
              <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <line x1="3" x2="21" y1="6" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <span className="hidden sm:inline font-body text-[11px] font-semibold">BAG (0)</span>
            </Link>
            {/* Hamburger */}
            <button
              className="lg:hidden p-1 flex flex-col gap-[5px]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <motion.span animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} className="block w-5 h-px bg-white origin-center" />
              <motion.span animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }} className="block w-5 h-px bg-white" />
              <motion.span animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} className="block w-5 h-px bg-white origin-center" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden border-t border-white/10 bg-[#0d0d0d]"
          >
            <nav className="flex flex-col px-4 py-4 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`font-body text-sm font-semibold uppercase tracking-wider py-2.5 border-b border-white/5 transition-colors
                    ${link.highlight ? "text-red-400" : "text-gray-300 hover:text-white"}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
