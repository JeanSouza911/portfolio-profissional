export type ProjectCategory = "web-app" | "landing" | "open-source";

export type ProjectImpact = "high" | "medium";

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectLinks {
  demo?: string;
  repo?: string;
}

export interface ProjectCaseStudy {
  challenge: string;
  decisions: string[];
  results: string[];
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string;
  stack: string[];
  category: ProjectCategory;
  impact: ProjectImpact;
  image: string;
  imageAlt: string;
  links: ProjectLinks;
  metrics?: ProjectMetric[];
  caseStudy: ProjectCaseStudy;
}

export const projectCategories: {
  value: ProjectCategory | "all";
  label: string;
}[] = [
  { value: "all", label: "Todos" },
  { value: "web-app", label: "Web App" },
  { value: "landing", label: "Landing" },
  { value: "open-source", label: "Open Source" },
];

export const projects: Project[] = [
  {
    slug: "portfolio-profissional",
    title: "Portfólio Profissional",
    summary: "Site pessoal com foco em SEO, acessibilidade e performance.",
    description:
      "Portfólio construído com Next.js App Router, design system enxuto e motion funcional.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    category: "web-app",
    impact: "high",
    image: "/projects/portfolio.svg",
    imageAlt: "Preview do portfólio profissional com layout limpo e tipografia em destaque",
    links: {
      demo: "https://github.com/JeanSouza911/portfolio-profissional",
      repo: "https://github.com/JeanSouza911/portfolio-profissional",
    },
    metrics: [
      { label: "Lighthouse Performance", value: "95+" },
      { label: "Acessibilidade", value: "100" },
    ],
    caseStudy: {
      challenge:
        "Criar uma vitrine técnica que comunique autoridade sem sacrificar velocidade de carregamento nem conformidade com WCAG.",
      decisions: [
        "React Server Components como padrão, reservando client components apenas para filtros e reveal no scroll.",
        "Tokens semânticos no Tailwind v4 (@theme) para contraste consistente em light/dark.",
        "Imagens SVG leves com lazy loading via next/image.",
      ],
      results: [
        "Bundle enxuto com renderização estática das páginas principais.",
        "Navegação por teclado completa com skip link e foco visível.",
        "Base pronta para escalar com projetos e case studies.",
      ],
    },
  },
  {
    slug: "dashboard-analytics",
    title: "Dashboard Analytics",
    summary: "Painel de métricas em tempo real para equipes de produto.",
    description:
      "Interface de analytics com filtros, gráficos responsivos e estados de loading acessíveis.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Recharts"],
    category: "web-app",
    impact: "high",
    image: "/projects/dashboard.svg",
    imageAlt: "Preview de dashboard com gráficos e cards de métricas",
    links: {
      demo: "https://github.com/JeanSouza911",
      repo: "https://github.com/JeanSouza911",
    },
    metrics: [
      { label: "Redução no TTI", value: "-38%" },
      { label: "Usuários ativos/dia", value: "2.4k" },
    ],
    caseStudy: {
      challenge:
        "Substituir relatórios estáticos por um dashboard interativo sem degradar a experiência em conexões lentas.",
      decisions: [
        "Code splitting por rota e lazy loading de gráficos abaixo da dobra.",
        "Skeleton screens com aria-busy para feedback acessível durante fetch.",
        "Normalização de dados no servidor para reduzir trabalho no cliente.",
      ],
      results: [
        "Time-to-interactive reduzido em 38% após otimização de bundle.",
        "Adoção diária estável por equipes de produto e marketing.",
        "Componentes de gráfico reutilizados em três telas do produto.",
      ],
    },
  },
  {
    slug: "ui-kit-interno",
    title: "UI Kit Interno",
    summary: "Design system com tokens, documentação e componentes acessíveis.",
    description:
      "Biblioteca de componentes baseada em Radix UI e Tailwind para acelerar entregas do time.",
    stack: ["React", "Tailwind CSS", "Radix UI", "Storybook"],
    category: "open-source",
    impact: "medium",
    image: "/projects/design-system.svg",
    imageAlt: "Preview de design system com paleta de cores e botões",
    links: {
      repo: "https://github.com/JeanSouza911",
    },
    metrics: [
      { label: "Componentes", value: "24" },
      { label: "Tempo de entrega", value: "-30%" },
    ],
    caseStudy: {
      challenge:
        "Padronizar UI entre squads com ritmos de entrega diferentes, evitando divergência visual e retrabalho.",
      decisions: [
        "Tokens de cor, tipografia e espaçamento centralizados no Tailwind v4.",
        "Documentação viva no Storybook com exemplos de estados e a11y.",
        "API de componentes pequena e composável, inspirada no shadcn/ui.",
      ],
      results: [
        "Redução média de 30% no tempo de implementação de novas telas.",
        "Cobertura de estados de foco e contraste validada em todos os primitives.",
        "Adoção por dois squads front-end em menos de um sprint.",
      ],
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}

export function getCategoryLabel(category: ProjectCategory): string {
  const match = projectCategories.find((item) => item.value === category);
  return match?.label ?? category;
}

export function getImpactLabel(impact: ProjectImpact): string {
  return impact === "high" ? "Alto impacto" : "Médio impacto";
}
