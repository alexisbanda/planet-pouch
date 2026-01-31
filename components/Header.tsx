"use client";

import { motion, useScroll } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? "glass" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 mix-blend-difference">
          <img src="/logo.png" alt="PlanetPouch" className="w-12 h-12 rounded-full" />
          <span className="text-2xl font-bold tracking-tighter text-white hidden md:block">PlanetPouch</span>
        </Link>

        {/* Right Actions */}
        <div className="flex items-center gap-6">
          <Link href="https://e-souvenirs.netlify.app/planet-pouch" target="_blank" className="relative group text-white">
            <ShoppingBag className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-acid rounded-full" />
          </Link>
          
          <Link href="https://e-souvenirs.netlify.app/planet-pouch" target="_blank" className="bg-acid text-denim px-5 py-2 font-bold text-sm tracking-wide hover:bg-white transition-colors duration-300">
            SHOP NOW
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
