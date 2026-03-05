import type { StaffGroup } from "@/types";

export const staffGroups: StaffGroup[] = [
  {
    groupTitle: "教授",
    members: [
      {
        id: "tanaka",
        name: "田中 淳一",
        title: "教授",
        appointmentYear: 2024,
        specialty: "医学教育学",
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
        id: "iwasaki",
        name: "岩﨑 淳也",
        title: "講師",
        specialty: "医学教育学",
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
