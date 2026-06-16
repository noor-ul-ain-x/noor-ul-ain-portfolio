import type { EngineeringImpactItem } from "@/types";

export const impact: EngineeringImpactItem[] = [
  {
    title: "Application load time",
    metric: "35% faster",
    description:
      "Improved application load time by optimizing API interactions, reducing redundant requests, and implementing efficient client-side state management.",
  },
  {
    title: "Real-time updates",
    metric: "~40% less overhead",
    description:
      "Implemented Server-Sent Events (SSE) to reduce polling overhead and improve real-time update efficiency.",
  },
  {
    title: "Chat platform delivery",
    metric: "Socket-based",
    description:
      "Architected and delivered a real-time chat platform supporting user-to-user and user-to-agent communication.",
  },
  {
    title: "3D avatar rendering",
    metric: "Three.js + R3F",
    description:
      "Built a real-time 3D avatar rendering system to dynamically render Ready Player Me avatars.",
  },
];
