import LegalLayout from '../partials/LegalLayout';
import { siteConfig } from '../config/site';

function Privacidad() {
  return (
    <LegalLayout title="Política de privacidad" updated="30 de junio de 2026">
      <section>
        <h2 className="text-xl font-bold text-slate-900">1. Responsable del tratamiento</h2>
        <ul className="mt-2 list-inside list-disc space-y-1">
          <li>Responsable: {siteConfig.legalName}</li>
          <li>NIF/CIF: [PENDIENTE — a completar por el propietario]</li>
          <li>
            Contacto: <a href={`mailto:${siteConfig.email}`} className="text-teal-700 underline">{siteConfig.email}</a> ·{' '}
            <a href={siteConfig.phoneHref} className="text-teal-700 underline">{siteConfig.phoneDisplay}</a>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-slate-900">2. Finalidad del tratamiento</h2>
        <p className="mt-2">
          Los datos facilitados a través del correo electrónico o del teléfono se utilizan exclusivamente para
          gestionar consultas sobre disponibilidad y reservas del apartamento. Si la reserva se realiza a través de
          Booking.com, dicha plataforma trata los datos conforme a su propia política de privacidad.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-slate-900">3. Legitimación</h2>
        <p className="mt-2">
          La base legal para el tratamiento es el consentimiento del usuario al contactar voluntariamente por
          teléfono o correo electrónico, y la ejecución de la relación precontractual o contractual derivada de la
          reserva.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-slate-900">4. Destinatarios</h2>
        <p className="mt-2">
          No se ceden datos a terceros salvo obligación legal. Las reservas gestionadas a través de Booking.com
          implican que dicha plataforma actúa como responsable independiente de los datos asociados a esa reserva.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-slate-900">5. Conservación</h2>
        <p className="mt-2">
          Los datos se conservarán durante el tiempo necesario para atender la consulta o la relación contractual, y
          posteriormente durante los plazos legalmente exigibles.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-slate-900">6. Derechos</h2>
        <p className="mt-2">
          Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad
          escribiendo a{' '}
          <a href={`mailto:${siteConfig.email}`} className="text-teal-700 underline">
            {siteConfig.email}
          </a>
          . También puedes presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es)
          si consideras que no se han atendido correctamente tus derechos.
        </p>
      </section>
    </LegalLayout>
  );
}

export default Privacidad;
