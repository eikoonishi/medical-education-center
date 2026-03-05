import { BookOpen, Users, FlaskConical, GraduationCap } from "lucide-react";

const pillars = [
  {
    num: "01",
    title: "教育",
    desc: "1年次から6年次までの横断的な教育プログラムの企画・立案・実施",
    Icon: BookOpen,
  },
  {
    num: "02",
    title: "育成",
    desc: "FD/SDワークショップの開催や模擬患者（SP）の養成による教育の質向上",
    Icon: Users,
  },
  {
    num: "03",
    title: "評価",
    desc: "共用試験OSCE・CBTの実施と授業評価の集計分析によるエビデンスに基づく改革",
    Icon: FlaskConical,
  },
];

export function OverviewSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      {/* Section header */}
      <div className="mb-12">
        <p className="text-xs font-en tracking-[0.2em] uppercase text-copper font-bold mb-4">
          About Us
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-ink-900 leading-tight">
          東北大学医学教育推進センターとは
        </h2>
      </div>

      {/* About content card */}
      <div className="rounded-2xl border border-ink-100 bg-cafe-warm/40 p-8 md:p-10 mb-12">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm">
            <GraduationCap className="h-8 w-8 text-copper" />
          </div>
          <div>
            <p className="text-base md:text-lg leading-[2] text-ink-700">
              2002年に「医学教育評価センター」として開設。2006年4月に現名称で設置。医学教育に関する調査・研究を行い、国内外に情報発信するとともに、カリキュラムの編成・運用・評価、改善に向けた提言を行っています。
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full bg-white px-4 py-1.5 text-sm font-medium text-ink-600 shadow-sm">
                カリキュラム開発
              </span>
              <span className="rounded-full bg-white px-4 py-1.5 text-sm font-medium text-ink-600 shadow-sm">
                FD/SD推進
              </span>
              <span className="rounded-full bg-white px-4 py-1.5 text-sm font-medium text-ink-600 shadow-sm">
                共用試験運営
              </span>
              <span className="rounded-full bg-white px-4 py-1.5 text-sm font-medium text-ink-600 shadow-sm">
                シミュレーション教育
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Three pillars */}
      <div className="grid gap-6 sm:grid-cols-3">
        {pillars.map((item) => (
          <div
            key={item.num}
            className="bg-white p-8 rounded-2xl border border-ink-100 hover:border-ink-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
          >
            <div className="flex items-start justify-between">
              <span className="text-sm font-en font-bold text-copper">{item.num}</span>
              <item.Icon className="w-6 h-6 text-ink-300 group-hover:text-copper transition-colors" />
            </div>
            <h3 className="mt-3 text-2xl font-bold text-ink-900">{item.title}</h3>
            <p className="mt-3 text-base leading-relaxed text-ink-600">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
