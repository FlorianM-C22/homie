"use client";

import React from "react";

export default function FeaturedServices() {
  return (
    <section className="w-full py-12">
      <div className="container grid items-center justify-center gap-4 px-4 text-center">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Featuring the best</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground text-md">
            A wide selection of Docker images, just for you !
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div className="mx-auto flex items-center justify-center">
            <img
              src="/placeholder.svg"
              width="140"
              height="70"
              alt="Logo"
              className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
            />
          </div>
          <div className="mx-auto flex items-center justify-center">
            <img
              src="/placeholder.svg"
              width="140"
              height="70"
              alt="Logo"
              className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
            />
          </div>
          <div className="mx-auto flex items-center justify-center">
            <img
              src="/placeholder.svg"
              width="140"
              height="70"
              alt="Logo"
              className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
            />
          </div>
          <div className="mx-auto flex items-center justify-center">
            <img
              src="/placeholder.svg"
              width="140"
              height="70"
              alt="Logo"
              className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
            />
          </div>
          <div className="mx-auto flex items-center justify-center">
            <img
              src="/placeholder.svg"
              width="140"
              height="70"
              alt="Logo"
              className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
            />
          </div>
          <div className="mx-auto flex items-center justify-center">
            <img
              src="/placeholder.svg"
              width="140"
              height="70"
              alt="Logo"
              className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
