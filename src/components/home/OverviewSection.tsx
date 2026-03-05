import {
  IllustrationBook,
  IllustrationGradCap,
  IllustrationPeople,
  IllustrationMicroscope,
  IllustrationHeart,
  IllustrationDots,
} from "@/components/common/Illustrations";

const pillars = [
  {
    num: "01",
    title: "教育",
    desc: "1年次から6年次までの横断的な教育プログラムの企画・立案・実施",
    Illustration: IllustrationBook,
    accentColor: "text-copper",
    bgAccent: "bg-copper/5",
  },
  {
    num: "02",
    title: "育成",
    desc: "FD/SDワークショップの開催や模擬患者（SP）の養成による教育の質向上",
    Illustration: IllustrationPeople,
    accentColor: "text-terracotta",
    bgAccent: "bg-terracotta/5",
  },
  {
    num: "03",
    title: "評価",
    desc: "共用試験OSCE・CBTの実施と授業評価の集計分析によるエビデンスに基づく改革",
    Illustration: IllustrationMicroscope,
    accentColor: "text-copper-dark",
    bgAccent: "bg-copper-dark/5",
  },
];

export function OverviewSection() {
  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      {/* Floating decorative illustration */}
      <div className="absolute right-8 top-12 hidden lg:block opacity-10">
        <IllustrationHeart className="w-20 h-20 text-terracotta" />
      </div>

      <div className="mb-4 relative">
        <div className="flex items-center gap-3 mb-4">
          <p className="text-xs font-en tracking-[0.2em] uppercase text-copper font-bold">
            About
          </p>
          <IllustrationDots className="w-16 h-3 text-copper/40" />
        </div>
        <p className="max-w-3xl text-base leading-[2] text-ink-600">
          2002年に「医学教育評価センター」として開設。
          2006年4月に現名称で設置。
          医学教育に関する調査・研究を行い、国内外に情報発信するとともに、
          カリキュラムの編成・運用・評価、改善に向けた提言を行っています。
        </p>
      </div>

      {/* Three pillars - warm cards with illustrations */}
      <div className="mt-16 grid gap-6 sm:grid-cols-3">
        {pillars.map((item) => (
          <div
            key={item.num}
            className={`relative bg-white p-8 rounded-2xl border border-ink-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_30px_-8px_rgba(194,109,83,0.12)] transition-all duration-300 hover:-translate-y-1 overflow-hidden group`}
          >
            {/* Warm accent background blob */}
            <div className={`absolute -top-6 -right-6 w-28 h-28 ${item.bgAccent} rounded-full blur-xl opacity-50 group-hover:opacity-80 transition-opacity`} />

            <div className="relative flex items-start justify-between">
              <span className={`text-sm font-en font-bold ${item.accentColor}`}>{item.num}</span>
              <item.Illustration className={`w-10 h-10 ${item.accentColor} opacity-40 group-hover:opacity-70 transition-opacity`} />
            </div>
            <h3 className="relative mt-3 text-2xl font-bold text-ink-900">{item.title}</h3>
            <p className="relative mt-3 text-base leading-relaxed text-ink-600">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Small decorative graduation cap */}
      <div className="flex justify-center mt-10 opacity-15">
        <IllustrationGradCap className="w-8 h-8 text-copper" />
      </div>
    </section>
  );
}
