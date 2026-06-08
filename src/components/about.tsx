import { Container } from "@/components/container";
import { ScrollReveal } from "@/components/scroll-reveal";

const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "shadcn/ui",
  "Acessibilidade",
];

const workPrinciples = [
  "Entender o problema antes de escrever código.",
  "Entregas incrementais com feedback contínuo.",
  "Código legível, testável e acessível por padrão.",
];

const highlights = [
  "SPAs e apps com Next.js em produção.",
  "Otimização de Core Web Vitals em alto tráfego.",
  "Design systems com Tailwind e shadcn/ui.",
];

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-header"
    >
      <Container className="mt-16 sm:mt-32">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl">
            <h2 id="about-heading" className="section-heading">
              Sobre mim
            </h2>
            <div className="mt-6 space-y-4 text-base text-muted-foreground">
              <p>
                Sou desenvolvedor front-end com foco em produtos digitais claros
                e confiáveis. Combino engenharia sólida com sensibilidade de
                UI/UX para entregar experiências que funcionam bem para
                usuários e equipes.
              </p>
              <p>
                Trabalho com Clean Code, acessibilidade e performance como
                requisitos — não como extras — em cada entrega.
              </p>
            </div>

            <ScrollReveal delay={120} className="mt-12">
              <h3 className="text-lg font-semibold text-foreground">Stack</h3>
              <ul
                role="list"
                className="mt-4 flex flex-wrap gap-2"
                aria-label="Tecnologias principais"
              >
                {stack.map((item) => (
                  <li key={item}>
                    <span className="inline-flex rounded-full border border-border bg-muted px-3 py-1 text-sm font-medium text-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={200} className="mt-10">
              <h3 className="text-lg font-semibold text-foreground">
                Como eu trabalho
              </h3>
              <ul role="list" className="mt-4 space-y-2 text-muted-foreground">
                {workPrinciples.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden className="text-accent">
                      —
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={280} className="mt-10">
              <h3 className="text-lg font-semibold text-foreground">
                Highlights
              </h3>
              <ul role="list" className="mt-4 space-y-2 text-muted-foreground">
                {highlights.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden className="text-accent">
                      •
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
