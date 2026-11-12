import { Container } from "@/components/layout/Container";
import { MobileNav } from "@/components/navigation/MobileNav";
import { NavLink } from "@/components/navigation/NavLink";
import { ButtonLink } from "@/components/ui/Button";
import { TextLogo } from "@/components/ui/TextLogo";
import { site } from "@/content/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas">
      <Container className="flex h-16 items-center justify-between gap-6 lg:h-20">
        <TextLogo />

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {site.navigation.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink transition-colors hover:text-muted"
              activeClassName="text-muted"
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href={site.primaryCta.href} size="sm">
            {site.primaryCta.label}
          </ButtonLink>
        </div>

        <MobileNav />
      </Container>
    </header>
  );
}
