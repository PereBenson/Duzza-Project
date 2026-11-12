import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/cn";

type TextLogoProps = {
  className?: string;
  compact?: boolean;
  tone?: "dark" | "light";
};

export function TextLogo({ className, compact = false, tone = "dark" }: TextLogoProps) {
  const isLight = tone === "light";
  const src = isLight
    ? "/brand/duzza-group-lockup-reverse.png"
    : "/brand/duzza-group-lockup.png";

  return (
    <Link
      href="/"
      aria-label="DUZZA GROUP home"
      className={cn(
        "inline-flex shrink-0 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current focus-visible:ring-offset-4",
        isLight ? "focus-visible:ring-canvas focus-visible:ring-offset-carbon" : "focus-visible:ring-ink focus-visible:ring-offset-canvas",
        className,
      )}
    >
      <Image
        src={src}
        alt=""
        width={1292}
        height={287}
        priority={!compact}
        className={cn("w-auto", compact ? "h-8" : "h-9 lg:h-11")}
      />
    </Link>
  );
}
