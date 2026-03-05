import { ArrowRight } from "lucide-react";
import { newsItems, categoryLabels } from "@/data/news";
import {
  IllustrationPen,
  IllustrationSpeechBubble,
  IllustrationDots,
} from "@/components/common/Illustrations";

const badgeColors: Record<string, string> = {
  news: "bg-terracotta/10 text-terracotta",
  report: "bg-ink-100 text-ink-600",
  award: "bg-copper/10 text-copper",
  workshop: "bg-copper/10 text-copper-dark",
};

const badgeIllustrations: Record<string, string> = {
  news: "📝",
  report: "📊",
  award: "🏆",
  workshop: "🎓",
};

export function NewsSection() {
  return (
    <section className="relative bg-cafe-warm/40 rounded-[2rem] sm:rounded-[3rem] mx-4 sm:mx-6 lg:mx-auto max-w-7xl px-6 sm:px-10 lg:px-14 py-16 md:py-20">
      {/* Decorative illustrations */}
      <div className="absolute top-8 right-10 hidden md:block opacity-10">
        <IllustrationSpeechBubble className="w-16 h-16 text-copper" />
      </div>
      <div className="absolute bottom-8 left-10 hidden md:block opacity-10">
        <IllustrationPen className="w-12 h-12 text-terracotta rotate-12" />
      </div>

      {/* Header */}
      <div className="flex items-end justify-between mb-8 border-b border-copper/20 pb-4">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <span className="text-xs font-en tracking-[0.2em] text-copper font-bold block uppercase">
              Updates
            </span>
            <IllustrationDots className="w-12 h-3 text-copper/30" />
          </div>
          <h3 className="text-3xl font-bold text-ink-900 tracking-wide">
            News &amp; Topics
          </h3>
        </div>
        <a
          href="#"
          className="text-sm text-ink-600 hover:text-terracotta transition flex items-center gap-1 group"
        >
          一覧を見る <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </a>
      </div>

      {/* 4-column grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {newsItems.slice(0, 4).map((item, index) => (
          <article
            key={item.id}
            className="group cursor-pointer bg-white/60 hover:bg-white rounded-xl p-4 transition-all duration-300 hover:shadow-[0_4px_16px_-4px_rgba(194,109,83,0.1)]"
          >
            <div className="mb-3 flex items-center gap-2">
              <span
                className={`text-xs px-2.5 py-1 rounded-full tracking-wider font-bold ${badgeColors[item.category] || "bg-ink-100 text-ink-600"}`}
              >
                {categoryLabels[item.category]}
              </span>
              <span className="text-sm text-ink-400 font-en">{item.date}</span>
            </div>
            <h4 className="text-base font-medium leading-relaxed group-hover:text-terracotta transition-colors line-clamp-2">
              {item.title}
            </h4>
          </article>
        ))}
      </div>
    </section>
  );
}
