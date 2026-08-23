import styles from "./logo.module.scss";

/* Wordmark, rebuilt as a typographic SVG: the three words are real <text>
   nodes set in the two families the rest of the site already uses
   (--family-display for "Medical", --family-sans for the two spaced
   micro-labels), so it stays sharp at any size and never ships a traced
   bitmap.

   It is an inline component rather than a .svg file asset on purpose: an
   .svg loaded through <img>/next/image cannot resolve the next/font families
   injected on <html>, so a file asset would silently fall back to Georgia.

   The three words are stacked and centred rather than tucking "THE" into the
   shoulder of the M as the raster does: that overlap only works because the
   raster's face has stunted d/l ascenders, and Playfair Display's reach full
   height, so tucking it in collides with "di". Stacking keeps the same
   three-part lockup and stays legible at header size.

   width/height are set alongside viewBox to give the element an intrinsic
   ratio, so the existing `height: var(--logo-height); width: auto` rules in
   the header and footer stylesheets keep working untouched. */

type Props = {
  className?: string;
};

const Logo: React.FC<Props> = ({ className }) => {
  return (
    <svg
      className={className ? `${styles.svg} ${className}` : styles.svg}
      viewBox="20 0 280 126"
      width="280"
      height="126"
      role="img"
      aria-label="The Medical Skinlab"
    >
      {/* x is nudged by half the letter-spacing: SVG also emits the trailing
          gap after the last glyph, which would otherwise pull the optical
          centre left. */}
      <text x="164" y="24" textAnchor="middle" className={styles.the}>
        THE
      </text>
      <text x="160" y="90" textAnchor="middle" className={styles.word}>
        Medical
      </text>
      <text x="165.5" y="116" textAnchor="middle" className={styles.skinlab}>
        SKINLAB
      </text>
    </svg>
  );
};

export default Logo;
