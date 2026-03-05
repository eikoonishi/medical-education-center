import type { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "ロゴマークについて",
};

export default function LogoPage() {
  return (
    <>
      <PageHero
        title="ロゴマークについて"
        description="医学教育推進センターのシンボル"
        breadcrumbItems={[{ label: "ロゴマーク" }]}
      />
      <section className="py-16">
        <Container>
          {/* Logo display */}
          <div className="mb-12 flex flex-col items-center">
            <div className="mb-6 flex h-48 w-48 items-center justify-center rounded-2xl bg-white shadow-lg border border-ink-200/60">
              <svg
                viewBox="0 0 80 80"
                className="h-32 w-32"
                fill="none"
              >
                {/* Stylized torch / sprouting life motif */}
                <path
                  d="M40 12L40 28M40 28C32 28 26 34 26 42C26 50 32 56 40 56C48 56 54 50 54 42C54 34 48 28 40 28Z"
                  stroke="#20528F"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M30 56C30 62 34 68 40 68C46 68 50 62 50 56"
                  stroke="#20528F"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <circle cx="40" cy="20" r="5" fill="#20528F" />
                <path
                  d="M34 18C30 14 28 10 32 8"
                  stroke="#20528F"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M46 18C50 14 52 10 48 8"
                  stroke="#20528F"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <p className="text-sm text-ink-400">制定: 2013年</p>
          </div>

          {/* Design Concept */}
          <div className="mx-auto max-w-2xl space-y-10">
            <div>
              <h2 className="mb-4 flex items-center gap-3 text-xl font-bold text-ink-900">
                <span className="h-6 w-1 rounded-full bg-copper" />
                デザインコンセプト
              </h2>
              <p className="text-ink-500 leading-relaxed">
                医学教育推進センターのロゴマークは、
                暗闇を照らすトーチ（松明）や生命の芽吹きをイメージしたデザインです。
                教育の光を灯し、次世代の医療人を育てるというセンターの使命を象徴しています。
              </p>
            </div>

            {/* Color */}
            <div>
              <h2 className="mb-4 flex items-center gap-3 text-xl font-bold text-ink-900">
                <span className="h-6 w-1 rounded-full bg-copper" />
                カラーについて
              </h2>
              <p className="mb-6 text-ink-500 leading-relaxed">
                菫青（Iolite Blue）を基調としたカラーが使用されています。
                この色は東北大学医学系研究科・医学部のロゴにも採用されている色で、
                知性と信頼を表現しています。
              </p>

              <div className="rounded-xl border border-ink-200/60 bg-white p-6">
                <div className="flex items-center gap-6">
                  <div className="h-20 w-20 shrink-0 rounded-xl bg-copper shadow-lg" />
                  <div>
                    <p className="font-bold text-ink-900">
                      菫青 / Iolite Blue
                    </p>
                    <div className="mt-2 space-y-1 text-sm text-ink-400">
                      <p>HEX: #20528F</p>
                      <p>CMYK: C90 M70 Y20 K0</p>
                      <p>DIC: 255</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
