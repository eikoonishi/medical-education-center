import type { Metadata } from "next";
import { MapPin, Calendar, Wrench, ExternalLink } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { Container } from "@/components/ui/Container";
import { IllustrationStethoscope } from "@/components/common/Illustrations";
import { skillsLabExamples } from "@/data/portal";

export const metadata: Metadata = {
  title: "クリニカル・スキルスラボ",
};

export default function SkillsLabPage() {
  return (
    <>
      <PageHero
        title="クリニカル・スキルスラボ"
        description="施設案内、利用方法、実施例などをご紹介"
        breadcrumbItems={[
          { label: "ポータル", href: "/portal" },
          { label: "クリニカル・スキルスラボ" },
        ]}
      />

      <section className="py-16 relative">
        <div className="absolute right-12 top-12 hidden lg:block opacity-10">
          <IllustrationStethoscope className="w-20 h-20 text-copper" />
        </div>

        <Container>
          {/* 施設案内 */}
          <div className="mb-12">
            <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-ink-900">
              <span className="h-6 w-1 rounded-full bg-copper" />
              <MapPin className="h-5 w-5 text-copper" />
              施設案内
            </h2>
            <div className="rounded-2xl border border-ink-200/60 bg-white p-6">
              <p className="text-base text-ink-700 leading-relaxed">
                クリニカル・スキルスラボは、医学生や研修医が臨床手技を安全に練習できるシミュレーション教育施設です。
                各種シミュレータや模型を備え、実践的なトレーニングを提供しています。
              </p>
            </div>
          </div>

          {/* 利用方法 */}
          <div className="mb-12">
            <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-ink-900">
              <span className="h-6 w-1 rounded-full bg-copper" />
              <Calendar className="h-5 w-5 text-copper" />
              利用方法
            </h2>
            <div className="rounded-2xl border border-ink-200/60 bg-white p-6">
              <p className="text-base text-ink-700 leading-relaxed">
                利用を希望される方は、医学教育推進センターまでお問い合わせください。
                スケジュール調整や機材の準備をサポートいたします。
              </p>
            </div>
          </div>

          {/* 実施例 */}
          <div className="mb-12">
            <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-ink-900">
              <span className="h-6 w-1 rounded-full bg-copper" />
              <Wrench className="h-5 w-5 text-copper" />
              実施例
            </h2>

            {skillsLabExamples.map((example) => (
              <div
                key={example.id}
                className="mb-8 last:mb-0 rounded-2xl border border-ink-200/60 bg-white overflow-hidden"
              >
                <div className="bg-copper/5 px-6 py-4 border-b border-ink-100">
                  <h3 className="text-lg font-bold text-ink-900">
                    ▶ {example.department}
                  </h3>
                  <p className="text-sm text-ink-500 mt-1">
                    SGT：1週間の実習で、到達目標は「全身麻酔管理ができる」。
                  </p>
                </div>

                <div className="divide-y divide-ink-100">
                  {example.activities.map((activity, i) => (
                    <div key={i} className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="rounded-full bg-copper/10 px-3 py-0.5 text-sm font-bold text-copper">
                          {activity.day}
                        </span>
                      </div>
                      <p className="text-base text-ink-700 mb-3 leading-relaxed">
                        {activity.description}
                      </p>
                      <div className="rounded-xl bg-cafe-warm/50 p-4">
                        <p className="text-sm text-ink-500 leading-relaxed">
                          <span className="font-medium text-ink-600">
                            使用機材：
                          </span>
                          {activity.equipment}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* 外部リンク */}
          <div>
            <a
              href="https://www.skillslab.med.tohoku.ac.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-rose-600 px-8 py-3 text-base font-bold text-white hover:bg-rose-700 transition-colors shadow-lg shadow-rose-200"
            >
              スキルスラボ公式サイト
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
