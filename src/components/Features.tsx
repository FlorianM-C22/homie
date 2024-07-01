"use client";

import React from "react";
import { RocketIcon, SymbolIcon, LayersIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import FadeContainer from "./fadecontainer";

const FADE_DOWN_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: -10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 10,
      duration: 1,
    },
  },
};

export default function Features() {
  return (
    <section className="mt-section w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <motion.h2
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={FADE_DOWN_ANIMATION_VARIANTS}
              className="text-3xl font-bold tracking-tighter sm:text-5xl text-black"
            >
              A single tool to deploy them all
            </motion.h2>
            <p className="max-w-[900px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We help you build and deploy your homelab with ease.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12 mt-5">
          <FadeContainer>
            <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-card p-6 text-center shadow-sm backdrop-blur-lg border border-gray-100">
              <div className="rounded-md bg-primary p-3">
                <RocketIcon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-black">Quick</h3>
              <p className="text-black">
                Run your homelab in minutes with our easy-to-use interface.
              </p>
            </div>
          </FadeContainer>
          <FadeContainer>
            <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-card p-6 text-center shadow-sm backdrop-blur-lg border border-gray-100">
              <div className="rounded-md bg-primary p-3">
                <SymbolIcon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-black">Automated</h3>
              <p className="text-black">
                Fully automated scripts, we take care of everything!
              </p>
            </div>
          </FadeContainer>
          <FadeContainer>
            <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-card p-6 text-center shadow-sm backdrop-blur-lg border border-gray-100">
              <div className="rounded-md bg-primary p-3">
                <LayersIcon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-black">Customizable</h3>
              <p className="text-black">
                Pick any service you want and customize it to your needs.
              </p>
            </div>
          </FadeContainer>
        </div>
      </div>
    </section>
  );
}
