import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/icons/github-icon";
import {
  getCategoryLabel,
  getImpactLabel,
  type Project,
} from "@/lib/projects";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col">
      <Card className="flex h-full flex-col overflow-hidden transition-shadow hover:shadow-md">
        <Link
          href={`/projects/${project.slug}`}
          className="group block outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <div className="relative aspect-[16/9] overflow-hidden bg-muted">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              priority={priority}
            />
          </div>
          <CardHeader>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="accent">{getCategoryLabel(project.category)}</Badge>
              <Badge variant="muted">{getImpactLabel(project.impact)}</Badge>
            </div>
            <CardTitle className="mt-2 text-lg group-hover:text-accent">
              {project.title}
            </CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>
        </Link>

        <CardContent className="flex flex-1 flex-col gap-4">
          <ul
            role="list"
            className="flex flex-wrap gap-2"
            aria-label={`Stack de ${project.title}`}
          >
            {project.stack.map((tech) => (
              <li key={tech}>
                <Badge variant="outline">{tech}</Badge>
              </li>
            ))}
          </ul>

          {project.metrics && project.metrics.length > 0 && (
            <dl className="grid grid-cols-2 gap-3 border-t border-border pt-4">
              {project.metrics.map((metric) => (
                <div key={metric.label}>
                  <dt className="text-xs text-muted-foreground">
                    {metric.label}
                  </dt>
                  <dd className="text-sm font-semibold text-foreground">
                    {metric.value}
                  </dd>
                </div>
              ))}
            </dl>
          )}
        </CardContent>

        <CardFooter className="mt-auto gap-3 pb-6">
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center gap-1.5 text-sm font-medium text-accent outline-none",
                "rounded-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              )}
            >
              Demo
              <ExternalLink aria-hidden className="size-3.5" />
            </a>
          )}
          {project.links.repo && (
            <a
              href={project.links.repo}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground outline-none hover:text-foreground",
                "rounded-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              )}
            >
              Repositório
              <GitHubIcon className="size-3.5" />
            </a>
          )}
          <Link
            href={`/projects/${project.slug}`}
            className="link-underline ml-auto text-sm font-medium text-foreground"
          >
            Ver case study
          </Link>
        </CardFooter>
      </Card>
    </article>
  );
}
