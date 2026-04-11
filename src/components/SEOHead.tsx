import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  type?: string;
  jsonLd?: object | object[];
  noindex?: boolean;
}

const SEOHead = ({
  title,
  description,
  canonical,
  ogImage = 'https://www.suprasl.online/og-image.jpg',
  type = 'website',
  jsonLd,
  noindex = false,
}: SEOHeadProps) => {
  const jsonLdArray = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="robots"
        content={
          noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1'
        }
      />
      <link rel="canonical" href={canonical} />

      {/* Hreflang */}
      <link rel="alternate" hrefLang="pl" href={canonical} />
      <link rel="alternate" hrefLang="x-default" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:type" content={type} />
      <meta property="og:locale" content="pl_PL" />
      <meta property="og:site_name" content="In The Woods — Dom w Puszczy Knyszyńskiej" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Geo */}
      <meta name="geo.region" content="PL-20" />
      <meta name="geo.placename" content="Supraśl" />

      {/* JSON-LD */}
      {jsonLdArray.map((data, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEOHead;
