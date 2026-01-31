"use client";

import { motion } from "framer-motion";

const teamMembers = [
  { role: "Project Manager", name: "Sarah Jenkins" },
  { role: "Brand Identity", name: "Marcus Cole" },
  { role: "Photography", name: "Elara Vane" },
  { role: "Web Development", name: "Alex Chen" },
  { role: "Logistics", name: "David Ross" },
  // Add more as needed
];

export default function Team() {
  return (
    <section className="relative w-full py-20 bg-bone border-t border-denim/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="mb-12 text-center md:text-left"
        >
             <h3 className="text-4xl md:text-5xl font-black text-denim uppercase tracking-tighter">
                The Crew
             </h3>
             <p className="text-denim/60 mt-2 max-w-lg text-lg">
                Behind the vision, a collective of rebels and creators making it happen.
             </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-12">
            {teamMembers.map((member, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex justify-between items-center border-b border-denim/20 pb-2 group hover:border-acid transition-colors duration-300"
                >
                    <span className="text-denim/50 font-medium uppercase text-sm tracking-wider group-hover:text-denim/80 transition-colors duration-300">
                        {member.role}
                    </span>
                    <span className="text-denim font-bold text-lg group-hover:text-acid-dark transition-colors duration-300">
                        {member.name}
                    </span>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
