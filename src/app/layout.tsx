import type { Metadata } from "next";
import { Zen_Kaku_Gothic_New } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const zenKaku = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-zen-kaku",
});

export const metadata: Metadata = {
  title: {
    template: "%s | 東北大学 医学教育推進センター",
    default: "東北大学 医学教育推進センター",
  },
  description:
    "東北大学大学院医学系研究科 医学教育推進センターの公式ウェブサイト。医学教育に関する調査・研究を行い、カリキュラムの編成・運用・評価、改善に向けた提言を行っています。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className={`${zenKaku.variable} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
