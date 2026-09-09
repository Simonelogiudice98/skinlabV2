import type {
  Concern,
  ConnectLink,
  FaqClosing,
  FaqItem,
  NavLink,
  PhilosophyPillar,
  TreatmentsContent,
} from "../../interfaces/skinLab.types.ts";

export const philosophy: PhilosophyPillar[] = [
  {
    title: "Science.",
    paragraphs: [
      "We believe your skin deserves more than guesswork.",
      "Our treatments are guided by clinical assessment and evidence based Mesoestetic protocols, with every treatment selected according to your individual skin and its needs.",
    ],
  },
  {
    title: "Care.",
    paragraphs: [
      "Your skin is not treated in isolation.",
      "We take the time to understand your concerns, prepare your skin appropriately and support you throughout your treatment journey.",
      "As your skin changes, your treatment plan can change with it.",
    ],
  },
  {
    title: "Results.",
    paragraphs: [
      "We focus on meaningful, progressive results rather than quick fixes.",
      "Our aim is not simply to treat your skin today, but to help you build healthier skin and maintain your results through personalised treatment, appropriate homecare and ongoing clinical support.",
    ],
  },
];

export const concerns: Concern[] = [
  {
    title: "Hyperpigmentation",
    description:
      "Uneven skin tone, sun damage, dark marks and melasma can affect confidence and overall complexion. We use targeted, medical grade solutions to improve pigmentation while supporting the skin barrier.",
    treatments: [
      "Chemical Peels",
      "Microneedling",
      "Personalised homecare plan",
    ],
  },
  {
    title: "Acne Scarring",
    description:
      "Post acne texture, pitting and dark marks can be improved through collagen stimulation and resurfacing. We create structured plans that rebuild the skin from within for smoother, refined texture.",
    treatments: ["Microneedling", "Chemical Peels", "Targeted resurfacing"],
  },
];

export const treatmentsContent: TreatmentsContent = {
  signaturePlan: {
    badge: "Signature Treatment Plan",
    title: "Complete Skin Transformation Plan",
    price: "£2,050",
    savingsNote: "Save £450 compared with individual treatment",
    paragraphs: [
      "Our most comprehensive treatment plan combines clinical microneedling and medical grade chemical peels to improve acne scarring, hyperpigmentation and uneven skin texture.",
      "Using evidence based Mesoestetic treatment protocols, your plan is tailored to your individual skin concerns to achieve safe, long lasting results.",
    ],
    includesHeading: "Includes:",
    includes: [
      { text: "4 Clinical Microneedling treatments" },
      {
        text: "4 Clinical Chemical Peel sessions",
        note: "Each peel is individually selected and adjusted throughout your treatment plan based on your skin's progress",
      },
      { text: "Personalised treatment planning" },
      { text: "Progress photography" },
      { text: "Clinical reviews" },
      { text: "Homecare recommendations" },
    ],
    sideBox: {
      heading: "Treatment Plan",
      lines: ["8 treatments", "(4 microneedling & 4 chemical peel sessions)"],
      note: "Additional treatments may be recommended depending on your skin goals.",
    },
  },

  plansHeading: "Skin Treatment Plans",
  plans: [
    {
      title: "Skin Clarity Plan",
      price: "£750",
      savingsNote: "Save £75 compared with individual treatments",
      description:
        "Designed for mild hyperpigmentation, post inflammatory pigmentation and uneven skin tone.",
      includesHeading: "Includes:",
      includes: [
        {
          text: "3 Clinical Chemical Peel sessions",
          note: "Each peel is individually selected and adjusted throughout your plan based on your skin's progress",
        },
        { text: "Personalised treatment plan" },
        { text: "Progress reviews" },
        { text: "Homecare recommendations" },
      ],
      metaBoxes: [
        { heading: "Treatment Frequency", lines: ["Every 3–4 weeks"] },
        { heading: "Treatment Plan", lines: ["3 treatments"] },
      ],
      footerNote:
        "Most clients see significant improvement after 3–5 treatments. Your treatment plan will be tailored during your consultation.",
    },
    {
      title: "Skin Renewal Plan",
      price: "£950",
      savingsNote: "Save up to £150 compared with individual treatments",
      description:
        "A tailored treatment programme designed to improve skin quality, with your pathway selected according to your individual skin assessment and goals.",
      includesHeading: "Includes:",
      /* Two routes, one plan. They are alternatives, never cumulative, which
         is why they live outside `includes` — the checklist below is what both
         routes share. */
      pathways: [
        {
          label: "Peel Pathway",
          text: "4 Clinical Chemical Peel sessions",
          note: "Each peel is individually selected and adjusted throughout your plan based on your skin's response.",
        },
        {
          label: "Microneedling Pathway",
          text: "3 Clinical Microneedling treatments",
          note: "Includes treatment of the face + neck.",
        },
      ],
      includes: [
        { text: "Personalised treatment plan" },
        { text: "Progress reviews" },
        { text: "Homecare recommendations" },
      ],
      metaBoxes: [
        {
          heading: "Treatment Frequency",
          lines: ["Every 3–6 weeks"],
          note: "Treatment intervals are tailored to your skin, treatment pathway and response.",
        },
        {
          heading: "Treatment Plan",
          lines: ["4 Clinical Peels or 3 Microneedling Treatments"],
          note: "Your recommended pathway will be determined following your clinical skin assessment.",
        },
      ],
    },
    {
      title: "Intensive Skin Renewal",
      price: "£1,250",
      savingsNote: "Save £150 compared with individual treatments",
      description:
        "Designed for moderate to advanced acne scarring and textural concerns.",
      performedWith:
        "Performed using the Mesoestetic Axion Professional Microneedling System.",
      includesHeading: "Includes:",
      includes: [
        {
          text: "4 Clinical Microneedling treatments",
          note: "Includes treatment of the face and neck",
        },
        { text: "Personalised treatment plan" },
        { text: "Progress reviews" },
        { text: "Homecare recommendations" },
      ],
      metaBoxes: [
        { heading: "Treatment Frequency", lines: ["Every 4–6 weeks"] },
        { heading: "Treatment Plan", lines: ["4 treatments"] },
      ],
      footerNote:
        "Some clients may benefit from a fifth treatment depending on scar severity and treatment response.",
    },
  ],

  sessionsHeading: "Single Treatment Sessions",
  sessions: [
    {
      title: "Clinical Chemical Peel",
      price: "£275",
      description:
        "Every treatment begins with a skin assessment to determine the most appropriate Mesoestetic peel for your skin on the day of treatment. As your skin improves, your peel protocol may be adjusted to ensure you continue achieving the best possible results.",
      includesHeading: "Includes:",
      includes: [
        { text: "Double cleanse" },
        { text: "Clinical skin preparation" },
        { text: "Bespoke Mesoestetic peel (selected for your skin on the day)" },
        { text: "Crystal Fibre Mask" },
        { text: "Fast Skin Repair" },
        { text: "SPF 50 protection" },
      ],
      duration: "Treatment time: 60 minutes",
    },
    {
      title: "Clinical Microneedling",
      price: "£350",
      description:
        "Performed using the Mesoestetic Axion Professional Microneedling System to improve acne scarring, pigmentation and skin texture through collagen stimulation.",
      includesHeading: "Includes:",
      includes: [
        { text: "Double cleanse" },
        { text: "Clinical skin preparation" },
        { text: "Professional Mesoestetic solution" },
        { text: "Face and neck treatment" },
        { text: "Personalised aftercare" },
      ],
      highlightNote:
        "Every microneedling treatment includes treatment of the face and neck at no additional cost.",
      duration: "Treatment time: 75 minutes",
    },
  ],

  consultation: {
    title: "Skin Consultation",
    price: "£50",
    description:
      "Your skin journey begins with a comprehensive consultation. We'll assess your skin concerns, review your medical history and create a personalised treatment plan tailored to your goals.",
    boldNote:
      "Consultation fee redeemable against treatment or plan booked within 30 days.",
  },

  membership: {
    heading: "The Medical Skin Lab Circle",
    subtitle:
      "Exclusive membership for clients who complete a Skin Treatment Plan.",
    intro: [
      "Your treatment plan is just the beginning.",
      "Once you've completed your personalised Skin Treatment Plan, you'll be welcomed into The Medical Skin Lab Circle our exclusive membership designed to support your skin long after your treatment plan ends.",
    ],
    benefitsHeading: "As a Circle Member, you'll enjoy:",
    benefits: [
      {
        title: "10% Member Pricing",
        description: "Receive 10% off future individual maintenance treatments.",
      },
      {
        title: "Complimentary Annual Clinical Skin Review",
        description:
          "A yearly opportunity to reassess your skin and treatment needs.",
      },
      {
        title: "Priority Booking",
        description: "Priority access to maintenance appointments.",
      },
      {
        title: "Personalised Homecare Recommendations",
        description:
          "Ongoing guidance to help support your results at home.",
      },
      {
        title: "Complimentary Progress Photography",
        description:
          "Track your skin's progress during maintenance appointments.",
      },
      {
        title: "Birthday Skin Gift",
        description: "A little something from us on your birthday.",
      },
      {
        title: "Exclusive Christmas Thank You Gift",
        description:
          "A seasonal thank you for being part of the Medical Skin Lab Circle.",
      },
    ],
    membershipHeading: "Membership",
    membershipText:
      "Membership is complimentary and exclusively available to clients who successfully complete a Medical Skin Lab Skin Treatment Plan.",
  },
};

export const faqItems: FaqItem[] = [
  {
    question: "Do I need a consultation before treatment?",
    answer:
      "Yes. Every client begins with a consultation so we can understand your skin, medical history and goals before recommending treatment.",
  },
  {
    question: "How do I know which treatment is right for me?",
    answer:
      "You don't need to choose. We'll assess your skin and recommend the most appropriate treatment or combination based on your individual needs.",
  },
  {
    question: "How many treatments will I need?",
    answer:
      "This depends on your skin and goals. Your recommended number and frequency of treatments will be discussed during your consultation.",
  },
  {
    question: "Which chemical peel will I receive?",
    answer:
      "Your peel is selected according to your skin's condition and goals. This may change throughout your treatment journey as your skin changes.",
  },
  {
    question: "Does microneedling include the neck?",
    answer:
      "Yes. The face and neck are included in every Clinical Microneedling treatment at no additional cost.",
  },
  {
    question: "Is there any downtime?",
    answer:
      "Downtime varies depending on the treatment and your individual response. You'll receive personalised aftercare guidance to support your skin's recovery.",
  },
  {
    question: "Can I have treatment if I'm using active skincare?",
    answer:
      "This depends on the products you're using. We'll review your current skincare and advise you on anything that may need to be paused.",
  },
  {
    question: "What happens after I complete my treatment plan?",
    answer:
      "You may be invited to join The Medical Skin Lab Circle, our complimentary maintenance programme designed to support your skin beyond your initial treatment journey.",
  },
];

export const faqClosing: FaqClosing = {
  title: "Still not sure what's right for your skin?",
  text: "You don't need to know which treatment to book. We'll assess your skin and create a plan around you.",
};

/* One list of in-page anchors for the whole site. The footer shows all six;
   the header drops Home because the logo already does that job. */
export const exploreLinks: NavLink[] = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#concerns", label: "Skin Concerns" },
  { href: "#treatments", label: "Treatments" },
  { href: "#journey", label: "Your Skin Journey" },
  { href: "#faq", label: "FAQs" },
];

export const headerNavLinks: NavLink[] = exploreLinks.filter(
  (link) => link.label !== "Home",
);

/* The trailing underscore exists on the TikTok handle only — the Instagram
   handle does not have one. Do not normalise the two. */
export const connectLinks: ConnectLink[] = [
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/themedicalskinlab",
    external: true,
  },
  {
    id: "tiktok",
    label: "TikTok",
    href: "https://www.tiktok.com/@themedicalskinlab_",
    external: true,
  },
  {
    id: "email",
    label: "Email",
    href: "mailto:themedicalskinlab@gmail.com",
    external: false,
  },
];
