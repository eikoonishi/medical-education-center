import Link from "next/link";
import { ArrowUpRight, ArrowRight, Lock, Stethoscope, Lightbulb, BookOpen, Microscope, GraduationCap, Users } from "lucide-react";

const resources = [
  {
    title: "医学教育を知りたい方へ",
    description: "田中教授による医学教育の哲学と実践知。",
    href: "#",
    cta: "VISIT SITE",
    Icon: Stethoscope,
    dark: false,
  },
  {
    title: "柿坂先生の動画サイト",
    description: "診療参加型臨床実習のための動画ライブラリ。",
    href: "#",
    cta: "WATCH VIDEOS",
    Icon: Lightbulb,
    dark: false,
  },
  {
    title: "医学教育ポータルサイト",
    description: "教員向け。アプリ、教育リソース、申請など。",
    href: "/portal",
    cta: "TEACHERS ONLY",
    Icon: BookOpen,
    dark: true,
  },
  {
    title: "コラム",
    description: "教育現場からの気づきや、最新のトピック。",
    href: "#",
    cta: "READ MORE",
    Icon: Microscope,
    dark: false,
  },
  {
    title: "学生・研修医向け情報",
    description: "学習リソースやキャリア支援情報（準備中）。",
    href: "#",
    cta: "COMING SOON",
    Icon: GraduationCap,
    dark: false,
  },
  {
    title: "リンク集",
    description: "東北大学医学部、関連学会などへのリンク。",
    href: "#",
    cta: "VIEW LINKS",
    Icon: Users,
    dark: false,
  },
];

export function BannerLinks() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      {/* Section heading */}
      <div className="text-center mb-12">
        <span className="text-xs font-en tracking-[0.4em] text-ink-400 font-bold block mb-2 uppercase">
          Discover
        </span>
        <h3 className="text-3xl sm:text-4xl font-bold text-ink-900 tracking-wider font-en">
          Educational Resources
        </h3>
        <div className="flex justify-center mt-3">
          <div className="w-12 h-px bg-ink-200" />
        </div>
        <p className="text-sm text-ink-400 mt-3 tracking-widest">
          医学教育を深めるためのリソースとリンク
        </p>
      </div>

      {/* 6-card grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className={`group relative flex flex-col p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
              item.dark
                ? "bg-ink-900 border-ink-900 shadow-sm hover:shadow-lg"
                : "bg-white border-ink-100 hover:border-ink-300 shadow-sm hover:shadow-md"
            }`}
          >
            {/* Icon */}
            <div className={`mb-5 ${item.dark ? "text-white/40" : "text-ink-300"} group-hover:text-copper transition-colors`}>
              <item.Icon className="w-7 h-7" strokeWidth={1.5} />
            </div>

            <h4
              className={`text-xl font-bold mb-2 transition-colors ${
                item.dark ? "text-white" : "text-ink-900 group-hover:text-copper"
              }`}
            >
              {item.title}
            </h4>
            <p
              className={`text-sm leading-relaxed mb-4 ${
                item.dark ? "text-ink-400" : "text-ink-500"
              }`}
            >
              {item.description}
            </p>

            <span
              className={`mt-auto text-xs font-en font-bold flex items-center gap-1 ${
                item.dark ? "text-white/70" : "text-ink-400 group-hover:text-copper"
              }`}
            >
              {item.cta}
              {item.dark ? (
                <Lock className="w-3 h-3" />
              ) : item.cta === "COMING SOON" || item.cta === "READ MORE" || item.cta === "VIEW LINKS" ? (
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              ) : (
                <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              )}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
