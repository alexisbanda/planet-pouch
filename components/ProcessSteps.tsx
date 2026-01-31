"use client";

import { motion } from "framer-motion";
import { Recycle, Scissors, ShoppingBag } from "lucide-react";

const steps = [
  {
    icon: Recycle,
    title: "RESCUE",
    text: "We collect forgotten denim from landfills and community drives.",
  },
  {
    icon: Scissors,
    title: "REMAKE",
    text: "Eco-washed and handcrafted into new, functional designs.",
  },
  {
    icon: ShoppingBag,
    title: "REBORN",
    text: "Your new favorite bag, ready for urban adventures.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <div className="w-24 h-24 rounded-full bg-bone border border-denim/10 flex items-center justify-center mb-6 text-denim">
                <step.icon className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-denim mb-4 tracking-tight">
                {step.title}
              </h3>
              <p className="text-denim/70 max-w-xs mx-auto">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
