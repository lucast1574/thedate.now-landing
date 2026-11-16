import { useTranslator } from "@/lib/i18n/react";
import { type Translator, localized } from "@/lib/i18n/translator";
import Icon from "@/components/icon";
export const weddingQuestions = localized((i18n: Translator) => [
  [
    i18n("¿Qué incluye una invitación digital de boda?"),
    i18n(
      "Pueden reunir sus fotos, la fecha, los horarios y la ubicación de la celebración en una misma página. El estudio también permite organizar invitados, cupos y confirmaciones cuando el evento esté habilitado.",
    ),
  ],
  [
    i18n("¿Podemos diseñar antes de pagar?"),
    i18n(
      "Sí. Pueden crear, editar, previsualizar y guardar su diseño antes del pago. La publicación y las herramientas de gestión de invitados requieren habilitar el evento; revisen las condiciones en el estudio.",
    ),
  ],
  [
    i18n("¿Cómo compartimos nuestra invitación de boda?"),
    i18n(
      "Al terminar el diseño, continúen a Invitados y preparen su lista. Con el evento habilitado, «Enviar invitaciones» prepara y comprueba la web antes de enviar por WhatsApp los enlaces personales de cada grupo.",
    ),
  ],
  [
    i18n("¿Podemos cambiar detalles después de publicar?"),
    i18n(
      "Sí. El trabajo se guarda automáticamente. Cuando quieran aplicar esos cambios a la web, pulsen «Actualizar invitación» en el editor. Conservan su dirección y las respuestas; guardar no vuelve a enviar mensajes.",
    ),
  ],
]);
export const generalQuestions = localized((i18n: Translator) => [
  [
    i18n("¿Para qué eventos puedo crear una invitación digital?"),
    i18n(
      "The Date está pensado para cumpleaños, fiestas, graduaciones, reuniones y otros encuentros. Para bodas, Save the Date ofrece una experiencia dedicada.",
    ),
  ],
  [
    i18n("¿Puedo crear mi invitación gratis?"),
    i18n(
      "Puedes diseñar, previsualizar y guardar tu invitación antes de pagar. La publicación y la gestión de invitados se habilitan según las condiciones del evento que encontrarás en tu espacio.",
    ),
  ],
  [
    i18n("¿Puedo enviar la invitación por WhatsApp?"),
    i18n(
      "Sí. Termina el diseño y prepara la lista en Invitados. Con el evento habilitado, «Enviar invitaciones» primero prepara y comprueba la web y después envía los enlaces personales por WhatsApp.",
    ),
  ],
  [
    i18n("¿Cómo organizo las confirmaciones de asistencia?"),
    i18n(
      "Desde tu espacio puedes consultar las respuestas, gestionar cupos y acompañantes y organizar mesas al habilitar las herramientas del evento.",
    ),
  ],
]);
export default function MarketingFAQ({
  wedding = false,
}: {
  wedding?: boolean;
}) {
  const i18n = useTranslator();

  return (
    <section
      className={`marketing-questions ${wedding ? "shell" : "party-shell"}`}
      id="preguntas"
    >
      <div>
        <p>
          {wedding ? i18n("Antes de empezar") : i18n("Todo claro para el plan")}
        </p>
        <h2>
          {wedding
            ? i18n("Las dudas también tienen su lugar.")
            : i18n("¿Nos ponemos de acuerdo?")}
        </h2>
      </div>
      <div>
        {(wedding ? weddingQuestions(i18n) : generalQuestions(i18n)).map(
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
