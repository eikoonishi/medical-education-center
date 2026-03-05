import Link from "next/link";
import { ArrowUpRight, ArrowRight, Lock } from "lucide-react";
import {
  IllustrationStethoscope,
  IllustrationBook,
  IllustrationGradCap,
  IllustrationMicroscope,
  IllustrationPeople,
  IllustrationLightbulb,
  IllustrationDots,
  IllustrationArrowDoodle,
} from "@/components/common/Illustrations";

const resources = [
  {
    title: "医学教育を知りたい方へ",
    description: "田中教授による医学教育の哲学と実践知。",
    href: "#",
    cta: "VISIT SITE",
    Illustration: IllustrationStethoscope,
    accent: "text-copper",
    accentBg: "bg-copper/5",
    hoverBorder: "hover:border-copper/30",
    dark: false,
  },
  {
    title: "柿坂先生の動画サイト",
    description: "診療参加型臨床実習のための動画ライブラリ。",
    href: "#",
    cta: "WATCH VIDEOS",
    Illustration: IllustrationLightbulb,
    accent: "text-terracotta",
    accentBg: "bg-terracotta/5",
    hoverBorder: "hover:border-terracotta/30",
    dark: false,
  },
  {
    title: "医学教育ポータルサイト",
    description: "教員向け。アプリ、教育リソース、申請など。",
    href: "/portal",
    cta: "TEACHERS ONLY",
    Illustration: IllustrationBook,
    accent: "text-white",
    accentBg: "bg-white/5",
    hoverBorder: "",
    dark: true,
  },
  {
    title: "コラム",
    description: "教育現場からの気づきや、最新のトピック。",
    href: "#",
    cta: "READ MORE",
    Illustration: IllustrationMicroscope,
    accent: "text-ink-400 group-hover:text-copper",
    accentBg: "",
    hoverBorder: "hover:border-copper/20",
    dark: false,
  },
  {
    title: "学生・研修医向け情報",
    description: "学習リソースやキャリア支援情報（準備中）。",
    href: "#",
    cta: "COMING SOON",
    Illustration: IllustrationGradCap,
    accent: "text-ink-400 group-hover:text-terracotta",
    accentBg: "",
    hoverBorder: "hover:border-terracotta/20",
    dark: false,
  },
  {
    title: "リンク集",
    description: "東北大学医学部、関連学会などへのリンク。",
    href: "#",
    cta: "VIEW LINKS",
    Illustration: IllustrationPeople,
    accent: "text-ink-400",
    accentBg: "",
    hoverBorder: "hover:border-copper/20",
    dark: false,
  },
];

export function BannerLinks() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative">
      {/* Decorative doodle arrow */}
      <div className="absolute -left-2 top-20 hidden xl:block opacity-10 rotate-45">
        <IllustrationArrowDoodle className="w-16 h-16 text-terracotta" />
      </div>

      {/* Section heading */}
      <div className="text-center mb-12">
        <span className="text-xs font-en tracking-[0.4em] text-copper font-bold block mb-2 uppercase">
          Discover
        </span>
        <h3 className="text-3xl sm:text-4xl font-bold text-ink-900 tracking-wider font-en">
          Educational Resources
        </h3>
        <div className="flex justify-center mt-3">
          <IllustrationDots className="w-20 h-3 text-copper/30" />
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
            className={`group relative flex flex-col p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-1 overflow-hidden ${
              item.dark
                ? "bg-stone-800 border-stone-800 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] hover:shadow-lg"
                : `bg-white border-ink-100 ${item.hoverBorder} shadow-[0_10px_40px_-10px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_-10px_rgba(194,109,83,0.12)]`
            }`}
          >
            {/* Decorative corner */}
            {item.accentBg && (
              <div
                className={`absolute top-0 right-0 w-28 h-28 ${item.accentBg} rounded-bl-[4rem] -mr-4 -mt-4 transition-transform group-hover:scale-110`}
              />
            )}

            {/* Hand-drawn illustration - larger and more prominent */}
            <div className={`mb-5 ${item.dark ? "text-white/50" : "text-ink-300"} group-hover:animate-wiggle transition-colors`}>
              <item.Illustration className="w-10 h-10" />
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
                item.dark ? "text-ink-400" : "text-ink-600"
              }`}
            >
              {item.description}
            </p>

            <span
              className={`mt-auto text-xs font-en font-bold flex items-center gap-1 ${item.accent}`}
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
