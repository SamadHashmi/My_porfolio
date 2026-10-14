import {
  Activity,
  Blocks,
  Landmark,
  MessagesSquare,
  MonitorSmartphone,
  Server,
} from "lucide-react";

export const services = [
  {
    title: "Full Stack Web Apps",
    description:
      "Production interfaces in React.js, Next.js, and TypeScript — Tailwind CSS, Material-UI, Redux Toolkit, and React Query included.",
    icon: MonitorSmartphone,
    gradient: "from-cyan-500/20 to-blue-500/20",
    accent: "#06b6d4",
  },
  {
    title: "Python Backend APIs",
    description:
      "REST APIs and server-side logic with Flask and Django, alongside Node.js, for auth, data processing, and frontend integration.",
    icon: Server,
    gradient: "from-emerald-500/20 to-teal-500/20",
    accent: "#10b981",
  },
  {
    title: "Government & Enterprise Portals",
    description:
      "Role-based systems with multi-level approvals, document verification, and workflows built for thousands of users.",
    icon: Landmark,
    gradient: "from-indigo-500/20 to-blue-500/20",
    accent: "#6366f1",
  },
  {
    title: "Analytics Dashboards",
    description:
      "Healthcare and operations dashboards with Chart.js, Excel import, PDF reports, caching, and virtualized large datasets.",
    icon: Activity,
    gradient: "from-rose-500/20 to-pink-500/20",
    accent: "#f43f5e",
  },
  {
    title: "Web3 Integration",
    description:
      "MetaMask wallet connection, Ethers.js contract calls, token swaps, and on-chain transaction tracking.",
    icon: Blocks,
    gradient: "from-violet-500/20 to-purple-500/20",
    accent: "#8b5cf6",
  },
  {
    title: "Real-Time Applications",
    description:
      "WebSocket chat, live booking, and appointment flows that stay in sync between vendors, customers, and admins.",
    icon: MessagesSquare,
    gradient: "from-amber-500/20 to-orange-500/20",
    accent: "#f59e0b",
  },
] as const;
