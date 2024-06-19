import { BentoCard, BentoGrid } from "@/components/bento-grid";
import Marquee from "@/components/marquee";
import {
  BellIcon,
  PersonIcon,
  FileTextIcon,
  RocketIcon,
  CubeIcon,
  PlayIcon
} from "@radix-ui/react-icons";

const features = [
  {
    Icon: RocketIcon,
    name: "Build !",
    description: "Let's configure your homelab.",
    href: "/builder",
    cta: "Ready ?",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-1 lg:col-end-2",
  },
  {
    Icon: PlayIcon,
    name: "Ready to go !",
    description: "A panel of pre-built configurations with selected services by themes.",
    href: "/",
    cta: "Check it out !",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: CubeIcon,
    name: "Dependencies",
    description: "A all-in-one script to setup every dependencies you need.",
    href: "/",
    cta: "Click me !",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: FileTextIcon,
    name: "Need help ?",
    description: "Check our documentation.",
    href: "/",
    cta: "Homie Docs",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: PersonIcon,
    name: "Profile",
    description:
      "Manage your account.",
    href: "/",
    cta: "Go to profile",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

export async function BentoDashboard() {
  return (
    <BentoGrid className="lg:grid-rows-3">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}
