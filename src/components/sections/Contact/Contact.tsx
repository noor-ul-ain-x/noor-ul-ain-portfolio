import { Mail, MessageSquare } from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import SocialButton from "@/components/ui/SocialButton";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";
import ContactCard from "./ContactCard";

export default function ContactSection() {
  const contactLinks = socials.filter((link) => link.type !== "resume");

  return (
    <section id="contact" className="py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Open to thoughtful engineering conversations and remote opportunities."
              description="The contact section keeps the next step simple: email, GitHub, or LinkedIn."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <SocialButton href={`mailto:${profile.contact.email}`}>
                <Mail className="mr-2 h-4 w-4" />
                Email Noor
              </SocialButton>
              <SocialButton href={profile.contact.github}>
                <MessageSquare className="mr-2 h-4 w-4" />
                View GitHub
              </SocialButton>
            </div>
            <p className="mt-8 max-w-2xl text-base leading-7 text-[color:var(--muted-foreground)]">
              Noor Ul Ain brings full-stack execution, real-time systems thinking, and a strong AI evaluation mindset to teams building high-trust products.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {contactLinks.map((link) => (
              <ContactCard key={link.label} link={link} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
