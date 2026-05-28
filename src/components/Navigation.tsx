"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = ["Shop", "Archive", "About", "Contact"];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-cream/95 backdrop-blur-md border-b border-ash"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-screen-2xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
          {/* Left nav */}
          <nav className="hidden md:flex gap-8 items-center">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link}
                href="#"
                className="text-label text-charcoal hover:text-muted transition-colors duration-300"
              >
                {link}
              </Link>
            ))}
          </nav>

          {/* Center brand */}
          <Link
            href="/"
            className="font-display text-2xl md:text-3xl font-light tracking-[0.15em] text-charcoal absolute left-1/2 -translate-x-1/2"
          >
            RELIQUE
          </Link>

          {/* Right nav */}
          <div className="hidden md:flex gap-8 items-center ml-auto">
            {navLinks.slice(2).map((link) => (
              <Link
                key={link}
                href="#"
                className="text-label text-charcoal hover:text-muted transition-colors duration-300"
              >
                {link}
              </Link>
            ))}
            <button className="text-label text-charcoal hover:text-muted transition-colors duration-300 ml-2">
              BAG (0)
            </button>
          </div>

          {/* Mobile controls */}
          <div className="flex md:hidden items-center gap-5 ml-auto">
            <button className="text-label text-charcoal">BAG</button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col gap-1.5 w-6"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="block h-px w-full bg-charcoal origin-center"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block h-px w-full bg-charcoal"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="block h-px w-full bg-charcoal origin-center"
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-40 bg-cream flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 + 0.1 }}
              >
                <Link
                  href="#"
                  onClick={() => setMenuOpen(false)}
                  className="font-display text-headline font-light text-charcoal"
                >
                  {link}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
