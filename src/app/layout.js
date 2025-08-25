import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TEK Tribe - Technology for Social Good | Digital Training & IT Solutions",
  description: "TEK Tribe delivers IT solutions, digital training, and community empowerment through sustainable technology. Free training programs, cloud solutions, and cybersecurity services in Glasgow, UK.",
  keywords: "digital training, IT solutions, community empowerment, cloud services, cybersecurity, Glasgow, technology for social good, free training, digital skills",
  authors: [{ name: "TEK Tribe" }],
  creator: "TEK Tribe",
  publisher: "TEK Tribe",
  robots: "index, follow",
  openGraph: {
    title: "TEK Tribe - Technology for Social Good",
    description: "Empowering communities through innovative cloud solutions and digital education. Free training programs and IT support.",
    url: "https://tektribe.org.uk",
    siteName: "TEK Tribe",
    images: [
      {
        url: "https://res.cloudinary.com/faksam-soft/image/upload/v1754137372/tektribe/TEK_TRIBE_LOGO_4_PNG_xxdtjz.png",
        width: 1200,
        height: 630,
        alt: "TEK Tribe - Technology for Social Good",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TEK Tribe - Technology for Social Good",
    description: "Empowering communities through innovative cloud solutions and digital education.",
    images: ["https://res.cloudinary.com/faksam-soft/image/upload/v1754137372/tektribe/TEK_TRIBE_LOGO_4_PNG_xxdtjz.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="canonical" href="https://tektribe.org.uk" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ff014f" />
      </head>
      <body className={"white-version"}>{children}</body>
    </html>
  );
}
