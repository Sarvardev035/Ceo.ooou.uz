import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono-jb",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ceo.ooou.uz"),
  alternates: { canonical: "/" },
  keywords: ["Sarvarbek Sharipboyev", "Sarvar Sharipov", "ooou.uz", "Bahola", "SmartQR", "Voxly AI", "Full-Stack Developer", "QA Engineer", "AI Engineer", "Tashkent"],
  title: "Ceo.ooou.uz · Sarvarbek Sharipboyev",
  description:
    "Sarvarbek Sharipboyev: founder of ooou.uz, full-stack, QA and AI engineer building Bahola (SmartQR) with Claude and Antigravity.",
  openGraph: {
    title: "Ceo.ooou.uz · Sarvarbek Sharipboyev",
    description: "Founder of ooou.uz. Full-stack, QA and AI engineer building Bahola (SmartQR).",
    type: "website",
    url: "https://ceo.ooou.uz",
  },
  twitter: { card: "summary_large_image" },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sarvarbek Sharipboyev",
  alternateName: "Sarvar Sharipov",
  url: "https://ceo.ooou.uz",
  jobTitle: "Founder & CEO, Full-Stack, QA and AI Engineer",
  worksFor: { "@type": "Organization", name: "ooou.uz", url: "https://ooou.uz" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Amity University Tashkent" },
  address: { "@type": "PostalAddress", addressLocality: "Tashkent", addressCountry: "UZ" },
  sameAs: ["https://www.linkedin.com/in/sarvar-sharipov-4bb187332/", "https://github.com/Sarvardev035", "https://t.me/go0fy"],
};

// Runs before paint so the saved (or system) theme applies without a flash.
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="light"||(!t&&matchMedia("(prefers-color-scheme: light)").matches))document.documentElement.classList.add("light")}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${inter.variable} ${mono.variable} noise font-sans antialiased`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        {children}
      </body>
    </html>
  );
}
