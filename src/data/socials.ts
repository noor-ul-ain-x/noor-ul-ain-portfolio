import type { ContactLink } from "@/types";
import {
  RESUME_PATH,
  SITE_EMAIL,
  SITE_GITHUB,
  SITE_LINKEDIN,
  SITE_PHONE,
} from "@/utils/constants";

export const socials: ContactLink[] = [
  {
    label: "GitHub",
    href: SITE_GITHUB,
    type: "github",
  },
  {
    label: "LinkedIn",
    href: SITE_LINKEDIN,
    type: "linkedin",
  },
  {
    label: "Email",
    href: `mailto:${SITE_EMAIL}`,
    type: "email",
  },
  {
    label: "Phone",
    href: `tel:${SITE_PHONE.replace(/[^+\d]/g, "")}`,
    type: "phone",
  },
  {
    label: "Resume",
    href: RESUME_PATH,
    type: "resume",
  },
];
