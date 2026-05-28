"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  "Shop All",
  "New In",
  "Vintage Tees",
  "Jackets",
  "Sweats",
  "Bottoms",
  "Accessories",
  "Sale",
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-[#111] text-white sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Main bar */}
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" className="font-display text-xl tracking-wider leading-none shrink-0">
            RELIQUE<br />
            <span className="text-sm tracking-[0.3em]">VINTAGE</span>
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden lg:flex items-center gap-6 mx-8 flex-1 justify-center">
            {navLinks.map((link) => (
              <Link
                key={link}
                href="#"
                className="font-body text-xs font-medium uppercase tracking-wider text-gray-300 hover:text-white transition-colors whitespace-nowrap"
              >
                {link}
              </Link>
            ))}
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button aria-label="Search" className="text-gray-300 hover:text-white transition-colors">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
              </svg>
            </button>
            <button aria-label="Bag" className="text-gray-300 hover:text-white transition-colors">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <line x1="3" x2="21" y1="6" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
            </button>
            {/* Mobile hamburger */}
            <button
              className="lg:hidden flex flex-col gap-1.5 ml-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              <span className={`block w-5 h-px bg-white transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-5 h-px bg-white transition-all ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-px bg-white transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden border-t border-white/10"
          >
            <div className="flex flex-col px-4 py-4 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link}
                  href="#"
                  onClick={() => setMobileOpen(false)}
                  className="font-body text-sm uppercase tracking-wider text-gray-300 hover:text-white transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
