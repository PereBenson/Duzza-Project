import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { TextLogo } from "@/components/ui/TextLogo";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-carbon bg-carbon text-canvas">
      <Container className="py-12 lg:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <TextLogo tone="light" compact />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-canvas/70">
              The parent brand for Duzza Projects and Duzza Branding. Fashion and food
              ventures are in development.
            </p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-canvas/55">
              Presentation prototype. Project stories, portfolio concepts, team profiles and
              client perspectives are illustrative and will be replaced with approved records
              before launch.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-canvas/50">
              Navigate
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 md:grid-cols-1">
              {site.footerNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-canvas/75 transition-colors hover:text-canvas focus-visible:text-canvas"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-canvas/50">
              Start a conversation
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link href="/contact/project-enquiry" className="text-canvas/75 hover:text-canvas">
                  Project enquiry
                </Link>
              </li>
              <li>
                <Link href="/contact/branding-brief" className="text-canvas/75 hover:text-canvas">
                  Branding brief
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-canvas/75 hover:text-canvas">
                  General enquiry
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-canvas/75 hover:text-canvas">
                  Privacy notice
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-canvas/15 pt-6 text-xs text-canvas/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} DUZZA GROUP. All rights reserved.</p>
          <p className="font-mono uppercase tracking-[0.14em]">
            {site.legalName} · Legal wording to be confirmed before launch
          </p>
        </div>
      </Container>
    </footer>
  );
}
