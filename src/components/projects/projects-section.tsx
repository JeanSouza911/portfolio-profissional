import { Container } from "@/components/container";
import { ProjectGrid } from "@/components/projects/project-grid";
import { ScrollReveal } from "@/components/scroll-reveal";
import { projects } from "@/lib/projects";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-header"
    >
      <Container className="mt-16 sm:mt-32">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 id="projects-heading" className="section-heading section-heading--center">
              Projetos
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Seleção de entregas com contexto de problema, decisões técnicas e
              impacto mensurável.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={120} className="mt-12">
          <ProjectGrid projects={projects} />
        </ScrollReveal>
      </Container>
    </section>
  );
}
