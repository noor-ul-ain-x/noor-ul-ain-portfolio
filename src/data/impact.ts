import type { EngineeringImpactItem } from "@/types";

export const impact: EngineeringImpactItem[] = [
  {
    title: "Real-Time Communication Platform",
    problem:
      "Users needed responsive communication across user-to-user and user-to-agent flows without relying on polling-heavy updates.",
    technologies: [
      "WebSockets",
      "Server-Sent Events",
      "SMS",
      "Email",
      "WhatsApp",
    ],
    impact:
      "Delivered a real-time chat platform and reduced update overhead through SSE-based delivery.",
  },
  {
    title: "LLM Evaluation Workflows",
    problem:
      "AI features need repeatable review loops so teams can compare outputs, assess tool use, and keep quality consistent.",
    technologies: [
      "Prompt Engineering",
      "LLM Evaluation",
      "Agentic AI Workflows",
      "Function-Calling Evaluation",
    ],
    impact:
      "Established a stronger evaluation mindset around AI-assisted development and quality review.",
  },
  {
    title: "3D Avatar Experiences",
    problem:
      "The product needed a dynamic avatar experience that could render rich visuals in real time.",
    technologies: ["Three.js", "react-three/fiber", "Ready Player Me"],
    impact:
      "Built a live 3D avatar rendering system for modern product experiences.",
  },
];
