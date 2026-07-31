import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    default: "NAPLAN Estimator — OC & Selective School Reach Tool",
    template: "%s — NAPLAN Estimator",
  },
  description:
    "Enter your child's NAPLAN results to estimate which Opportunity Class (OC) or Selective high schools are within reach. Free NSW OC and selective school estimator based on community-reported data.",
  keywords: [
    "NAPLAN",
    "OC",
    "Opportunity Class",
    "Selective High School",
    "NSW",
    "school estimator",
    "Year 3",
    "Year 5",
    "NAPLAN estimator",
    "OC calculator",
    "selective school calculator",
    "NSW education",
  ],
  authors: [{ name: "NAPLAN Estimator" }],
  metadataBase: new URL("https://schoolreach.com.au"),
  openGraph: {
    title: "NAPLAN Estimator — OC & Selective School Reach",
    description:
      "Enter your child's NAPLAN results to estimate which Opportunity Class or Selective high schools are within reach.",
    url: "/",
    siteName: "NAPLAN Estimator",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NAPLAN Estimator — OC & Selective School Reach",
    description:
      "Enter your child's NAPLAN results to estimate which Opportunity Class or Selective high schools are within reach.",
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
              name: "NAPLAN Estimator",
              description:
                "Enter your child's NAPLAN results to estimate which Opportunity Class (OC) or Selective high schools are within reach.",
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
                name: "NAPLAN Estimator",
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
            <Link href="/" className="text-lg font-semibold tracking-tight text-primary">
              NAPLAN Estimator
            </Link>
            <nav className="flex items-center gap-4 text-sm text-muted-foreground">
              <Link href="/oc" className="hover:text-foreground transition-colors">
                Year 3 → OC
              </Link>
              <Link href="/selective" className="hover:text-foreground transition-colors">
                Year 5 → Selective
              </Link>
              <Link href="/reserve-list" className="hover:text-foreground transition-colors">
                Reserve List
              </Link>
              <Link href="/about" className="hover:text-foreground transition-colors">
                About
              </Link>
            </nav>
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
