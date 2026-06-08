import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { ContactSection } from "@/components/contact/contact-section";
import { ProjectsSection } from "@/components/projects/projects-section";
import { SkillsSection } from "@/components/skills/skills-section";
import { JsonLd } from "@/components/seo/json-ld";
import { createPageMetadata } from "@/lib/seo";
import { personJsonLd, siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  description: siteConfig.description,
  path: "/",
});

export default function Home() {
  return (
    <>
      <JsonLd data={personJsonLd} />
      <Hero />
      <About />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </>
  );
}
