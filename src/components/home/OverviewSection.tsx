import { BookOpen, Users, FlaskConical } from "lucide-react";

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
      <div className="mb-4">
        <p className="text-xs font-en tracking-[0.2em] uppercase text-ink-400 font-bold mb-4">
          About
        </p>
        <p className="max-w-3xl text-base leading-[2] text-ink-500">
          2002年に「医学教育評価センター」として開設。
          2006年4月に現名称で設置。
          医学教育に関する調査・研究を行い、国内外に情報発信するとともに、
          カリキュラムの編成・運用・評価、改善に向けた提言を行っています。
        </p>
      </div>

      {/* Three pillars */}
      <div className="mt-16 grid gap-6 sm:grid-cols-3">
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
            <p className="mt-3 text-base leading-relaxed text-ink-500">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
