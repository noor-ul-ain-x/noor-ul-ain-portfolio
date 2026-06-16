"use client";

import { motion } from "framer-motion";

import MetricCard from "@/components/ui/MetricCard";
import type { CareerHighlight } from "@/types";

interface HighlightCardProps {
  highlight: CareerHighlight;
}

export default function HighlightCard({ highlight }: HighlightCardProps) {
  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
      <MetricCard
        label={highlight.label}
        value={highlight.value}
        description={highlight.description}
      />
    </motion.div>
  );
}
