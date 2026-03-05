import type { NewsItem } from "@/types";

export const newsItems: NewsItem[] = [
  {
    id: "n1",
    date: "2025.02.15",
    category: "news",
    title: "2024年度 Post-CC OSCE を実施しました",
  },
  {
    id: "n2",
    date: "2025.01.20",
    category: "workshop",
    title: "第15回 FDワークショップを開催しました",
  },
  {
    id: "n3",
    date: "2024.12.10",
    category: "award",
    title: "田中教授が医学教育学会優秀演題賞を受賞",
  },
  {
    id: "n4",
    date: "2024.11.25",
    category: "report",
    title: "2024年度 共用試験CBT結果報告",
  },
  {
    id: "n5",
    date: "2024.11.01",
    category: "news",
    title: "医学教育推進センターHPをリニューアルしました",
  },
  {
    id: "n6",
    date: "2024.10.15",
    category: "workshop",
    title: "模擬患者（SP）養成講座 参加者募集のお知らせ",
  },
  {
    id: "n7",
    date: "2024.09.20",
    category: "report",
    title: "2024年度前期 授業評価アンケート結果を公開しました",
  },
  {
    id: "n8",
    date: "2024.09.05",
    category: "award",
    title: "岩﨑講師が日本医学教育学会奨励賞を受賞",
  },
  {
    id: "n9",
    date: "2024.08.01",
    category: "news",
    title: "夏季休業期間中のお問い合わせについて",
  },
  {
    id: "n10",
    date: "2024.07.10",
    category: "workshop",
    title: "第14回 FDワークショップを開催しました",
  },
];

export const categoryLabels: Record<NewsItem["category"], string> = {
  news: "ニュース",
  report: "成果報告",
  award: "受賞・表彰",
  workshop: "研修会",
};
