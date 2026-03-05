import type { Metadata } from "next";
import { ExternalLink, Activity, BarChart3, Target } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "スキルスコープ",
};

const features = [
  {
    icon: Target,
    title: "経験の記録",
    description: "臨床実習で経験した症候・疾患・手技をアプリで記録",
    color: "bg-violet-50 text-violet-600",
  },
  {
    icon: BarChart3,
    title: "可視化",
    description: "経験内容をグラフやリストで一覧。学習の偏りを把握",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Activity,
    title: "到達度確認",
    description: "モデル・コア・カリキュラムの到達目標への達成状況を確認",
    color: "bg-emerald-50 text-emerald-600",
  },
];

export default function SkillscopePage() {
  return (
    <>
      <PageHero
        title="スキルスコープ"
        description="臨床実習の経験を記録・可視化するスキルログアプリ"
        breadcrumbItems={[
          { label: "ポータル", href: "/portal" },
          { label: "スキルスコープ" },
        ]}
      />

      <section className="py-16">
        <Container>
          {/* 特徴 */}
          <div className="mb-12">
            <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-ink-900">
              <span className="h-6 w-1 rounded-full bg-copper" />
              スキルスコープとは
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-ink-200/60 bg-white p-6 text-center"
                >
                  <div
                    className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl ${feature.color}`}
                  >
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-ink-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-ink-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 利用方法 */}
          <div className="mb-12">
            <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-ink-900">
              <span className="h-6 w-1 rounded-full bg-copper" />
              利用方法
            </h2>
            <div className="rounded-2xl border border-ink-200/60 bg-white p-6">
              <p className="text-base text-ink-700 leading-relaxed">
                スキルスコープの詳しい使用方法については、以下のリンクからアプリにアクセスしてご確認ください。
              </p>
            </div>
          </div>

          {/* アプリを開く */}
          <div className="text-center">
            <a
              href="https://www.appsheet.com/start/b9a661d4-1268-4672-9138-c8a98ffe62e5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-8 py-3 text-base font-bold text-white hover:bg-violet-700 transition-colors shadow-lg shadow-violet-200"
            >
              スキルスコープを開く
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
