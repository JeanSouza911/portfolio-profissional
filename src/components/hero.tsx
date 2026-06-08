import Image from "next/image";
import { Container } from "@/components/container";
import { GitHubIcon } from "@/components/icons/github-icon";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const socialLinks = [
  {
    href: siteConfig.links.linkedin,
    label: "LinkedIn (abre em nova aba)",
    Icon: LinkedInIcon,
  },
  {
    href: siteConfig.links.github,
    label: "GitHub (abre em nova aba)",
    Icon: GitHubIcon,
  },
] as const;

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="scroll-mt-header"
    >
      <Container className="flex min-h-[calc(100dvh-var(--header-height))] flex-col items-center justify-center text-center">
        <div className="relative size-24 overflow-hidden rounded-full ring-2 ring-accent/30 ring-offset-2 ring-offset-background sm:size-28">
          <Image
            src={siteConfig.profileImage}
            alt={siteConfig.profileImageAlt}
            fill
            priority
            sizes="(max-width: 640px) 96px, 112px"
            className="object-cover"
          />
        </div>
        <p className="mt-6 text-sm font-medium tracking-wide text-accent uppercase">
          Desenvolvedor Front-end
        </p>
        <h1
          id="hero-heading"
          className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
        >
          {siteConfig.name}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Transformo ideias em interfaces acessíveis e performáticas com{" "}
          <span className="font-medium text-foreground">React</span>,{" "}
          <span className="font-medium text-foreground">Next.js</span> e{" "}
          <span className="font-medium text-foreground">TypeScript</span>.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="#projects" className={cn(buttonVariants({ size: "lg" }))}>
            Ver Projetos <ArrowRight aria-hidden className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="#contact"
            className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}
          >
            Contato <ArrowRight aria-hidden className="ml-2 h-4 w-4" />
          </Link>
        </div>
        <div className="mt-8 flex gap-4" aria-label="Redes sociais">
          {socialLinks.map(({ href, label, Icon }) => (
            <Link
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="rounded-sm text-muted-foreground outline-none transition-colors hover:text-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Icon className="h-6 w-6" />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
