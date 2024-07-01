"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import clsx from "clsx";
import { motion } from "framer-motion";

const FADE_DOWN_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: -10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 30,
      damping: 10,
      duration: 1.5,
    },
  },
};

export default function HowToUse() {
  const [step, setStep] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const timeouts = [
              setTimeout(() => setStep(1), 500),
              setTimeout(() => setStep(2), 1000),
              setTimeout(() => setStep(3), 1500),
            ];
            // Nettoyage des timeouts
            return () => timeouts.forEach(clearTimeout);
          }
        });
      },
      { threshold: 0.5 } // Ajuste le seuil pour déclencher l'animation
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  }, []);

  return (
    <div ref={sectionRef} className="w-full max-w-3xl mx-auto p-6 sm:p-10 text-black">
      <div className="space-y-4">
        <motion.h1
          initial="hidden"
          whileInView="show"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className="text-4xl font-bold">
            It's that easy !
        </motion.h1>
        <div className="flex items-center justify-between">
          {/* Step 1 */}
          <div
            className={clsx("flex items-center space-x-4 transition-opacity duration-500", {
              "opacity-0": step < 1,
              "opacity-100": step >= 1,
            })}
          >
            <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center text-primary-foreground font-medium">
              1
            </div>
            <div>
              <h3 className="font-medium">Sign Up</h3>
              <p className="text-muted-foreground text-sm">Create your account.</p>
            </div>
          </div>
          {/* Step 2 */}
          <div
            className={clsx("flex items-center space-x-4 transition-opacity duration-500", {
              "opacity-0": step < 2,
              "opacity-100": step >= 2,
            })}
          >
            <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center text-primary-foreground font-medium">
              2
            </div>
            <div>
              <h3 className="font-medium">Connect</h3>
              <p className="text-muted-foreground text-sm">Get access to your dashboard.</p>
            </div>
          </div>
          {/* Step 3 */}
          <div
            className={clsx("flex items-center space-x-4 transition-opacity duration-500", {
              "opacity-0": step < 3,
              "opacity-100": step >= 3,
            })}
          >
            <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center text-primary-foreground font-medium">
              3
            </div>
            <div>
              <h3 className="font-medium">Configure</h3>
              <p className="text-muted-foreground text-sm">Deploy and enjoy.</p>
            </div>
          </div>
        </div>
        {/* Bouton Get Started avec marge supplémentaire */}
        <div style={{ marginTop: "3rem" }} className="flex justify-center">
          <Link
            href="/signup"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
