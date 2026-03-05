export interface NavItem {
  label: string;
  href: string;
}

export interface StaffMember {
  id: string;
  name: string;
  title: string;
  appointmentYear?: number;
  specialty?: string;
  message?: string;
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
