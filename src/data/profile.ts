import type { ProfileData } from "@/types";
import {
  RESUME_PATH,
  SITE_EMAIL,
  SITE_GITHUB,
  SITE_LINKEDIN,
  SITE_PHONE,
  SITE_TAGLINE,
} from "@/utils/constants";

export const profile: ProfileData = {
  name: "Noor Ul Ain",
  role: "Senior Full-Stack Engineer",
  tagline: SITE_TAGLINE,
  summary:
    "Senior Full-Stack Engineer with 5+ years of experience designing scalable systems, reviewing complex codebases, and solving challenging engineering problems across modern web technologies. Experienced in AI-assisted development, technical evaluation, and delivering high-quality software in fast-paced environments.",
  coreStrengths: [
    "Full-Stack Engineering",
    "Real-Time Systems",
    "Agentic AI",
    "Prompt Engineering",
    "LLM Evaluation",
    "Technical Leadership",
  ],
  contact: {
    email: SITE_EMAIL,
    phone: SITE_PHONE,
    linkedin: SITE_LINKEDIN,
    github: SITE_GITHUB,
    resume: RESUME_PATH,
  },
  education: {
    institution: "National University of Sciences and Technology (NUST)",
    degree: "Bachelor of Science in Computer Science",
    startDate: "Aug 2018",
    endDate: "Sep 2022",
  },
};
