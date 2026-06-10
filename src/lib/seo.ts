import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

interface PageMetadataOptions {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export function createPageMetadata({
  title,
  description,
  path = "",
  ogImage,
  noIndex = false,
}: PageMetadataOptions = {}): Metadata {
  const pageTitle = title ?? siteConfig.title;
  const pageDescription = description ?? siteConfig.description;
  const canonicalPath = path || "/";
  const pageUrl = `${siteConfig.url}${canonicalPath === "/" ? "" : canonicalPath}`;
  const imageUrl = ogImage ?? `${siteConfig.url}/opengraph-image`;

  return {
    title: title ? `${title} | ${siteConfig.name}` : pageTitle,
    description: pageDescription,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: pageUrl,
      title: title ? `${title} | ${siteConfig.name}` : pageTitle,
      description: pageDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: siteConfig.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title ? `${title} | ${siteConfig.name}` : pageTitle,
      description: pageDescription,
      images: [imageUrl],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};
