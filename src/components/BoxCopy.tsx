import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";

export default function BoxCopy() {
  const inputRef = useRef<HTMLInputElement>(null); // Référence pour l'élément input
  const [copied, setCopied] = useState(false); // État pour gérer l'affichage du message de copie

  const handleCopy = () => {
    if (inputRef.current) {
      inputRef.current.select(); // Sélectionne le texte dans l'input
      document.execCommand("copy"); // Copie le texte sélectionné dans le presse-papiers
      setCopied(true); // Active l'affichage du message de copie
      setTimeout(() => setCopied(false), 1500); // Réinitialise l'affichage après 1.5 secondes
    }
  };

  return (
    <div className="container flex flex-col items-center gap-6 px-4 md:px-6">
      <div className="flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-3 py-2 shadow-sm">
        <input
          ref={inputRef}
          type="text"
          className="w-full border-none bg-transparent focus:outline-none focus:ring-0 text-black"
          style={{ minWidth: "300px" }}
          value="curl -fsSL https://install.get-homie.tech | bash"
          readOnly
        />
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-600 hover:bg-gray-100"
          onClick={handleCopy}
        >
          <CopyIcon className="h-5 w-5" />
          <span className="sr-only">Copy</span>
        </Button>
      </div>
    </div>
  );
}

interface CopyIconProps {
  width?: string | number;
  height?: string | number;
  className?: string;
}

function CopyIcon({ width = 24, height = 24, className }: CopyIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  );
}
