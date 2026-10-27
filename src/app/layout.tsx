import type { Metadata } from "next";
import { headers } from "next/headers";
import {
  Bodoni_Moda,
  Cormorant_Garamond,
  DM_Sans,
  Nunito,
} from "next/font/google";
import "./globals.css";
const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});
const sans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});
const party = Nunito({
  variable: "--font-party",
  subsets: ["latin"],
  display: "swap",
});
const weddingLogo = Bodoni_Moda({
  variable: "--font-wedding-logo",
  subsets: ["latin"],
  display: "swap",
});
export async function generateMetadata(): Promise<Metadata> {
  const host = ((await headers()).get("host") ?? "")
    .toLowerCase()
    .replace(/:\d+$/, "")
    .replace(/\.$/, "");
  const wedding =
    host === "save.thedate.now" || host.endsWith(".save.thedate.now");
  return {
    title:
      host === "studio.save.thedate.now"
        ? "Estudio de bodas — Save the Date"
        : host === "crea.thedate.now"
          ? "Mi espacio — The Date"
          : wedding
            ? "Save the Date — Invitaciones de boda"
            : "The Date — Invitaciones para eventos",
    description: wedding
      ? "Diseñen su invitación de boda y organicen los detalles de su celebración."
      : "Crea invitaciones digitales y organiza tus eventos.",
    icons: { icon: wedding ? "/wedding-icon.png?v=4" : "/event-icon.png?v=2" },
    robots: { index: false, follow: false },
  };
}
export default async function RootLayout({ children }: LayoutProps<"/">) {
  const host = ((await headers()).get("host") ?? "")
    .toLowerCase()
    .replace(/:\d+$/, "")
    .replace(/\.$/, "");
  const marketing = host === "thedate.now" || host === "save.thedate.now";
  const wedding = host === "save.thedate.now";
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${serif.variable} ${sans.variable} ${party.variable} ${weddingLogo.variable}`}
    >
      <head>
        {marketing && (
          /* The synchronous head gate prevents a landing flash before hydration. */
          /* eslint-disable-next-line @next/next/no-sync-scripts */
          <script
            src="/brand-arrival.js"
            data-storage-key={
              wedding ? "wedding-brand-entrance-v1" : "event-brand-entrance-v1"
            }
            data-brand={wedding ? "wedding" : "event"}
          />
        )}
      </head>
      <body>{children}</body>
    </html>
  );
}
