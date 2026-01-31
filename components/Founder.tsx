"use client";

import { motion } from "framer-motion";

export default function Founder() {
  return (
    <section className="relative w-full py-24 bg-bone text-denim overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative aspect-[3/4] w-full max-w-md mx-auto md:mr-auto overflow-hidden border-2 border-denim">
             <img
              src="/founder.png" 
              alt="Kristen Banda"
              className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
            />
             <div className="absolute inset-0 bg-acid/10 mix-blend-multiply" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col justify-center"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[2px] w-12 bg-acid" />
            <span className="text-sm font-bold tracking-widest uppercase text-denim/70">
              Meet the Maker
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9]">
            KRISTEN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-acid to-denim">
               BANDA
            </span>
          </h2>

          <p className="text-lg md:text-xl font-light mb-6 leading-relaxed">
            Finding beauty in what others discard. Kristen is an adolescent visionary driven by a deep love for the <span className="font-semibold text-denim">planet</span> and <span className="font-semibold text-denim">sustainable fashion</span>. She doesn&apos;t just design bags; she engineers solutions for a greener future.
          </p>

          <p className="text-lg md:text-xl font-light mb-10 leading-relaxed">
             Her mission is simple: prove that ecology and style can coexist. By transforming recycled denim into unique statement pieces, she reduces landfill waste one stitch at a time. It&apos;s not just a brand; it&apos;s a movement led by the next generation of eco-warriors.
          </p>

           <div className="relative inline-block group">
                <a href="#manifesto" className="relative z-10 px-8 py-3 bg-denim text-bone font-bold text-lg uppercase tracking-wide border border-denim group-hover:bg-acid group-hover:text-denim group-hover:border-acid transition-colors duration-300 inline-block">
                 Follow Her Journey
               </a>
               <div className="absolute top-2 left-2 w-full h-full border border-acid -z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
           </div>
        </motion.div>
      </div>

       {/* Decor text */}
       <div className="absolute -bottom-10 -right-20 text-[10rem] md:text-[15rem] font-bold text-denim/5 whitespace-nowrap select-none pointer-events-none z-0">
          VISIONARY
       </div>
    </section>
  );
}
