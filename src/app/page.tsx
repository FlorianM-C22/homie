"use client";

import React, { useState, useEffect } from "react";
import { FlipWordsDemo } from "@/components/FlipWords";
import HomieLogo from "./HomieLogo";
import { BorderBeamComponent } from "@/components/BorderBeam";
import { RadialGradientDemo } from "@/components/RadialGradient";
import Footer from "@/components/ui/footer";

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
    <div>
      <header className={`sticky top-0 z-50 transition-all duration-200 backdrop-blur-2xl ${scrolled ? 'border-b' : ''}`}>
        <div className="flex items-center justify-center w-auto mx-auto w-10 h-10 pt-2">
          <HomieLogo />
        </div>
      </header>
      <section className="mt-20 bg-background text-primary-foreground flex justify-center items-center relative">
        <div className="container mx-auto px-4 text-center">
          <FlipWordsDemo />
          <p className="text-lg text-secondary">
            Deploy your homelab at lightning speed with Homie, an all-in-one tool for building your server from A to Z !
          </p>
          <div className="mt-8 lg:mt-12 xl:mt-16 relative rounded-xl overflow-hidden">
            <BorderBeamComponent />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-0"></div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
