"use client";

import { ArrowDownToLine, BriefcaseBusiness, Calendar, GitBranch } from "lucide-react";

import { ButtonLink } from "@/components/ui/Button";
import SocialButton from "@/components/ui/SocialButton";
import { profile } from "@/data/profile";

export default function HeroCTA() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <ButtonLink href={profile.contact.resume} download variant="primary">
        <ArrowDownToLine className="h-4 w-4" />
        Resume
      </ButtonLink>
      <SocialButton href={profile.contact.github}>
        <GitBranch className="h-4 w-4" />
        GitHub
      </SocialButton>
      <SocialButton href={profile.contact.linkedin}>
        <BriefcaseBusiness className="h-4 w-4" />
        LinkedIn
      </SocialButton>
      <SocialButton href={`mailto:${profile.contact.email}?subject=Call%20request%20with%20Noor%20Ul%20Ain`}>
        <Calendar className="h-4 w-4" />
        Book a Call
      </SocialButton>
    </div>
  );
}
