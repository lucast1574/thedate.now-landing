import { productTopics } from "./topic-data";
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
    "Al terminar el diseño, continúen a Invitados y preparen su lista. Con el evento habilitado, «Enviar invitaciones» prepara y comprueba la web antes de enviar por WhatsApp los enlaces personales de cada grupo.",
  ],
  [
    "¿Podemos cambiar detalles después de publicar?",
    "Sí. El trabajo se guarda automáticamente. Cuando quieran aplicar esos cambios a la web, pulsen «Actualizar invitación» en el editor. Conservan su dirección y las respuestas; guardar no vuelve a enviar mensajes.",
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
    "Sí. Termina el diseño y prepara la lista en Invitados. Con el evento habilitado, «Enviar invitaciones» primero prepara y comprueba la web y después envía los enlaces personales por WhatsApp.",
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
        <nav className="topic-links" aria-label="Explorar las herramientas">
          {productTopics(wedding).map((t) => (
            <a key={t.slug} href={`/${t.slug}`}>
              {t.title}
              <Icon name="arrow" />
            </a>
          ))}
        </nav>
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
