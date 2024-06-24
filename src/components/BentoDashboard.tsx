"use client";

import { BentoCard, BentoGrid } from "@/components/bento-grid";
import {
  PersonIcon,
  FileTextIcon,
  RocketIcon,
  CubeIcon,
  PlayIcon
} from "@radix-ui/react-icons";
import React from 'react';

// Fonction pour copier du texte dans le presse-papier
const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text).then(() => {
    alert("Lien copié dans le presse-papier !");
  }).catch((err) => {
    console.error('Erreur lors de la copie dans le presse-papier:', err);
  });
};

const features = [
  {
    Icon: RocketIcon,
    name: "Build !",
    description: "Let's configure your homelab.",
    href: "/builder",
    cta: "Ready ?",
    // eslint-disable-next-line @next/next/no-img-element
    background: <img className="absolute -right-20 -top-20 opacity-60" src="path/to/image" alt="background" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-1 lg:col-end-2",
  },
  {
    Icon: PlayIcon,
    name: "Ready to go !",
    description: "Pre-built configurations with selected services by theme.",
    href: "/",
    cta: "Check it out !",
    // eslint-disable-next-line @next/next/no-img-element
    background: <img className="absolute -right-20 -top-20 opacity-60" src="path/to/image" alt="background" />,
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: CubeIcon,
    name: "Dependencies",
    description: "A all-in-one script to setup every dependencies you need.",
    href: "#",
    cta: "Click me !",
    // eslint-disable-next-line @next/next/no-img-element
    background: <img className="absolute -right-20 -top-20 opacity-60" src="path/to/image" alt="background" />,
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-3 lg:row-end-4",
    onClick: () => copyToClipboard("wget -qO- https://kyekgrodzyclwvfppjnq.supabase.co/storage/v1/object/public/scripts/install.sh | bash")
  },
  {
    Icon: FileTextIcon,
    name: "Need help ?",
    description: "Check our documentation.",
    href: "/",
    cta: "Homie Docs",
    // eslint-disable-next-line @next/next/no-img-element
    background: <img className="absolute -right-20 -top-20 opacity-60" src="path/to/image" alt="background" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: PersonIcon,
    name: "Profile",
    description:
      "Manage your account.",
    href: "/profile",
    cta: "Go to profile",
    // eslint-disable-next-line @next/next/no-img-element
    background: <img className="absolute -right-20 -top-20 opacity-60" src="path/to/image" alt="background" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

export async function BentoDashboard() {
  return (
    <BentoGrid className="lg:grid-rows-3">
      {features.map((feature) => (
        <BentoCard key={feature.name} onClick={feature.onClick} {...feature} />
      ))}
    </BentoGrid>
  );
}
