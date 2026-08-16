import SectionTitle from "../sectionTitle/sectionTitle";
import styles from "./treatments.module.scss";
import type {
  IncludeItem,
  InfoList,
  Membership,
  MetaBox,
  TreatmentsContent,
} from "../../interfaces/skinLab.types";
import BookConsultationButton from "../bookConsultationButton/BookConsultationButton";

import {
  AccessTimeIcon,
  CalendarMonthOutlinedIcon,
  CheckCircleOutlineIcon,
  StarIcon,
} from "../icons/icons";

interface Props {
  content: TreatmentsContent;
}

function IncludeList({
  heading,
  items,
  variant = "check",
}: {
  heading: string;
  items: IncludeItem[];
  variant?: "check" | "dash";
}) {
  return (
    <div className={styles.includes}>
      <div className={styles.includesHeading}>{heading}</div>
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

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className={`${styles.includesList} ${styles.infoList}`}>
      {items.map((item) => (
        <li key={item} className={styles.includeItem}>
          <CheckCircleOutlineIcon className={styles.includeIcon} />
          <div className={styles.includeBody}>
            <span className={styles.includeText}>{item}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}

function InfoListCard({
  list,
  className,
}: {
  list: InfoList;
  className?: string;
}) {
  return (
    <div className={className ? `${styles.card} ${className}` : styles.card}>
      <h3 className={styles.infoHeading}>{list.heading}</h3>
      {list.subtitle ? (
        <p className={styles.infoSubtitle}>{list.subtitle}</p>
      ) : null}
      <CheckList items={list.items} />
    </div>
  );
}

function MembershipCard({ membership }: { membership: Membership }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.infoHeading}>{membership.heading}</h3>
      <p className={styles.infoSubtitle}>{membership.subtitle}</p>

      {membership.intro.map((p) => (
        <p key={p} className={styles.infoText}>
          {p}
        </p>
      ))}

      <div className={styles.divider} />

      <div className={styles.includesHeading}>{membership.benefitsHeading}</div>
      <CheckList items={membership.benefits} />

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
    plansBenefits,
    sessionsHeading,
    sessions,
    consultation,
    infoLists,
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

              <p className={styles.text}>{plan.description}</p>
              {plan.performedWith ? (
                <p className={styles.text}>{plan.performedWith}</p>
              ) : null}

              <IncludeList
                heading={plan.includesHeading}
                items={plan.includes}
              />

              <div className={styles.metaGroup}>
                {plan.metaBoxes.map((box) => (
                  <MetaBoxRow key={box.heading} box={box} />
                ))}
              </div>

              <p className={styles.note}>{plan.footerNote}</p>
            </article>
          ))}

          {/* Last item of the plan grid: full width under the three plans on
              desktop, and on tablet it fills the empty slot left beside the
              third plan when the grid drops to two columns. */}
          <InfoListCard list={plansBenefits} className={styles.benefitsCard} />
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

        <div className={styles.infoGrid}>
          {infoLists.map((list) => (
            <InfoListCard key={list.heading} list={list} />
          ))}
          <MembershipCard membership={membership} />
        </div>
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
          <BookConsultationButton tone="onDark" />
        </div>
      </div>
    </section>
  );
}
