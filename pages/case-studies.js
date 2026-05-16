import Head from 'next/head';
import Navbar from '../components/Navbar';
import PortfolioGrid from '../components/PortfolioGrid';
import Footer from '../components/Footer';

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Case Studies | Anil Kumar - Senior Product Designer</title>
        <meta name="description" content="Explore high-fidelity product design case studies, AI workflows, and enterprise SaaS solutions by Anil Kumar." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />

      <main className="min-h-screen pt-20 md:pt-24">
        <PortfolioGrid />
      </main>

      <Footer />
    </div>
  );
}
