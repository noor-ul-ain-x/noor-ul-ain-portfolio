import { ArrowDownToLine, BriefcaseBusiness, Calendar, GitBranch, Mail } from "lucide-react";

import { ButtonLink } from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import SocialButton from "@/components/ui/SocialButton";
import { profile } from "@/data/profile";

export default function ContactSection() {
  const metadata = [
    { label: "Availability", value: "Remote engineering roles, AI engineering opportunities, consulting" },
    { label: "Response time", value: "Usually within 24h" },
    { label: "Location", value: "Pakistan · Remote global" },
    { label: "Current focus", value: "Real-time systems, AI products, agentic workflows" },
  ];

  return (
    <section id="contact" className="section-shell py-20 sm:py-24">
      <Container>
        <Card className="px-6 py-16 text-center sm:px-10 sm:py-20 lg:px-16">
          <div className="mx-auto max-w-5xl">
            <SectionHeading
              className="mx-auto text-center"
              number="08"
              eyebrow="Contact"
              title={<>Let&apos;s build <span className="serif-accent">something great</span>.</>}
              description="Available for full-time remote roles, AI engineering work, and senior full-stack consulting engagements."
            />

            <p className="mt-10 text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">
              Recent work: AI evaluation through Turing, real-time communication at GrowthRunes, and product engineering at Kollegio
            </p>

            <div className="mt-12 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href={`mailto:${profile.contact.email}`} variant="primary">
                <Mail className="h-4 w-4" />
                {profile.contact.email}
              </ButtonLink>
              <SocialButton href={`mailto:${profile.contact.email}?subject=Call%20request%20with%20Noor%20Ul%20Ain`}>
                <Calendar className="h-4 w-4" />
                Request a Call
              </SocialButton>
              <SocialButton href={profile.contact.linkedin}>
                <BriefcaseBusiness className="h-4 w-4" />
                LinkedIn
              </SocialButton>
              <SocialButton href={profile.contact.github}>
                <GitBranch className="h-4 w-4" />
                GitHub
              </SocialButton>
              <ButtonLink href={profile.contact.resume} download variant="secondary">
                <ArrowDownToLine className="h-4 w-4" />
                Resume Download
              </ButtonLink>
            </div>

            <div className="mt-16 grid border-l border-t border-[color:var(--border)] text-left sm:grid-cols-2 lg:grid-cols-4">
              {metadata.map((item) => (
                <div key={item.label} className="border-b border-r border-[color:var(--border)] p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">
                    {item.label}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-[color:var(--foreground)]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}
