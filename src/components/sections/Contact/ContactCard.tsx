import type { ContactLink } from "@/types";
import Card from "@/components/ui/Card";
import ExternalLink from "@/components/ui/ExternalLink";

interface ContactCardProps {
  link: ContactLink;
}

export default function ContactCard({ link }: ContactCardProps) {
  return (
    <Card className="p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--muted-foreground)]">
        {link.type}
      </p>
      <ExternalLink href={link.href} className="mt-3 block text-lg font-semibold">
        {link.label}
      </ExternalLink>
    </Card>
  );
}
