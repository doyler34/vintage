"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[420px] md:min-h-[480px]">
        {/* Left: Text */}
        <div className="flex flex-col justify-center px-6 md:px-12 py-12 md:py-16 order-2 md:order-1">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-body text-xs uppercase tracking-widest text-gray-500 mb-4"
          >
            Curated Vintage · New Drops Weekly
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-[clamp(3rem,8vw,6rem)] leading-none text-black mb-6"
          >
            SHOP<br />
            ETHICALLY.<br />
            SHOP<br />
            SECONDHAND.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <Link
              href="#"
              className="inline-block bg-black text-white font-body text-xs font-semibold uppercase tracking-widest px-7 py-3.5 hover:bg-gray-800 transition-colors"
            >
              Shop All
            </Link>
          </motion.div>
        </div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="relative min-h-[280px] md:min-h-full order-1 md:order-2 overflow-hidden"
        >
          <Image
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1000&q=90"
            alt="Relique Vintage store"
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      </div>
    </section>
  );
}
