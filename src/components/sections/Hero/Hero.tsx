"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, GitBranch, MapPin } from "lucide-react";

import Container from "@/components/ui/Container";
import { profile } from "@/data/profile";
import HeroAvatar from "./HeroAvatar";
import HeroCTA from "./HeroCTA";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function HeroSection() {
  const metrics = [
    { value: "5+", label: "Years Experience" },
    { value: "35%", label: "Performance Improvement" },
    { value: "40%", label: "Reduced Polling Overhead" },
    { value: "AI", label: "Evaluation & Agentic Workflows" },
  ];

  return (
    <section
      id="hero"
      className="section-shell relative overflow-hidden border-b border-[color:var(--border)]"
    >
      <Container className="relative py-16 sm:py-20 lg:py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid items-center gap-14 lg:grid-cols-[1.2fr_0.78fr]"
        >
          <motion.div variants={itemVariants} className="space-y-10">
            <div className="flex items-center gap-4">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_0_5px_rgba(52,211,153,0.12)]" />
              <span className="h-px w-10 bg-[color:var(--border)]" />
              <p className="max-w-xl bg-white/[0.08] px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.42em] text-[color:var(--foreground)] sm:text-xs">
                Available for remote engineering roles, AI engineering opportunities, and consulting.
              </p>
            </div>

            <div className="space-y-8">
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-neutral-500">
                {profile.name}
              </p>
              <h1 className="max-w-5xl text-5xl font-semibold leading-[0.98] tracking-tight text-balance sm:text-6xl lg:text-7xl xl:text-[88px]">
                Senior Full-Stack Engineer for{" "}
                <span className="serif-accent">real-time systems</span>,{" "}
                <span className="serif-accent">AI-powered products</span>, and{" "}
                <span className="serif-accent">agentic AI experiences</span>.
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-[color:var(--muted-foreground)] sm:text-xl">
                {profile.summary}
              </p>
            </div>

            <motion.div variants={itemVariants}>
              <HeroCTA />
            </motion.div>

            <motion.div variants={itemVariants} className="grid border-y border-[color:var(--border)] sm:grid-cols-4">
              {metrics.map((metric) => (
                <div key={metric.label} className="border-[color:var(--border)] py-6 sm:border-r sm:px-8 sm:first:pl-0 sm:last:border-r-0">
                  <p className="serif-accent text-4xl leading-none text-[color:var(--foreground)]">{metric.value}</p>
                  <p className="mt-4 max-w-[180px] text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">
                    {metric.label}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-neutral-500"
            >
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Pakistan
              </span>
              <span>Remote · Global</span>
              <a href={profile.contact.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-[color:var(--foreground)]">
                <GitBranch className="h-4 w-4" />
                GitHub
              </a>
              <a href={profile.contact.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-[color:var(--foreground)]">
                <BriefcaseBusiness className="h-4 w-4" />
                LinkedIn
              </a>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <HeroAvatar />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
