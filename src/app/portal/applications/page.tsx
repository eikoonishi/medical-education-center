import type { Metadata } from "next";
import { ExternalLink, FileText } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { Container } from "@/components/ui/Container";
import { applicationForms } from "@/data/portal";

export const metadata: Metadata = {
  title: "各種申請",
};

export default function ApplicationsPage() {
  return (
    <>
      <PageHero
        title="各種申請"
        description="教育に関する申請フォームをまとめます"
        breadcrumbItems={[
          { label: "ポータル", href: "/portal" },
          { label: "各種申請" },
        ]}
      />

      <section className="py-16">
        <Container>
          <div className="mb-8">
            <p className="text-base text-ink-500 leading-relaxed">
              教育に関する申請フォームをまとめます。掲載してほしい情報があれば、いつでもご連絡ください。
            </p>
          </div>

          <div className="space-y-4">
            {applicationForms.map((form) => (
              <a
                key={form.id}
                href={form.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 rounded-2xl border border-ink-200/60 bg-white p-6 transition-all hover:border-copper/30 hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <FileText className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-bold text-ink-900 group-hover:text-copper transition-colors mb-1">
                    {form.title}
                  </h3>
                  <p className="text-sm text-ink-500 leading-relaxed">
                    {form.description}
                  </p>
                </div>
                <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-ink-300 group-hover:text-copper transition-colors" />
              </a>
            ))}
          </div>

          {applicationForms.length === 0 && (
            <div className="rounded-2xl border border-ink-200/60 bg-white p-12 text-center">
              <p className="text-ink-400">
                現在、申請フォームはありません。
              </p>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
