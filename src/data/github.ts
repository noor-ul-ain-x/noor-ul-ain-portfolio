import type { GitHubSectionData } from "@/types";

import { SITE_GITHUB } from "@/utils/constants";

export const githubData: GitHubSectionData = {
  profileUrl: SITE_GITHUB,
  profileLabel: "noor-ul-ain-x",
  stats: [
    {
      label: "Public profile",
      value: "GitHub",
      description: "Repository profile available at the linked public account.",
    },
    {
      label: "Pinned repos",
      value: "Placeholder",
      description: "Pinned repositories can be populated once live GitHub data is wired.",
    },
    {
      label: "Contribution graph",
      value: "Unavailable",
      description: "Live contribution data is intentionally omitted in this offline build.",
    },
  ],
  contributionTitle: "Contribution activity",
  contributionDescription:
    "GitHub activity is linked to the public profile so the section stays truthful even when live API data is unavailable in the build environment.",
  pinnedRepositories: [],
};
