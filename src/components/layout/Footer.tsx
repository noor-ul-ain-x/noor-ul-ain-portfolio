import { socials } from "@/data/socials";
import { SITE_NAME } from "@/utils/constants";

export default function Footer() {
  return (
    <footer className="border-t border-[color:var(--border)]">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-[color:var(--muted-foreground)] sm:px-6 lg:px-8 md:flex-row md:items-center md:justify-between">
        <p>
          {SITE_NAME} · Senior Full-Stack Engineer specializing in real-time systems and AI-powered products.
        </p>
        <div className="flex flex-wrap gap-4">
          {socials.slice(0, 3).map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="hover:text-[color:var(--foreground)]">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
