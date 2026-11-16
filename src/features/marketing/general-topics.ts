import { localized, type Translator } from "@/lib/i18n/translator";
export const generalTopics = localized(
  (i18n: Translator) =>
    [
      {
        kind: "general",
        slug: "plantillas-invitaciones-para-eventos",
        title: i18n("Plantillas de invitaciones digitales para eventos"),
        description: i18n(
          "Descubre 24 plantillas para cumpleaños, fiestas y encuentros: animaciones, fotos, estilos y secciones editables en The Date.",
        ),
        intro: i18n(
          "Un cumpleaños, una fiesta de noche y una reunión tranquila no tienen por qué empezar con el mismo diseño. Las plantillas de The Date ofrecen un punto de partida visual para comunicar qué vas a celebrar y cómo quieres reunir a tu gente.",
        ),
        sections: [
          [
            i18n("24 diseños para distintos planes"),
            i18n(
              "El catálogo combina composiciones festivas, editoriales, naturales, nocturnas y fotográficas. Puedes dar protagonismo a un título, usar una foto en la cabecera o elegir un formato inspirado en un ticket. Las muestras ayudan a imaginar el resultado; las fotos de tu biblioteca solo se colocan cuando tú las eliges.",
            ),
          ],
          [
            i18n("Movimiento que da la bienvenida"),
            i18n(
              "Las aperturas y las entradas por sección acompañan al contenido, en lugar de convertirlo en un video difícil de consultar. Puedes elegir entre seis escenas de entrada y añadir música con un MP3 propio o un enlace de YouTube. Si una persona usa movimiento reducido en su dispositivo, la invitación adapta automáticamente las animaciones.",
            ),
          ],
          [
            i18n("Un mismo estilo para toda la invitación"),
            i18n(
              "Cambia el color base, el papel y la tipografía del conjunto. Los detalles que personalizaste como excepciones se conservan. Las nuevas secciones y los elementos que añadas toman ese estilo. Las herramientas de alinear, distribuir, agrupar, bloquear y copiar estilos aparecen cuando seleccionas objetos, para que puedas componer sin llenar el editor de controles permanentes.",
            ),
          ],
          [
            i18n("Probar otra plantilla sin empezar de nuevo"),
            i18n(
              "La vista previa permite comparar otro diseño con los textos, fotografías colocadas y secciones propias que ya preparaste. Hay composiciones con fotos y variantes sin espacios de fotografía. Si añades una imagen, puedes elegir entre bordes definidos, suavizados, fundido con el fondo, arco o acabado cinematográfico, además de ajustar si quieres verla completa o llenar el encuadre.",
            ),
          ],
          [
            i18n("Las secciones que necesita tu evento"),
            i18n(
              "Añade portada, historia, itinerario, mapa, galería, dress code y confirmación desde la biblioteca. Todas se adaptan al estilo de la invitación. Las indicaciones deben ser concretas: horario, acceso, vestimenta o lo que la gente necesita llevar. Antes del envío, revisa el diseño y los enlaces en la vista previa del estudio.",
            ),
          ],
        ],
      },
      {
        kind: "general",
        slug: "invitaciones-para-eventos-por-whatsapp",
        title: i18n("Invitaciones para eventos por WhatsApp"),
        description: i18n(
          "Crea invitaciones para eventos y envíalas por WhatsApp con enlaces personales, confirmaciones, acompañantes y control de cupos en The Date.",
        ),
        intro: i18n(
          "Una invitación por WhatsApp puede ser algo más que una imagen en el chat. The Date reúne el diseño, el enlace del evento, la lista de personas y sus respuestas para organizar desde una fiesta pequeña hasta un encuentro con aforo limitado.",
        ),
        sections: [
          [
            i18n("Diseña antes de preparar el envío"),
            i18n(
              "Empieza por la plantilla y los detalles: título, fecha, horario, ubicación e indicaciones. El editor guarda automáticamente mientras trabajas. Puedes salir con la flecha y continuar después. Terminar y continuar abre Invitados antes de la primera publicación. La activación y las condiciones del evento se revisan dentro de tu espacio.",
            ),
          ],
          [
            i18n("La web se prepara antes del primer mensaje"),
            i18n(
              "Cuando tu lista esté lista y pulses Enviar invitaciones, el sistema prepara la web y comprueba que se pueda abrir. Después comienza el envío por WhatsApp. Cargar una lista por sí solo no publica ni envía mensajes. Así puedes revisar los datos sin que tus invitados reciban una invitación que todavía estás preparando.",
            ),
          ],
          [
            i18n("Respuestas y enlaces personales"),
            i18n(
              "Los invitados reciben un enlace personal y responden Sí, No o Tal vez en la encuesta de WhatsApp. La asistencia se organiza a partir de esas respuestas, no del número de mensajes enviados. Desde el enlace personal pueden completar los datos cuando corresponde. Mantener la información del evento en la invitación ayuda a que todos consulten el mismo plan.",
            ),
          ],
          [
            i18n("Un orden de envío que respeta el aforo"),
            i18n(
              "La lista avanza según el orden de las personas y la capacidad disponible para cada grupo. Si se liberan cupos o vence una reserva temporal, el siguiente grupo puede recibir su invitación cuando haya espacio. También puedes seguir los envíos que necesitan revisión. Un resultado incierto no se repite a ciegas para evitar mensajes duplicados.",
            ),
          ],
          [
            i18n("Cambios sin cambiar el enlace"),
            i18n(
              "Después de desplegar el evento, el editor permite Actualizar invitación. El guardado automático conserva el trabajo que todavía no quieres aplicar. Al actualizar, tus invitados siguen usando la misma dirección y las respuestas se mantienen. El diseño y el envío siguen siendo acciones distintas: cambiar una foto no equivale a enviar otro mensaje.",
            ),
          ],
        ],
      },
      {
        kind: "general",
        slug: "organizar-invitados-y-mesas",
        title: i18n("Organizar invitados, confirmaciones y mesas de un evento"),
        description: i18n(
          "Gestiona invitados con Excel, acompañantes, respuestas, aforo, plano de mesas y regalos desde el espacio de tu evento en The Date.",
        ),
        intro: i18n(
          "La invitación presenta el plan. La organización convierte las respuestas en decisiones: cuántas personas recibirás, qué grupos asistirán y cómo preparar el espacio. The Date conecta esas tareas sin pedirte que empieces una nueva lista para cada una.",
        ),
        sections: [
          [
            i18n("Invitados desde Excel o a mano"),
            i18n(
              "Usa la plantilla de invitados para preparar tu lista o añade personas desde el formulario. Revisa los nombres, teléfonos y grupos antes de enviar. La importación permite corregir incidencias y volver a cargar datos sin tratar una respuesta anterior como una invitación nueva. El orden de la lista importa cuando tu evento tiene aforo limitado.",
            ),
          ],
          [
            i18n("Respuestas, acompañantes y cupos"),
            i18n(
              "Las personas pueden responder Sí, No o Tal vez. Consulta la asistencia y los acompañantes registrados para contar personas, no solamente enlaces enviados. Los cupos y las reservas temporales ayudan a decidir cuándo puede avanzar el siguiente grupo. Esto resulta útil tanto en una cena con pocos asientos como en una celebración con una lista más amplia.",
            ),
          ],
          [
            i18n("Un plano adaptado al encuentro"),
            i18n(
              "Organiza mesas y mueve zonas como pista, bar, bocaditos o entrada para representar tu espacio. Las asignaciones se preparan con las personas confirmadas y sus grupos. Puedes revisar el plano y descargar el Excel de entrada para que el equipo que recibe a los invitados disponga de la información que necesita.",
            ),
          ],
          [
            i18n("Regalos conectados con la invitación"),
            i18n(
              "Si tu ocasión necesita una lista de regalos, puedes reunir opciones y enlazarlas desde el diseño. El acceso personal permite reservar elecciones para evitar repetidos y consultar qué sigue disponible. La reserva organiza la intención del invitado; la compra se realiza por separado en la tienda que corresponda.",
            ),
          ],
          [
            i18n("Un mismo evento durante todo el recorrido"),
            i18n(
              "Diseño, invitados, mesas y regalos pertenecen al mismo evento. Al enviar, primero se prepara y comprueba la web. Más adelante puedes actualizar la invitación conservando su dirección y las respuestas. Así el lugar donde tu gente consulta el plan y el espacio donde tú lo organizas siguen conectados.",
            ),
          ],
        ],
      },
    ] as const,
);
