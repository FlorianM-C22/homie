"use client";

import React from "react";
import { RocketIcon, SymbolIcon, LayersIcon }  from "@radix-ui/react-icons"

interface ScaleIconProps {
  className?: string;
  style?: React.CSSProperties;
}

function ScaleIcon(props: ScaleIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="M7 21h10" />
      <path d="M12 3v18" />
      <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
    </svg>
  );
}

export default function Features() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-black">A single tool to deploy them all</h2>
            <p className="max-w-[900px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We help you build and deploy your homelab with ease.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-card p-6 text-center shadow-sm backdrop-blur-lg border border-gray-100">
            <div className="rounded-md bg-primary p-3">
              <RocketIcon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold text-black">Quick</h3>
            <p className="text-black">
              Run your homelab in minutes with our easy-to-use interface.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-card p-6 text-center shadow-sm backdrop-blur-lg border border-gray-100">
            <div className="rounded-md bg-primary p-3">
              <SymbolIcon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold text-black">Automated</h3>
            <p className="text-black">
              Fully automated scripts, we take care of everything!
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-card p-6 text-center shadow-sm backdrop-blur-lg border border-gray-100">
            <div className="rounded-md bg-primary p-3">
              <LayersIcon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold text-black">Customizable</h3>
            <p className="text-black">
              Pick any service you want and customize it to your needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
