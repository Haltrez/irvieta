import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"], // latin-ext carries the Latvian diacritics
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://irvieta.lv";
const title = "irvieta — Kāds jau brauc tavā virzienā";
const description =
  "Latvijas pirmā P2P kravu pārvadājumu platforma. Savienojam sūtītājus ar braucējiem, kuri jau brauc šajā maršrutā. Pierakstīties agrīnajai piekļuvei.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "irvieta",
    "kravu pārvadājumi",
    "sūtījumi Latvijā",
    "paciņu pārvadāšana",
    "P2P piegāde",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "lv_LV",
    url: siteUrl,
    siteName: "irvieta",
    title,
    description,
  },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#F5F5F0",
  width: "device-width",
  initialScale: 1,
};

const SOCIAL_PROFILES = [
  "https://www.instagram.com/irvietalv",
  "https://www.facebook.com/irvietalv",
  "https://www.tiktok.com/@irvietalv",
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "irvieta",
      alternateName: "irvieta.lv",
      url: siteUrl,
      description,
      inLanguage: "lv-LV",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "irvieta",
      url: siteUrl,
      email: "hello@irvieta.lv",
      areaServed: "LV",
      sameAs: SOCIAL_PROFILES,
      contactPoint: {
        "@type": "ContactPoint",
        email: "hello@irvieta.lv",
        contactType: "customer support",
        availableLanguage: ["lv", "en"],
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="lv" className={inter.variable}>
      <head>
        {/*
          Framer Motion renders its entrance states into the SSR HTML, so a
          visitor without JS would see an empty hero. Force everything visible
          when scripting is off.
        */}
        <noscript>
          <style>{`[style*="opacity:0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="font-sans">
        <script
          type="application/ld+json"
          // Static, author-controlled object — no user input reaches this.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
