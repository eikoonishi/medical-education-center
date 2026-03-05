import type { Metadata } from "next";
import { ExternalLink, Play } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { Container } from "@/components/ui/Container";
import { educationPresentations } from "@/data/portal";

export const metadata: Metadata = {
  title: "教育紹介",
};

export default function EducationPage() {
  // Group presentations by year
  const groupedByYear = educationPresentations.reduce(
    (acc, pres) => {
      if (!acc[pres.year]) acc[pres.year] = [];
      acc[pres.year].push(pres);
      return acc;
    },
    {} as Record<number, typeof educationPresentations>
  );

  const sortedYears = Object.keys(groupedByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <>
      <PageHero
        title="教育紹介"
        description="各診療科・分野の教育法を紹介します"
        breadcrumbItems={[
          { label: "ポータル", href: "/portal" },
          { label: "教育紹介" },
        ]}
      />

      <section className="py-16">
        <Container>
          <div className="mb-10">
            <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold text-ink-900">
              <span className="h-6 w-1 rounded-full bg-copper" />
              教育意見交換会での教育発表動画
            </h2>
            <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-4 mb-8">
              <p className="text-sm text-ink-600">
                動画は、東北大アカウントでログインしたYouTubeで視聴できます。個人のアカウントでログインしている場合は、非公開と表示されます。
              </p>
            </div>
          </div>

          {sortedYears.map((year) => (
            <div key={year} className="mb-12 last:mb-0">
              <h3 className="mb-4 flex items-center gap-3 text-xl font-bold text-ink-900">
                <span className="h-5 w-1 rounded-full bg-copper" />
                {year}年度
              </h3>
              <div className="space-y-3">
                {groupedByYear[year].map((pres) => (
                  <a
                    key={pres.id}
                    href={pres.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-xl border border-ink-200/60 bg-white p-5 transition-all hover:border-copper/30 hover:shadow-sm"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-500">
                      <Play className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-base font-bold text-copper">
                        {pres.department}
                      </p>
                      <p className="text-sm text-ink-500">
                        {pres.presenter}のご発表
                      </p>
                    </div>
                    <ExternalLink className="ml-auto h-4 w-4 shrink-0 text-ink-300 group-hover:text-copper transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </Container>
      </section>
    </>
  );
}
