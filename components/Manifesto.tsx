"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

export default function Manifesto() {
  const [showModal, setShowModal] = useState(false);
  return (
    <section id="manifesto" className="py-32 bg-denim text-white text-center px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <p className="text-xl md:text-2xl font-light mb-10 leading-relaxed text-blue-100">
            We&apos;re not just making bags; we&apos;re starting a conversation about waste, style, and the future. 
            &quot;Every pouch is a protest against fast fashion.&quot;
          </p>
        </motion.div>
        
        <motion.button
          onClick={() => setShowModal(true)}
          whileHover={{ scale: 1.05 }}
          className="text-lg underline underline-offset-8 decoration-acid decoration-2 hover:text-acid transition-colors"
        >
          READ OUR STORY
        </motion.button>
      </div>

      {/* Decorative texture overlay */}
      <div className="absolute inset-0 Grain opacity-20" />

      {/* Story Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-denim/90 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-bone text-denim p-8 md:p-12 max-w-2xl w-full relative border-2 border-acid shadow-2xl max-h-[80vh] overflow-y-auto"
            >
              <button 
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-denim/50 hover:text-acid transition-colors"
              >
                <X className="w-8 h-8" />
              </button>

              <h3 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tighter text-denim">
                The Origin <span className="text-acid">.</span>
              </h3>

              <div className="space-y-6 text-lg font-light leading-relaxed">
                <p>
                  It started with a pile of discarded jeans in a thrift store basement. Stiff, faded, forgotten. To the world, they were waste. To us, they were a canvas.
                </p>
                <p>
                  <strong className="font-bold">Planet Pouch</strong> was born from a simple question: <em>Why generates new material when the world is drowning in the old?</em>
                </p>
                <p>
                  We deconstruct post-consumer denim, preserving the scars, fades, and stories of the original fabric. Every tear is intentional; every patch is a badge of honor. We don&apos;t just design bags; we engineer mobile rebellion against the disposable culture.
                </p>
                <p>
                   Join the loop. Wear the change.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-denim/10 flex justify-end">
                 <button 
                    onClick={() => setShowModal(false)}
                    className="text-sm font-bold tracking-widest uppercase text-denim hover:text-acid transition-colors"
                 >
                    Close Story
                 </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
