"use client";

import { ArrowDownToLine } from "lucide-react";

import { ButtonLink } from "@/components/ui/Button";
import SocialButton from "@/components/ui/SocialButton";
import { profile } from "@/data/profile";

export default function HeroCTA() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <ButtonLink href={profile.contact.resume} download variant="primary">
        <ArrowDownToLine className="h-4 w-4" />
        Download Resume
      </ButtonLink>
      <SocialButton href={profile.contact.github}>
        GitHub
      </SocialButton>
      <SocialButton href={profile.contact.linkedin}>
        LinkedIn
      </SocialButton>
    </div>
  );
}
