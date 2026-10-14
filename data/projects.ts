export type ProjectPortal = {
  name: string;
  access: string;
  points: string[];
};

export type Project = {
  id: string;
  title: string;
  overview: string;
  problem: string;
  solution: string;
  techStack: string[];
  liveDemo?: string;
  github?: string;
  gradient: string;
  accent: string;
  category: string;
  detailLabel?: string;
  portals?: ProjectPortal[];
};

export const projects: Project[] = [
  {
    id: "tvet-mis",
    title: "TVET-MIS Government Portal",
    overview:
      "Punjab Skills Development Authority system with separate role-based portals for institutes, admins, committees, students, employers, and assessment bodies.",
    problem:
      "Registration, inspection, certification, and job placement were split across manual approvals and disconnected tools.",
    solution:
      "Each role gets its own portal. Menus and actions stay behind permissions, from institute signup through inspection, certification, and placement.",
    portals: [
      {
        name: "Institute",
        access: "Institute users only",
        points: [
          "Register the institute: basic info, address, and ownership",
          "Building details: covered area, indoor and outdoor facilities, attachments",
          "Add courses with lab equipment, faculty, and course attachments",
          "Applications, application review, and tracking",
          "E-challan status and e-challan summary",
        ],
      },
      {
        name: "Admin",
        access:
          "Super Admin, Assistant Director, Deputy Director, Director, Additional Director, Director General",
        points: [
          "Permission-gated menus: read, scrutinize, constitute committee, approve, reject, finalize, issue certificate, read audit logs",
          "Application pipeline: scrutiny, scrutinized, inspected, rejected, referred back, approved",
          "Institutes, committees (my committee, requests, history), certificates, and members",
          "Course builder, calendar, sessions, reports, user management, and audit logs",
          "Inspection views for convener and committee member",
        ],
      },
      {
        name: "Committee",
        access: "Convener and member, separate inspection routes",
        points: [
          "Inspection dashboard and history",
          "Verify institute info, address, ownership, and building facilities",
          "Check courses, lab equipment, and faculty",
          "Accept or reject each field with remarks, then submit the inspection",
        ],
      },
      {
        name: "Student",
        access: "Students only",
        points: [
          "Admission profile: personal, guardian, contact, address, and qualification from primary to bachelor",
          "Track application and view enrolled courses",
          "Browse jobs, apply, and respond to job requests",
          "English and Urdu",
        ],
      },
      {
        name: "Employer",
        access: "Employers only",
        points: [
          "Post and manage jobs",
          "Match candidates, shortlist them, and send invites",
          "Employee records for hired TVET graduates",
          "Dashboard for jobs and hiring",
        ],
      },
      {
        name: "Assessment",
        access: "Assessment body",
        points: [
          "Statistics dashboard",
          "Result processing and datasheet",
          "API access for result and sheet data",
        ],
      },
    ],
    techStack: ["React.js", "Next.js", "TypeScript", "REST APIs", "Tailwind CSS"],
    gradient: "from-cyan-600/40 via-blue-700/30 to-indigo-900/50",
    accent: "#06b6d4",
    category: "Government",
    detailLabel: "Role-based portals",
  },
  {
    id: "nft-marketplace",
    title: "NFT Marketplace",
    overview:
      "Wallet-connected marketplace to explore collections, mint NFTs, and sell them as a direct listing or an auction.",
    problem:
      "Creators needed one place to mint a collection, store media, list it, and let buyers purchase or bid.",
    solution:
      "Built explore, create, buy, and sell flows on Thirdweb, with IPFS metadata and a wallet that follows the selected chain.",
    detailLabel: "Marketplace",
    portals: [
      {
        name: "Explore",
        access: "Public",
        points: [
          "Landing, explore, and category browsing",
          "Collections list and a single collection page",
        ],
      },
      {
        name: "Create",
        access: "Connected wallet",
        points: [
          "Create a collection, then mint an item with custom attributes",
          "Upload the image and metadata to IPFS",
          "Switch network when the wallet chain does not match",
        ],
      },
      {
        name: "Sell",
        access: "Owner",
        points: [
          "List for immediate purchase",
          "Sell to the highest bidder",
          "Reserve a listing for a specific buyer",
        ],
      },
      {
        name: "Buy & account",
        access: "Buyer wallet",
        points: [
          "Buyer view of listed items",
          "Profile and account settings",
          "Wallet connect, disconnect, and owned NFTs",
        ],
      },
    ],
    techStack: ["React", "Thirdweb", "IPFS", "Redux", "Ethers.js"],
    gradient: "from-fuchsia-600/40 via-purple-700/30 to-indigo-900/50",
    accent: "#d946ef",
    category: "Web3",
  },
  {
    id: "alumni",
    title: "Alumni Platform",
    overview:
      "Alumni network with separate Admin and Super Admin access for members, courses, events, reports, and location tracking.",
    problem:
      "The association was managing members, VIP orders, courses, and events without one role-based system.",
    solution:
      "Shipped an admin console and a super-admin console so each role only sees its own members, content, reports, and location tools.",
    detailLabel: "Role-based access",
    portals: [
      {
        name: "Admin",
        access: "Admin role",
        points: [
          "All members, plus VIP list, status, order history, and pricing",
          "Course list and course participants",
          "Events, news, and advertisements",
          "Reports for orders, VIP members, and courses",
          "Profile and transaction documents",
        ],
      },
      {
        name: "Super Admin",
        access: "Super Admin role",
        points: [
          "Admin access, create admin, and profile",
          "Find member, contacts, events, photos, and videos",
          "Fintech Live",
          "GPS locations and geo-fencing",
        ],
      },
    ],
    techStack: ["React", "Redux", "React Router", "Bootstrap"],
    gradient: "from-sky-600/40 via-blue-700/30 to-slate-900/50",
    accent: "#0ea5e9",
    category: "Alumni",
  },
  {
    id: "osteoporosis",
    title: "Osteoporosis Health Analytics",
    overview:
      "Healthcare dashboard that analyzes bone mineral density and hemoglobin data for 5,000+ patient records.",
    problem:
      "Clinical teams needed a clear view of BMD and hemoglobin results across locations, without slow spreadsheets or manual reports.",
    solution:
      "Built a React and TypeScript dashboard with geographical mapping, color-coded health indicators, Excel import, cached data, virtualized lists, and automated PDF reports.",
    techStack: ["React", "TypeScript", "Chart.js", "Excel", "PDF"],
    gradient: "from-rose-600/40 via-red-700/30 to-rose-900/50",
    accent: "#f43f5e",
    category: "Healthcare",
  },
  {
    id: "real-tokenization",
    title: "Real Tokenization Platform",
    overview:
      "Blockchain real-estate platform for fractional property ownership, investor purchases, and on-chain transaction tracking.",
    problem:
      "Property investment needed a way to list assets, sell fractional ownership, and show crypto deposits without a disconnected admin flow.",
    solution:
      "Shipped an admin listing dashboard, an investor portal for token purchases and ownership claims, Three.js property previews, and Moralis webhooks for live transaction tracking.",
    techStack: ["React", "Three.js", "Ethers.js", "Moralis", "Web3"],
    gradient: "from-emerald-600/40 via-teal-700/30 to-green-900/50",
    accent: "#10b981",
    category: "Web3",
  },
  {
    id: "akuda",
    title: "Akuda Cross-Chain Token Swap",
    overview:
      "Next.js dApp for swapping tokens across networks, with MetaMask, live pricing, and server-rendered pages.",
    problem:
      "Users needed a fast, clear interface to connect a wallet, price a swap, and confirm it across chains.",
    solution:
      "Implemented MetaMask connectivity, Ethers.js contract calls, SSR for performance, secure API routes for Web3 services, and a swap confirmation screen with real-time token prices.",
    techStack: ["Next.js", "Ethers.js", "MetaMask", "TypeScript", "SSR"],
    gradient: "from-violet-600/40 via-purple-700/30 to-fuchsia-900/50",
    accent: "#a855f7",
    category: "Web3",
  },
  {
    id: "event-booking",
    title: "Real-Time Event Booking",
    overview:
      "Booking platform with vendor–customer chat, appointment scheduling, and end-to-end booking management.",
    problem:
      "Vendors and customers were coordinating events over scattered messages, with no shared schedule or booking record.",
    solution:
      "Built WebSocket chat between vendors and customers, automated appointment scheduling, and a booking management flow on REST APIs.",
    techStack: ["React", "WebSockets", "Node.js", "REST APIs"],
    gradient: "from-amber-600/40 via-orange-700/30 to-yellow-900/50",
    accent: "#f59e0b",
    category: "Real-time",
  },
];
