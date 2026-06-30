import LegalLayout from '../partials/LegalLayout';
import { siteConfig } from '../config/site';

function AvisoLegal() {
  return (
    <LegalLayout title="Aviso legal" updated="30 de junio de 2026">
      <section>
        <h2 className="text-xl font-bold text-slate-900">1. Datos del titular</h2>
        <p className="mt-2">
          En cumplimiento de la Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio Electrónico
          (LSSI-CE), se informa de los siguientes datos del titular de este sitio web:
        </p>
        <ul className="mt-2 list-inside list-disc space-y-1">
          <li>Titular: {siteConfig.legalName}</li>
          <li>NIF/CIF: [PENDIENTE — a completar por el propietario]</li>
          <li>Domicilio: {siteConfig.locality}, {siteConfig.region} ({siteConfig.country}) — [PENDIENTE dirección postal completa]</li>
          <li>Número de registro de turismo de Galicia: [PENDIENTE]</li>
          <li>
            Correo electrónico: <a href={`mailto:${siteConfig.email}`} className="text-teal-700 underline">{siteConfig.email}</a>
          </li>
          <li>
            Teléfono: <a href={siteConfig.phoneHref} className="text-teal-700 underline">{siteConfig.phoneDisplay}</a>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-slate-900">2. Objeto</h2>
        <p className="mt-2">
          Este sitio web tiene carácter informativo sobre el apartamento turístico {siteConfig.legalName} y facilita el
          contacto y la reserva del alojamiento, ya sea de forma directa o a través de la plataforma Booking.com.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-slate-900">3. Condiciones de uso</h2>
        <p className="mt-2">
          El acceso y uso de este sitio web atribuye la condición de usuario e implica la aceptación de las
          condiciones aquí recogidas. El usuario se compromete a hacer un uso adecuado de los contenidos y
          servicios ofrecidos, y a no emplearlos para incurrir en actividades ilícitas o contrarias a la buena fe y
          al orden público.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-slate-900">4. Propiedad intelectual</h2>
        <p className="mt-2">
          Los textos, imágenes y demás contenidos de este sitio web son propiedad de {siteConfig.legalName} o se
          utilizan con la debida autorización. Queda prohibida su reproducción total o parcial sin consentimiento
          previo.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-slate-900">5. Legislación aplicable</h2>
        <p className="mt-2">
          Las presentes condiciones se rigen por la legislación española. Para cualquier controversia se estará a lo
          dispuesto en la normativa de consumidores y usuarios aplicable.
        </p>
      </section>
    </LegalLayout>
  );
}

export default AvisoLegal;
