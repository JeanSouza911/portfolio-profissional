import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/icons/github-icon";
import { Container } from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  getAllProjectSlugs,
  getCategoryLabel,
  getImpactLabel,
  getProjectBySlug,
} from "@/lib/projects";
import { createPageMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return createPageMetadata({
      title: "Projeto não encontrado",
      description: "O projeto solicitado não foi encontrado.",
      noIndex: true,
    });
  }

  return createPageMetadata({
    title: project.title,
    description: project.summary,
    path: `/projects/${slug}`,
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { caseStudy } = project;

  return (
    <article className="pb-16">
      <Container className="mt-10">
        <Link
          href="/#projects"
          className={cn(
            buttonVariants({ variant: "ghost", size: "sm" }),
            "mb-8 -ml-2"
          )}
        >
          <ArrowLeft aria-hidden className="mr-2 size-4" />
          Voltar aos projetos
        </Link>

        <header>
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="accent">{getCategoryLabel(project.category)}</Badge>
            <Badge variant="muted">{getImpactLabel(project.impact)}</Badge>
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
            {project.summary}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants())}
              >
                Ver demo
                <ExternalLink aria-hidden className="ml-2 size-4" />
              </a>
            )}
            {project.links.repo && (
              <a
                href={project.links.repo}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "secondary" }))}
              >
                Repositório
                <GitHubIcon className="ml-2 size-4" />
              </a>
            )}
          </div>
        </header>

        <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-xl border border-border bg-muted">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 896px"
            className="object-cover"
          />
        </div>

        {project.metrics && project.metrics.length > 0 && (
          <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-xl border border-border bg-card p-4"
              >
                <dt className="text-xs text-muted-foreground">
                  {metric.label}
                </dt>
                <dd className="mt-1 text-2xl font-bold text-foreground">
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>
        )}

        <ul
          role="list"
          className="mt-8 flex flex-wrap gap-2"
          aria-label="Stack do projeto"
        >
          {project.stack.map((tech) => (
            <li key={tech}>
              <Badge variant="outline">{tech}</Badge>
            </li>
          ))}
        </ul>

        <div className="mt-16 max-w-3xl space-y-12">
          <section aria-labelledby="challenge-heading">
            <h2
              id="challenge-heading"
              className="text-2xl font-bold tracking-tight text-foreground"
            >
              Desafio
            </h2>
            <p className="mt-4 text-muted-foreground">{caseStudy.challenge}</p>
          </section>

          <section aria-labelledby="decisions-heading">
            <h2
              id="decisions-heading"
              className="text-2xl font-bold tracking-tight text-foreground"
            >
              Decisões técnicas
            </h2>
            <ul role="list" className="mt-4 space-y-3 text-muted-foreground">
              {caseStudy.decisions.map((decision) => (
                <li key={decision} className="flex gap-3">
                  <span aria-hidden className="text-accent">
                    —
                  </span>
                  {decision}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="results-heading">
            <h2
              id="results-heading"
              className="text-2xl font-bold tracking-tight text-foreground"
            >
              Resultados
            </h2>
            <ul role="list" className="mt-4 space-y-3 text-muted-foreground">
              {caseStudy.results.map((result) => (
                <li key={result} className="flex gap-3">
                  <span aria-hidden className="text-accent">
                    •
                  </span>
                  {result}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </Container>
    </article>
  );
}
