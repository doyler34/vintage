"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=85",
    caption: "@relique.archive",
    tall: true,
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=85",
    caption: "@relique.archive",
    tall: false,
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=85",
    caption: "@relique.archive",
    tall: false,
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=85",
    caption: "@relique.archive",
    tall: true,
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=85",
    caption: "@relique.archive",
    tall: false,
  },
];

export default function SocialGallery() {
  return (
    <section className="bg-cream py-24 md:py-36">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-label text-muted block mb-3">Community</span>
            <h2 className="font-display text-headline font-light text-charcoal italic">
              Worn in the<br className="md:hidden" /> wild
            </h2>
          </motion.div>
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-label text-muted hover:text-charcoal transition-colors duration-300 self-start md:self-auto mb-1"
          >
            @RELIQUE.ARCHIVE →
          </motion.a>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {/* First image — tall, spans 2 rows on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0 }}
            className="relative aspect-square md:row-span-2 overflow-hidden group cursor-pointer"
          >
            <Image
              src={galleryImages[0].src}
              alt=""
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-500 flex items-end p-4">
              <span className="text-label text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {galleryImages[0].caption}
              </span>
            </div>
          </motion.div>

          {/* Second image — wide, spans 2 cols */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative aspect-square md:col-span-2 overflow-hidden group cursor-pointer"
          >
            <Image
              src={galleryImages[1].src}
              alt=""
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 50vw"
            />
            <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-500 flex items-end p-4">
              <span className="text-label text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {galleryImages[1].caption}
              </span>
            </div>
          </motion.div>

          {/* Third image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative aspect-square overflow-hidden group cursor-pointer"
          >
            <Image
              src={galleryImages[2].src}
              alt=""
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-500 flex items-end p-4">
              <span className="text-label text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {galleryImages[2].caption}
              </span>
            </div>
          </motion.div>

          {/* Fourth image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-square md:col-span-2 overflow-hidden group cursor-pointer"
          >
            <Image
              src={galleryImages[3].src}
              alt=""
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 50vw"
            />
            <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-500 flex items-end p-4">
              <span className="text-label text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {galleryImages[3].caption}
              </span>
            </div>
          </motion.div>

          {/* Fifth image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="relative aspect-square overflow-hidden group cursor-pointer"
          >
            <Image
              src={galleryImages[4].src}
              alt=""
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-500 flex items-end p-4">
              <span className="text-label text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {galleryImages[4].caption}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
