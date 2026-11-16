import { localized, type Translator } from "@/lib/i18n/translator";
export const weddingTopics = localized(
  (i18n: Translator) =>
    [
      {
        kind: "wedding",
        slug: "plantillas-invitaciones-de-boda",
        title: i18n("Plantillas de invitaciones de boda animadas"),
        description: i18n(
          "Conozcan 24 plantillas digitales de boda: aperturas animadas, fotos integradas, paletas, tipografías y secciones para personalizar en Save the Date.",
        ),
        intro: i18n(
          "La invitación es el primer encuentro de sus invitados con la boda. Una buena plantilla les ayuda a transmitir el ambiente de la celebración y a reunir la información que necesitan, sin empezar con una página vacía.",
        ),
        sections: [
          [
            i18n("Un estilo para cada historia"),
            i18n(
              "El catálogo reúne 24 composiciones para bodas: románticas, botánicas, editoriales, de noche y con protagonismo de la fotografía. Pueden partir de una portada tipográfica, un marco delicado o una imagen a ancho completo. Los nombres y fotografías de los previews son ejemplos; en el estudio eligen sus propios archivos y escriben su historia.",
            ),
          ],
          [
            i18n("Una apertura que acompaña al diseño"),
            i18n(
              "La entrada puede adoptar seis escenas: carta, jardín, ticket, telón, flor y constelación. Después, el contenido se descubre por secciones. Las animaciones respetan automáticamente la preferencia de movimiento reducido del dispositivo. La boda sigue siendo fácil de consultar, tanto para quien abre la invitación por primera vez como para quien vuelve a buscar una dirección.",
            ),
          ],
          [
            i18n("Colores, tipografías y fotos integradas"),
            i18n(
              "Los estilos globales permiten cambiar el color del diseño, el papel y la tipografía del conjunto. Los valores que hayan personalizado como excepciones se conservan. Las fotos pueden llenar su encuadre, mostrarse completas, tener un arco o fundirse suavemente con el fondo. Así el diseño mantiene una misma intención desde la portada hasta el cierre.",
            ),
          ],
          [
            i18n("Cambiar de plantilla conservando su contenido"),
            i18n(
              "Pueden probar otro diseño y ver el resultado con sus textos y fotos antes de aplicarlo. Se conservan las secciones propias y las fotografías que ya colocaron. También hay variantes sin espacios de fotografía: una invitación puede apoyarse en nombres, color y tipografía sin necesitar un álbum completo. La vista previa del estudio permite revisar nombres largos y detalles desde el celular.",
            ),
          ],
          [
            i18n("Añadir solo las secciones que necesitan"),
            i18n(
              "La biblioteca incluye portada, historia, itinerario, mapa, galería, dress code y confirmación. Cada sección toma el estilo actual de su invitación. La vestimenta puede acompañarse de referencias y de colores que prefieran evitar. Para una boda con varios momentos, el itinerario y las ubicaciones ayudan a que cada invitado se prepare con claridad.",
            ),
          ],
        ],
      },
      {
        kind: "wedding",
        slug: "invitaciones-de-boda-por-whatsapp",
        title: i18n("Invitaciones de boda por WhatsApp y confirmaciones"),
        description: i18n(
          "Preparen y envíen invitaciones de boda por WhatsApp con enlaces personales, respuestas y cupos organizados en Save the Date.",
        ),
        intro: i18n(
          "Compartir una boda por WhatsApp funciona mejor cuando la invitación y la lista de invitados están conectadas. Cada persona puede consultar los detalles de la celebración mientras ustedes siguen las respuestas y los cupos desde un mismo espacio.",
        ),
        sections: [
          [
            i18n("Primero el diseño, después los invitados"),
            i18n(
              "Pueden diseñar con calma y salir del editor con la flecha: el trabajo se guarda automáticamente. Antes del primer despliegue, Terminar y continuar lleva a Invitados. Allí preparan la lista con un archivo Excel o añadiendo personas a mano. La publicación y las herramientas de organización requieren activar el evento; las condiciones vigentes aparecen en el estudio.",
            ),
          ],
          [
            i18n("Qué sucede al enviar las invitaciones"),
            i18n(
              "Enviar invitaciones reúne la preparación de la web y el envío en un solo paso. El sistema primero despliega la invitación y comprueba que esté disponible. Nadie recibe un mensaje antes de que la web esté lista. El envío avanza siguiendo el orden de la lista y respetando el aforo y los cupos de cada grupo.",
            ),
          ],
          [
            i18n("Un enlace personal y una respuesta clara"),
            i18n(
              "Las personas reciben su enlace por WhatsApp y pueden responder Sí, No o Tal vez en la encuesta. Cuando corresponde, continúan desde su enlace personal para completar los datos de asistencia. Una invitación enviada no equivale a una confirmación: el espacio de invitados distingue las respuestas y los grupos para que puedan preparar la celebración.",
            ),
          ],
          [
            i18n("Acompañantes, cupos y lista de espera"),
            i18n(
              "Preparar los grupos evita confundir personas con invitaciones. Pueden añadir más personas que el aforo disponible y mantener el orden de la lista. Si alguien rechaza, confirma menos personas o vence una reserva temporal, el siguiente grupo puede recibir su invitación cuando haya espacio suficiente. Conviene revisar el orden antes de empezar a enviar.",
            ),
          ],
          [
            i18n("Actualizar la invitación después del envío"),
            i18n(
              "Una vez desplegada, el editor muestra Actualizar invitación. Pueden guardar trabajo pendiente sin cambiar inmediatamente la versión pública. Cuando decidan aplicar los cambios, se conserva el enlace existente y las respuestas. Actualizar el diseño no vuelve a enviar por sí solo todos los mensajes; el seguimiento de envíos continúa en Invitados.",
            ),
          ],
        ],
      },
      {
        kind: "wedding",
        slug: "organizar-invitados-de-boda",
        title: i18n("Organizar invitados de boda, mesas y regalos"),
        description: i18n(
          "Organicen invitados de boda con Excel, acompañantes, confirmaciones, aforo, distribución de mesas y lista de regalos en Save the Date.",
        ),
        intro: i18n(
          "Una boda se organiza mejor cuando cada nombre está conectado con sus acompañantes, su respuesta y el lugar que ocupará. Save the Date reúne estas tareas alrededor de la invitación para ayudarles a preparar el día con información clara.",
        ),
        sections: [
          [
            i18n("Una lista preparada para grupos y acompañantes"),
            i18n(
              "Importen sus invitados con la plantilla Excel del estudio o añadan personas a mano. Revisen los teléfonos, los nombres, los grupos y el orden de envío antes de comenzar. La herramienta distingue entre una invitación y las personas que incluye: así pueden organizar cupos familiares sin asumir que todos los acompañantes ya están registrados.",
            ),
          ],
          [
            i18n("Confirmaciones que ayudan a decidir"),
            i18n(
              "Enviar no significa confirmar. Las respuestas Sí, No y Tal vez, junto con los cupos y sus tiempos, permiten seguir la asistencia. El aforo regula cuándo pueden avanzar los siguientes grupos de la lista. Consultar esta información en el mismo lugar reduce la necesidad de reunir mensajes sueltos o mantener varias hojas de cálculo contradictorias.",
            ),
          ],
          [
            i18n("Mesas y espacios del salón"),
            i18n(
              "El plano permite organizar mesas y elementos como pista de baile, bar, bocaditos o entrada. La distribución se prepara con las personas confirmadas y sus grupos registrados. Pueden mover los espacios para adaptarlos al lugar y revisar las asignaciones antes de descargar el Excel de entrada, que ayuda a recibir a sus invitados el día de la boda.",
            ),
          ],
          [
            i18n("Una lista de regalos sin elecciones repetidas"),
            i18n(
              "La invitación puede enlazar con su lista de regalos. Las personas ven las opciones y pueden reservar su elección desde su acceso personal, para que otros invitados distingan los regalos disponibles. Ustedes pueden seguir quién eligió cada detalle. Reservar un regalo y comprarlo en una tienda son acciones diferentes; la lista no sustituye la compra.",
            ),
          ],
          [
            i18n("Diseño y organización, con tareas claras"),
            i18n(
              "El editor sirve para preparar la invitación y aplicar cambios al diseño público cuando ya esté desplegada. Invitados concentra la lista y el comienzo del envío; Mesas ayuda con la distribución y Regalos reúne las elecciones. Pueden volver al diseño sin rehacer las respuestas ni cambiar el enlace que ya compartieron.",
            ),
          ],
        ],
      },
    ] as const,
);
