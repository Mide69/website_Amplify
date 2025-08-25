import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TEK Tribe - Technology for Social Good | Digital Training & IT Solutions Glasgow UK",
  description: "TEK Tribe delivers IT solutions, digital training, and community empowerment through sustainable technology. Free training programs, cloud solutions, and cybersecurity services in Glasgow, UK. Empowering underrepresented communities with digital skills.",
  keywords: "digital training Glasgow, IT solutions UK, community empowerment, cloud services, cybersecurity training, Glasgow tech startup, technology for social good, free digital training, digital skills, non-profit IT support, sustainable technology, carbon neutral IT, diversity in tech, digital inclusion",
  authors: [{ name: "TEK Tribe" }],
  creator: "TEK Tribe",
  publisher: "TEK Tribe",
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
  openGraph: {
    title: "TEK Tribe - Technology for Social Good | Digital Training Glasgow",
    description: "Empowering communities through innovative cloud solutions and digital education. Free training programs, IT support, and sustainable technology solutions in Glasgow, UK.",
    url: "https://www.tektribe.org.uk",
    siteName: "TEK Tribe",
    images: [
      {
        url: "https://res.cloudinary.com/faksam-soft/image/upload/v1754137372/tektribe/TEK_TRIBE_LOGO_4_PNG_xxdtjz.png",
        width: 1200,
        height: 630,
        alt: "TEK Tribe - Technology for Social Good Glasgow UK",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TEK Tribe - Technology for Social Good | Digital Training Glasgow",
    description: "Empowering communities through innovative cloud solutions and digital education. Free training programs and IT support in Glasgow, UK.",
    images: ["https://res.cloudinary.com/faksam-soft/image/upload/v1754137372/tektribe/TEK_TRIBE_LOGO_4_PNG_xxdtjz.png"],
    creator: "@TekTribe_CIC",
  },
  category: "Technology",
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
        <meta name="geo.region" content="GB-SCT" />
        <meta name="geo.placename" content="Glasgow" />
        <meta name="geo.position" content="55.8642;-4.2518" />
        <meta name="ICBM" content="55.8642, -4.2518" />
      </head>
      <body className={"white-version"}>{children}</body>
    </html>
  );
}
