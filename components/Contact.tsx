"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formState);
    alert("Message sent! (This is a placeholder)");
  };

  return (
    <section className="relative w-full py-24 bg-denim text-bone overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
           <span className="text-acid text-sm font-bold tracking-[0.3em] uppercase block mb-4">
              Get In Touch
           </span>
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            JOIN THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-acid to-white">REVOLUTION</span>
          </h2>
          <p className="text-lg text-bone/70 max-w-2xl mx-auto">
            Have a question, a collaboration idea, or just want to say hey? Drop us a line. We&apos;re listening.
          </p>
        </motion.div>

        <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit} 
            className="space-y-8"
        >
            <div className="grid md:grid-cols-2 gap-8">
                <div className="relative group">
                    <input 
                        type="text" 
                        name="name" 
                        id="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="peer w-full bg-transparent border-b border-bone/20 py-4 text-xl focus:outline-none focus:border-acid transition-colors duration-300 placeholder-transparent"
                        placeholder="Your Name"
                    />
                    <label 
                        htmlFor="name" 
                        className="absolute left-0 top-0 text-bone/50 text-base transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-xl peer-placeholder-shown:text-bone/30 peer-focus:top-0 peer-focus:text-xs peer-focus:text-acid"
                    >
                        Your Name
                    </label>
                </div>
                <div className="relative group">
                    <input 
                        type="email" 
                        name="email" 
                        id="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                         className="peer w-full bg-transparent border-b border-bone/20 py-4 text-xl focus:outline-none focus:border-acid transition-colors duration-300 placeholder-transparent"
                         placeholder="Email Address"
                    />
                     <label 
                        htmlFor="email" 
                        className="absolute left-0 top-0 text-bone/50 text-base transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-xl peer-placeholder-shown:text-bone/30 peer-focus:top-0 peer-focus:text-xs peer-focus:text-acid"
                    >
                        Email Address
                    </label>
                </div>
            </div>

            <div className="relative group">
                <textarea 
                    name="message" 
                    id="message"
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    required
                    className="peer w-full bg-transparent border-b border-bone/20 py-4 text-xl focus:outline-none focus:border-acid transition-colors duration-300 placeholder-transparent resize-none"
                    placeholder="Your Message"
                />
                 <label 
                        htmlFor="message" 
                        className="absolute left-0 top-0 text-bone/50 text-base transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-xl peer-placeholder-shown:text-bone/30 peer-focus:top-0 peer-focus:text-xs peer-focus:text-acid"
                    >
                        Your Message
                    </label>
            </div>

            <div className="flex justify-center pt-8">
                <button type="submit" className="group relative px-12 py-5 bg-acid text-denim font-black text-lg uppercase tracking-wider hover:bg-white transition-colors duration-300">
                    <span className="relative z-10">Send Message</span>
                     <div className="absolute top-2 left-2 w-full h-full border border-white z-0 pointer-events-none group-hover:top-0 group-hover:left-0 transition-all duration-300" />
                </button>
            </div>
        </motion.form>
      </div>
      
       {/* Background Elements */}
       <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
           <div className="absolute top-1/4 -left-32 w-96 h-96 bg-acid rounded-full blur-[128px]" />
           <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-acid rounded-full blur-[128px]" />
       </div>
       <div className="absolute inset-0 grain opacity-20" />
    </section>
  );
}
