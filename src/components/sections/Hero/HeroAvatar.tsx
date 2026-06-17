"use client";

import { BriefcaseBusiness, GitBranch, Mail, MapPin } from "lucide-react";

import Avatar from "@/components/ui/Avatar";
import Card from "@/components/ui/Card";
import { profile } from "@/data/profile";

const recentCompanies = ["Turing", "GrowthRunes", "Kollegio", "Devsinc"];

export default function HeroAvatar() {
  return (
    <Card className="p-4 sm:p-6 lg:p-8">
      <div className="flex items-start gap-5">
        <Avatar src="/images/profile.png" alt={profile.name} className="h-20 w-20 rounded-lg sm:h-24 sm:w-24" />
        <div className="min-w-0 pt-1">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-neutral-500">
            {profile.name}
          </p>
          <h2 className="mt-4 text-2xl font-semibold leading-tight text-[color:var(--foreground)]">
            {profile.role}
          </h2>
          <p className="mt-3 text-sm leading-6 text-[color:var(--muted-foreground)]">
            Real-Time Systems · AI Products · Agentic AI
          </p>
        </div>
      </div>

      <div className="mt-8 space-y-6 border-t border-[color:var(--border)] pt-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-neutral-500">
            Recent Experience
          </p>
          <p className="mt-3 text-base font-medium leading-7">
            Turing AI Evaluation Contractor · GrowthRunes Senior Engineer · Kollegio Product Engineering
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-neutral-500">
            Strongest Fit
          </p>
          <p className="mt-3 text-base font-medium leading-7">
            Real-time communication, AI-powered product delivery, LLM evaluation, full-stack architecture
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-neutral-500">
            Core Stack
          </p>
          <p className="mt-3 text-base font-medium leading-7">
            React, Next.js, TypeScript, Node.js, Python, Rails, WebSockets, AWS, Docker
          </p>
        </div>

        <div className="grid gap-4 border-t border-[color:var(--border)] pt-6 sm:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">
              Location
            </p>
            <p className="mt-3 flex items-center gap-2 text-sm font-medium">
              <MapPin className="h-4 w-4 text-neutral-500" />
              Pakistan · Remote
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">
              Availability
            </p>
            <p className="mt-3 flex items-center gap-2 text-sm font-medium">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_5px_rgba(52,211,153,0.12)]" />
              Remote · Global
            </p>
          </div>
        </div>

        <div className="border-t border-[color:var(--border)] pt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-neutral-500">
            Social Links
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm text-[color:var(--muted-foreground)]">
            <a href={`mailto:${profile.contact.email}`} className="inline-flex items-center gap-2 transition hover:text-[color:var(--foreground)]">
              <Mail className="h-4 w-4" />
              Email
            </a>
            <a href={profile.contact.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-[color:var(--foreground)]">
              <GitBranch className="h-4 w-4" />
              GitHub
            </a>
            <a href={profile.contact.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-[color:var(--foreground)]">
              <BriefcaseBusiness className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>

        {/* <div className="border-t border-[color:var(--border)] pt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-neutral-500">
            Recent Companies
          </p>
          <div className="mt-5 grid grid-cols-4 gap-3">
            {recentCompanies.map((company) => (
              <div
                key={company}
                title={company}
                className="flex aspect-square items-center justify-center rounded-lg border border-[color:var(--border)] bg-white/[0.03] text-xs font-semibold text-neutral-500"
              >
                {company.slice(0, 1)}
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </Card>
  );
}
