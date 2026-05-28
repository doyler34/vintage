"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "VINTAGE\nJACKETS",
    href: "#",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=85",
  },
  {
    name: "VINTAGE\nTEES",
    href: "#",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=85",
  },
  {
    name: "SWEATS",
    href: "#",
    image: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=800&q=85",
  },
  {
    name: "BOTTOMS",
    href: "#",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=85",
  },
];

export default function CategoryGrid() {
  return (
    <section className="border-t border-gray-100">
      <div className="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-4">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Link href={cat.href} className="relative flex flex-col items-center justify-end group overflow-hidden aspect-[3/4] block">
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover object-center transition-transform duration-600 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
              {/* Text */}
              <div className="relative z-10 p-5 w-full">
                <h3 className="font-display text-3xl md:text-4xl text-white leading-none whitespace-pre-line mb-2">
                  {cat.name}
                </h3>
                <span className="font-body text-xs text-white/80 font-medium uppercase tracking-widest group-hover:text-white transition-colors">
                  Shop Now →
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
