export default function generateStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.tektribe.org.uk/#organization",
        "name": "TEK Tribe",
        "legalName": "TEK Tribe Community Interest Company",
        "url": "https://www.tektribe.org.uk",
        "logo": {
          "@type": "ImageObject",
          "url": "https://res.cloudinary.com/faksam-soft/image/upload/v1754137372/tektribe/TEK_TRIBE_LOGO_4_PNG_xxdtjz.png",
          "width": 240,
          "height": 240
        },
        "description": "Leading IT solutions provider in Glasgow offering digital training, cloud services, cybersecurity, and Green IT for underrepresented communities.",
        "foundingDate": "2024",
        "address": [
          {
            "@type": "PostalAddress",
            "streetAddress": "4 Church Street, Ballieston",
            "addressLocality": "Glasgow",
            "addressRegion": "Scotland",
            "postalCode": "G69 7NU",
            "addressCountry": "GB"
          }
        ],
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+44-7918599099",
            "contactType": "customer service",
            "email": "info@tektribe.org.uk",
            "availableLanguage": ["English"]
          }
        ],
        "sameAs": [
          "https://www.linkedin.com/company/tektribe/",
          "https://www.facebook.com/profile.php?id=61577226638625",
          "https://www.instagram.com/tek_tribe/",
          "https://www.youtube.com/channel/UCrMUZ3CfyI1aupGB5-_gxtw",
          "https://x.com/TekTribe_CIC"
        ],
        "areaServed": {
          "@type": "Place",
          "name": "Glasgow, Scotland, United Kingdom"
        },
        "knowsAbout": [
          "Digital Training",
          "IT Solutions",
          "Cybersecurity",
          "Cloud Computing",
          "Green IT",
          "Community Empowerment",
          "Digital Inclusion"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://www.tektribe.org.uk/#website",
        "url": "https://www.tektribe.org.uk",
        "name": "TEK Tribe - Technology for Social Good",
        "description": "Leading IT solutions provider in Glasgow offering free digital training, cloud services, cybersecurity, and Green IT for underrepresented communities.",
        "publisher": {
          "@id": "https://www.tektribe.org.uk/#organization"
        },
        "inLanguage": "en-GB"
      },
      {
        "@type": "Service",
        "name": "Digital Training Glasgow",
        "provider": {
          "@id": "https://www.tektribe.org.uk/#organization"
        },
        "description": "Free digital training programs for underrepresented communities in Glasgow",
        "areaServed": "Glasgow, Scotland",
        "serviceType": "Educational Services"
      },
      {
        "@type": "Service",
        "name": "IT Solutions Glasgow",
        "provider": {
          "@id": "https://www.tektribe.org.uk/#organization"
        },
        "description": "Enterprise-grade IT solutions and cloud services for businesses in Glasgow",
        "areaServed": "Glasgow, Scotland",
        "serviceType": "Information Technology Services"
      }
    ]
  };
}