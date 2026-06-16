import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ResumeCTA from "./ResumeCTA";

export default function ResumeSection() {
  return (
    <section id="resume-cta" className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Resume CTA"
          title="Recruiters can scan the PDF in seconds."
          description="The resume is kept as a dedicated call-to-action so the hiring path stays obvious and easy to access."
        />
        <div className="mt-10">
          <ResumeCTA />
        </div>
      </Container>
    </section>
  );
}
