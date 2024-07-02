"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import FadeContainer from "./fadecontainer";

const BlurIn = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-50px 0px",
  });

  return (
    <motion.h2
      ref={ref}
      initial={{ filter: "blur(10px)", opacity: 0 }}
      animate={{ filter: inView ? "blur(0px)" : "blur(10px)", opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="text-3xl font-bold tracking-tighter md:text-4xl/tight"
    >
      Pick what you need, we&apos;ll handle the rest.
    </motion.h2>
  );
};

export default function KeyFeature() {
  return (
    <section className="flex items-center justify-center">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
      <FadeContainer>
        <img
          src="/img/BuilderScreenshot.png"
          width={800}
          height={600}
          alt="Feature Screenshot"
          className="rounded-xl object-cover border-1 border-gray-100 shadow-xl"
        />
        </FadeContainer>
        <div className="space-y-4">
          <BlurIn />
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Eliminate tedious configurations, select your services, edit, save and download your docker-compose files.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
          </div>
        </div>
      </div>
    </section>
  );
}
