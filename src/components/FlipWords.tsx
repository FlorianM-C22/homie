import React from "react";
import { FlipWords } from "./ui/flip-words";

export function FlipWordsDemo() {
  const words = ["awesome", "powerful", "beautiful", "modern"];

  return (
    <div className="h-[20rem] flex justify-center items-center px-4">
      <div className="text-8xl mx-auto font-bold text-red-500">
        Build
        <FlipWords words={words} /> <br />
        homelabs with Homie.
      </div>
    </div>
  );
}
