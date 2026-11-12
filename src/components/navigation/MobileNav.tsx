"use client";

import { useEffect, useRef, useState } from "react";

import { ButtonLink } from "@/components/ui/Button";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

import { NavLink } from "./NavLink";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusable = panelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );

      if (!focusable || focusable.length === 0) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    firstLinkRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex min-h-12 items-center gap-2 rounded-control border border-line bg-white px-3 text-ink transition-colors hover:bg-canvas focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <span aria-hidden="true" className="relative block size-4">
          <span
            className={cn(
              "absolute left-0 top-1 block h-px w-4 bg-current transition-transform duration-200 motion-reduce:transition-none",
              open && "translate-y-[3px] rotate-45",
            )}
          />
          <span
            className={cn(
              "absolute left-0 top-2 block h-px w-4 bg-current transition-opacity duration-200 motion-reduce:transition-none",
              open && "opacity-0",
            )}
          />
          <span
            className={cn(
              "absolute left-0 top-3 block h-px w-4 bg-current transition-transform duration-200 motion-reduce:transition-none",
              open && "-translate-y-[3px] -rotate-45",
            )}
          />
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.16em]">
          {open ? "Close" : "Menu"}
        </span>
      </button>

      <div
        ref={panelRef}
        id="mobile-navigation"
        hidden={!open}
        className="fixed inset-x-0 top-16 z-40 max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-line bg-canvas px-5 pb-8 pt-6 shadow-sm"
      >
        <nav aria-label="Mobile primary">
          <ul className="space-y-1">
            {site.navigation.map((item, index) => (
              <li key={item.href}>
                <NavLink
                  href={item.href}
                  linkRef={index === 0 ? firstLinkRef : undefined}
                  onNavigate={() => setOpen(false)}
                  className="block rounded-control px-3 py-3 font-display text-xl text-ink hover:bg-mist"
                  activeClassName="bg-mist"
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-6 flex flex-col gap-3 border-t border-line pt-6">
          <ButtonLink href={site.primaryCta.href} size="md" onClick={() => setOpen(false)}>
            {site.primaryCta.label}
          </ButtonLink>
          <ButtonLink
            href={site.secondaryCta.href}
            variant="secondary"
            size="md"
            onClick={() => setOpen(false)}
          >
            {site.secondaryCta.label}
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
