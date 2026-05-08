// Trigger reload
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import MarqueeStripe from '../components/MarqueeStripe';
import CoreCapabilities from '../components/CoreCapabilities';
import DesignExpertise from '../components/DesignExpertise';
import About from '../components/About';
import SelectedWorks from '../components/SelectedWorks';
import HowIDesign from '../components/HowIDesign';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import GlowDivider from '../components/GlowDivider';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Anil Kumar | Senior Product Designer • AI-Driven UX • Enterprise SaaS</title>
        <meta name="description" content="Product designer specializing in scalable systems, AI-driven workflows, and conversion-focused digital products for SaaS and enterprise teams." />
        <meta property="og:title" content="Anil Kumar | Senior Product Designer" />
        <meta property="og:description" content="Crafting scalable products that users love." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />
      
      <main>
        <Hero />
        <MarqueeStripe />
        <CoreCapabilities />
        <GlowDivider />
        <DesignExpertise />
        <GlowDivider />
        <About />
        <GlowDivider />
        <SelectedWorks />
        <GlowDivider />
        <HowIDesign />
        <GlowDivider />
        <Testimonials />
        <GlowDivider />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}

