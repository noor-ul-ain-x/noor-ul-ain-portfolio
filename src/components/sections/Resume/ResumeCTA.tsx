import { ArrowDownToLine, FileText } from "lucide-react";

import Card from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { profile } from "@/data/profile";

export default function ResumeCTA() {
  return (
    <Card className="p-6 sm:p-8">
      <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--muted-foreground)]">
            Resume CTA
          </p>
          <h3 className="mt-3 text-2xl font-semibold">
            Download the resume for a concise overview of experience, impact, and technical depth.
          </h3>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-[color:var(--muted-foreground)]">
            Useful for recruiters, hiring managers, and collaborators who want a quick summary of Noor Ul Ain&apos;s background.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={profile.contact.resume} download variant="primary">
            <ArrowDownToLine className="h-4 w-4" />
            Download PDF
          </ButtonLink>
          <ButtonLink href={profile.contact.resume} variant="secondary">
            <FileText className="h-4 w-4" />
            Open Resume
          </ButtonLink>
        </div>
      </div>
    </Card>
  );
}
