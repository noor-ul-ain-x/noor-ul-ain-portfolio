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
    <section id="work" className="section-shell border-b border-[color:var(--border)] py-20 sm:py-24">
      <Container>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={variants}>
          <SectionHeading
            number="03"
            eyebrow="Work"
            title={<>Selected <span className="serif-accent">systems</span></>}
            description="A focused view of the work most relevant to teams hiring for senior full-stack, real-time, and AI product engineering."
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
