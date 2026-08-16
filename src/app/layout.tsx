import type { Metadata, Viewport } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.scss";

/* Self-hosted by next/font at build time — no runtime request to Google.
   Both families are variable, so the whole weight range costs one file each.

   Display: Playfair Display — a Scotch Roman revival. Vertical stress and a
   hairline-to-stem contrast that matches the brand board's headline setting,
   and it holds that contrast at the very large sizes it is used at here.
   Body: DM Sans — a warm, low-contrast geometric sans with open apertures.
   Reads cleanly at 15px and tracks well as wide uppercase micro-labels. */
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-display",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

// TODO: replace with the production domain once it exists.
// Placeholder resolution order: Vercel preview deployment URL, then local dev.
const SITE_URL = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // Ported verbatim from the source index.html <title>.
  title: "SkinLab",
  // TODO: description — supply the meta description text (~150-160 chars).
  //       Left absent on purpose: the source index.html has no description and
  //       inventing copy is out of scope for this migration.
  alternates: { canonical: "/" },
  openGraph: {
    title: "SkinLab",
    url: "/",
    type: "website",
    // TODO: openGraph.siteName — supply the official business name.
    // TODO: openGraph.description — supply text.
    // TODO: openGraph.images — supply a 1200x630 image (relative path, resolved
    //       through metadataBase).
  },
  twitter: {
    card: "summary_large_image",
    title: "SkinLab",
    // TODO: twitter.description — supply text.
    // TODO: twitter.images — supply image (may reuse the Open Graph image).
  },
  // Favicon comes from the App Router file convention: src/app/icon.svg
  // (the source index.html pointed at a file that does not exist).
};

// Ported from index.html: <meta name="viewport" content="width=device-width, initial-scale=1.0" />
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${dmSans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
