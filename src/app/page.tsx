import * as React from "react";

import { FlipWordsDemo } from "@/components/FlipWords";
import { StickyScrollReveal } from "@/components/StickyScrollReveal";


export default function Home() {
  return (
    <div>
      <header style={{ width: "100%", backgroundColor: "#fca5a5", padding: "20px" }}>
        {/* Header content */}
      </header>
      <section className="mt-20 bg-background text-primary-foreground flex justify-center items-center">
        <div className="container mx-auto px-4 text-center">
          <FlipWordsDemo />
          <p className="text-lg text-secondary">
            Deploy your homelab at lightning speed with Homie, an all-in-one tool for building your server from A to Z !
          </p>
        </div>
      </section>
      <section className="bg-primary-foreground text-primary py-20 flex justify-center items-center">
        <div className="relative mt-[8rem] animate-fade-up opacity-0 [--animation-delay:400ms] [perspective:2000px] after:absolute after:inset-0 after:z-50 after:[background:linear-gradient(to_top,hsl(var(--background))_30%,transparent)]">
        </div>
      </section>
      <section className="bg-accent text-accent-foreground py-20 flex justify-center items-center">
        <div className="container mx-auto px-4 text-center">
          {/* Another section content */}
        </div>
      </section>
    </div>
  );
}
