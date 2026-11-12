import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/cn";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "carbon"
  | "inverse"
  | "outline-light"
  | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

type SharedButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-control font-sans font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current focus-visible:ring-offset-2 focus-visible:ring-offset-canvas disabled:pointer-events-none disabled:opacity-50";

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-accent text-ink hover:bg-accent-strong",
  secondary: "border border-ink bg-transparent text-ink hover:bg-ink hover:text-canvas",
  carbon: "bg-ink text-canvas hover:bg-ink/90",
  inverse: "bg-canvas text-ink hover:bg-white",
  "outline-light": "border border-canvas/40 bg-transparent text-canvas hover:bg-canvas hover:text-ink",
  ghost: "text-ink hover:bg-line",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "min-h-12 px-4 text-sm",
  md: "min-h-12 px-5 text-sm",
  lg: "min-h-14 px-6 text-base",
};

function buttonStyles({
  variant = "primary",
  size = "md",
  className,
}: Pick<SharedButtonProps, "variant" | "size" | "className">) {
  return cn(baseStyles, variantStyles[variant], sizeStyles[size], className);
}

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  type = "button",
  ...props
}: SharedButtonProps & ComponentPropsWithoutRef<"button">) {
  return (
    <button className={buttonStyles({ variant, size, className })} type={type} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}: SharedButtonProps & ComponentPropsWithoutRef<typeof Link>) {
  return (
    <Link className={buttonStyles({ variant, size, className })} {...props}>
      {children}
    </Link>
  );
}
