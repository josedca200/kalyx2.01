import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
}

export function SEO({
  title,
  description,
  path = "",
  image = "/og-image.png",
  type = "website",
  publishedTime,
  modifiedTime,
  author,
}: SEOProps) {
  const { i18n } = useTranslation();
  const siteUrl = import.meta.env.VITE_SITE_URL || "https://kalyx.tech";
  const fullUrl = `${siteUrl}${path}`;
  const fullTitle = `${title} | Kalyx Service Technology`;
  const ogImage = image.startsWith("http") ? image : `${siteUrl}${image}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Kalyx Service Technology" />
      <meta property="og:locale" content={i18n.language === "es" ? "es_ES" : "en_US"} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Article specific */}
      {type === "article" && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === "article" && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === "article" && author && (
        <meta property="article:author" content={author} />
      )}
      
      {/* Language alternates */}
      <link rel="alternate" hrefLang="es" href={`${siteUrl}/es${path}`} />
      <link rel="alternate" hrefLang="en" href={`${siteUrl}/en${path}`} />
      <link rel="alternate" hrefLang="x-default" href={fullUrl} />
    </Helmet>
  );
}
