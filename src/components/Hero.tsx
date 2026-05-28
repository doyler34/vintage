"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-white border-b border-gray-100">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2">
        {/* Left: Text block */}
        <div className="flex flex-col justify-center px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 order-2 md:order-1">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="font-body text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-500 mb-5"
          >
            Curated Vintage · Barrie, Ontario · New Drops Weekly
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="font-display text-[clamp(2.8rem,7.5vw,5.5rem)] leading-[0.92] text-black mb-8"
          >
            SHOP<br />
            ETHICALLY.<br />
            SHOP<br />
            SECONDHAND.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.18 }}
            className="flex flex-wrap gap-3"
          >
            <Link
              href="#"
              className="inline-block bg-black text-white font-body text-[11px] font-semibold uppercase tracking-[0.2em] px-7 py-3.5 hover:bg-gray-800 transition-colors"
            >
              Shop All
            </Link>
            <Link
              href="https://www.depop.com/onthemarkvintage/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-gray-300 text-black font-body text-[11px] font-semibold uppercase tracking-[0.2em] px-5 py-3.5 hover:border-black transition-colors"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
              </svg>
              Find us on Depop
            </Link>
          </motion.div>

          {/* Store hours pill */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mt-8 flex items-center gap-2"
          >
            <span className="inline-block w-2 h-2 rounded-full bg-green-500" />
            <span className="font-body text-[11px] text-gray-500">
              Open today · Tue–Thu 11–8 &nbsp;|&nbsp; Fri–Sun 11–10
            </span>
          </motion.div>
        </div>

        {/* Right: Storefront image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative min-h-[300px] md:min-h-[500px] order-1 md:order-2 overflow-hidden"
        >
          <Image
            src="/images/storefront.jpg"
            alt="On The Mark Vintage — 118 Dunlop St E, Barrie"
            fill
            priority
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Storefront label overlay */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="inline-flex items-center gap-2 bg-black/75 backdrop-blur-sm text-white px-3 py-2 rounded-sm">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span className="font-body text-[10px] font-semibold tracking-wider">118 Dunlop St E, Barrie ON</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
