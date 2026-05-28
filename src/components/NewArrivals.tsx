"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Harley Davidson Tee",
    price: "$45.00",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&q=85",
  },
  {
    id: 2,
    name: "90s Windbreaker",
    price: "$75.00",
    image: "https://images.unsplash.com/photo-1544441893-675973e31985?w=600&q=85",
  },
  {
    id: 3,
    name: "Vintage Band Tee",
    price: "$40.00",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=85",
  },
  {
    id: 4,
    name: "Mint Fleece",
    price: "$55.00",
    image: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=600&q=85",
  },
  {
    id: 5,
    name: "Guinness Rugby",
    price: "$60.00",
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&q=85",
  },
];

function WishlistIcon({ active, onClick }: { active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label="Wishlist"
      className="absolute top-2 right-2 w-7 h-7 flex items-center justify-center bg-white/80 hover:bg-white transition-colors rounded-sm"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill={active ? "#111" : "none"} stroke="#111" strokeWidth="2">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    </button>
  );
}

export default function NewArrivals() {
  const [wishlist, setWishlist] = useState<number[]>([]);

  const toggleWishlist = (id: number) => {
    setWishlist((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);
  };

  return (
    <section className="bg-white py-10 md:py-14 border-t border-gray-100">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display text-3xl md:text-4xl tracking-wide">NEW IN</h2>
          <Link
            href="#"
            className="font-body text-xs font-medium uppercase tracking-widest text-gray-500 hover:text-black transition-colors"
          >
            View All →
          </Link>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-square bg-gray-100 overflow-hidden mb-3">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
                <WishlistIcon
                  active={wishlist.includes(product.id)}
                  onClick={() => toggleWishlist(product.id)}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-center font-body text-xs font-semibold uppercase tracking-wider py-2.5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  Quick Add
                </div>
              </div>

              {/* Info */}
              <p className="font-body text-xs font-medium text-black leading-snug mb-0.5">
                {product.name}
              </p>
              <p className="font-body text-xs text-gray-600">{product.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
