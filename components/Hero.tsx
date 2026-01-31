"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-denim">
      {/* Video Background (Placeholder) */}
      <div className="absolute inset-0 z-0 opacity-60">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/hero-bg.png"
          className="w-full h-full object-cover grayscale contrast-125"
        >
          {/* Using a placeholder video URL or local asset */}
          <source src="https://videos.pexels.com/video-files/5555627/5555627-hd_1080_1920_30fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-denim/40 mix-blend-multiply" />
        <div className="absolute inset-0 grain" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-start px-6 max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-bold text-bone leading-[0.9] tracking-tight mb-6"
        >
          YOUR OLD JEANS, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-acid to-white">
            NEW PURPOSE.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-bone/80 max-w-md mb-10 font-light"
        >
          Handcrafted recycled denim bags for the eco-rebel.
          Each piece tells a story of survival and style.
        </motion.p>

        <motion.a
          href="#products"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="group relative px-8 py-4 bg-transparent border border-acid text-acid font-bold text-lg overflow-hidden inline-block"
        >
          <span className="relative z-10 group-hover:text-denim transition-colors duration-300">
            EXPLORE THE DROP
          </span>
          <div className="absolute inset-0 bg-acid transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
        </motion.a>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-acid text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-acid to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
