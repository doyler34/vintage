"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const products = [
  { id: 1, name: "Harley Davidson Tee",  price: "$45.00", tag: null,         bg: "bg-[#d6cfc5]", emoji: "🏍️" },
  { id: 2, name: "90s Windbreaker",       price: "$75.00", tag: "🎯 Just In",  bg: "bg-[#c8d4d0]", emoji: "🌬️" },
  { id: 3, name: "Vintage Band Tee",      price: "$40.00", tag: null,         bg: "bg-[#d4cdc4]", emoji: "🎸" },
  { id: 4, name: "Crewneck Sweat",        price: "$55.00", tag: null,         bg: "bg-[#c9c4bc]", emoji: "🧥" },
  { id: 5, name: "Rugby Jersey",          price: "$60.00", tag: "🎯 Just In",  bg: "bg-[#cdd4c9]", emoji: "🏉" },
];

export default function NewArrivals() {
  const [wishlist, setWishlist] = useState<number[]>([]);
  const toggle = (id: number) =>
    setWishlist((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));

  return (
    <section className="bg-white py-10 md:py-14 border-t border-gray-100">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex items-center justify-between mb-7">
          <h2 className="font-display text-4xl tracking-wide">NEW IN</h2>
          <Link href="#" className="font-body text-[11px] font-semibold uppercase tracking-wider text-gray-500 hover:text-black transition-colors">
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
              className="group cursor-pointer"
            >
              {/* Product image placeholder */}
              <div className={`relative aspect-square ${p.bg} overflow-hidden mb-2.5 flex items-center justify-center`}>
                <div className="text-center select-none">
                  <div className="text-4xl mb-2 opacity-40">{p.emoji}</div>
                  <p className="font-body text-[10px] font-medium text-gray-600 uppercase tracking-wider px-2 leading-tight opacity-60">
                    {p.name}
                  </p>
                </div>

                {/* Wishlist */}
                <button
                  onClick={() => toggle(p.id)}
                  aria-label="Wishlist"
                  className="absolute top-2 right-2 w-7 h-7 flex items-center justify-center bg-white/85 hover:bg-white transition-colors shadow-sm z-10"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24"
                    fill={wishlist.includes(p.id) ? "#111" : "none"}
                    stroke="#111" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </button>

                {p.tag && (
                  <span className="absolute top-2 left-2 bg-black text-white font-body text-[9px] font-semibold uppercase tracking-wider px-2 py-1 z-10">
                    {p.tag}
                  </span>
                )}

                <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-center font-body text-[10px] font-semibold uppercase tracking-wider py-2.5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  Quick Add
                </div>
              </div>

              <p className="font-body text-[12px] font-semibold text-black leading-snug mb-0.5 truncate">{p.name}</p>
              <p className="font-body text-[12px] text-gray-600">{p.price}</p>
            </motion.div>
          ))}
        </div>

        {/* Upload CTA */}
        <p className="font-body text-[11px] text-gray-400 text-center mt-8">
          Product photos coming soon · Upload photos to replace placeholders
        </p>
      </div>
    </section>
  );
}
