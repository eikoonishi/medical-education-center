// Portal site data - migrated from Google Sites

export interface PortalNewsItem {
  id: string;
  date: string;
  category: "update" | "notice";
  title: string;
}

export interface PortalApp {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: "attendance" | "skillscope";
}

export interface PortalResource {
  id: string;
  title: string;
  description: string;
  href: string;
  author?: string;
}

export interface PortalLink {
  id: string;
  title: string;
  href: string;
}

export interface EducationPresentation {
  id: string;
  year: number;
  department: string;
  presenter: string;
  href: string;
}

export interface SkillsLabExample {
  id: string;
  department: string;
  activities: {
    day: string;
    description: string;
    equipment: string;
  }[];
}

export interface ApplicationForm {
  id: string;
  title: string;
  description: string;
  href: string;
}

// ── ポータルニュース ──
export const portalNews: PortalNewsItem[] = [
  {
    id: "pn1",
    date: "2026.02.20",
    category: "update",
    title: "スキルスコープ使用方法アップしました",
  },
  {
    id: "pn2",
    date: "2026.02.17",
    category: "update",
    title: "欠席アプリの使用方法のリンクを貼りました。",
  },
  {
    id: "pn3",
    date: "2026.01.16",
    category: "notice",
    title:
      "医学系研究科・医学部事務案内サイトをリンクしました。事務手続きなどは、ここを見れば分かります。",
  },
  {
    id: "pn4",
    date: "2026.01.14",
    category: "update",
    title: "ポータルサイトを更新しました。",
  },
];

export const portalCategoryLabels: Record<PortalNewsItem["category"], string> =
  {
    update: "更新履歴",
    notice: "お知らせ",
  };

// ── アプリ ──
export const portalApps: PortalApp[] = [
  {
    id: "app1",
    title: "欠席・遅刻管理",
    description:
      "SGTと臨床修練での欠席・遅刻を診療科で登録。リアルタイムで共有し、早期介入を支援。",
    href: "https://www.appsheet.com/start/432b472d-d978-436f-89ab-bfada9eb14f2",
    icon: "attendance",
  },
  {
    id: "app2",
    title: "スキルスコープ",
    description:
      "臨床実習で経験した症候・疾患・手技を記録・可視化するスキルログアプリ。",
    href: "https://www.appsheet.com/start/b9a661d4-1268-4672-9138-c8a98ffe62e5",
    icon: "skillscope",
  },
];

// ── 教育お役立ちサイト ──
export const portalResources: PortalResource[] = [
  {
    id: "res1",
    title: "医学教育を知りたい人への資料集",
    description:
      "医学教育に関心のある教員、医療従事者のための資料集です。医学教育の情報が網羅されています。",
    href: "https://tohokugp.padlet.org/TohokuMedEd/padlet-4ths14v2ixbph5lq",
    author: "田中教授",
  },
  {
    id: "res2",
    title: "柿坂庸介チャンネル",
    description: "論文の書き方、症例報告の書き方など動画で解説。",
    href: "https://youtube.com/channel/UCekdW1IXPM5WKrpoMU49yUQ?si=-w7L0Uiqlfjykx9s",
    author: "柿坂准教授",
  },
];

// ── リンク集 ──
export const portalLinks: PortalLink[] = [
  {
    id: "link1",
    title: "東北大学医学教育推進センター",
    href: "/",
  },
  {
    id: "link2",
    title: "東北大学医学部教室員会",
    href: "https://www.med.tohoku.ac.jp/faculty/index.html",
  },
  {
    id: "link3",
    title: "東北大学医学部",
    href: "https://www.med.tohoku.ac.jp/",
  },
  {
    id: "link4",
    title: "東北大学病院",
    href: "https://www.hosp.tohoku.ac.jp/",
  },
  {
    id: "link5",
    title: "東北大学クリニカル・スキルスラボ",
    href: "https://www.skillslab.med.tohoku.ac.jp/",
  },
  {
    id: "link6",
    title: "医学系研究科・医学部 事務手続き案内",
    href: "https://www.med.tohoku.ac.jp/admini/index.html",
  },
];

// ── 教育紹介（教育意見交換会での教育発表動画）──
export const educationPresentations: EducationPresentation[] = [
  {
    id: "edu1",
    year: 2024,
    department: "脳神経内科",
    presenter: "西山 修平 先生",
    href: "#",
  },
  {
    id: "edu2",
    year: 2024,
    department: "総合外科 乳腺・内分泌グループ",
    presenter: "江幡 明子 先生",
    href: "#",
  },
  {
    id: "edu3",
    year: 2024,
    department: "鳥取大学医学部附属病院女性診療科群",
    presenter: "小松 宏彰 先生",
    href: "#",
  },
  {
    id: "edu4",
    year: 2023,
    department: "呼吸器内科",
    presenter: "村上 康司 先生",
    href: "#",
  },
  {
    id: "edu5",
    year: 2023,
    department: "放射線診断科",
    presenter: "高瀬　圭 教授",
    href: "#",
  },
];

// ── 各種申請 ──
export const applicationForms: ApplicationForm[] = [
  {
    id: "form1",
    title: "アンプロフェッショナルな学生の評価",
    description:
      "分野・診療科での講義や実習に際し、問題のある学生について申請ください。",
    href: "https://forms.gle/YfChmQi7cYYXx6So6",
  },
];

// ── 教育支援 ──
export const educationSupportItems = [
  "教育方法やカリキュラムのご相談",
  "教育ツールのご相談（動画制作、スキルスラボへの依頼、教材作成、AIなど）",
  "教育に関する研究を行いたい、論文を書きたい",
];

export const educationSupportFormUrl =
  "https://docs.google.com/forms/d/e/example/viewform";

// ── クリニカル・スキルスラボ ──
export const skillsLabExamples: SkillsLabExample[] = [
  {
    id: "sl1",
    department: "麻酔科学・周術期医学分野",
    activities: [
      {
        day: "月曜日",
        description:
          "気管挿管、脊髄くも膜下麻酔トレーニングを病ラボ（病院地下1階）で実施。",
        equipment:
          "挿管人形、喉頭鏡（ビデオ喉頭鏡もあります）、挿管チューブなど（挿管道具一式あります）。ルンバール人形、脊髄くも膜下麻酔、硬膜外麻酔の道具一式。",
      },
      {
        day: "金曜日",
        description:
          "最終日に学生だけで全身麻酔管理を行う。スキルスラボ（艮陵会館4階）の高機能シミュレータ（HPS）を用いて行う。",
        equipment:
          "HPS、麻酔器、プロジェクター（マネキンの腹部に手術動画を投影）、タブレット（学生用麻酔記録）、麻酔薬、輸液など。",
      },
    ],
  },
];
