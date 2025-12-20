import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ReferenceBlock from './components/ReferenceBlock';
import ExperienceCards from './components/ExperienceCards';
import VisualReferenceCards from './components/VisualReferenceCards';
import CTASection from './components/CTASection';
import Speakers from './components/Speakers';
import BiohackingVideo from './components/BiohackingVideo';
import EventPhotos from './components/EventPhotos';
import Pricing from './components/Pricing';
import LocationSection from './components/LocationSection';
import Sponsors from './components/Sponsors';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    // Load Google Fonts
    const link1 = document.createElement('link');
    link1.rel = 'preconnect';
    link1.href = 'https://fonts.googleapis.com';
    document.head.appendChild(link1);

    const link2 = document.createElement('link');
    link2.rel = 'preconnect';
    link2.href = 'https://fonts.gstatic.com';
    link2.crossOrigin = 'anonymous';
    document.head.appendChild(link2);

    const link3 = document.createElement('link');
    link3.rel = 'stylesheet';
    link3.href = 'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap';
    document.head.appendChild(link3);

    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <ReferenceBlock />
        <ExperienceCards />
        <VisualReferenceCards />
        <CTASection />
        <Speakers />
        <BiohackingVideo />
        <EventPhotos />
        <Pricing />
        <LocationSection />
        <Sponsors />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}