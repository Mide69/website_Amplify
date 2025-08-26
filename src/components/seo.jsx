import Head from 'next/head';

const SEO = ({ 
  title = "TEK Tribe - Technology for Social Good",
  description = "Empowering communities through IT solutions, digital training, and sustainable technology in Glasgow, UK.",
  canonical,
  noindex = false 
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TEK Tribe",
    "url": "https://www.tektribe.org.uk",
    "logo": "https://res.cloudinary.com/faksam-soft/image/upload/v1754137372/tektribe/TEK_TRIBE_LOGO_4_PNG_xxdtjz.png",
    "description": "Technology for good - cloud solutions, cybersecurity, and digital training",
    "address": [
      {
        "@type": "PostalAddress",
        "addressLocality": "Glasgow",
        "addressCountry": "GB",
        "addressRegion": "Scotland"
      },
      {
        "@type": "PostalAddress",
        "addressLocality": "Lagos",
        "addressCountry": "NG"
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+44-7918599099",
      "contactType": "customer service",
      "email": "info@tektribe.org.uk"
    },
    "sameAs": [
      "https://www.linkedin.com/company/tektribe/",
      "https://www.facebook.com/profile.php?id=61577226638625",
      "https://www.instagram.com/tek_tribe/",
      "https://www.youtube.com/channel/UCrMUZ3CfyI1aupGB5-_gxtw",
      "https://x.com/TekTribe_CIC"
    ],
    "foundingDate": "2024",
    "numberOfEmployees": "1-10",
    "industry": "Information Technology",
    "keywords": "digital training, IT solutions, community empowerment, cloud services, cybersecurity, Glasgow, technology for social good"
  };

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  );
};

export default SEO;