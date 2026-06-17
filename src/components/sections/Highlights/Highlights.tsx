"use client";

import { motion } from "framer-motion";
import { Bot, Braces, RadioTower, ServerCog } from "lucide-react";

import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.1 },
  },
};

const services = [
  {
    title: "Full-Stack Engineering",
    description:
      "Design and ship production features across modern interfaces, APIs, data flows, and product workflows.",
    icon: Braces,
  },
  {
    title: "Real-Time Systems",
    description:
      "Build WebSocket, SSE, chat, notification, and multi-channel communication systems with lower polling overhead.",
    icon: RadioTower,
  },
  {
    title: "Agentic AI Solutions",
    description:
      "Turn AI-assisted product ideas into workflows, interfaces, and backend services that teams can operate.",
    icon: Bot,
  },
  {
    title: "LLM Evaluation & Automation",
    description:
      "Create prompt review, function-calling assessment, output quality, and automation loops for AI product reliability.",
    icon: ServerCog,
  },
];

export default function HighlightsSection() {
  return (
    <section id="services" className="section-shell border-b border-[color:var(--border)] py-20 sm:py-24">
      <Container>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={variants}>
          <SectionHeading
            number="01"
            eyebrow="Services"
            title={<>How I can help <span className="serif-accent">your team</span></>}
          />
          <div className="mt-12 grid border border-[color:var(--border)] md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Card
                  key={service.title}
                  className="rounded-none border-0 border-b border-r border-[color:var(--border)] bg-transparent p-8 transition hover:bg-white/[0.025] md:min-h-[300px] xl:border-b-0 xl:last:border-r-0"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-[color:var(--border)] bg-white/[0.03] text-[color:var(--accent)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-14 text-xl font-semibold tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-5 text-base leading-7 text-[color:var(--muted-foreground)]">
                    {service.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
