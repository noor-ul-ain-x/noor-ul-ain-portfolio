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
    <section id="experience" className="py-20 sm:py-24">
      <Container>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={variants}>
          <SectionHeading
            eyebrow="Experience Timeline"
            title="A practical track record across product, platform, and AI evaluation work."
            description="The timeline blends remote consulting, product engineering, real-time systems, and AI-centered delivery."
          />
          <ExperienceTimeline items={experience} />
        </motion.div>
      </Container>
    </section>
  );
}
