export interface Concern  {
  title: string;
  description: string;
  treatments: string[];
};

export type Price = {
  label: string;   
  note?: string;   
};

export type TreatmentPackage = {
  name: string;    
  details?: string; 
  price: string;   
};

export type Bullet = {
  bold?: string;
  text: string;
};

export type IncludeItem = {
  text: string;
  note?: string;
  strong?: boolean;
};

export type MetaBox = {
  heading: string;
  lines: string[];
  note?: string;
};

export interface SignaturePlan {
  badge: string;
  title: string;
  price: string;
  paragraphs: string[];
  includesHeading: string;
  includes: IncludeItem[];
  sideBox: MetaBox;
}

export interface PlanCard {
  title: string;
  price: string;
  description: string;
  performedWith?: string;
  includesHeading: string;
  includes: IncludeItem[];
  metaBoxes: MetaBox[];
  footerNote: string;
}

export interface SessionCard {
  title: string;
  price: string;
  description: string;
  includesHeading: string;
  includes: IncludeItem[];
  highlightNote?: string;
  duration: string;
}

export interface ConsultationBox {
  title: string;
  price: string;
  description: string;
  boldNote: string;
}

export interface InfoList {
  heading: string;
  subtitle?: string;
  items: string[];
}

export interface Membership {
  heading: string;
  subtitle: string;
  intro: string[];
  benefitsHeading: string;
  benefits: string[];
  membershipHeading: string;
  membershipText: string;
}

export interface TreatmentsContent {
  signaturePlan: SignaturePlan;
  plansHeading: string;
  plans: PlanCard[];
  plansBenefits: InfoList;
  sessionsHeading: string;
  sessions: SessionCard[];
  consultation: ConsultationBox;
  infoLists: InfoList[];
  membership: Membership;
}

export type PhilosophyPillar = {
  title: string;
  paragraphs: string[];
};

export interface SmartImageProps  {
 avif?: string;
  webp?: string;
  src: string;       
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
};