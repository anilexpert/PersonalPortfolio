import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import SelectedWorks from "@/components/sections/SelectedWorks";
import Services from "@/components/sections/Services";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <Services />
      <SelectedWorks />
      <CTA />
      <Footer />
    </main>
  );
}
