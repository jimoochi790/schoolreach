import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — NAPLAN Estimator",
  description: "Privacy policy for the NAPLAN OC & Selective School Estimator.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12 space-y-6 text-sm text-muted-foreground">
      <h1 className="text-2xl font-semibold text-foreground">Privacy Policy</h1>
      <p className="text-xs">Last updated: July 2026</p>

      <section className="space-y-3">
        <h2 className="text-lg font-medium text-foreground">Information We Collect</h2>
        <p>
          This website processes all data entirely in your browser. NAPLAN scores you enter
          are never sent to, stored on, or processed by any server. They exist only in your
          browser&apos;s memory and URL parameters.
        </p>
        <p>
          We do not use cookies, tracking scripts, or analytics services that collect
          personally identifiable information.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium text-foreground">Third-Party Services</h2>
        <p>
          We may display advertisements via Google AdSense. Google AdSense may use cookies
          and web beacons to serve ads based on your prior visits to this and other websites.
          You can opt out of personalised advertising by visiting Google&apos;s Ads Settings.
        </p>
        <p>
          Google&apos;s use of advertising cookies is governed by Google&apos;s own privacy policy.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium text-foreground">Data Sharing</h2>
        <p>
          We do not sell, trade, or transfer your personal information to third parties.
          This does not include trusted third parties who assist us in operating our website
          (e.g., ad networks), as long as those parties agree to keep your information confidential.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium text-foreground">External Links</h2>
        <p>
          This website may contain links to external sites. We are not responsible for the
          privacy practices or content of those sites.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium text-foreground">Changes</h2>
        <p>
          We may update this privacy policy from time to time. Changes will be posted on
          this page with an updated &quot;Last updated&quot; date.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium text-foreground">Contact</h2>
        <p>
          If you have questions about this privacy policy, please contact us via the site
          owner&apos;s contact information.
        </p>
      </section>

      <div className="pt-4">
        <Link href="/about" className="underline hover:text-foreground">
          &larr; Back to About
        </Link>
      </div>
    </div>
  );
}
