"use client";

import React from "react";

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

export default function FeaturedServices() {
  return (
    <section className="w-full py-12">
      <div className="container grid items-center justify-center gap-4 px-4 text-center">
        <div className="space-y-3">
          <motion.h1
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          className="text-6xl font-bold tracking-tighter sm:text-4xl">Featuring the best.
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className="mx-auto max-w-[700px] text-muted-foreground text-md pb-8">
            A wide selection of Docker images, just for you !
          </motion.p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <FadeContainer>
            <div className="mx-auto flex items-center justify-center">
              <img
                src="https://www.svgrepo.com/show/504499/jellyfin.svg"
                width="140"
                height="70"
                alt="Jellyfin Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
              />
            </div>
          </FadeContainer>
          <FadeContainer>
            <div className="mx-auto flex items-center justify-center">
              <img
                src="https://www.svgrepo.com/show/331543/plex.svg"
                width="140"
                height="70"
                alt="Plex Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
              />
            </div>
          </FadeContainer>
          <FadeContainer>
            <div className="mx-auto flex items-center justify-center">
              <img
                src="https://www.svgrepo.com/show/518792/qbittorrent-remote.svg"
                width="140"
                height="70"
                alt="Qbittorrent Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
              />
            </div>
          </FadeContainer>
          <FadeContainer>
            <div className="mx-auto flex items-center justify-center">
              <img
                src="https://www.svgrepo.com/show/330638/homeassistant.svg"
                width="140"
                height="70"
                alt="Home Assistant Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
              />
            </div>
          </FadeContainer>
          <FadeContainer>
            <div className="mx-auto flex items-center justify-center">
              <img
                src="https://www.svgrepo.com/show/378478/vscode-fill.svg"
                width="140"
                height="70"
                alt="VSCode Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
              />
            </div>
          </FadeContainer>
          <FadeContainer>
            <div className="mx-auto flex items-center justify-center">
              <img
                src="https://www.svgrepo.com/show/305650/adguard.svg"
                width="140"
                height="70"
                alt="AdGuard Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
              />
            </div>
          </FadeContainer>
        </div>
      </div>
    </section>
  );
}
