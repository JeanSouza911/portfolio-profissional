function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return "http://localhost:3000";
}

export const siteConfig = {
  name: "Jean Souza",
  title: "Jean Souza — Desenvolvedor Front-end",
  description:
    "Portfólio de Jean Souza. Desenvolvedor front-end especializado em React, Next.js e TypeScript, com foco em acessibilidade, performance e UI de qualidade.",
  url: getSiteUrl(),
  locale: "pt_BR",
  email: "jeansouza.jsdev@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/jean-souza-79b491160/",
    github: "https://github.com/JeanSouza911",
  },
  /** Troque por "/profile/sua-foto.webp" (ou .jpg) ao adicionar a imagem real */
  profileImage: "/profile/jeansouza.png",
  profileImageAlt: "Foto de perfil de Jean Souza",
} as const;

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: siteConfig.url,
  email: siteConfig.email,
  jobTitle: "Desenvolvedor Front-end",
  image: `${siteConfig.url}${siteConfig.profileImage}`,
  sameAs: [siteConfig.links.linkedin, siteConfig.links.github],
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Acessibilidade Web",
    "Performance Web",
  ],
};
