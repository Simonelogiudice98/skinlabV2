import SectionTitle from "../sectionTitle/sectionTitle";
import styles from "./treatments.module.scss";
import type {
  CircleBenefit,
  IncludeItem,
  Membership,
  MetaBox,
  Pathway,
  TreatmentsContent,
} from "../../interfaces/skinLab.types";
import BookConsultationButton from "../bookConsultationButton/BookConsultationButton";
import Faq from "../faq/faq";
import { faqClosing, faqItems } from "../data/skinLab.data";

import {
  AccessTimeIcon,
  CalendarMonthOutlinedIcon,
  CheckCircleOutlineIcon,
  StarIcon,
} from "../icons/icons";

interface Props {
  content: TreatmentsContent;
}

/* One of two alternative routes through a plan. Rendered as a labelled block
   above the shared checklist, never as a checklist item: as a check row it
   would read as "4 peels AND 3 microneedling", which is not what is sold. */
function PathwayBlock({ pathway }: { pathway: Pathway }) {
  return (
    <div className={styles.pathway}>
      <div className={styles.pathwayLabel}>{pathway.label}</div>
      <span className={styles.pathwayText}>{pathway.text}</span>
      {pathway.note ? (
        <em className={styles.pathwayNote}>{pathway.note}</em>
      ) : null}
    </div>
  );
}

function IncludeList({
  heading,
  items,
  pathways,
  variant = "check",
}: {
  heading: string;
  items: IncludeItem[];
  pathways?: Pathway[];
  variant?: "check" | "dash";
}) {
  return (
    <div className={styles.includes}>
      <div className={styles.includesHeading}>{heading}</div>

      {pathways?.length ? (
        <div className={styles.pathways}>
          {pathways.map((pathway) => (
            <PathwayBlock key={pathway.label} pathway={pathway} />
          ))}
        </div>
      ) : null}

      <ul className={styles.includesList}>
        {items.map((item) => (
          <li key={item.text} className={styles.includeItem}>
            {variant === "check" ? (
              <CheckCircleOutlineIcon className={styles.includeIcon} />
            ) : (
              <span className={styles.includeDash} aria-hidden="true">
                ·
              </span>
            )}
            <div className={styles.includeBody}>
              <span
                className={
                  item.strong
                    ? `${styles.includeText} ${styles.strong}`
                    : styles.includeText
                }
              >
                {item.text}
              </span>
              {item.note ? (
                <em className={styles.includeNote}>{item.note}</em>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MetaBoxRow({ box }: { box: MetaBox }) {
  return (
    <div className={styles.meta}>
      <CalendarMonthOutlinedIcon className={styles.metaIcon} />
      <div className={styles.metaBody}>
        <div className={styles.metaHeading}>{box.heading}</div>
        {box.lines.map((line) => (
          <div key={line} className={styles.metaLine}>
            {line}
          </div>
        ))}
        {box.note ? <p className={styles.metaNote}>{box.note}</p> : null}
      </div>
    </div>
  );
}

/* Circle benefits: title on the first line, one supporting line beneath. The
   check sits on the title's line, not centred on the two-line block. */
function BenefitList({ items }: { items: CircleBenefit[] }) {
  return (
    <ul className={`${styles.includesList} ${styles.benefitList}`}>
      {items.map((item) => (
        <li key={item.title} className={styles.includeItem}>
          <CheckCircleOutlineIcon className={styles.includeIcon} />
          <div className={styles.includeBody}>
            <span className={`${styles.includeText} ${styles.strong}`}>
              {item.title}
            </span>
            <span className={styles.benefitDescription}>
              {item.description}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}

function MembershipCard({
  membership,
  className,
}: {
  membership: Membership;
  className?: string;
}) {
  return (
    <div className={className ? `${styles.card} ${className}` : styles.card}>
      <h3 className={styles.infoHeading}>{membership.heading}</h3>
      <p className={styles.infoSubtitle}>{membership.subtitle}</p>

      {membership.intro.map((p) => (
        <p key={p} className={styles.infoText}>
          {p}
        </p>
      ))}

      <div className={styles.divider} />

      <div className={styles.includesHeading}>{membership.benefitsHeading}</div>
      <BenefitList items={membership.benefits} />

      <div className={styles.divider} />

      <div className={styles.includesHeading}>
        {membership.membershipHeading}
      </div>
      <p className={styles.infoText}>{membership.membershipText}</p>
    </div>
  );
}

export default function TreatmentsSection({ content }: Props) {
  const {
    signaturePlan,
    plansHeading,
    plans,
    sessionsHeading,
    sessions,
    consultation,
    membership,
  } = content;

  return (
    <section id="treatments" className={styles.section}>
      <div className={styles.inner}>
        <SectionTitle overline="Treatments" title="Treatment Menu" />

        <article className={`${styles.card} ${styles.signature}`}>
          <div className={styles.signatureTop}>
            <div>
              <div className={styles.signatureBadge}>
                <StarIcon className={styles.signatureBadgeIcon} />
                {signaturePlan.badge}
              </div>
              <h3 className={styles.signatureTitle}>{signaturePlan.title}</h3>
            </div>
            <span className={`${styles.price} ${styles.signaturePrice}`}>
              {signaturePlan.price}
            </span>
          </div>

          {signaturePlan.savingsNote ? (
            <p className={styles.savings}>{signaturePlan.savingsNote}</p>
          ) : null}

          <div className={styles.signatureBody}>
            <div className={styles.signatureMain}>
              {signaturePlan.paragraphs.map((p) => (
                <p key={p} className={styles.text}>
                  {p}
                </p>
              ))}

              <IncludeList
                heading={signaturePlan.includesHeading}
                items={signaturePlan.includes}
              />
            </div>

            <aside>
              <MetaBoxRow box={signaturePlan.sideBox} />
            </aside>
          </div>
        </article>

        <h3 className={styles.ruleLabel}>{plansHeading}</h3>
        <div className={styles.planGrid}>
          {plans.map((plan) => (
            <article key={plan.title} className={styles.card}>
              <div className={styles.cardTop}>
                <h4 className={styles.cardTitle}>{plan.title}</h4>
                <span className={styles.price}>{plan.price}</span>
              </div>

              {plan.savingsNote ? (
                <p className={styles.savings}>{plan.savingsNote}</p>
              ) : null}

              <p className={styles.text}>{plan.description}</p>
              {plan.performedWith ? (
                <p className={styles.text}>{plan.performedWith}</p>
              ) : null}

              <IncludeList
                heading={plan.includesHeading}
                items={plan.includes}
                pathways={plan.pathways}
              />

              <div className={styles.metaGroup}>
                {plan.metaBoxes.map((box) => (
                  <MetaBoxRow key={box.heading} box={box} />
                ))}
              </div>

              {plan.footerNote ? (
                <p className={styles.note}>{plan.footerNote}</p>
              ) : null}
            </article>
          ))}

          {/* Last item of the plan grid: full width under the three plans on
              desktop, and on tablet it fills the empty slot left beside the
              third plan when the grid drops to two columns. */}
          <MembershipCard
            membership={membership}
            className={styles.benefitsCard}
          />
        </div>

        <h3 className={styles.ruleLabel}>{sessionsHeading}</h3>
        <div className={styles.sessionGrid}>
          {sessions.map((session) => (
            <article key={session.title} className={styles.card}>
              <div className={styles.cardTop}>
                <h4 className={styles.cardTitle}>{session.title}</h4>
                <span className={styles.price}>{session.price}</span>
              </div>

              <p className={styles.text}>{session.description}</p>

              <IncludeList
                heading={session.includesHeading}
                items={session.includes}
                variant="dash"
              />

              {session.highlightNote ? (
                <div className={styles.highlight}>
                  <CheckCircleOutlineIcon className={styles.includeIcon} />
                  <p>{session.highlightNote}</p>
                </div>
              ) : null}

              <div className={styles.duration}>
                <AccessTimeIcon className={styles.durationIcon} />
                <span>{session.duration}</span>
              </div>
            </article>
          ))}
        </div>

        <div className={`${styles.card} ${styles.consultation}`}>
          <div className={styles.cardTop}>
            <h3 className={styles.cardTitle}>{consultation.title}</h3>
            <span className={styles.price}>{consultation.price}</span>
          </div>
          <p className={styles.text}>{consultation.description}</p>
          <p className={styles.consultationNote}>{consultation.boldNote}</p>
        </div>

        <Faq items={faqItems} closing={faqClosing} />
      </div>

      {/* The page's one dark band: full bleed, still part of Treatments. */}
      <div className={styles.closing}>
        <div className={styles.closingInner}>
          <div className={styles.closingBody}>
            <div>
              <p className={styles.closingTitle}>Our Approach</p>
              <p className={styles.closingText}>
                At The Medical Skin Lab, we believe healthy skin is achieved
                through consistency, not quick fixes.
              </p>
              <p className={styles.closingText}>
                Every treatment plan begins with a comprehensive consultation
                and is tailored using evidence based Mesoestetic treatment
                protocols. As your skin changes throughout your journey, your
                treatment plan evolves too, ensuring every appointment is
                personalised to achieve safe, effective and long lasting
                results.
              </p>
              <p className={styles.closingText}>
                Our focus is simple: healthy skin, long term results and expert
                clinical care.
              </p>
            </div>
            <div className={styles.closingSplit}>
              <div className={styles.closingTitle}>
                Not sure which treatment is right for you?
              </div>
              <div className={styles.closingSub}>
                Book a consultation and let us create a personalised plan for
                your skin.
              </div>
            </div>
          </div>
          <BookConsultationButton variant="secondary" tone="onDark" />
        </div>
      </div>
    </section>
  );
}
