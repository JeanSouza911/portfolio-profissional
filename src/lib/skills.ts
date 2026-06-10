export type SkillEmphasis = "primary" | "secondary" | "familiar";

export interface Skill {
  name: string;
  emphasis: SkillEmphasis;
}

export interface SkillGroup {
  title: string;
  skills: Skill[];
}

export const skillEmphasisLabels: Record<SkillEmphasis, string> = {
  primary: "Foco principal",
  secondary: "Uso frequente",
  familiar: "Familiaridade",
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", emphasis: "primary" },
      { name: "Next.js", emphasis: "primary" },
      { name: "TypeScript", emphasis: "primary" },
      { name: "HTML semântico", emphasis: "secondary" },
      { name: "CSS moderno", emphasis: "secondary" },
    ],
  },
  {
    title: "UI",
    skills: [
      { name: "Tailwind CSS", emphasis: "primary" },
      { name: "shadcn/ui", emphasis: "primary" },
      { name: "Radix UI", emphasis: "secondary" },
      { name: "Design systems", emphasis: "secondary" },
      { name: "Figma", emphasis: "familiar" },
    ],
  },
  {
    title: "Tooling",
    skills: [
      { name: "Git", emphasis: "primary" },
      { name: "npm", emphasis: "secondary" },
      { name: "ESLint", emphasis: "secondary" },
      { name: "Vite", emphasis: "familiar" },
      { name: "Storybook", emphasis: "familiar" },
    ],
  },
  {
    title: "Tests & Quality",
    skills: [
      { name: "Testing Library", emphasis: "secondary" },
      { name: "Vitest", emphasis: "familiar" },
      { name: "Acessibilidade (WCAG)", emphasis: "primary" },
      { name: "Core Web Vitals", emphasis: "secondary" },
      { name: "Clean Code / SOLID", emphasis: "primary" },
    ],
  },
];
