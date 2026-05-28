"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Wool Overcoat",
    origin: "Italy, 1988",
    price: "€340",
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=85",
    tag: "Archive",
  },
  {
    id: 2,
    name: "Crewneck Sweat",
    origin: "USA, 1992",
    price: "€145",
    image: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=800&q=85",
    tag: "Deadstock",
  },
  {
    id: 3,
    name: "Leather Bomber",
    origin: "England, 1979",
    price: "€520",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=85",
    tag: "Rare",
  },
  {
    id: 4,
    name: "Silk Trousers",
    origin: "France, 1985",
    price: "€195",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4b4281?w=800&q=85",
    tag: "Archive",
  },
  {
    id: 5,
    name: "Cargo Vest",
    origin: "Germany, 1996",
    price: "€165",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=85",
    tag: "Reworked",
  },
  {
    id: 6,
    name: "Denim Chore Coat",
    origin: "Japan, 1991",
    price: "€285",
    image: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?w=800&q=85",
    tag: "Deadstock",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

export default function NewArrivals() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-bone py-24 md:py-36">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-label text-muted block mb-3">New Arrivals</span>
            <h2 className="font-display text-headline font-light text-charcoal italic">
              Fresh from<br className="md:hidden" /> the archive
            </h2>
          </motion.div>
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-label text-muted hover:text-charcoal transition-colors duration-300 self-start md:self-auto mb-1"
          >
            VIEW ALL →
          </motion.button>
        </div>

        {/* Grid */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              variants={item}
              className="group cursor-pointer"
            >
              {/* Image container */}
              <div className="relative overflow-hidden bg-ash mb-4">
                <div
                  className={`relative ${index === 0 || index === 3 ? "aspect-[3/4]" : "aspect-[2/3]"}`}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-500" />
                </div>

                {/* Tag badge */}
                <div className="absolute top-3 left-3">
                  <span className="text-label text-cream bg-charcoal/70 backdrop-blur-sm px-2.5 py-1.5">
                    {product.tag}
                  </span>
                </div>

                {/* Quick add on hover */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute bottom-0 left-0 right-0 bg-cream/95 backdrop-blur-sm p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out hidden md:block"
                >
                  <button className="w-full text-label text-charcoal hover:text-muted transition-colors duration-200">
                    QUICK ADD
                  </button>
                </motion.div>
              </div>

              {/* Product info */}
              <div className="flex justify-between items-start gap-2">
                <div>
                  <h3 className="font-body text-sm font-medium text-charcoal leading-tight mb-1">
                    {product.name}
                  </h3>
                  <span className="text-label text-warm-grey">{product.origin}</span>
                </div>
                <span className="font-display text-lg text-charcoal font-light shrink-0">
                  {product.price}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
