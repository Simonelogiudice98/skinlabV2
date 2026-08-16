import styles from "../../assets/commonStyles/commonStyles.module.scss";
import SectionTitle from "../../components/sectionTitle/sectionTitle";
import "./treatments.scss";
import type {
  IncludeItem,
  InfoList,
  Membership,
  MetaBox,
  TreatmentsContent,
} from "../../interfaces/skinLab.types";
import BookConsultationButton from "../../components/bookConsultationButton/BookConsultationButton";

import StarIcon from "@mui/icons-material/Star";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

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
    <div className="treatIncludes">
      <div className="treatIncludesHeading">{heading}</div>
      <ul className={`treatIncludesList treatIncludesList--${variant}`}>
        {items.map((item) => (
          <li key={item.text} className="treatIncludeItem">
            {variant === "check" ? (
              <CheckCircleOutlineIcon
                className="treatIncludeIcon"
                aria-hidden="true"
              />
            ) : (
              <span className="treatIncludeDash" aria-hidden="true">
                ·
              </span>
            )}
            <div>
              <span
                className={
                  item.strong ? "treatIncludeText is-strong" : "treatIncludeText"
                }
              >
                {item.text}
              </span>
              {item.note ? (
                <em className="treatIncludeNote">{item.note}</em>
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
    <div className="treatMeta">
      <CalendarMonthOutlinedIcon className="treatMetaIcon" aria-hidden="true" />
      <div className="treatMetaBody">
        <div className="treatMetaHeading">{box.heading}</div>
        {box.lines.map((line) => (
          <div key={line} className="treatMetaLine">
            {line}
          </div>
        ))}
        {box.note ? <p className="treatMetaNote">{box.note}</p> : null}
      </div>
    </div>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="treatIncludesList treatIncludesList--check">
      {items.map((item) => (
        <li key={item} className="treatIncludeItem">
          <CheckCircleOutlineIcon
            className="treatIncludeIcon"
            aria-hidden="true"
          />
          <div>
            <span className="treatIncludeText">{item}</span>
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
    <div className={className ? `treatInfoCard ${className}` : "treatInfoCard"}>
      <h3 className="treatInfoHeading">{list.heading}</h3>
      {list.subtitle ? (
        <p className="treatInfoSubtitle">{list.subtitle}</p>
      ) : null}
      <CheckList items={list.items} />
    </div>
  );
}

function MembershipCard({ membership }: { membership: Membership }) {
  return (
    <div className="treatInfoCard">
      <h3 className="treatInfoHeading">{membership.heading}</h3>
      <p className="treatInfoSubtitle">{membership.subtitle}</p>

      {membership.intro.map((p) => (
        <p key={p} className="treatInfoText">
          {p}
        </p>
      ))}

      <div className="treatDivider" />

      <div className="treatIncludesHeading">{membership.benefitsHeading}</div>
      <CheckList items={membership.benefits} />

      <div className="treatDivider" />

      <div className="treatIncludesHeading">{membership.membershipHeading}</div>
      <p className="treatInfoText">{membership.membershipText}</p>
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
      <div className={styles.container}>
        <div className={styles.panel}>
          <SectionTitle overline="Treatments" title="Treatment Menu" />

          <article className={`${styles.card} signatureCard`}>
            <div className="signatureTop">
              <div className="signatureHead">
                <div className="signatureBadge">
                  <StarIcon className="signatureBadgeIcon" aria-hidden="true" />
                  {signaturePlan.badge}
                </div>
                <h3 className="signatureTitle">{signaturePlan.title}</h3>
              </div>
              <span className="priceFrom">{signaturePlan.price}</span>
            </div>

            <div className="signatureBody">
              <div className="signatureMain">
                {signaturePlan.paragraphs.map((p) => (
                  <p key={p} className="cardText">
                    {p}
                  </p>
                ))}

                <IncludeList
                  heading={signaturePlan.includesHeading}
                  items={signaturePlan.includes}
                />
              </div>

              <aside className="signatureSide">
                <MetaBoxRow box={signaturePlan.sideBox} />
              </aside>
            </div>
          </article>

          <h3 className="treatGroupHeading">{plansHeading}</h3>
          <div className="planGrid">
            {plans.map((plan) => (
              <article
                key={plan.title}
                className={`${styles.card} treatCard planCard`}
              >
                <div className="treatTop">
                  <h4 className={styles.h3}>{plan.title}</h4>
                  <span className="priceFrom">{plan.price}</span>
                </div>

                <p className="cardText">{plan.description}</p>
                {plan.performedWith ? (
                  <p className="cardText">{plan.performedWith}</p>
                ) : null}

                <IncludeList
                  heading={plan.includesHeading}
                  items={plan.includes}
                />

                <div className="treatMetaGroup">
                  {plan.metaBoxes.map((box) => (
                    <MetaBoxRow key={box.heading} box={box} />
                  ))}
                </div>

                <p className="treatFooterNote">{plan.footerNote}</p>
              </article>
            ))}

            {/* Last item of the plan grid: full width under the three plans on
                desktop, and on tablet it fills the empty slot left beside the
                third plan when the grid drops to two columns. */}
            <InfoListCard list={plansBenefits} className="planBenefitsCard" />
          </div>

          <h3 className="treatGroupHeading">{sessionsHeading}</h3>
          <div className="sessionGrid">
            {sessions.map((session) => (
              <article
                key={session.title}
                className={`${styles.card} treatCard sessionCard`}
              >
                <div className="treatTop">
                  <h4 className={styles.h3}>{session.title}</h4>
                  <span className="priceFrom">{session.price}</span>
                </div>

                <p className="cardText">{session.description}</p>

                <IncludeList
                  heading={session.includesHeading}
                  items={session.includes}
                  variant="dash"
                />

                {session.highlightNote ? (
                  <div className="sessionHighlight">
                    <CheckCircleOutlineIcon
                      className="treatIncludeIcon"
                      aria-hidden="true"
                    />
                    <p>{session.highlightNote}</p>
                  </div>
                ) : null}

                <div className="sessionDuration">
                  <AccessTimeIcon
                    className="sessionDurationIcon"
                    aria-hidden="true"
                  />
                  <span>{session.duration}</span>
                </div>
              </article>
            ))}
          </div>

          <div className="consultationBox">
            <div className="treatTop">
              <h3 className="consultationTitle">{consultation.title}</h3>
              <span className="priceFrom">{consultation.price}</span>
            </div>
            <p className="cardText">{consultation.description}</p>
            <p className="consultationNote">{consultation.boldNote}</p>
          </div>

          <div className="treatInfoGrid">
            {infoLists.map((list) => (
              <InfoListCard key={list.heading} list={list} />
            ))}
            <MembershipCard membership={membership} />
          </div>

          <div className="ctaRow">
            <div>
              <div>
                <p className="ctaTitle">Our Approach</p>
                <p>
                  At The Medical Skin Lab, we believe healthy skin is achieved
                  through consistency, not quick fixes.
                </p>
                <p>
                  Every treatment plan begins with a comprehensive consultation
                  and is tailored using evidence based Mesoestetic treatment
                  protocols. As your skin changes throughout your journey, your
                  treatment plan evolves too, ensuring every appointment is
                  personalised to achieve safe, effective and long lasting
                  results.
                </p>
                <p>
                  Our focus is simple: healthy skin, long term results and
                  expert clinical care.
                </p>
              </div>
              <div>
                <div className="ctaTitle">
                  Not sure which treatment is right for you?
                </div>
                <div className="ctaSub">
                  Book a consultation and let us create a personalised plan for
                  your skin.
                </div>
              </div>
            </div>
            <BookConsultationButton />
          </div>
        </div>
      </div>
    </section>
  );
}
