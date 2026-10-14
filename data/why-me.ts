import {
  Boxes,
  Gauge,
  Layers,
  Radio,
  Shield,
  Wallet,
} from "lucide-react";

export const whyMeCards = [
  {
    title: "Large-Scale Portals",
    description:
      "Shipped a government system with six role-based interfaces handling 10,000+ users and multi-level approval workflows.",
    icon: Layers,
    accent: "#06b6d4",
  },
  {
    title: "Performance First",
    description:
      "SSR, code splitting, lazy loading, caching, and virtualized rendering so large datasets stay responsive.",
    icon: Gauge,
    accent: "#8b5cf6",
  },
  {
    title: "Web3 in Production",
    description:
      "MetaMask, Ethers.js, tokenized ownership, and cross-chain swaps wired into real product flows.",
    icon: Wallet,
    accent: "#10b981",
  },
  {
    title: "Python Backends",
    description:
      "Flask and Django APIs next to Node.js — REST endpoints, data processing, and services the frontend can rely on.",
    icon: Boxes,
    accent: "#f59e0b",
  },
  {
    title: "Real-Time Systems",
    description:
      "WebSocket chat and booking flows so vendors and customers stay on the same schedule.",
    icon: Radio,
    accent: "#f43f5e",
  },
  {
    title: "Polished Interfaces",
    description:
      "Tailwind CSS, Bootstrap, Material-UI, and Three.js for dashboards, 3D previews, and clear product UI.",
    icon: Shield,
    accent: "#6366f1",
  },
] as const;
