import Link from "next/link";
const contact = "lucasraulsantillanarevalo@gmail.com";
export default function PrivacyContent({
  name,
  email,
}: {
  name: string;
  email: string;
}) {
  return (
    <>
      <p>
        Esta política explica cómo {name} trata los datos en su web, estudio,
        invitaciones y aplicaciones móviles Android e iOS.
      </p>
      <h2>Responsable y contacto</h2>
      <p>
        El responsable del servicio es Lucas Santillán. Para consultas de
        privacidad, acceso, corrección o eliminación, escribe a{" "}
        <a href={email}>{contact}</a>.
      </p>
      <h2>Datos que utilizamos</h2>
      <p>
        Para autenticarte utilizamos tu nombre, correo e identificadores de
        cuenta. Si eliges Google, recibimos su identificador y tu foto cuando
        está disponible. No solicitamos acceso a Gmail, contactos ni calendario.
        Las contraseñas se almacenan como un hash, no en texto legible.
      </p>
      <p>
        Tratamos los datos que se aportan a los eventos: textos, fechas, zona
        horaria, imágenes, nombres y datos de contacto de invitados,
        acompañantes, respuestas de asistencia y reservas de regalos. También
        guardamos las consultas de soporte y los registros técnicos necesarios
        para operar y proteger el servicio.
      </p>
      <p>
        Si cambias tu foto en la app, accedemos solo a la imagen que seleccionas
        y preparamos una copia reducida; no subimos tu biblioteca. Para enviar
        avisos utilizamos identificadores técnicos del dispositivo o instalación
        y el permiso de notificaciones del sistema. Puedes modificar ese permiso
        en los ajustes del dispositivo.
      </p>
      <h2>Finalidades y acceso</h2>
      <p>
        Usamos estos datos para autenticarte, mantener tu perfil, gestionar y
        publicar las invitaciones solicitadas, mostrar confirmaciones y regalos,
        enviar avisos autorizados, atender soporte y prevenir abusos. El
        propietario y las personas autorizadas pueden acceder a los datos del
        evento según sus permisos. Las cuentas de cada marca son independientes.
      </p>
      <h2>Contenido que compartes</h2>
      <p>
        Las invitaciones publicadas pueden ser vistas por quienes accedan a su
        enlace. Los enlaces personales pueden mostrar información del invitado
        al que corresponden: evita compartirlos con terceros. Quien incorpora
        datos de invitados debe tener autorización para hacerlo y revisar lo que
        publica o envía.
      </p>
      <h2>Proveedores</h2>
      <p>
        Google interviene si eliges su acceso; Firebase Cloud Messaging y los
        servicios de Apple o Android, en las notificaciones. En la web, Stripe
        procesa los pagos cuando corresponde; no guardamos el número completo de
        tu tarjeta. Los proveedores de correo y mensajería, incluidos Resend,
        Wazend y WhatsApp cuando se utiliza esa función, reciben los datos
        necesarios para los envíos solicitados. Los datos se almacenan en la
        infraestructura del servicio y pueden ser tratados por proveedores en
        otros países.
      </p>
      <h2>Almacenamiento y seguridad</h2>
      <p>
        El servicio utiliza conexiones HTTPS. La app guarda la sesión mediante
        el almacenamiento seguro del sistema. El estudio web utiliza cookies de
        sesión y de validación del acceso; puede guardar preferencias locales y
        referencias de afiliados cuando usas esas funciones. Cerrar sesión
        elimina la sesión local correspondiente. No usamos la app para
        publicidad personalizada ni solicitamos seguimiento entre aplicaciones.
      </p>
      <h2>Conservación y derechos</h2>
      <p>
        Conservamos la información necesaria para prestar el servicio mientras
        las cuentas y los eventos estén activos. Puedes solicitar acceso,
        corrección o eliminación desde Cuenta en la app o en la{" "}
        <Link href="/eliminar-cuenta">página de eliminación</Link>. Podemos
        verificar que la solicitud corresponde al titular. Los datos que deban
        conservarse por obligaciones legales, pagos, seguridad o disputas se
        limitan a lo necesario. Las copias de seguridad se retiran conforme a su
        ciclo de rotación.
      </p>
      <h2>Cambios</h2>
      <p>
        Las actualizaciones se publican en esta página con su fecha de
        modificación.
      </p>
    </>
  );
}
