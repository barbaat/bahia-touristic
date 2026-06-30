import LegalLayout from '../partials/LegalLayout';
import { siteConfig } from '../config/site';

function Cookies() {
  return (
    <LegalLayout title="Política de cookies" updated="30 de junio de 2026">
      <section>
        <h2 className="text-xl font-bold text-slate-900">1. ¿Qué son las cookies?</h2>
        <p className="mt-2">
          Las cookies son pequeños archivos que se almacenan en tu navegador al visitar un sitio web. Esta web no
          utiliza cookies propias de seguimiento o publicidad.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-slate-900">2. Cookies de terceros</h2>
        <p className="mt-2">Este sitio incrusta contenido de proveedores externos que pueden instalar sus propias cookies:</p>
        <ul className="mt-2 list-inside list-disc space-y-1">
          <li>
            <strong>Vimeo</strong>, para mostrar el vídeo del tour virtual del apartamento.
          </li>
          <li>
            <strong>Google Maps</strong>, para mostrar la ubicación del alojamiento en {siteConfig.locality}.
          </li>
        </ul>
        <p className="mt-2">
          Estos servicios funcionan bajo la responsabilidad y política de privacidad de sus respectivos proveedores.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-slate-900">3. Cómo gestionar las cookies</h2>
        <p className="mt-2">
          Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración de tu
          navegador. Ten en cuenta que bloquear ciertas cookies puede afectar a la visualización del vídeo o del
          mapa embebido.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-slate-900">4. Más información</h2>
        <p className="mt-2">
          Para cualquier duda sobre esta política puedes escribirnos a{' '}
          <a href={`mailto:${siteConfig.email}`} className="text-teal-700 underline">
            {siteConfig.email}
          </a>
          .
        </p>
      </section>
    </LegalLayout>
  );
}

export default Cookies;
