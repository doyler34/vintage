"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const shots = [
  {
    src: "/images/interior-tee.jpg",
    caption: "Vintage graphic tee — hockey memorabilia display",
    span: "md:col-span-1",
  },
  {
    src: "/images/interior-wall.jpg",
    caption: "Brick wall display — collectibles & jerseys",
    span: "md:col-span-1",
  },
  {
    src: "/images/interior-pennants.jpg",
    caption: "Pennants, caps & sports memorabilia",
    span: "md:col-span-1",
  },
];

export default function StoreGallery() {
  return (
    <section className="bg-[#f9f9f9] py-10 md:py-14 border-t border-gray-100">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex items-end justify-between mb-7">
          <div>
            <span className="font-body text-[10px] uppercase tracking-[0.25em] text-gray-400 block mb-1.5">Inside the store</span>
            <h2 className="font-display text-4xl tracking-wide">INSIDE ONTHEMARK</h2>
          </div>
          <Link
            href="https://www.instagram.com/onthemarkvintage"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 font-body text-[11px] font-semibold uppercase tracking-wider text-gray-500 hover:text-black transition-colors mb-1"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
            @onthemarkvintage →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {shots.map((shot, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className={`relative aspect-square overflow-hidden group cursor-pointer bg-gray-200 ${shot.span}`}
            >
              <Image
                src={shot.src}
                alt={shot.caption}
                fill
                className="object-cover transition-transform duration-600 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end p-4">
                <p className="font-body text-[10px] text-white font-medium tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {shot.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-5 text-center">
          <Link
            href="https://www.instagram.com/onthemarkvintage"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-[11px] font-semibold uppercase tracking-wider text-gray-500 hover:text-black transition-colors"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
            Follow us on Instagram for daily drops
          </Link>
        </div>
      </div>
    </section>
  );
}
