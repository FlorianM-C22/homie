"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Footer from "@/components/ui/footer";
import  About  from "@/components/About";

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
    <div className="relative min-h-screen flex flex-col">
      <header className={`sticky top-0 z-50 transition-all duration-200 backdrop-blur-2xl ${scrolled ? 'border-b' : ''}`}>
        <div className="flex items-center justify-between w-full mx-auto p-1">
          <a href="/" className="flex items-center ml-80">
            <Image src="/img/HomieLogoSmall.png" alt="Homie Logo" width="60" height="60" />
          </a>
          <nav className="flex items-center space-x-2 mr-80">
            <a href="/about" className="text-sm font-medium text-gray-700 hover:text-gray-900">About</a>
            <a href="#features" className="text-sm font-medium text-gray-700 hover:text-gray-900">Features</a>
            <a href="/login" className="text-sm font-medium text-red-500 hover:text-gray-900">Login</a>
          </nav>
        </div>
      </header>

      {/* Main content centered */}
      <main className="flex-grow flex justify-center items-center">
        <div className="container mx-auto px-4">
          <About />
        </div>
      </main>

      {/* Footer wrapped in a div */}
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}
