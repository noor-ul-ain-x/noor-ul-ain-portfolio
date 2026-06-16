"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { impact } from "@/data/impact";
import ImpactCard from "./ImpactCard";

const variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.1 },
  },
};

export default function EngineeringImpactSection() {
  return (
    <section id="engineering-impact" className="py-20 sm:py-24">
      <Container>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={variants}>
          <SectionHeading
            eyebrow="Engineering Impact"
            title="Capabilities, not just projects."
            description="These capabilities represent the kinds of systems Noor ships: real-time communication, AI evaluation, and immersive experiences."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {impact.map((item) => (
              <ImpactCard key={item.title} impact={item} />
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
