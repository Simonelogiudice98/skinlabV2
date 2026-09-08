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

/* Two mutually exclusive routes through the same plan. Kept apart from
   IncludeItem so the card can never render them as one cumulative list. */
export type Pathway = {
  label: string;
  text: string;
  note?: string;
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
  /** Saving over booking the same treatments individually, rendered under the
      price. Wording is the client's and differs deliberately from card to
      card — never normalise it. */
  savingsNote?: string;
  paragraphs: string[];
  includesHeading: string;
  includes: IncludeItem[];
  sideBox: MetaBox;
}

export interface PlanCard {
  title: string;
  price: string;
  /** Saving over booking the same treatments individually, rendered under the
      price. Wording is the client's and differs deliberately from card to
      card — never normalise it. */
  savingsNote?: string;
  description: string;
  performedWith?: string;
  includesHeading: string;
  /** Present only on plans offering alternative routes; rendered above the
      shared checklist and never merged into it. */
  pathways?: Pathway[];
  includes: IncludeItem[];
  metaBoxes: MetaBox[];
  footerNote?: string;
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

/** A Circle benefit is a title plus one supporting line. */
export interface CircleBenefit {
  title: string;
  description: string;
}

export interface Membership {
  heading: string;
  subtitle: string;
  intro: string[];
  benefitsHeading: string;
  benefits: CircleBenefit[];
  membershipHeading: string;
  membershipText: string;
}

export interface TreatmentsContent {
  signaturePlan: SignaturePlan;
  plansHeading: string;
  plans: PlanCard[];
  sessionsHeading: string;
  sessions: SessionCard[];
  consultation: ConsultationBox;
  membership: Membership;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqClosing {
  title: string;
  text: string;
}

export type PhilosophyPillar = {
  title: string;
  paragraphs: string[];
};

/** One in-page anchor, shared by the header nav and the footer's Explore list
    so the two can never drift apart. */
export interface NavLink {
  href: string;
  label: string;
}

export type ConnectId = "instagram" | "tiktok" | "email";

export interface ConnectLink {
  id: ConnectId;
  label: string;
  href: string;
  /** Social profiles open in a new tab; the mailto: does not. */
  external: boolean;
}

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
