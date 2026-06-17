import type { Metadata } from "next";

import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_TITLE,
  SITE_OG_IMAGE,
  SITE_URL,
} from "@/utils/constants";

export function buildUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}

export function createMetadata(
  overrides: Metadata = {},
): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: SITE_TITLE,
      template: `%s | ${SITE_NAME}`,
    },
    description: SITE_DESCRIPTION,
    icons: {
      icon: SITE_OG_IMAGE,
      shortcut: SITE_OG_IMAGE,
      apple: SITE_OG_IMAGE,
    },

    keywords: [
      "Noor Ul Ain",
      "Senior Full-Stack Engineer",
      "Real-Time Systems",
      "AI-Powered Products",
      "Agentic AI",
      "Prompt Engineering",
      "LLM Evaluation",
      "Technical Leadership",
    ],
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      url: buildUrl("/"),
      siteName: SITE_NAME,
      title: SITE_TITLE,
      description: SITE_TAGLINE,
      images: [
        {
          url: buildUrl(SITE_OG_IMAGE),
          width: 952,
          height: 1180,
          alt: SITE_NAME,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: SITE_TITLE,
      description: SITE_TAGLINE,
      images: [buildUrl(SITE_OG_IMAGE)],
    },
    robots: {
      index: true,
      follow: true,
    },
    authors: [{ name: SITE_NAME }],
    ...overrides,
  };
}

export const siteMetadata = createMetadata();
