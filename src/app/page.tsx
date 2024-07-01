"use client";

import React, { useState, useEffect } from "react";
import { FlipWordsDemo } from "@/components/FlipWords";
import HomieLogo from "./HomieLogo";
import { BorderBeamComponent } from "@/components/BorderBeam";
import Footer from "@/components/ui/footer";
import FadeContainer from "@/components/fadecontainer";
import Features from "@/components/Features";
import KeyFeature from "@/components/KeyFeature";
import BoxCopy from "@/components/BoxCopy";
import FAQSection from "@/components/FAQSection";
import About from "@/components/About";

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
      <div className="absolute top-0 -z-10 h-full w-full bg-white">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(239,68,68,0.5)] opacity-50 blur-[80px]"></div>
      </div>

      <header className={`sticky top-0 z-50 transition-all duration-200 backdrop-blur-2xl ${scrolled ? 'border-b' : ''}`}>
        <div className="flex items-center justify-center w-auto mx-auto w-10 h-10 pt-2">
          <HomieLogo />
        </div>
      </header>

      <section className="mt-section text-primary-foreground flex justify-center items-center relative">
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

      <section className="mt-section text-primary-foreground flex justify-center items-center relative">
        <div className="-z-10 absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <div className="container mx-auto px-4 text-center">
          <Features />
        </div>
      </section>

      <section className="flex justify-center items-center relative">
        <KeyFeature />
      </section>

      <section className="mt-section flex justify-center items-center">
        <div className="container mx-auto w-full lg:w-2/3 xl:w-1/2">
          <FAQSection />
        </div>
      </section>

      <Footer />
    </div>
  );
}
