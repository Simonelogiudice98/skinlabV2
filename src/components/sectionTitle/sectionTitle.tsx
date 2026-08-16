import styles from "./sectionTitle.module.scss";

type Props = {
  overline: string;
  title: string;
  subtitle?: string;
};

const SectionTitle: React.FC<Props> = ({ overline, title, subtitle }) => {
  return (
    <header className={styles.header}>
      <p className={styles.eyebrow}>{overline}</p>
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.standfirst}>{subtitle}</p>}
    </header>
  );
};
export default SectionTitle;
