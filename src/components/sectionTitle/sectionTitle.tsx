import './sectionTitle.scss';
import Pill from '../pill/pill';

type Props = {
  overline: string;
  title: string;
  subtitle?: string;
  /** Renders the pill and the heading in capitals, leaving the subtitle as is. */
  uppercase?: boolean;
};

const SectionTitle: React.FC<Props> = ({ overline, title, subtitle, uppercase }) => {
  return (
    <header className={`sectionHeader ${uppercase ? "sectionHeaderCaps" : ""}`}>
      <Pill>{overline}</Pill>
      <h2 className="h2">{title}</h2>
      {subtitle && <p className="sub">{subtitle}</p>}
    </header>
  );
}
export default SectionTitle