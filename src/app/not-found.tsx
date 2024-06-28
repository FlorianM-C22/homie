"use client";

import React from "react";
import Link from "next/link";
import HomieLogo from "./HomieLogo";

export default function Component() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <Link href="/" className="mb-8 inline-block" prefetch={false}>
          <HomieLogo />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Oops, you seem to be lost!
        </h1>
        <p className="mt-4 text-muted-foreground">
          We couldn't find the page you were looking for. Maybe try searching for something else?
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            prefetch={false}
          >
            Take me back home
          </Link>
        </div>
      </div>
    </div>
  )
}

interface MountainIconProps {
  [key: string]: any;
}

function HomieLogoProps(props: MountainIconProps) {
  return (
    <HomieLogo  {...props} />
  )
}
