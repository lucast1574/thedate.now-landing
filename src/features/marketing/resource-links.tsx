import { useTranslator } from "@/lib/i18n/react";
export default function ResourceLinks({
  wedding = false,
}: {
  wedding?: boolean;
}) {
  const i18n = useTranslator();

  const links = wedding
    ? [
        ["invitaciones-digitales-de-boda", i18n("Cómo empezar")],
        ["plantillas-invitaciones-de-boda", i18n("Plantillas")],
        ["invitaciones-de-boda-por-whatsapp", "WhatsApp"],
        ["organizar-invitados-de-boda", i18n("Invitados y mesas")],
      ]
    : [
        ["invitaciones-digitales-para-eventos", i18n("Cómo empezar")],
        ["plantillas-invitaciones-para-eventos", i18n("Plantillas")],
        ["invitaciones-para-eventos-por-whatsapp", "WhatsApp"],
        ["organizar-invitados-y-mesas", i18n("Invitados y mesas")],
      ];
  return (
    <nav className="marketing-resources" aria-label={i18n("Recursos")}>
      {links.map(([path, label]) => (
        <a href={`/${path}`} key={path}>
          {label}
        </a>
      ))}
    </nav>
  );
}
