import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";

import { getTranslator } from "@/lib/i18n/server";
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
  const i18n = await getTranslator();

  const host = ((await headers()).get("host") ?? "")
    .toLowerCase()
    .replace(/:\d+$/, "")
    .replace(/\.$/, "");
  const wedding =
    host === "save.thedate.now" || host.endsWith(".save.thedate.now");
  return {
    title:
      host === "studio.save.thedate.now"
        ? i18n("Estudio de bodas — Save the Date")
        : host === "crea.thedate.now"
          ? i18n("Mi espacio — The Date")
          : wedding
            ? i18n("Save the Date — Invitaciones de boda")
            : i18n("The Date — Invitaciones para eventos"),
    description: wedding
      ? i18n(
          "Diseñen su invitación de boda y organicen los detalles de su celebración.",
        )
      : i18n("Crea invitaciones digitales y organiza tus eventos."),
    icons: { icon: wedding ? "/wedding-icon.png?v=4" : "/event-icon.png?v=2" },
    robots: { index: false, follow: false },
  };
}
export default async function RootLayout({ children }: LayoutProps<"/">) {
  const locale = await getLocale();
  const host = ((await headers()).get("host") ?? "")
    .toLowerCase()
    .replace(/:\d+$/, "")
    .replace(/\.$/, "");
  const marketing = host === "thedate.now" || host === "save.thedate.now";
  const wedding = host === "save.thedate.now";
  return (
    <html
      lang={locale}
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
      <body>
        <NextIntlClientProvider locale={locale} messages={{}}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
