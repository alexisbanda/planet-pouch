"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "The Weekender",
    variant: "Dark Wash",
    price: "$120",
    image: "https://images.unsplash.com/photo-1590735213920-68192a437abc?q=80&w=600&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1590735213920-68192a437abc?q=80&w=600&auto=format&fit=crop", // Placeholder, ideally different
    status: "Only 1 left",
  },
  {
    id: 2,
    name: "Urban Tote",
    variant: "Frayed Edge",
    price: "$85",
    image: "https://images.unsplash.com/photo-1605763240004-7e93b172d754?q=80&w=600&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1605763240004-7e93b172d754?q=80&w=600&auto=format&fit=crop",
    status: "Sold Out",
  },
  {
    id: 3,
    name: "Mini Crossbody",
    variant: "Patchwork",
    price: "$65",
    image: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=600&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=600&auto=format&fit=crop",
    status: "New Drop",
  },
  {
    id: 4,
    name: "Messenger",
    variant: "Vintage Blue",
    price: "$95",
    image: "https://images.unsplash.com/photo-1553531384-cc64ac80f931?q=80&w=600&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1553531384-cc64ac80f931?q=80&w=600&auto=format&fit=crop",
    status: "Pre-order",
  },
];

export default function ProductCarousel() {
  return (
    <section className="py-20 bg-bone">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-denim mb-2">
            THE DROP
          </h2>
          <p className="text-denim/60">Limited edition pieces. Blink and you miss it.</p>
        </div>
        <button className="hidden md:flex items-center gap-2 text-denim font-bold hover:text-acid transition-colors">
          VIEW ALL <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Carousel Container */}
      <div className="overflow-x-auto pb-8 hide-scrollbar px-6 -mx-6 md:mx-0 md:px-0 scroll-pl-6 snap-x snap-mandatory">
        <div className="flex gap-6 w-max md:w-fit md:mx-auto">
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="relative w-[300px] md:w-[350px] flex-shrink-0 snap-center group cursor-pointer"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Link href="https://e-souvenirs.netlify.app/planet-pouch/producto/Dge0byYTbpCftxtHjxtj" target="_blank">
                <div className="relative aspect-[4/5] overflow-hidden bg-gray-200 mb-4 border border-denim/10">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                  />
                  <img
                    src={product.hoverImage}
                    alt={`${product.name} hover`}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100 scale-105"
                  />
                  
                  {stateTag(product.status)}
                </div>
                
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-denim">{product.name}</h3>
                    <p className="text-denim/60 text-sm">{product.variant}</p>
                  </div>
                  <span className="text-lg font-bold text-denim">{product.price}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function stateTag(status: string) {
  let bgClass = "bg-denim text-white";
  if (status === "Only 1 left") bgClass = "bg-red-500 text-white animate-pulse";
  if (status === "New Drop") bgClass = "bg-acid text-denim";

  return (
    <div className={`absolute top-4 left-4 px-3 py-1 text-xs font-bold uppercase tracking-wider ${bgClass}`}>
      {status}
    </div>
  );
}
