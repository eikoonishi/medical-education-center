import type { Metadata } from "next";
import { ExternalLink, AlertTriangle, Monitor, CheckCircle } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "欠席・遅刻管理アプリ",
};

const basicRules = [
  "デフォルトは「出席」。操作不要です。",
  "「公欠」は教務係管理。絶対に修正・削除しないでください。",
  "アプリ入力は「欠席」「遅刻」のみです。",
];

const registrationInfo = [
  { label: "無断欠席", description: "連絡なしで欠席している場合" },
  { label: "欠席連絡あり", description: "学生から欠席すると連絡があった場合" },
  { label: "遅刻", description: "学生が遅刻した場合" },
];

const manualSections = [
  {
    number: "01",
    title: "基本画面の見方",
    items: [
      {
        subtitle: "ローテ中の学生 (Home)",
        description: "現在実習中の学生一覧です。日々の登録はここから行います。",
      },
    ],
  },
];

export default function AttendancePage() {
  return (
    <>
      <PageHero
        title="欠席・遅刻管理アプリ"
        description="臨床修練・SGTでの出欠管理アプリ"
        breadcrumbItems={[
          { label: "ポータル", href: "/portal" },
          { label: "欠席・遅刻管理アプリ" },
        ]}
      />

      <section className="py-16">
        <Container>
          {/* 概要 */}
          <div className="mb-10">
            <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-ink-900">
              <span className="h-6 w-1 rounded-full bg-copper" />
              欠席アプリ運用について
            </h2>
            <div className="rounded-2xl border border-ink-200/60 bg-white p-6 space-y-4">
              <p className="text-base text-ink-700 leading-relaxed">
                SGTと臨床修練では、診療科で欠席・遅刻登録していただき、教務係で公欠を登録します。
              </p>
              <p className="text-base text-ink-700 leading-relaxed">
                欠席カウントをリアルタイムに共有することで、欠席の多い学生への早期介入を行います。
              </p>
            </div>
          </div>

          {/* 登録する情報 */}
          <div className="mb-10">
            <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-ink-900">
              <span className="h-6 w-1 rounded-full bg-copper" />
              診療科で登録する情報
            </h2>
            <div className="space-y-3">
              {registrationInfo.map((info, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 rounded-xl border border-ink-200/60 bg-white p-5"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-600 font-bold text-sm">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-base font-bold text-ink-900">
                      {info.label}
                    </p>
                    <p className="text-sm text-ink-500">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 注意事項 */}
          <div className="mb-10">
            <div className="rounded-2xl border border-amber-200 bg-amber-50/50 p-6">
              <p className="text-base font-bold text-ink-900 mb-2">
                このアプリの使用には東北大メールでのUSER登録が必要です。
              </p>
              <p className="text-base text-ink-700">
                登録を希望される先生はお問い合わせください。
              </p>
            </div>
          </div>

          {/* アプリを開くボタン */}
          <div className="mb-14">
            <a
              href="https://www.appsheet.com/start/432b472d-d978-436f-89ab-bfada9eb14f2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-8 py-3 text-base font-bold text-white hover:bg-ink-800 transition-colors"
            >
              アプリを開く
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          {/* 操作マニュアル */}
          <div className="mb-10">
            <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-ink-900">
              <span className="h-6 w-1 rounded-full bg-copper" />
              <Monitor className="h-5 w-5 text-copper" />
              臨床修練・欠席アプリ操作マニュアル
            </h2>
            <p className="text-sm text-ink-400 mb-6">
              診療科向けガイド（PC・スマホ共通）
            </p>

            {/* 基本ルール */}
            <div className="rounded-2xl border border-amber-200 bg-amber-50/50 p-6 mb-8">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="h-5 w-5 text-amber-600" />
                <h3 className="text-lg font-bold text-ink-900">基本ルール</h3>
              </div>
              <ul className="space-y-2">
                {basicRules.map((rule, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-base text-ink-700"
                  >
                    <CheckCircle className="h-5 w-5 shrink-0 text-amber-600 mt-0.5" />
                    {rule}
                  </li>
                ))}
              </ul>
            </div>

            {/* マニュアルセクション */}
            {manualSections.map((section) => (
              <div key={section.number} className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex h-8 items-center rounded-lg bg-copper px-3 text-sm font-bold text-white">
                    {section.number}
                  </span>
                  <h3 className="text-lg font-bold text-ink-900">
                    {section.title}
                  </h3>
                </div>
                <div className="space-y-3">
                  {section.items.map((item, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-ink-200/60 bg-white p-5"
                    >
                      <p className="text-base font-medium text-ink-900 mb-1">
                        {item.subtitle}
                      </p>
                      <p className="text-sm text-ink-500">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
