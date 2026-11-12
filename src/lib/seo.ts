import type { Metadata } from "next";

import { site } from "@/content/site";

export const isIndexable = process.env.NEXT_PUBLIC_SITE_INDEXABLE === "true";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function pageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  const socialTitle = title === site.name ? site.name : `${title} | ${site.name}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: socialTitle,
      description,
      url: path,
      siteName: site.name,
      locale: "en_GB",
      type: "website",
      images: [
        {
          url: "/og/duzza-group-og.png",
          width: 1200,
          height: 630,
          alt: "DUZZA GROUP",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: ["/og/duzza-group-og.png"],
    },
    robots: {
      index: isIndexable,
      follow: isIndexable,
    },
  };
}
