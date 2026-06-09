import { Container } from "@/components/container";
import { ScrollReveal } from "@/components/scroll-reveal";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Mail } from "lucide-react";
import Link from "next/link";

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

const contactChannels = [
  {
    href: `mailto:${siteConfig.email}`,
    label: "Enviar e-mail",
    description: siteConfig.email,
    icon: Mail,
    external: false,
  },
  {
    href: siteConfig.links.linkedin,
    label: "LinkedIn",
    description: "Perfil profissional",
    icon: LinkedInIcon,
    external: true,
  },
] as const;

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-header"
    >
      <Container className="mt-16 sm:mt-32">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-card px-6 py-10 text-center shadow-md dark:shadow-sm sm:px-10 sm:py-12">
            <h2 id="contact-heading" className="section-heading section-heading--center">
              Vamos conversar?
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Disponível para oportunidades front-end, freelas e colaborações.
              Escolha o canal que preferir — respondo o mais breve possível.
            </p>

            <ul
              role="list"
              className="mt-8 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center"
            >
              {contactChannels.map(
                ({ href, label, description, icon: Icon, external }) => (
                  <li key={href} className="flex-1 sm:max-w-xs">
                    <a
                      href={href}
                      {...(external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className={cn(
                        buttonVariants({
                          variant: label === "Enviar e-mail" ? "default" : "secondary",
                          size: "lg",
                        }),
                        "h-auto w-full flex-col gap-1 py-4 whitespace-normal"
                      )}
                    >
                      <span className="inline-flex items-center gap-2">
                        <Icon className="size-4 shrink-0" aria-hidden />
                        {label}
                        {external && (
                          <ArrowUpRight className="size-4 shrink-0" aria-hidden />
                        )}
                      </span>
                      <span className="text-xs font-normal opacity-80">
                        {description}
                      </span>
                    </a>
                  </li>
                )
              )}
            </ul>

            <p className="mt-6 text-sm text-muted-foreground">
              Prefere ver o trabalho antes?{" "}
              <Link
                href="#projects"
                className="link-underline font-medium text-foreground"
              >
                Explore os projetos
              </Link>
            </p>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
