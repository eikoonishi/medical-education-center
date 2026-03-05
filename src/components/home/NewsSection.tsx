import { ArrowRight } from "lucide-react";
import { newsItems, categoryLabels } from "@/data/news";

const badgeColors: Record<string, string> = {
  news: "bg-ink-100 text-ink-700",
  report: "bg-ink-100 text-ink-600",
  award: "bg-copper/10 text-copper",
  workshop: "bg-ink-100 text-ink-600",
};

export function NewsSection() {
  return (
    <section className="bg-ink-50 rounded-[2rem] sm:rounded-[3rem] mx-4 sm:mx-6 lg:mx-auto max-w-7xl px-6 sm:px-10 lg:px-14 py-16 md:py-20">
      {/* Header */}
      <div className="flex items-end justify-between mb-8 border-b border-ink-200 pb-4">
        <div>
          <span className="text-xs font-en tracking-[0.2em] text-ink-400 font-bold block uppercase mb-1">
            Updates
          </span>
          <h3 className="text-3xl font-bold text-ink-900 tracking-wide">
            News &amp; Topics
          </h3>
        </div>
        <a
          href="#"
          className="text-sm text-ink-500 hover:text-copper transition flex items-center gap-1 group"
        >
          一覧を見る <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </a>
      </div>

      {/* 4-column grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {newsItems.slice(0, 4).map((item) => (
          <article
            key={item.id}
            className="group cursor-pointer bg-white/80 hover:bg-white rounded-xl p-4 transition-all duration-300 hover:shadow-md"
          >
            <div className="mb-3 flex items-center gap-2">
              <span
                className={`text-xs px-2.5 py-1 rounded-full tracking-wider font-bold ${badgeColors[item.category] || "bg-ink-100 text-ink-600"}`}
              >
                {categoryLabels[item.category]}
              </span>
              <span className="text-sm text-ink-400 font-en">{item.date}</span>
            </div>
            <h4 className="text-base font-medium leading-relaxed group-hover:text-copper transition-colors line-clamp-2">
              {item.title}
            </h4>
          </article>
        ))}
      </div>
    </section>
  );
}
