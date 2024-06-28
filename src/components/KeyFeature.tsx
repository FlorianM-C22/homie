"use client";

import React from "react";
import Link from "next/link";

export default function KeyFeature() {
  return (
    <section className="flex items-center justify-center h-screen">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10 -mt-48">
        <img
          src="/img/BuilderScreenshot.png"
          width={800}
          height={600}
          alt="Feature Screenshot"
          className="rounded-xl object-cover"
        />
        <div className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Pick what you need, we'll handle the rest.
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Eliminate tedious configurations, select your services edit, save and download your docker-compose file.
            </p>
          </div>
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