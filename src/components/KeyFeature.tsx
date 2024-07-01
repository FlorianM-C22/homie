"use client";

import React from "react";
import Link from "next/link";
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
      transition={{ duration: 1 }}
      className="text-3xl font-bold tracking-tighter md:text-4xl/tight"
    >
      Pick what you need, we'll handle the rest.
    </motion.h2>
  );
};

export default function KeyFeature() {
  return (
    <section className="flex items-center justify-center h-screen">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10 -mt-48">
      <FadeContainer>
        <img
          src="/img/BuilderScreenshot.png"
          width={800}
          height={600}
          alt="Feature Screenshot"
          className="rounded-xl object-cover border-1 border-gray-100 shadow-2xl"
        />
        </FadeContainer>
        <div className="space-y-4">
          <BlurIn />
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Eliminate tedious configurations, select your services, edit, save and download your docker-compose files.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
