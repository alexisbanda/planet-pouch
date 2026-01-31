"use client";

import { Instagram, Facebook, Twitter, Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Simulate API call
    console.log("Subscribed:", email);
    setIsSubscribed(true);
    setEmail("");
    
    // Reset after a while
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <footer className="bg-bone pt-20 pb-10 px-6 border-t border-denim/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold text-denim mb-6">PlanetPouch</h2>
          <p className="text-denim/60 max-w-sm mb-6">
            Reimagining denim waste into premium everyday carry. 
            Designed in the city, made for the planet.
          </p>
          <div className="flex gap-4 text-denim">
            <Link href="#" className="hover:text-acid transition-colors"><Instagram className="w-5 h-5" /></Link>
            <Link href="#" className="hover:text-acid transition-colors"><Facebook className="w-5 h-5" /></Link>
            <Link href="#" className="hover:text-acid transition-colors"><Twitter className="w-5 h-5" /></Link>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-denim mb-4">SHOP</h4>
          <ul className="space-y-2 text-denim/70">
            <li><Link href="https://e-souvenirs.netlify.app/planet-pouch" target="_blank" className="hover:text-denim">New Arrivals</Link></li>
            <li><Link href="https://e-souvenirs.netlify.app/planet-pouch" target="_blank" className="hover:text-denim">Backpacks</Link></li>
            <li><Link href="https://e-souvenirs.netlify.app/planet-pouch" target="_blank" className="hover:text-denim">Totes</Link></li>
            <li><Link href="https://e-souvenirs.netlify.app/planet-pouch" target="_blank" className="hover:text-denim">Accessories</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-denim mb-4">JOIN THE ECO-LOOP</h4>
          <p className="text-sm text-denim/60 mb-4">Get early access to drops.</p>
          
          {isSubscribed ? (
             <div className="flex items-center gap-2 text-green-600 font-bold bg-green-100 p-3 rounded-md">
                <Check className="w-5 h-5" />
                <span>You&apos;re on the list!</span>
             </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex gap-2">
                <input 
                type="email" 
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                className="bg-white border border-denim/20 px-4 py-2 w-full focus:outline-none focus:border-acid"
                required
                />
                <button type="submit" className="bg-denim text-white px-4 py-2 font-bold hover:bg-acid hover:text-denim transition-colors">
                →
                </button>
            </form>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-denim/40 border-t border-denim/5 pt-8">
        <p>© 2026 PlanetPouch. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="#" className="hover:text-denim transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-denim transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
