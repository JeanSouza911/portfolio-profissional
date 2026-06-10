export const navItems = [
  { href: "#about", label: "Sobre" },
  { href: "#projects", label: "Projetos" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contato" },
] as const;

export type NavItem = (typeof navItems)[number];
