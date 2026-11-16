import { type Translator, localized } from "@/lib/i18n/translator";
export const guides = localized((i18n: Translator) => ({
  wedding: {
    host: "https://save.thedate.now",
    slug: "invitaciones-digitales-de-boda",
    name: i18n("Save the Date"),
    title: i18n("Cómo crear una invitación digital de boda"),
    description: i18n(
      "Qué incluir en una invitación digital de boda: fecha, ubicación, fotos, confirmaciones y cupos. Una guía para diseñar y compartir con Save the Date.",
    ),
    intro: i18n(
      "Una invitación de boda presenta su celebración y ayuda a sus invitados a prepararse. Antes de elegir colores o fotos, reúnan la información que cada persona necesita para acompañarlos.",
    ),
    sections: [
      [
        i18n("Qué incluir en su invitación de boda"),
        i18n(
          "Empiecen por sus nombres, la fecha y el horario. Si la ceremonia y la celebración tienen lugares diferentes, indiquen claramente la ubicación de cada una. Añadan las instrucciones que de verdad necesiten sus invitados, como el código de vestimenta o una indicación para llegar.",
        ),
      ],
      [
        i18n("Un diseño que se sienta suyo"),
        i18n(
          "Elijan una plantilla y personalicen las fotos, los colores y el texto. Una fotografía legible y unas pocas palabras claras pueden contar mejor su historia que una página llena de detalles. Revisen que los nombres, la fecha y la dirección se lean bien desde un celular.",
        ),
      ],
      [
        i18n("Cómo compartir el enlace por WhatsApp"),
        i18n(
          "En Save the Date pueden crear, editar, previsualizar y guardar su diseño antes de pagar. Al terminar el diseño, continúen a Invitados. Con la lista preparada y el evento habilitado, «Enviar invitaciones» prepara y comprueba la web antes de enviar los enlaces personales por WhatsApp.",
        ),
      ],
      [
        i18n("Confirmaciones, acompañantes y cupos"),
        i18n(
          "Preparar una lista ayuda a distinguir a quién han invitado, cuántos cupos tiene y quién respondió. La invitación enviada no equivale a una confirmación. Con las herramientas del evento habilitadas pueden consultar respuestas, organizar acompañantes y preparar mesas.",
        ),
      ],
      [
        i18n("La revisión antes de enviar"),
        i18n(
          "Abran la vista previa en móvil y comprueben la fecha, el horario, las ubicaciones y la ortografía. El diseño se guarda automáticamente. Después de publicar, pulsen «Actualizar invitación» para aplicar los cambios a la web, conservando la dirección y las respuestas. Consulten las condiciones de publicación y gestión dentro del estudio antes de habilitar el evento.",
        ),
      ],
    ],
  },
  general: {
    host: "https://thedate.now",
    slug: "invitaciones-digitales-para-eventos",
    name: i18n("The Date"),
    title: i18n("Cómo crear y compartir invitaciones digitales para eventos"),
    description: i18n(
      "Prepara invitaciones para cumpleaños, fiestas y reuniones: diseño, fecha, ubicación, WhatsApp y confirmaciones de asistencia con The Date.",
    ),
    intro: i18n(
      "Una buena invitación deja claro cuál es el plan y qué necesita saber tu gente. Para un cumpleaños, una fiesta o una reunión, reunir los detalles en una página facilita que todos consulten la misma información.",
    ),
    sections: [
      [
        i18n("Los detalles que hacen claro el plan"),
        i18n(
          "Indica qué vas a celebrar, el día, la hora y el lugar. Si hay algo que preparar o llevar, dilo en pocas palabras. Añade la ubicación y revisa que sea la correcta antes de compartirla: un mensaje breve funciona mejor cuando resuelve las dudas habituales.",
        ),
      ],
      [
        i18n("Cómo elegir el diseño de tu invitación"),
        i18n(
          "En The Date puedes elegir una plantilla, personalizar fotos y textos y revisar la vista previa. Adaptar el diseño a la ocasión ayuda a comunicar el tono del encuentro. Prioriza un título legible, una foto que funcione en móvil y contraste suficiente para los detalles.",
        ),
      ],
      [
        i18n("Compartir una invitación por WhatsApp"),
        i18n(
          "Puedes diseñar y guardar antes de pagar. Al terminar el diseño, continúa a Invitados para preparar la lista. Con el evento habilitado, «Enviar invitaciones» prepara y comprueba la web antes de enviar los enlaces personales por WhatsApp.",
        ),
      ],
      [
        i18n("Organizar las confirmaciones de asistencia"),
        i18n(
          "La lista de invitados y las respuestas cumplen tareas diferentes: enviar una invitación no confirma que alguien vaya a asistir. Consulta las respuestas y los cupos para organizar acompañantes. Si el encuentro necesita mesas, puedes preparar su distribución con las herramientas habilitadas del evento.",
        ),
      ],
      [
        i18n("Revisa tu invitación desde el celular"),
        i18n(
          "Antes de enviar, abre la vista previa y comprueba nombres, horarios, ubicación y enlaces. Evita depender de texto pequeño dentro de una imagen. El guardado es automático. Si cambias el diseño publicado, pulsa «Actualizar invitación» cuando esté listo: se mantiene la misma dirección y las respuestas de tus invitados.",
        ),
      ],
    ],
  },
}));
