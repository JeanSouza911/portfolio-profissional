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
    "Portfólio construído com Next.js App Router, design system enxuto e motion funcional para microinterações.",
  stack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Framer Motion"],
  category: "web-app",
  impact: "high",
  image: "/projects/portfolio-hero.png",
  imageAlt: "Preview do portfólio profissional com layout limpo e tipografia em destaque",
  links: {
    repo: "https://github.com/JeanSouza911/portfolio-profissional",
  },
  metrics: [
    { label: "Otimização de Renderização", value: "React Server Components" },
    { label: "Padrão de Acessibilidade", value: "Conformidade WCAG" },
  ],
  caseStudy: {
    challenge:
      "Criar uma vitrine técnica que comunique autoridade e ofereça uma ótima experiência de usuário (Core Web Vitals) sem sacrificar a acessibilidade nativa.",
    decisions: [
      "Arquitetura baseada em React Server Components para reduzir drasticamente o bundle client-side inicial.",
      "Estilização utilitária com Tailwind CSS v4 utilizando tokens semânticos nativos para gerenciamento de temas light/dark.",
      "Implementação de componentes isolados e reutilizáveis através do shadcn/ui integrado ao Framer Motion para animações fluidas.",
    ],
    results: [
      "Carregamento acelerado e ótima indexação orgânica (SEO) com páginas pré-renderizadas no servidor.",
      "Navegação por teclado totalmente funcional, incluindo skip links, semântica estrita de tags e foco visual visível.",
      "Base de código sustentável, de fácil manutenção e pronta para escala de novos projetos e estudos de caso.",
      ],
    },
  },
  {
  slug: "cine-finder",
  title: "Cine Finder Rebuild",
  summary: "Reestruturação completa de uma aplicação de busca cinematográfica consumindo a API do TMDB.",
  description:
    "Interface fluida e de alta performance com renderização inteligente, tipagem estática rigorosa e acessibilidade nativa baseada em componentes reutilizáveis.",
  stack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
  category: "web-app",
  impact: "high",
  image: "/projects/cine-finder.png",
  imageAlt: "Preview do Cine Finder com listagem de filmes populares e busca global",
  links: {
    demo: "https://cine-finder-app.netlify.app/", // Ajuste se houver deploy ativo
    repo: "https://github.com/JeanSouza911/cine-finder",
  },
  metrics: [
    { label: "Segurança de Tipagem (API)", value: "100% Strict" },
    { label: "Acessibilidade Nativa", value: "WAI-ARIA" },
  ],
  caseStudy: {
    challenge:
      "Elevar o nível técnico da stack anterior, otimizando o SEO e garantindo a resiliência no consumo de dados complexos da API externa.",
    decisions: [
      "Arquitetura híbrida com Server-Side Rendering (SSR) para buscas fluidas e Incremental Static Regeneration (ISR) para listagens fixas.",
      "Camada robusta de segurança e tipagem estática com TypeScript para os dados provenientes do TMDB.",
      "Interface responsiva e acessível utilizando shadcn/ui para manter padrões estritos de navegação por teclado.",
    ],
    results: [
      "Indexação e performance de carregamento otimizadas drasticamente através de estratégias de cache híbrido.",
      "Developer Experience (DX) aprimorada com controle total sobre estilização utilitária e ícones leves.",
      "Base de código sólida e preparada para a expansão de filtros dinâmicos e tratamento de erros resiliente.",
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
