import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TEK Tribe - Digital Training & IT Solutions Glasgow | Technology for Social Good",
  description: "Leading IT solutions provider in Glasgow offering free digital training, cloud services, cybersecurity, and Green IT for underrepresented communities. 100% carbon-neutral operations. Expert IT support & consultancy.",
  keywords: "digital training Glasgow, IT solutions Glasgow UK, cybersecurity Glasgow, cloud migration Glasgow, Green IT solutions, carbon neutral technology, digital inclusion Glasgow, free IT training, community empowerment Glasgow, sustainable technology Glasgow, IT consultancy Glasgow, digital skills training, technology for social good Glasgow",
  authors: [{ name: "TEK Tribe CIC" }],
  creator: "TEK Tribe",
  publisher: "TEK Tribe CIC",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "https://www.tektribe.org.uk",
    languages: {
      'en-GB': 'https://www.tektribe.org.uk',
      'en-NG': 'https://www.tektribe.com.ng',
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  other: {
    'geo.region': 'GB-SCT',
    'geo.placename': 'Glasgow',
    'geo.position': '55.8642;-4.2518',
    'ICBM': '55.8642, -4.2518',
    'business:contact_data:locality': 'Glasgow',
    'business:contact_data:region': 'Scotland',
    'business:contact_data:country_name': 'United Kingdom',
  },
  openGraph: {
    title: "TEK Tribe - Digital Training & IT Solutions Glasgow | Technology for Social Good",
    description: "Leading IT solutions provider in Glasgow offering free digital training, cloud services, cybersecurity, and Green IT for underrepresented communities. 100% carbon-neutral operations.",
    url: "https://www.tektribe.org.uk",
    siteName: "TEK Tribe",
    images: [
      {
        url: "https://res.cloudinary.com/faksam-soft/image/upload/v1754137372/tektribe/TEK_TRIBE_LOGO_4_PNG_xxdtjz.png",
        width: 1200,
        height: 630,
        alt: "TEK Tribe - Digital Training & IT Solutions Glasgow Scotland UK",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TEK Tribe - Digital Training & IT Solutions Glasgow",
    description: "Leading IT solutions provider in Glasgow. Free digital training, cloud services, cybersecurity & Green IT. 100% carbon-neutral operations.",
    images: ["https://res.cloudinary.com/faksam-soft/image/upload/v1754137372/tektribe/TEK_TRIBE_LOGO_4_PNG_xxdtjz.png"],
    creator: "@TekTribe_CIC",
    site: "@TekTribe_CIC",
  },
  category: "Technology",
  classification: "Business",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ff014f" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="revisit-after" content="7 days" />
        <meta name="expires" content="never" />
        <meta name="language" content="en-GB" />
        <meta name="coverage" content="worldwide" />
        <meta name="target" content="all" />
        <meta name="audience" content="all" />
        <meta name="resource-type" content="document" />
        <meta name="doc-type" content="web page" />
        <meta name="doc-class" content="living document" />
        <meta name="doc-rights" content="copywritten work" />
        <meta name="city" content="Glasgow" />
        <meta name="country" content="United Kingdom" />
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
      </head>
      <body className={"white-version"}>{children}</body>
    </html>
  );
}
