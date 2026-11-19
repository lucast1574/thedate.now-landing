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
  { id: "confirmations", label: "Confirmaciones", icon: "users" },
  { id: "gifts", label: "Regalos", icon: "lucide:gift" },
  { id: "account", label: "Tu cuenta", icon: "user" },
] as const;

function StoreMark({ apple }: { apple: boolean }) {
  return (
    <svg
      className="mobile-app-store-mark"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill={apple ? "currentColor" : "none"}
      aria-hidden="true"
    >
      {apple ? (
        <path d="M17.1 12.7c0-2 1.6-3 1.7-3.1-1-1.5-2.6-1.7-3.2-1.7-1.4-.1-2.7.8-3.4.8-.7 0-1.8-.8-2.9-.8-1.5 0-3 .9-3.8 2.2-1.6 2.7-.4 6.8 1.2 9 .8 1.1 1.6 2.2 2.8 2.1 1.1 0 1.6-.7 3-.7 1.3 0 1.8.7 3 .7s1.9-1.1 2.7-2.2c.9-1.3 1.3-2.5 1.3-2.6-.1 0-2.4-.9-2.4-3.7ZM14.8 6.4c.6-.8 1.1-1.9 1-3-.9 0-2 .6-2.7 1.4-.6.7-1.2 1.8-1 2.9 1 .1 2-.5 2.7-1.3Z" />
      ) : (
        <path
          d="m4 3 16 9-16 9V3Zm0 0 10 12M4 21 14 9"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
}

export default function MobileApp({ wedding = false }: { wedding?: boolean }) {
  const i18n = useTranslator();
  const app = apps[wedding ? "wedding" : "event"];
  const [active, setActive] = useState(0);
  const screen = screens[active];
  const next = screens[(active + 1) % screens.length];
  const captions = [
    i18n(
      "Revisa quién confirmó, quién está pendiente y las respuestas de tus invitados.",
    ),
    i18n(
      "Consulta los regalos de tu lista y cuáles ya reservaron tus invitados.",
    ),
    i18n("Consulta tu perfil y ajusta tus preferencias desde la app."),
  ];
  const imagePath = (id: (typeof screens)[number]["id"]) =>
    "/previews/mobile/" +
    app.image +
    (id === "confirmations" ? "" : "-" + id) +
    ".webp";

  return (
    <section id="app" className="mobile-app" aria-labelledby="mobile-app-title">
      <div
        className={"mobile-app-layout " + (wedding ? "shell" : "party-shell")}
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
            {[
              { store: "App Store", url: app.appStore, apple: true },
              { store: "Google Play", url: app.googlePlay, apple: false },
            ].map(({ store, url, apple }) => (
              <a
                key={store}
                href={url}
                aria-label={i18n("Descargar {v0} en {v1}", {
                  v0: app.name,
                  v1: store,
                })}
              >
                <StoreMark apple={apple} />
                <span>
                  <small>{i18n("Descárgala en")}</small>
                  <strong>{store}</strong>
                </span>
                <Icon name="external" />
              </a>
            ))}
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
              </button>
            ))}
          </div>
        </div>

        <figure className="mobile-app-visual" id="mobile-app-preview">
          <div className="mobile-app-devices">
            <div
              className="mobile-app-phone mobile-app-phone-rear"
              aria-hidden="true"
            >
              <Image
                src={imagePath(next.id)}
                alt=""
                width={600}
                height={1301}
                sizes="(max-width: 700px) 156px, 220px"
              />
            </div>
            <div className="mobile-app-phone mobile-app-phone-main">
              <Image
                key={screen.id}
                src={imagePath(screen.id)}
                alt={i18n("Pantalla de {v0} en {v1}", {
                  v0: i18n(screen.label),
                  v1: app.name,
                })}
                width={600}
                height={1301}
                sizes="(max-width: 700px) 190px, 270px"
              />
            </div>
          </div>
          <figcaption aria-live="polite">
            <strong>{i18n(screen.label)}</strong>
            <span>{captions[active]}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
