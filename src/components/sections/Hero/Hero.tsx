"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
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
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-16 sm:pt-20 lg:pt-24"
    >
      <Container className="relative py-16 sm:py-20 lg:py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]"
        >
          <motion.div variants={itemVariants} className="space-y-8">
            <Badge className="w-fit">
              <Sparkles className="mr-2 h-3.5 w-3.5" />
              Senior Full-Stack Engineer
            </Badge>

            <div className="space-y-5">
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
                {profile.name}
              </h1>
              <p className="max-w-2xl text-xl font-medium text-[color:var(--accent)] sm:text-2xl">
                {profile.tagline}
              </p>
              <p className="max-w-2xl text-base leading-7 text-[color:var(--muted-foreground)] sm:text-lg">
                {profile.summary}
              </p>
            </div>

            <motion.div variants={itemVariants}>
              <HeroCTA />
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-2"
            >
              {profile.coreStrengths.map((strength) => (
                <Badge key={strength}>{strength}</Badge>
              ))}
            </motion.div>

            <motion.a
              variants={itemVariants}
              href="#career-highlights"
              className="inline-flex items-center gap-2 text-sm font-medium text-[color:var(--accent)] transition hover:translate-x-1"
            >
              Explore highlights
              <ArrowRight className="h-4 w-4" />
            </motion.a>
          </motion.div>

          <motion.div variants={itemVariants}>
            <HeroAvatar />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
