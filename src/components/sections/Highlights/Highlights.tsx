"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { highlights } from "@/data/highlights";
import HighlightGrid from "./HighlightGrid";

const variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.1 },
  },
};

export default function HighlightsSection() {
  return (
    <section id="career-highlights" className="py-20 sm:py-24">
      <Container>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={variants}>
          <SectionHeading
            eyebrow="Career Highlights"
            title="The outcomes that best represent the work."
            description="A short summary of the resume highlights most relevant to recruiters and engineering leaders."
          />
          <HighlightGrid highlights={highlights} />
        </motion.div>
      </Container>
    </section>
  );
}
