import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Clock,
  AppWindow,
  BookOpen,
  FileText,
  Activity,
  Scissors,
  ExternalLink,
  HeartHandshake,
  Megaphone,
  Video,
  Notebook,
} from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { Container } from "@/components/ui/Container";
import { MessageCircle } from "lucide-react";
import {
  portalNews,
  portalCategoryLabels,
  portalApps,
  portalResources,
  portalLinks,
  educationSupportItems,
} from "@/data/portal";

export const metadata: Metadata = {
  title: "医学教育ポータルサイト",
};

const portalPages = [
  {
    title: "欠席・遅刻管理アプリ",
    description: "SGT・臨床修練での出欠管理",
    href: "/portal/attendance",
    Icon: Clock,
    color: "bg-amber-50 text-amber-600",
  },
  {
    title: "教育紹介",
    description: "各診療科の教育発表動画",
    href: "/portal/education",
    Icon: Video,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "各種申請",
    description: "教育に関する申請フォーム",
    href: "/portal/applications",
    Icon: FileText,
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    title: "スキルスコープ",
    description: "経験症候・疾患・手技の記録",
    href: "/portal/skillscope",
    Icon: Activity,
    color: "bg-violet-50 text-violet-600",
  },
  {
    title: "クリニカル・スキルスラボ",
    description: "施設案内・利用方法・実施例",
    href: "/portal/skills-lab",
    Icon: Scissors,
    color: "bg-rose-50 text-rose-600",
  },
];

export default function PortalPage() {
  return (
    <>
      <PageHero
        title="医学教育ポータルサイト"
        description="教員向け医学教育リソース・ツール"
        breadcrumbItems={[{ label: "ポータル" }]}
      />

      <section className="py-16">
        <Container>
          {/* ─── コンテンツ ─── */}
          <div className="mb-14">
            <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-ink-900">
              <span className="h-6 w-1 rounded-full bg-copper" />
              コンテンツ
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {portalPages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="group flex items-center gap-4 rounded-2xl border border-ink-200/60 bg-white p-5 transition-all hover:-translate-y-0.5 hover:shadow-md hover:border-copper/30"
                >
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${page.color}`}
                  >
                    <page.Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-base font-bold text-ink-900 group-hover:text-copper transition-colors">
                      {page.title}
                    </p>
                    <p className="text-sm text-ink-400 truncate">
                      {page.description}
                    </p>
                  </div>
                  <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-ink-300 group-hover:text-copper group-hover:translate-x-0.5 transition-all" />
                </Link>
              ))}
            </div>
          </div>

          {/* ─── 最新情報・イベント ─── */}
          <div className="mb-14">
            <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-ink-900">
              <span className="h-6 w-1 rounded-full bg-copper" />
              <Megaphone className="h-5 w-5 text-copper" />
              最新情報・イベント
            </h2>
            <div className="rounded-2xl border border-ink-200/60 bg-white overflow-hidden">
              {portalNews.map((item, i) => (
                <div
                  key={item.id}
                  className={`flex items-start gap-4 p-5 ${
                    i < portalNews.length - 1
                      ? "border-b border-ink-100"
                      : ""
                  }`}
                >
                  <span className="shrink-0 text-sm text-ink-400 font-mono pt-0.5">
                    {item.date}
                  </span>
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-bold ${
                      item.category === "update"
                        ? "bg-copper/10 text-copper"
                        : "bg-terracotta/10 text-terracotta"
                    }`}
                  >
                    {portalCategoryLabels[item.category]}
                  </span>
                  <p className="text-base text-ink-700">{item.title}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-14 lg:grid-cols-2">
            {/* ─── アプリ ─── */}
            <div>
              <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-ink-900">
                <span className="h-6 w-1 rounded-full bg-copper" />
                <AppWindow className="h-5 w-5 text-copper" />
                アプリ
              </h2>
              <div className="space-y-4">
                {portalApps.map((app) => (
                  <a
                    key={app.id}
                    href={app.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block rounded-2xl border border-ink-200/60 bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-md hover:border-copper/30"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                          app.icon === "attendance"
                            ? "bg-amber-50 text-amber-600"
                            : "bg-violet-50 text-violet-600"
                        }`}
                      >
                        {app.icon === "attendance" ? (
                          <Clock className="h-5 w-5" />
                        ) : (
                          <Activity className="h-5 w-5" />
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-ink-900 group-hover:text-copper transition-colors">
                        {app.title}
                      </h3>
                      <ExternalLink className="ml-auto h-4 w-4 text-ink-300 group-hover:text-copper transition-colors" />
                    </div>
                    <p className="text-sm text-ink-500 leading-relaxed">
                      {app.description}
                    </p>
                  </a>
                ))}
              </div>
            </div>

            {/* ─── 教育お役立ちサイト ─── */}
            <div>
              <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-ink-900">
                <span className="h-6 w-1 rounded-full bg-copper" />
                <BookOpen className="h-5 w-5 text-copper" />
                教育お役立ちサイト
              </h2>
              <div className="space-y-4">
                {portalResources.map((res) => (
                  <a
                    key={res.id}
                    href={res.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block rounded-2xl border border-ink-200/60 bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-md hover:border-copper/30"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-ink-50">
                        {res.id === "res1" ? (
                          <Notebook className="h-5 w-5 text-copper" />
                        ) : (
                          <Video className="h-5 w-5 text-copper" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-ink-900 group-hover:text-copper transition-colors">
                          {res.title}
                        </h3>
                        {res.author && (
                          <p className="text-xs text-copper font-medium">
                            {res.author}
                          </p>
                        )}
                      </div>
                      <ExternalLink className="ml-auto h-4 w-4 text-ink-300 group-hover:text-copper transition-colors" />
                    </div>
                    <p className="text-sm text-ink-500 leading-relaxed">
                      {res.description}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ─── 教育の支援をします ─── */}
          <div className="mt-14">
            <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-ink-900">
              <span className="h-6 w-1 rounded-full bg-copper" />
              <HeartHandshake className="h-5 w-5 text-copper" />
              教育の支援をします
            </h2>
            <div className="rounded-2xl border border-ink-200 bg-ink-50 p-8">
              <p className="text-base text-ink-700 mb-4">
                教員の先生方の教育支援を行います。
              </p>
              <ul className="space-y-2 mb-6">
                {educationSupportItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-base text-ink-600">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-copper" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-base text-ink-700 mb-6">
                医学教育推進センターでは、先生方の業務負担軽減、教育の質の向上を目的とした、教育支援を行います。
                <br />
                いつでもご連絡ください。
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-copper px-6 py-2.5 text-sm font-bold text-white hover:bg-copper/90 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                お問い合わせ
              </Link>
            </div>
          </div>

          {/* ─── リンク ─── */}
          <div className="mt-14">
            <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-ink-900">
              <span className="h-6 w-1 rounded-full bg-copper" />
              リンク
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {portalLinks.map((link) => {
                const isExternal = link.href.startsWith("http");
                const Comp = isExternal ? "a" : Link;
                const extraProps = isExternal
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {};
                return (
                  <Comp
                    key={link.id}
                    href={link.href}
                    {...extraProps}
                    className="group flex items-center gap-3 rounded-xl border border-ink-200/60 bg-white px-5 py-4 transition-all hover:border-copper/30 hover:shadow-sm"
                  >
                    <span className="text-base text-ink-700 group-hover:text-copper transition-colors">
                      {link.title}
                    </span>
                    {isExternal ? (
                      <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-ink-300 group-hover:text-copper transition-colors" />
                    ) : (
                      <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-ink-300 group-hover:text-copper transition-colors" />
                    )}
                  </Comp>
                );
              })}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
