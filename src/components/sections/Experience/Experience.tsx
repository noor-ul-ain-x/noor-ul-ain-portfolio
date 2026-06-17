"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { experience } from "@/data/experience";
import ExperienceTimeline from "./ExperienceTimeline";

const variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.08 },
  },
};

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-shell border-b border-[color:var(--border)] py-20 sm:py-24">
      <Container>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={variants}>
          <SectionHeading
            number="04"
            eyebrow="Experience"
            title={<>Roles with <span className="serif-accent">senior ownership</span></>}
            description="Remote product engineering, real-time platform work, team leadership, and AI evaluation experience presented for fast recruiter scanning."
          />
          <ExperienceTimeline items={experience} />
        </motion.div>
      </Container>
    </section>
  );
}
