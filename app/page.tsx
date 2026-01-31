import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import ProductCarousel from "@/components/ProductCarousel";
import ProcessSteps from "@/components/ProcessSteps";
import Manifesto from "@/components/Manifesto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bone overflow-x-hidden selection:bg-acid selection:text-denim">
      <Header />
      <Hero />
      <Ticker />
      <ProductCarousel />
      <ProcessSteps />
      <Manifesto />
      <Footer />
    </main>
  );
}
