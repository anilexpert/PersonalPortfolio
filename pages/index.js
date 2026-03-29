import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import CoreCapabilities from '../components/CoreCapabilities'
import DesignExpertise from '../components/DesignExpertise'
import SelectedWorks from '../components/SelectedWorks'
import HowIDesign from '../components/HowIDesign'

import CTA from '../components/CTA'
import Footer from '../components/Footer'
import Head from 'next/head'
import MarqueeStripe from '../components/MarqueeStripe'

export default function Home() {
  return (
    <div className="min-h-screen bg-transparent text-slate-900 transition-colors duration-500">
      <Head>
        <title>Senior Product Designer | Portfolio</title>
        <meta name="description" content="Portfolio of a senior product designer focusing on strategic systems design and business impact." />
      </Head>

      <Navbar />
      
      <main>
        <div className="section-divide"><Hero /></div>
        <div className="section-divide"><MarqueeStripe /></div>
        <div className="section-divide"><CoreCapabilities /></div>
        <div className="section-divide"><DesignExpertise /></div>
        <div className="section-divide"><SelectedWorks /></div>
        <div className="section-divide"><HowIDesign /></div>

        <CTA />
      </main>

      <Footer />
    </div>
  )
}
