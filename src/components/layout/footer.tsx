import { Container } from "@/components/container";
import { NavLink } from "@/components/nav-link";
import { navItems } from "@/lib/navigation";

export function Footer() {
  return (
    <footer className="mt-32">
      <Container>
        <div className="flex flex-col items-center justify-between gap-y-12 pb-6 pt-10 sm:flex-row">
          <nav aria-label="Navegação do rodapé">
            <ul role="list" className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {navItems.map(({ href, label }) => (
                <li key={href}>
                  <NavLink
                    href={href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Jean Souza. Todos os direitos
            reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}
