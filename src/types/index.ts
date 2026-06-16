export interface NavigationItem {
  label: string;
  href: string;
}

export interface ContactLink {
  label: string;
  href: string;
  type: "email" | "phone" | "github" | "linkedin" | "resume" | "website";
}

export interface ProfileEducation {
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
}

export interface ProfileData {
  name: string;
  role: string;
  tagline: string;
  summary: string;
  coreStrengths: string[];
  contact: {
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    resume: string;
  };
  education: ProfileEducation;
}

export interface ExperienceEntry {
  title: string;
  company: string;
  location: string;
  dateRange: string;
  highlights: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface CareerHighlight {
  label: string;
  value: string;
  description: string;
}

export interface EngineeringImpactItem {
  title: string;
  metric: string;
  description: string;
}
