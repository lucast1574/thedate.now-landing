import Image from "next/image";
import Icon from "@/components/icon";
import { useTranslator } from "@/lib/i18n/react";

const apps = {
  event: {
    name: "The Date",
    image: "/previews/mobile/the-date.webp",
    appStore: "https://apps.apple.com/us/app/the-date/id6829601061",
    googlePlay: "https://play.google.com/store/apps/details?id=now.thedate.app",
  },
  wedding: {
    name: "Save the Date",
    image: "/previews/mobile/save-the-date.webp",
    appStore:
      "https://apps.apple.com/us/app/save-the-date-invitaciones/id6829602406",
    googlePlay:
      "https://play.google.com/store/apps/details?id=now.thedate.save",
  },
};

export default function MobileApp({ wedding = false }: { wedding?: boolean }) {
  const i18n = useTranslator();
  const app = apps[wedding ? "wedding" : "event"];

  return (
    <section id="app" className="mobile-app" aria-labelledby="mobile-app-title">
      <div
        className={
          wedding ? "shell mobile-app-layout" : "party-shell mobile-app-layout"
        }
      >
        <div className="mobile-app-copy">
          <h2 id="mobile-app-title">
            {wedding
              ? i18n("Tu boda en el bolsillo")
              : i18n("Tu evento en el bolsillo")}
          </h2>
          <p>
            {wedding
              ? i18n(
                  "Con la app de Save the Date puedes revisar las confirmaciones de tu boda y gestionar tu lista de regalos desde el celular.",
                )
              : i18n(
                  "Con la app de The Date puedes revisar quién confirmó, consultar las respuestas y gestionar tu lista de regalos desde el celular.",
                )}
          </p>
          <div className="mobile-app-links">
            {(
              [
                ["App Store", app.appStore],
                ["Google Play", app.googlePlay],
              ] as const
            ).map(([store, url]) => (
              <a
                href={url}
                key={store}
                aria-label={i18n("Descargar {v0} en {v1}", {
                  v0: app.name,
                  v1: store,
                })}
              >
                {store} <Icon name="external" />
              </a>
            ))}
          </div>
        </div>
        <div className="mobile-app-visual">
          <Image
            src={app.image}
            alt={i18n("Pantalla de confirmaciones de {v0}", { v0: app.name })}
            width={600}
            height={1301}
            sizes="(max-width: 700px) 216px, 250px"
          />
        </div>
      </div>
    </section>
  );
}
