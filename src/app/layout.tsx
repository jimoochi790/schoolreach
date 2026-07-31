import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import SiteNav from "@/components/site-nav";
import { LogoMark } from "@/components/icons";

export const metadata: Metadata = {
  title: {
    default: "School Reach — NSW Parent Resource for OC & Selective Schools",
    template: "%s — School Reach",
  },
  description:
    "Free tools and resources for NSW parents navigating Opportunity Class (OC) and Selective High School placement. NAPLAN estimator, reserve list checker, and school guides based on community-reported data.",
  keywords: [
    "NAPLAN",
    "OC",
    "Opportunity Class",
    "Selective High School",
    "NSW",
    "school estimator",
    "reserve list",
    "Year 3",
    "Year 5",
    "Year 7",
    "NAPLAN estimator",
    "OC calculator",
    "selective school calculator",
    "NSW education",
    "parent resource",
  ],
  authors: [{ name: "School Reach" }],
  metadataBase: new URL("https://schoolreach.com.au"),
  openGraph: {
    title: "School Reach — NSW Parent Resource for OC & Selective Schools",
    description:
      "Free tools and resources for NSW parents: NAPLAN estimator, reserve list checker, and guides for OC and Selective school placement.",
    url: "/",
    siteName: "School Reach",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "School Reach — NSW Parent Resource",
    description:
      "Free tools and resources for NSW parents: NAPLAN estimator, reserve list checker, and guides for OC and Selective school placement.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6649360746734792" crossOrigin="anonymous"></script>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-K98P0B3JG0"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-K98P0B3JG0');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "School Reach",
              description:
                "Free tools and resources for NSW parents navigating OC and Selective school placement — NAPLAN estimator, reserve list checker, and school guides.",
              url: "https://schoolreach.com.au",
              applicationCategory: "EducationalApplication",
              operatingSystem: "All",
              browserRequirements: "Requires JavaScript",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "AUD",
              },
              author: {
                "@type": "Organization",
                name: "School Reach",
              },
              about: {
                "@type": "Thing",
                name: "NAPLAN OC and Selective High School Estimation",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <header className="border-b border-border/40 bg-background/80 backdrop-blur-md sticky top-0 z-10">
          <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5 text-lg font-semibold tracking-tight text-primary">
              <LogoMark className="w-7 h-7" />
              School Reach
            </Link>
            <SiteNav />
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-border/40 bg-muted/30 py-6 text-center text-xs text-muted-foreground">
          <div className="max-w-5xl mx-auto px-4 space-y-1">
            <p>
              This is an <strong>estimate</strong>, not a guarantee. Not affiliated with NAPLAN, ACARA,
              or the NSW Department of Education.
            </p>
            <p>Cutoff scores are community-reported and may vary year to year. &copy; {new Date().getFullYear()}</p>
            <Link href="/privacy" className="underline underline-offset-2 hover:text-foreground transition-colors">Privacy Policy</Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
