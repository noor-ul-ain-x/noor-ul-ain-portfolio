import { Bot, ClipboardList, Code2 } from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const toolbox = [
  {
    category: "Development",
    icon: Code2,
    tools: ["VS Code", "Cursor", "GitHub", "Git", "Docker", "Postman"],
  },
  {
    category: "AI Platforms",
    icon: Bot,
    tools: ["ChatGPT", "Claude", "Gemini", "LangChain", "OpenRouter"],
  },
  {
    category: "Productivity",
    icon: ClipboardList,
    tools: ["Slack", "Jira", "ClickUp", "Notion", "Figma"],
  },
];

export default function ToolboxSection() {
  return (
    <section id="toolbox" className="section-shell border-b border-[color:var(--border)] py-20 sm:py-24">
      <Container>
        <SectionHeading
          number="06"
          eyebrow="Toolbox"
          title={<>Daily <span className="serif-accent">drivers</span></>}
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-3">
          {toolbox.map((group) => {
            const Icon = group.icon;

            return (
              <div key={group.category}>
                <div className="border-b border-[color:var(--border)] pb-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.32em] text-neutral-500">
                    {group.category}
                  </p>
                </div>
                <div>
                  {group.tools.map((tool) => (
                    <div key={tool} className="flex items-center gap-6 border-b border-[color:var(--border)] py-6 text-xl text-[color:var(--muted-foreground)]">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center text-neutral-600">
                        <Icon className="h-6 w-6" />
                      </span>
                      <span>{tool}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
