"use client";

import { motion } from "framer-motion";

export default function Manifesto() {
  return (
    <section className="py-32 bg-denim text-white text-center px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold leading-tight mb-8"
        >
          "Fashion shouldn't cost the Earth. Every <span className="text-acid">PlanetPouch</span> saves 2,000 liters of water."
        </motion.h2>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="text-lg underline underline-offset-8 decoration-acid decoration-2 hover:text-acid transition-colors"
        >
          READ OUR STORY
        </motion.button>
      </div>

      {/* Decorative texture overlay */}
      <div className="absolute inset-0 Grain opacity-20" />
    </section>
  );
}
