"use client";

import { useState } from "react";
import Image from "next/image";
import Icon from "@/components/icon";
import { useTranslator } from "@/lib/i18n/react";

const apps = {
  event: {
    name: "The Date",
    image: "the-date",
    appStore: "https://apps.apple.com/us/app/the-date/id6829601061",
    googlePlay: "https://play.google.com/store/apps/details?id=now.thedate.app",
  },
  wedding: {
    name: "Save the Date",
    image: "save-the-date",
    appStore:
      "https://apps.apple.com/us/app/save-the-date-invitaciones/id6829602406",
    googlePlay:
      "https://play.google.com/store/apps/details?id=now.thedate.save",
  },
};

const screens = [
  {
    id: "confirmations",
    label: "Confirmaciones",
    icon: "users",
    description:
      "Revisa quién confirmó, quién está pendiente y las respuestas de tus invitados.",
  },
  {
    id: "gifts",
    label: "Regalos",
    icon: "lucide:gift",
    description:
      "Consulta los regalos de tu lista y cuáles ya reservaron tus invitados.",
  },
  {
    id: "account",
    label: "Tu cuenta",
    icon: "user",
    description: "Consulta tu perfil y ajusta tus preferencias desde la app.",
  },
] as const;

export default function MobileApp({ wedding = false }: { wedding?: boolean }) {
  const i18n = useTranslator();
  const app = apps[wedding ? "wedding" : "event"];
  const [active, setActive] = useState(0);
  const screen = screens[active];

  return (
    <section id="app" className="mobile-app" aria-labelledby="mobile-app-title">
      <div
        className={"mobile-app-layout " + (wedding ? "shell" : "party-shell")}
      >
        <div className="mobile-app-copy">
          <div className="mobile-app-intro">
            <p className="mobile-app-brand">
              {i18n("{v0} para iPhone y Android", { v0: app.name })}
            </p>
            <h2 id="mobile-app-title">
              {wedding
                ? i18n("Tu boda en el bolsillo")
                : i18n("Tu evento en el bolsillo")}
            </h2>
            <p>
              {i18n(
                "Revisa quién viene y qué regalos reservaron tus invitados.",
              )}
            </p>
          </div>
          <div
            className="mobile-app-selector"
            role="group"
            aria-label={i18n("Explora la app móvil")}
          >
            {screens.map(({ id, label, icon }, index) => (
              <button
                key={id}
                type="button"
                aria-pressed={active === index}
                aria-controls="mobile-app-preview"
                onClick={() => setActive(index)}
              >
                <Icon name={icon} />
                <span>{i18n(label)}</span>
                <Icon name="external" />
              </button>
            ))}
          </div>
          <div className="mobile-app-links">
            {[
              { store: "App Store", url: app.appStore },
              { store: "Google Play", url: app.googlePlay },
            ].map(({ store, url }) => (
              <a
                key={store}
                href={url}
                aria-label={i18n("Descargar {v0} en {v1}", {
                  v0: app.name,
                  v1: store,
                })}
              >
                <span>
                  <small>{i18n("Descárgala en")}</small>
                  <strong>{store}</strong>
                </span>
                <Icon name="external" />
              </a>
            ))}
          </div>
        </div>

        <figure className="mobile-app-visual" id="mobile-app-preview">
          <div className="mobile-app-phone">
            {screens.map(({ id, label }, index) => (
              <Image
                key={id}
                src={`/previews/mobile/${app.image}${index === 0 ? "" : `-${id}`}.webp`}
                alt={i18n("Pantalla de {v0} en {v1}", {
                  v0: i18n(label),
                  v1: app.name,
                })}
                aria-hidden={active !== index}
                width={600}
                height={1301}
                sizes="(max-width: 390px) 186px, (max-width: 760px) 216px, 246px"
              />
            ))}
          </div>
          <figcaption aria-live="polite">
            <strong>{i18n(screen.label)}</strong>
            <p className="mobile-app-description">{i18n(screen.description)}</p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
