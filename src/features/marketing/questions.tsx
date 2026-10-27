import Icon from "@/components/icon";
export const weddingQuestions = [
  [
    "¿Qué incluye una invitación digital de boda?",
    "Pueden reunir sus fotos, la fecha, los horarios y la ubicación de la celebración en una misma página. El estudio también permite organizar invitados, cupos y confirmaciones cuando el evento esté habilitado.",
  ],
  [
    "¿Podemos diseñar antes de pagar?",
    "Sí. Pueden crear, editar, previsualizar y guardar su diseño antes del pago. La publicación y las herramientas de gestión de invitados requieren habilitar el evento; revisen las condiciones en el estudio.",
  ],
  [
    "¿Cómo compartimos nuestra invitación de boda?",
    "Una vez publicada, tendrá una dirección propia dentro de save.thedate.now. Compartan el enlace con sus invitados y usen las herramientas de WhatsApp del estudio cuando estén habilitadas.",
  ],
  [
    "¿Podemos cambiar detalles después de publicar?",
    "Sí. Al guardar cambios del diseño publicado conservan la dirección de su invitación y las respuestas de sus invitados.",
  ],
];
export const generalQuestions = [
  [
    "¿Para qué eventos puedo crear una invitación digital?",
    "The Date está pensado para cumpleaños, fiestas, graduaciones, reuniones y otros encuentros. Para bodas, Save the Date ofrece una experiencia dedicada.",
  ],
  [
    "¿Puedo crear mi invitación gratis?",
    "Puedes diseñar, previsualizar y guardar tu invitación antes de pagar. La publicación y la gestión de invitados se habilitan según las condiciones del evento que encontrarás en tu espacio.",
  ],
  [
    "¿Puedo enviar la invitación por WhatsApp?",
    "Sí. Una vez publicada puedes compartir su enlace por WhatsApp. Las herramientas de envío desde tu espacio requieren un evento habilitado y publicado.",
  ],
  [
    "¿Cómo organizo las confirmaciones de asistencia?",
    "Desde tu espacio puedes consultar las respuestas, gestionar cupos y acompañantes y organizar mesas al habilitar las herramientas del evento.",
  ],
];
export default function MarketingFAQ({
  wedding = false,
}: {
  wedding?: boolean;
}) {
  return (
    <section
      className={`marketing-questions ${wedding ? "shell" : "party-shell"}`}
      id="preguntas"
    >
      <div>
        <p>{wedding ? "Antes de empezar" : "Todo claro para el plan"}</p>
        <h2>
          {wedding
            ? "Las dudas también tienen su lugar."
            : "¿Nos ponemos de acuerdo?"}
        </h2>
      </div>
      <div>
        <a
          className="marketing-guide-link"
          href={
            wedding
              ? "/invitaciones-digitales-de-boda"
              : "/invitaciones-digitales-para-eventos"
          }
        >
          {wedding
            ? "Guía para crear y compartir su invitación de boda"
            : "Guía para crear y compartir tu invitación digital"}
        </a>
        {(wedding ? weddingQuestions : generalQuestions).map(
          ([question, answer]) => (
            <details key={question}>
              <summary>
                {question}
                <span aria-hidden="true">
                  <Icon name="plus" />
                </span>
              </summary>
              <p>{answer}</p>
            </details>
          ),
        )}
      </div>
    </section>
  );
}
