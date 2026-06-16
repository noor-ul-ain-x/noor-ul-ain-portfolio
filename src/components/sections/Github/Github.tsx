"use client";

import { motion } from "framer-motion";
import { GitBranch } from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ExternalLink from "@/components/ui/ExternalLink";
import { githubData } from "@/data/github";
import GithubStats from "./GithubStats";
import ContributionGraph from "./ContributionGraph";

const variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.1 },
  },
};

export default function GithubSection() {
  return (
    <section id="github-activity" className="py-20 sm:py-24">
      <Container>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={variants}>
          <SectionHeading
            eyebrow="GitHub Activity"
            title="A polished placeholder for live profile data."
            description="The section is designed to show GitHub statistics, contribution activity, and pinned repositories whenever the live profile data is connected."
          />
          <div className="mt-10 space-y-4">
            <GithubStats stats={githubData.stats} />
            <ContributionGraph
              title={githubData.contributionTitle}
              description={githubData.contributionDescription}
            />
            <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--muted-foreground)]">
                  Pinned repositories
                </p>
                {githubData.pinnedRepositories.length ? (
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {/* Filled once live GitHub data is connected */}
                  </div>
                ) : (
                  <p className="mt-4 text-sm leading-6 text-[color:var(--muted-foreground)]">
                    Repository cards can be wired from the public GitHub profile in a future version without changing the section structure.
                  </p>
                )}
              </div>
              <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6">
                <GitBranch className="h-5 w-5 text-[color:var(--accent)]" />
                <p className="mt-4 text-sm leading-6 text-[color:var(--muted-foreground)]">
                  {githubData.contributionDescription}
                </p>
                <div className="mt-6">
                  <ExternalLink href={githubData.profileUrl}>
                    Open {githubData.profileLabel}
                  </ExternalLink>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
