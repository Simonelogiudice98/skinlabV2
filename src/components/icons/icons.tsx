/* Inline replacements for the Material icons the project used through
   @mui/icons-material, which has been removed.

   Each glyph is the exact path data of the same Material icon, in the same
   variant that was previously imported — copied verbatim from the package
   before it was uninstalled. Nothing here is a redraw, a different variant or
   a different weight.

     InfoOutlinedIcon        -> InfoOutlinedIcon
     StarIcon                -> StarIcon
     CheckCircleOutlineIcon  -> CheckCircleOutlineIcon
     CalendarMonthOutlined   -> CalendarMonthOutlinedIcon
     AccessTimeIcon          -> AccessTimeIcon
     PersonRoundedIcon       -> PersonRoundedIcon

   Sizing matches MUI's SvgIcon: 1em square, inheriting `color` via
   `currentColor`, so the glyph is scaled with `font-size` exactly as before. */

import styles from "./icons.module.scss";

export type IconProps = React.SVGProps<SVGSVGElement>;

type GlyphProps = IconProps & {
  children: React.ReactNode;
};

function Glyph({ className, children, ...rest }: GlyphProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      focusable="false"
      aria-hidden="true"
      {...rest}
      className={className ? `${styles.glyph} ${className}` : styles.glyph}
    >
      {children}
    </svg>
  );
}

export function InfoOutlinedIcon(props: IconProps) {
  return (
    <Glyph {...props}>
      <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8" />
    </Glyph>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <Glyph {...props}>
      <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </Glyph>
  );
}

export function CheckCircleOutlineIcon(props: IconProps) {
  return (
    <Glyph {...props}>
      <path d="M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8" />
    </Glyph>
  );
}

export function CalendarMonthOutlinedIcon(props: IconProps) {
  return (
    <Glyph {...props}>
      <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 16H5V10h14zm0-12H5V6h14zM9 14H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2zm-8 4H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2z" />
    </Glyph>
  );
}

export function AccessTimeIcon(props: IconProps) {
  return (
    <Glyph {...props}>
      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8" />
      <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
    </Glyph>
  );
}

export function PersonRoundedIcon(props: IconProps) {
  return (
    <Glyph {...props}>
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4" />
    </Glyph>
  );
}

/* Not a Material glyph: the footer's Connect row needs a TikTok mark and the
   project's icon set (lucide-react) has no brand icons. A single inline path
   is cheaper than a second icon dependency for one mark. Drawn on the same
   24x24 grid as the glyphs above, so it inherits their sizing and colour. */
export function TikTokIcon(props: IconProps) {
  return (
    <Glyph {...props}>
      <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.6 2.6 0 0 1-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3c-.9 0-2.4-.31-3.24-1.48z" />
    </Glyph>
  );
}
