"use client";

import { useState } from "react";
import Link from "next/link";

const shopLinks = ["Shop All", "New In", "Vintage Tees", "Jackets", "Sweats", "Bottoms", "Accessories", "Sale"];
const infoLinks = ["About Us", "Sizing Guide", "Authentication", "Contact", "Depop", "Instagram"];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <footer className="bg-[#111] text-white">
      <div className="max-w-screen-xl mx-auto px-4 py-12 md:py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <p className="font-display text-2xl tracking-wider mb-1">RELIQUE</p>
          <p className="font-body text-xs tracking-[0.3em] text-gray-400 mb-4">VINTAGE</p>
          <p className="font-body text-xs text-gray-400 leading-relaxed mb-1">123 Main Street</p>
          <p className="font-body text-xs text-gray-400 leading-relaxed mb-1">Dublin, Ireland</p>
          <p className="font-body text-xs text-gray-400 leading-relaxed mb-4">Shop ethically. Shop secondhand.</p>
          <div className="flex gap-4 mt-4">
            {["IG", "TK", "DEP"].map((s) => (
              <Link key={s} href="#" className="font-body text-xs font-semibold text-gray-400 hover:text-white transition-colors tracking-wider">
                {s}
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <p className="font-body text-xs font-semibold uppercase tracking-widest text-white mb-4">Newsletter</p>
          <p className="font-body text-xs text-gray-400 leading-relaxed mb-4">
            Be the first to know about new drops, events and exclusive offers.
          </p>
          {done ? (
            <p className="font-body text-xs text-green-400">You&apos;re subscribed!</p>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); if (email) setDone(true); }}
              className="flex"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                required
                className="flex-1 bg-white/10 text-white placeholder:text-gray-500 font-body text-xs px-3 py-2.5 outline-none border border-white/10 focus:border-white/30 min-w-0"
              />
              <button
                type="submit"
                className="bg-white text-black font-body text-xs font-semibold px-3 py-2.5 hover:bg-gray-200 transition-colors shrink-0"
              >
                →
              </button>
            </form>
          )}
        </div>

        {/* Shop */}
        <div>
          <p className="font-body text-xs font-semibold uppercase tracking-widest text-white mb-4">Shop</p>
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
          <p className="font-body text-xs font-semibold uppercase tracking-widest text-white mb-4">Info</p>
          <ul className="flex flex-col gap-2.5">
            {infoLinks.map((l) => (
              <li key={l}>
                <Link href="#" className="font-body text-xs text-gray-400 hover:text-white transition-colors">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-screen-xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="font-body text-xs text-gray-600">© 2026 Relique Vintage. All rights reserved.</p>
          <div className="flex gap-5">
            {["Privacy", "Terms", "Cookies"].map((l) => (
              <Link key={l} href="#" className="font-body text-xs text-gray-600 hover:text-gray-400 transition-colors">
                {l}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
