"use client";

import React, { useState, useEffect } from "react";
import { FlipWordsDemo } from "@/components/FlipWords";
import { BorderBeamComponent } from "@/components/BorderBeam";
import Footer from "@/components/ui/footer";
import FadeContainer from "@/components/fadecontainer";
import Features from "@/components/Features";
import KeyFeature from "@/components/KeyFeature";
import BoxCopy from "@/components/BoxCopy";
import FAQ from "@/components/FAQ";
import FeaturedServices from "@/components/FeaturedServices";
import WavyBackgroundDemo from "@/components/wavybackground";


export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <header className={`sticky top-0 z-50 transition-all duration-200 backdrop-blur-2xl ${scrolled ? 'border-b' : ''}`}>
        <div className="flex items-center justify-between w-full mx-auto p-1">
          {/* Texte "Homie" aligné à gauche */}
          <a href="/" className="flex items-center ml-80">
            <img src="/img/HomieLogoSmall.png" alt="Homie Logo"/>
          </a>

          {/* Navigation alignée à droite */}
          <nav className="flex items-center space-x-2 mr-80">
            <a href="#features" className="text-sm font-medium text-gray-700 hover:text-gray-900">Features</a>
            <a href="/login" className="text-sm font-medium text-red-500 hover:text-gray-900">Login</a>
          </nav>
        </div>
      </header>

      <section className="mt-section text-primary-foreground flex justify-center items-center relative">
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
            <WavyBackgroundDemo />
        </div>
        <div className="container mx-auto px-4 text-center">
          <FlipWordsDemo />
          <BoxCopy />
          <div className="mt-8 lg:mt-20 xl:mt-16 relative rounded-xl overflow-hidden">
            <FadeContainer>
              <BorderBeamComponent />
            </FadeContainer>
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-0"></div>
          </div>
        </div>
      </section>

      <section id="features" className="mt-section text-primary-foreground flex justify-center items-center relative">
        <div className="-z-10 absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <div className="container mx-auto px-4 text-center">
          <Features />
        </div>
      </section>

      <section className="mt-section flex justify-center items-center relative">
        <KeyFeature />
      </section>

      <section className="mt-section-l flex justify-center items-center">
        <div className="container mx-auto px-4 text-center">
          <FeaturedServices />
        </div>
      </section>

      <section className="mt-section">
        <div className="w-full bg-gray-100">
          <FAQ />
        </div>
      </section>

      <Footer />
    </div>
  );
}
