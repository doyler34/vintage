"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const shopLinks = [
  "Shop All", "New In", "Vintage Tees", "Jackets",
  "Sweats", "Bottoms", "Accessories", "Sale",
];
const infoLinks = [
  "About Us", "Sizing Guide", "Authentication", "Shipping & Returns",
  "Contact Us", "FAQ",
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <footer className="bg-[#0f0f0f] text-white" id="newsletter">
      <div className="max-w-screen-xl mx-auto px-4 pt-14 pb-10 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">

        {/* Brand column */}
        <div className="col-span-2 md:col-span-1">
          <div className="flex flex-col mb-5">
            <span className="font-display text-[26px] tracking-widest leading-none">ONTHEMARK</span>
            <span className="font-body text-[9px] tracking-[0.35em] text-gray-500 font-medium uppercase mt-0.5">Vintage</span>
          </div>
          <p className="font-body text-xs text-gray-400 leading-relaxed mb-1">118 Dunlop St E</p>
          <p className="font-body text-xs text-gray-400 leading-relaxed mb-1">Barrie, ON · L4M 1A4</p>
          <p className="font-body text-xs text-gray-400 leading-relaxed mb-1">
            <a href="tel:+17055003119" className="hover:text-white transition-colors">705-500-3119</a>
          </p>
          <p className="font-body text-xs text-gray-500 leading-relaxed mt-3 mb-1">Tue–Thu: 11am – 8pm</p>
          <p className="font-body text-xs text-gray-500 leading-relaxed mb-1">Fri–Sun: 11am – 10pm</p>
          <p className="font-body text-xs text-gray-600 leading-relaxed mb-5">Closed Monday</p>
          <p className="font-body text-xs text-gray-500 italic mb-5">Shop ethically. Shop secondhand.</p>
          {/* Social */}
          <div className="flex items-center gap-4">
            <Link
              href="https://www.instagram.com/onthemarkvintage"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </Link>
            <Link
              href="https://www.depop.com/onthemarkvintage/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[10px] font-semibold text-gray-400 hover:text-white transition-colors tracking-wider uppercase"
            >
              Depop
            </Link>
            <Link
              href="#"
              className="font-body text-[10px] font-semibold text-gray-400 hover:text-white transition-colors tracking-wider uppercase"
            >
              TikTok
            </Link>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <p className="font-body text-[11px] font-semibold uppercase tracking-[0.2em] text-white mb-4">Newsletter</p>
          <p className="font-body text-xs text-gray-400 leading-relaxed mb-5">
            Be the first to know about new drops, events and exclusive offers.
          </p>
          {done ? (
            <p className="font-body text-xs text-green-400">You&apos;re subscribed! 🎯</p>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); if (email) setDone(true); }}
              className="flex border border-white/15 hover:border-white/30 transition-colors"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                required
                className="flex-1 bg-transparent text-white placeholder:text-gray-600 font-body text-xs px-3 py-2.5 outline-none min-w-0"
              />
              <button
                type="submit"
                className="bg-white text-black font-body text-xs font-bold px-4 py-2.5 hover:bg-gray-100 transition-colors shrink-0"
              >
                →
              </button>
            </form>
          )}
        </div>

        {/* Shop */}
        <div>
          <p className="font-body text-[11px] font-semibold uppercase tracking-[0.2em] text-white mb-4">Shop</p>
          <ul className="flex flex-col gap-2.5">
            {shopLinks.map((l) => (
              <li key={l}>
                <Link href="#" className="font-body text-xs text-gray-400 hover:text-white transition-colors">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Info */}
        <div>
          <p className="font-body text-[11px] font-semibold uppercase tracking-[0.2em] text-white mb-4">Info</p>
          <ul className="flex flex-col gap-2.5">
            {infoLinks.map((l) => (
              <li key={l}>
                <Link href="#" className="font-body text-xs text-gray-400 hover:text-white transition-colors">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
          {/* Google Maps embed prompt */}
          <div className="mt-8 border border-white/10 p-3">
            <p className="font-body text-[10px] text-gray-500 mb-2 uppercase tracking-wider">Find the store</p>
            <Link
              href="https://maps.google.com/?q=118+Dunlop+St+E+Barrie+ON"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[11px] text-white/70 hover:text-white transition-colors"
            >
              118 Dunlop St E →
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-screen-xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <span className="font-body text-[11px] text-gray-600">
            © 2026 OnTheMark Vintage · Barrie, Ontario · All rights reserved.
          </span>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms", "Accessibility"].map((l) => (
              <Link key={l} href="#" className="font-body text-[11px] text-gray-600 hover:text-gray-400 transition-colors">
                {l}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
