export interface NavItem {
  label: string;
  href: string;
}

export interface StaffMember {
  id: string;
  name: string;
  nameEn?: string;
  degree?: string;
  title: string;
  appointmentYear?: number;
  specialty?: string;
  message?: string;
  imageUrl?: string;
  qualifications?: string[];
  career?: { year: string; description: string }[];
  societies?: string[];
  awards?: { year: string; description: string }[];
  links?: { label: string; url: string }[];
}

export interface StaffGroup {
  groupTitle: string;
  members: StaffMember[];
}

export interface BusinessCategory {
  id: string;
  number: string;
  title: string;
  yearRange?: string;
  description: string;
  details: string[];
}

export interface NewsItem {
  id: string;
  date: string;
  category: "news" | "report" | "award" | "workshop";
  title: string;
}

export interface ResearchItem {
  id: string;
  year: number;
  authors: string;
  title: string;
  journal: string;
  doi?: string;
}
