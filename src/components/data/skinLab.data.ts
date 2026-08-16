import type {
  Concern,
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
  {
    title: "Rosacea",
    description:
      "Rosacea requires a sensitive, clinical approach to reduce redness, inflammation and flare ups. We focus on calming reactive skin, strengthening the barrier and stabilising triggers.",
    treatments: [
      "Sensitive skin Peels",
      "Barrier repair protocols",
      "Clinical guidance",
    ],
  },
];

export const treatmentsContent: TreatmentsContent = {
  signaturePlan: {
    badge: "Signature Treatment Plan",
    title: "Complete Skin Transformation Plan",
    price: "£1,350",
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
      price: "£540",
      description:
        "Designed for mild hyperpigmentation, post inflammatory pigmentation and uneven skin tone.",
      includesHeading: "Includes:",
      includes: [
        {
          text: "4 Clinical Chemical Peel sessions",
          note: "Each peel is individually selected and adjusted throughout your plan based on your skin's progress",
        },
        { text: "Personalised treatment plan" },
        { text: "Progress reviews" },
        { text: "Homecare recommendations" },
      ],
      metaBoxes: [
        { heading: "Treatment Frequency", lines: ["Every 3–4 weeks"] },
        { heading: "Treatment Plan", lines: ["4 treatments"] },
      ],
      footerNote:
        "Most clients see significant improvement after 3–5 treatments. Your treatment plan will be tailored during your consultation.",
    },
    {
      title: "Acne Scar Plan",
      price: "£585",
      description:
        "Designed for mild to moderate acne scarring, enlarged pores and uneven skin texture.",
      performedWith:
        "Performed using the Mesoestetic Axion Professional Microneedling System.",
      includesHeading: "Includes:",
      includes: [
        {
          text: "3 Clinical Microneedling treatments",
          note: "Includes treatment of the face and neck",
        },
        { text: "Personalised treatment plan" },
        { text: "Progress reviews" },
        { text: "Homecare recommendations" },
      ],
      metaBoxes: [
        { heading: "Treatment Frequency", lines: ["Every 4–6 weeks"] },
        { heading: "Treatment Plan", lines: ["3 treatments"] },
      ],
      footerNote:
        "Based on your skin assessment, an additional 1–2 treatments may be recommended to achieve optimal results, in line with Mesoestetic treatment protocols.",
    },
    {
      title: "Advanced Scar Revision Plan",
      price: "£760",
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

  plansBenefits: {
    heading: "Preferred Client Benefits",
    subtitle: "Clients who complete a Skin Treatment Plan receive:",
    items: [
      "10% Preferred Client Rate on all future individual maintenance treatments",
      "Ongoing clinical skin reviews",
      "Personalised homecare recommendations",
      "Priority booking for maintenance appointments",
    ],
  },

  sessionsHeading: "Single Treatment Sessions",
  sessions: [
    {
      title: "Clinical Chemical Peel",
      price: "£140",
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
      price: "£200",
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

  infoLists: [
    {
      heading: "Why choose The Medical Skin Lab?",
      items: [
        "Registered Nurse led Skin Clinic",
        "Specialist in Acne Scarring & Hyperpigmentation",
        "Medical grade Mesoestetic products",
        "Mesoestetic Axion Professional Microneedling System",
        "Every chemical peel is tailored to your skin on the day of treatment",
        "Crystal Fibre Mask included with every chemical peel",
        "Face and neck included with every microneedling treatment",
        "Evidence based Mesoestetic treatment protocols",
      ],
    },
  ],

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
      "10% Member Pricing on all individual maintenance treatments",
      "Complimentary Annual Clinical Skin Review",
      "Priority Booking for maintenance appointments",
      "Personalised Homecare Recommendations",
      "Birthday Glow Gift",
      "Exclusive Christmas Thank You Gift",
      "Complimentary Progress Photography during your maintenance appointments",
    ],
    membershipHeading: "Membership",
    membershipText:
      "Membership is complimentary and exclusively available to clients who successfully complete a Medical Skin Lab Skin Treatment Plan.",
  },
};
