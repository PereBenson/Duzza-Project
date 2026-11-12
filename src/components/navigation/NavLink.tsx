"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode, Ref } from "react";

import { cn } from "@/lib/cn";

type NavLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  activeClassName?: string;
  onNavigate?: () => void;
  linkRef?: Ref<HTMLAnchorElement>;
};

export function NavLink({
  href,
  children,
  className,
  activeClassName = "text-muted",
  onNavigate,
  linkRef,
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  return (
    <Link
      ref={linkRef}
      href={href}
      aria-current={isActive ? "page" : undefined}
      onClick={onNavigate}
      className={cn(className, isActive && activeClassName)}
    >
      {children}
    </Link>
  );
}
