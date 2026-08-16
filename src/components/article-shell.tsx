import Link from "next/link";

interface Section {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

interface Faq {
  q: string;
  a: string;
}

interface ArticleShellProps {
  category: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  sections: Section[];
  faqs?: Faq[];
  cta?: { text: string; href: string; label: string };
  zh?: boolean;
}

export default function ArticleShell({
  category,
  title,
  subtitle,
  date,
  readTime,
  sections,
  faqs,
  cta,
  zh = false,
}: ArticleShellProps) {
  const backHref = zh ? "/zh/articles" : "/articles";
  const backLabel = zh ? "← 返回文章列表" : "← Back to articles";

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: subtitle,
    datePublished: date,
    author: { "@type": "Organization", name: "School Reach" },
    publisher: { "@type": "Organization", name: "School Reach" },
    ...(faqs && {
      mainEntity: {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    }),
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <Link href={backHref} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
        {backLabel}
      </Link>

      <header className="mt-4 mb-10">
        <p className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground/70">
          {category}
        </p>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight mt-2 leading-tight">
          {title}
        </h1>
        <p className="text-base text-muted-foreground mt-3 leading-relaxed max-w-xl">
          {subtitle}
        </p>
        <p className="text-xs text-muted-foreground/50 mt-4 font-mono">
          {date} · {readTime}
        </p>
      </header>

      <div className="space-y-10">
        {sections.map((section) => (
          <section key={section.heading} className="space-y-3">
            <h2 className="text-xl font-semibold">{section.heading}</h2>
            {section.paragraphs.map((p, i) => (
              <p key={i} className="text-sm text-muted-foreground leading-relaxed">
                {p}
              </p>
            ))}
            {section.bullets && (
              <ul className="space-y-2 pl-5 list-disc">
                {section.bullets.map((b, i) => (
                  <li key={i} className="text-sm text-muted-foreground leading-relaxed">
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      {faqs && (
        <section className="mt-12 space-y-4">
          <h2 className="text-xl font-semibold">{zh ? "常见问题" : "Frequently asked questions"}</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="p-5 rounded-xl bg-muted/20 border border-border/40">
                <h3 className="font-medium text-base mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {cta && (
        <section className="mt-12 rounded-2xl bg-muted/40 border border-border/40 px-6 py-8 text-center">
          <h2 className="text-lg font-semibold mb-2">{cta.text}</h2>
          <Link
            href={cta.href}
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 mt-3"
          >
            {cta.label}
          </Link>
        </section>
      )}
    </div>
  );
}
