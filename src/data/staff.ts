import type { StaffGroup } from "@/types";

export const staffGroups: StaffGroup[] = [
  {
    groupTitle: "教授",
    members: [
      {
        id: "tanaka",
        name: "田中 淳一",
        nameEn: "Jun-ichi TANAKA",
        degree: "MD, PhD",
        title: "教授",
        appointmentYear: 2024,
        specialty: "医学教育学",
        qualifications: [
          "医学博士",
          "日本内科学会　総合内科専門医",
          "日本呼吸器学会　呼吸器専門医",
          "日本プライマリ・ケア連合学会　プライマリケア認定医",
          "日本医学教育学会　認定医学教育専門家",
          "臨床研修指導医",
          "共用試験実施評価機構　医学系臨床実習前OSCE認定評価者（医療面接）",
          "共用試験実施評価機構　医学系臨床実習前OSCE認定評価者（胸部）",
          "共用試験実施評価機構　医学系臨床実習前OSCE認定評価者（全身状態とバイタルサイン）",
          "共用試験実施評価機構　医学系臨床実習後OSCE認定評価者",
          "共用試験実施評価機構　標準模擬患者養成担当者",
        ],
        career: [
          { year: "2004年", description: "新潟大学医学部　卒業" },
          { year: "2004年", description: "新潟県立新発田病院　初期研修" },
          { year: "2007年", description: "新潟大学第二内科　入局" },
          { year: "2011年", description: "新潟県立新発田病院　呼吸器内科" },
          { year: "2012年", description: "東北大学病院　総合地域医療教育支援部　助手" },
          { year: "2013年", description: "東北大学病院　総合地域医療教育支援部　助教" },
          { year: "2021年", description: "東北大学大学院医学系研究科医学教育推進センター　講師" },
          { year: "2024年", description: "東北大学大学院医学系研究科医学教育推進センター　教授" },
        ],
        societies: [
          "日本内科学会　J-OSLER検討委員会",
          "日本内科学会　地域医療ワーキンググループ",
          "日本医学教育学会　代議員",
          "日本医学教育学会　地域医療教育部会",
          "日本医学教育学会　学術大会運営委員会",
          "日本医学教育学会　医学教育サイバーシンポジウム特別委員会",
        ],
        awards: [
          { year: "2018年", description: "医学系研究科教育貢献賞" },
        ],
      },
    ],
  },
  {
    groupTitle: "准教授",
    members: [
      {
        id: "saiki",
        name: "齋木 由利子",
        title: "准教授",
        specialty: "医学教育学",
      },
      {
        id: "kakisaka",
        name: "柿坂 庸介",
        title: "准教授",
        appointmentYear: 2024,
        specialty: "医学教育学",
      },
    ],
  },
  {
    groupTitle: "講師",
    members: [
      {
        id: "onishi",
        name: "大西 詠子",
        title: "講師",
        appointmentYear: 2025,
        specialty: "麻酔科学",
        imageUrl: "/images/staff/onishi.png",
      },
    ],
  },
  {
    groupTitle: "非常勤講師",
    members: [
      {
        id: "kagaya",
        name: "加賀谷 豊",
        title: "非常勤講師",
      },
      {
        id: "ishii",
        name: "石井 誠一",
        title: "非常勤講師",
      },
    ],
  },
  {
    groupTitle: "事務スタッフ",
    members: [
      {
        id: "tech-staff",
        name: "技術職員",
        title: "技術職員（2名）",
      },
      {
        id: "admin-staff",
        name: "事務補佐員",
        title: "事務補佐員（4名）",
      },
    ],
  },
];
