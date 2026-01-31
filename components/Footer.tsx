import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
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
            <Instagram className="w-5 h-5 cursor-pointer hover:text-acid transition-colors" />
            <Facebook className="w-5 h-5 cursor-pointer hover:text-acid transition-colors" />
            <Twitter className="w-5 h-5 cursor-pointer hover:text-acid transition-colors" />
          </div>
        </div>

        <div>
          <h4 className="font-bold text-denim mb-4">SHOP</h4>
          <ul className="space-y-2 text-denim/70">
            <li className="hover:text-denim cursor-pointer">New Arrivals</li>
            <li className="hover:text-denim cursor-pointer">Backpacks</li>
            <li className="hover:text-denim cursor-pointer">Totes</li>
            <li className="hover:text-denim cursor-pointer">Accessories</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-denim mb-4">JOIN THE ECO-LOOP</h4>
          <p className="text-sm text-denim/60 mb-4">Get early access to drops.</p>
          <form className="flex gap-2">
            <input 
              type="email" 
              placeholder="Email" 
              className="bg-white border border-denim/20 px-4 py-2 w-full focus:outline-none focus:border-acid"
            />
            <button className="bg-denim text-white px-4 py-2 font-bold hover:bg-acid hover:text-denim transition-colors">
              →
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-denim/40 border-t border-denim/5 pt-8">
        <p>© 2026 PlanetPouch. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}
