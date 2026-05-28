"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "VINTAGE\nJACKETS",
    href: "#",
    image: "/images/interior-wall.jpg",
  },
  {
    name: "VINTAGE\nTEES",
    href: "#",
    image: "/images/interior-tee.jpg",
  },
  {
    name: "SWEATS &\nFLEECE",
    href: "#",
    image: "/images/interior-pennants.jpg",
  },
  {
    name: "HATS &\nACCESSORIES",
    href: "#",
    image: "/images/storefront.jpg",
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
            transition={{ duration: 0.45, delay: i * 0.08 }}
          >
            <Link
              href={cat.href}
              className="relative flex flex-col items-start justify-end group overflow-hidden aspect-[3/4] block"
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-300" />
              <div className="relative z-10 p-5 w-full">
                <h3 className="font-display text-[2rem] md:text-[2.4rem] text-white leading-none whitespace-pre-line mb-2">
                  {cat.name}
                </h3>
                <span className="font-body text-[10px] font-semibold text-white/70 uppercase tracking-widest group-hover:text-white transition-colors duration-200">
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
