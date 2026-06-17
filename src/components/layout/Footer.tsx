import { socials } from "@/data/socials";
import { SITE_NAME } from "@/utils/constants";

export default function Footer() {
  return (
      <footer className="border-t hairline mt-12">
        <div
            className="max-w-5xl mx-auto px-6 lg:px-8 py-8 flex flex-col md:flex-row items-start md:items-center justify-center gap-3">
            <p className="text-xs text-subtle">
                © <span id="year">2026</span> Noor Ul Ain
            </p>
        </div>
    </footer>
  );
}
