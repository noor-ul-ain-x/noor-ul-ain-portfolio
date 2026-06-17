import type { NavigationItem } from "@/types";

export const SITE_NAME = "Noor Ul Ain";
export const SITE_TITLE =
  "Noor Ul Ain | Senior Full-Stack Engineer";
export const SITE_TAGLINE =
  "Senior Full-Stack Engineer specializing in Real-Time Systems and AI-Powered Products.";
export const SITE_DESCRIPTION =
  "Senior Full-Stack Engineer with 5+ years of experience designing scalable systems, delivering real-time products, and building AI-assisted software.";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
export const SITE_EMAIL = "noornasim908@gmail.com";
export const SITE_PHONE = "+92-333-0034434";
export const SITE_GITHUB = "https://github.com/noor-ul-ain-x";
export const SITE_LINKEDIN =
  "https://linkedin.com/in/noor-ul-ain-abb7351b2/";
export const RESUME_PATH = "/noorulain.pdf";
export const THEME_STORAGE_KEY = "noor-ul-ain-theme";
export const SITE_OG_IMAGE = "/images/dp.png";

export const SECTION_IDS = [
  "hero",
  "services",
  "about",
  "work",
  "experience",
  "skills",
  "toolbox",
  "education",
  "contact",
] as const;

export const NAV_ITEMS = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] satisfies readonly NavigationItem[];
