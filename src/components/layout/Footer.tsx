import { socials } from "@/data/socials";
import { SITE_NAME } from "@/utils/constants";

export default function Footer() {
  return (
    <footer className="border-t border-[color:var(--border)]">
      <div className="mx-auto flex max-w-[1536px] flex-col gap-4 px-5 py-8 text-sm text-[color:var(--muted-foreground)] sm:px-8 lg:px-12 xl:px-16 md:flex-row md:items-center md:justify-between">
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
