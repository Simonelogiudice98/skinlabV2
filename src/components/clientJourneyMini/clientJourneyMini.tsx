import "./clientJourneyMini.scss";

import PersonRoundedIcon from "@mui/icons-material/PersonRounded";

type Step = {
  title: string;
  desc: string;
  Icon: React.ElementType;
};

/* Ring of dots around a centre dot, as in the client's reference. */
function DotsRingIcon({ className }: { className?: string }) {
  const dots = Array.from({ length: 8 }, (_, i) => {
    const angle = (i * Math.PI) / 4;
    return {
      cx: 12 + Math.cos(angle) * 7,
      cy: 12 + Math.sin(angle) * 7,
    };
  });

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
    >
      {dots.map((d) => (
        <circle key={`${d.cx}-${d.cy}`} cx={d.cx} cy={d.cy} r="1.35" />
      ))}
      <circle cx="12" cy="12" r="1.9" />
    </svg>
  );
}

/* Calendar with a diagonal arrow inside, as in the client's reference. */
function CalendarArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3.5" y="5" width="17" height="15.5" rx="3" />
      <path d="M3.5 9.5h17" />
      <path d="M8 3.5v3M16 3.5v3" />
      <path d="M9.5 17l5-4M14.5 13h-3M14.5 13v3" />
    </svg>
  );
}

const STEPS: Step[] = [
  {
    title: "Consultation",
    desc: "Your journey begins with a comprehensive skin consultation and personalised treatment plan.",
    Icon: PersonRoundedIcon,
  },
  {
    title: "Treatment Plan",
    desc: "Most clients achieve the best and most consistent results through a personalised course of 3–5 treatments, depending on your skin concerns.",
    Icon: DotsRingIcon,
  },
  {
    title: "Maintenance",
    desc: "Once your desired results have been achieved, maintenance treatments are recommended every 2–3 months to help maintain your results and support long term skin health.",
    Icon: CalendarArrowIcon,
  },
  {
    title: "The Medical Skin Lab Circle",
    desc: "Enjoy exclusive member benefits and ongoing clinical support as part of your long term skin journey.",
    Icon: OrbitCircleIcon,
  },
];

/* Orbit circle for the Circle membership card: a hand drawn ring broken by a
   thin gap at the top left, with the stroke overshooting itself along the
   bottom, around three stacked dots. */
function OrbitCircleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={`${className ?? ""} journeyMiniIconOrbit`}
      /* Cropped to the drawing so the thin ring is not padded like the
         filled glyphs are. */
      viewBox="1.6 1.6 21.2 21.3"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
    >
      <path d="M8.72 2.98 A 9.6 9.6 0 1 1 6.49 4.14" strokeWidth="1.3" />
      <path d="M12.89 22.16 A 10.2 10.2 0 0 1 3.17 17.1" strokeWidth="1" />
      <g fill="currentColor" stroke="none">
        <circle cx="12" cy="9.1" r="1.35" />
        <circle cx="12" cy="12" r="1.35" />
        <circle cx="12" cy="14.9" r="1.35" />
      </g>
    </svg>
  );
}

export default function ClientJourneyMini() {
  return (
    <section className="journeyMini" aria-label="Your Skin Journey">
      <h2 className="journeyMiniHeading">Your Skin Journey</h2>

      <div className="journeyMiniGrid">
        {STEPS.map(({ title, desc, Icon }) => (
          <article key={title} className="journeyMiniCard">
            <div className="journeyMiniIcon" aria-hidden="true">
              <Icon className="journeyMiniIconSvg" />
            </div>

            <h3 className="journeyMiniTitle">{title}</h3>
            <div className="journeyMiniDivider" />
            <p className="journeyMiniDesc">{desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
