import { Container } from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/scroll-reveal";
import {
  skillEmphasisLabels,
  skillGroups,
  type SkillEmphasis,
} from "@/lib/skills";
import { cn } from "@/lib/utils";

function emphasisVariant(emphasis: SkillEmphasis) {
  switch (emphasis) {
    case "primary":
      return "accent" as const;
    case "secondary":
      return "outline" as const;
    case "familiar":
      return "muted" as const;
  }
}

export function SkillsSection() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="scroll-mt-header"
    >
      <Container className="mt-16 sm:mt-32">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 id="skills-heading" className="section-heading section-heading--center">
              Skills
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Competências agrupadas por área, com ênfase visual em vez de
              barras genéricas.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={120} className="mt-10">
          <ul
            role="list"
            className="mb-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground"
            aria-label="Legenda de ênfase"
          >
            {(Object.entries(skillEmphasisLabels) as [SkillEmphasis, string][]).map(
              ([emphasis, label]) => (
                <li key={emphasis} className="flex items-center gap-2">
                  <Badge variant={emphasisVariant(emphasis)}>{label}</Badge>
                </li>
              )
            )}
          </ul>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {skillGroups.map((group, index) => (
            <ScrollReveal key={group.title} delay={160 + index * 60}>
              <article
                className={cn(
                  "rounded-xl border border-border bg-card p-6 shadow-md dark:shadow-sm"
                )}
              >
                <h3 className="text-lg font-semibold text-foreground">
                  {group.title}
                </h3>
                <ul
                  role="list"
                  className="mt-4 flex flex-wrap gap-2"
                  aria-label={`Skills de ${group.title}`}
                >
                  {group.skills.map((skill) => (
                    <li key={skill.name}>
                      <Badge
                        variant={emphasisVariant(skill.emphasis)}
                        title={skillEmphasisLabels[skill.emphasis]}
                      >
                        {skill.name}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
