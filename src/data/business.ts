import type { BusinessCategory } from "@/types";

export const businessCategories: BusinessCategory[] = [
  {
    id: "cross-education",
    number: "Ⅰ",
    title: "横断的教育の企画・立案・実施",
    yearRange: "1〜6年次",
    description:
      "医学部の各学年にわたる横断的な教育プログラムの企画・立案・実施を行います。",
    details: [
      "医療面接や身体診察などの基本的臨床技能の教育",
      "テュートリアル教育の運営・支援",
      "多職種連携教育（IPE）の企画・実施",
      "地域医療実習の運営",
      "臨床実習前の準備教育（Pre-CC OSCE対策）",
      "診療参加型臨床実習（クリニカル・クラークシップ）の支援",
    ],
  },
  {
    id: "osce-cbt",
    number: "Ⅱ",
    title: "共用試験OSCE・CBTの実施",
    description:
      "全国の医学部で統一的に実施される共用試験（OSCE・CBT）の学内運営を担当します。",
    details: [
      "共用試験OSCE（客観的臨床能力試験）の企画・運営",
      "共用試験CBT（Computer Based Testing）の実施",
      "Post-CC OSCE（臨床実習後OSCE）の運営",
      "評価者（教員・模擬患者）のトレーニング",
      "試験結果の分析とフィードバック",
    ],
  },
  {
    id: "evaluation",
    number: "Ⅲ",
    title: "授業・実習の評価および学生評価の集計",
    description:
      "教育の質を保証するため、授業評価アンケートの実施・集計や学生の成績管理を行います。",
    details: [
      "授業評価アンケートの設計・実施・集計",
      "学生による授業評価の分析とフィードバック",
      "学生の成績評価データの集計・管理",
      "教育プログラムの評価指標の開発",
    ],
  },
  {
    id: "reform",
    number: "Ⅳ",
    title: "教育改革",
    description:
      "国内外の医学教育の動向を踏まえ、カリキュラムの改善や新たな教育手法の導入を推進します。",
    details: [
      "カリキュラムの編成・運用・評価",
      "モデル・コア・カリキュラムへの対応",
      "アクティブラーニングの推進",
      "教育方法・評価法の改善提案",
      "他大学との教育連携",
    ],
  },
  {
    id: "fd-sd",
    number: "Ⅴ",
    title: "教員教育の実施（FD/SD）",
    description:
      "教員の教育能力向上のため、Faculty Development（FD）やStaff Development（SD）プログラムを企画・実施します。",
    details: [
      "FDワークショップの企画・運営",
      "教育スキル向上のための研修会",
      "新任教員向けオリエンテーション",
      "教育に関する個別コンサルテーション",
    ],
  },
  {
    id: "sp",
    number: "Ⅵ",
    title: "模擬患者（SP）の養成",
    description:
      "医療面接やOSCEで活躍する模擬患者（Simulated Patient）の養成・管理を行います。",
    details: [
      "模擬患者（SP）の募集・養成",
      "SPトレーニングプログラムの開発・実施",
      "OSCE・臨床実習へのSP派遣調整",
      "SPのパフォーマンス評価とフィードバック",
    ],
  },
  {
    id: "health-science",
    number: "Ⅶ",
    title: "保健学科との教育の企画・立案・実践",
    description:
      "医学科と保健学科の連携教育を推進し、多職種連携の基盤を構築します。",
    details: [
      "医学科・保健学科合同授業の企画",
      "多職種連携教育（IPE）プログラムの開発",
      "合同シミュレーション演習の実施",
      "学科間の教育連携に関する調査・研究",
    ],
  },
];
