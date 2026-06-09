"use client";

import { useMemo, useState } from "react";
import {
  projectCategories,
  type Project,
  type ProjectCategory,
} from "@/lib/projects";
import { ProjectCard } from "@/components/projects/project-card";
import { cn } from "@/lib/utils";

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  const [activeCategory, setActiveCategory] = useState<
    ProjectCategory | "all"
  >("all");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory, projects]);

  return (
    <div>
      <div
        role="group"
        aria-label="Filtrar projetos por tipo"
        className="flex flex-wrap gap-2"
      >
        {projectCategories.map(({ value, label }) => {
          const isActive = activeCategory === value;

          return (
            <button
              key={value}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActiveCategory(value)}
              className={cn(
                "rounded-full border px-3 py-1.5 text-sm font-medium transition-colors outline-none",
                "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                isActive
                  ? "border-accent bg-accent/10 text-foreground"
                  : "border-border bg-background text-muted-foreground hover:text-foreground"
              )}
            >
              {label}
            </button>
          );
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        {filteredProjects.length}{" "}
        {filteredProjects.length === 1
          ? "projeto encontrado"
          : "projetos encontrados"}
      </p>

      {filteredProjects.length === 0 ? (
        <p className="mt-10 text-muted-foreground">
          Nenhum projeto nesta categoria ainda.
        </p>
      ) : (
        <ul
          role="list"
          className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          {filteredProjects.map((project, index) => (
            <li key={project.slug}>
              <ProjectCard project={project} priority={index === 0} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
