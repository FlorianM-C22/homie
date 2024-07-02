"use client";

import React from "react";
import Link from "next/link";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import FadeContainer from "@/components/fadecontainer";
import { motion } from "framer-motion";

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

export default function About() {
  return (
    <div className="w-full max-w-5xl mx-auto py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
      <div className="flex items-center justify-center">
        <FadeContainer>
        <img
          src="/img/profilepic.png"
          width={400}
          height={400}
          alt="Florian's picture"
          className="w-full max-w-[300px] md:max-w-[400px] rounded-2xl object-cover shadow-xl"
        />
        </FadeContainer>
      </div>
      <div className="space-y-6">
        <div className="space-y-2">
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className="text-3xl md:text-4xl font-bold">Florian Meignan
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className="text-muted-foreground">Junior Software Engineer
          </motion.p>
        </div>
        <div className="space-y-4">
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className="text-muted-foreground">
          Hello! I am Florian Meignan, I am currently completing my studies in software development at <Link href="https://www.holbertonschool.fr/" className="text-red-500 text-underline">Holberton School Laval </Link>.
          Homie is my end-of-year project and I had a lot of fun doing it ! I am looking for my first job as a developper, so please feel free to contact me if you have any opportunities.
          </motion.p>
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className="text-muted-foreground">
          In my free time, you will find me playing video games or cooking for my friends.
          Passionate about new technologies, I greatly enjoy staying up-to-date and experimenting with the latest tools and innovations.
          </motion.p>
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className="text-muted-foreground">
          Fun fact about me : I own an <Link href="https://adepts-org.eu/" className="text-red-500 text-underline">esports team</Link> !
          </motion.p>
          <div className="flex gap-4">
          <FadeContainer>
            <Link
              href="http://github.com/FlorianM-C22"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              <GitHubLogoIcon className="h-5 w-5" />
              GitHub
            </Link>
            </FadeContainer>
            <FadeContainer>
            <Link
              href="http://www.linkedin.com/in/florian-meignan-b21937210/"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              <LinkedInLogoIcon className="h-5 w-5" />
              LinkedIn
            </Link>
            </FadeContainer>
          </div>
        </div>
      </div>
    </div>
  )
}
