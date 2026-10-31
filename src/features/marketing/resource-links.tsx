export default function ResourceLinks({
  wedding = false,
}: {
  wedding?: boolean;
}) {
  const links = wedding
    ? [
        ["invitaciones-digitales-de-boda", "Cómo empezar"],
        ["plantillas-invitaciones-de-boda", "Plantillas"],
        ["invitaciones-de-boda-por-whatsapp", "WhatsApp"],
        ["organizar-invitados-de-boda", "Invitados y mesas"],
      ]
    : [
        ["invitaciones-digitales-para-eventos", "Cómo empezar"],
        ["plantillas-invitaciones-para-eventos", "Plantillas"],
        ["invitaciones-para-eventos-por-whatsapp", "WhatsApp"],
        ["organizar-invitados-y-mesas", "Invitados y mesas"],
      ];
  return (
    <nav className="marketing-resources" aria-label="Recursos">
      {links.map(([path, label]) => (
        <a href={`/${path}`} key={path}>
          {label}
        </a>
      ))}
    </nav>
  );
}
