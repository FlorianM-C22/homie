"use client";

import React from "react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function About() {

return (
  <main className="w-full max-w-3xl mx-auto py-12 md:py-24 px-4 md:px-6">
    <div className="grid gap-8 md:gap-12">
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-5xl font-bold">About</h1>
        <p className="text-muted-foreground text-lg md:text-xl">
          We are a team of passionate designers and developers who love creating beautiful and functional web
          applications. Our mission is to help businesses and individuals achieve their goals through innovative
          technology solutions.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            <div className="mr-2 h-5 w-5" />
            Twitter
          </Link>
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            <div className="mr-2 h-5 w-5" />
            LinkedIn
          </Link>
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            <div className="mr-2 h-5 w-5" />
            GitHub
          </Link>
        </div>
      </div>
      <Avatar className="mx-auto h-16 w-16">
        <AvatarImage src="/placeholder-user.jpg" />
        <AvatarFallback>FM</AvatarFallback>
      </Avatar>
    </div>
  </main>
)
}
