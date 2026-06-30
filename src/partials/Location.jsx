import RutaImage from '../images/ruta.jpeg';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { siteConfig } from '../config/site';

function Location() {
  const textReveal = useScrollReveal({ threshold: 0.2 });
  const mapReveal = useScrollReveal({ threshold: 0.15 });

  return (
    <section id="entorno" className="relative py-16 md:py-24" aria-labelledby="entorno-titulo">
      <div className="container-shell">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="reveal lg:col-span-5" ref={textReveal}>
            <span className="kicker">Entorno y playa</span>
            <h2 id="entorno-titulo" className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
              La ría a un paseo de distancia
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
              En {siteConfig.locality}, dentro de las {siteConfig.area}, con A Xunqueira, A Borna y Rodeira al
              alcance y un paseo costero para recorrer la zona sin coger el coche.
            </p>

            <figure className="surface-card mt-6 overflow-hidden p-2">
              <img
                src={RutaImage}
                width="1200"
                height="960"
                alt="Arroyo en una ruta de senderismo del entorno de Moaña"
                loading="lazy"
                decoding="async"
                className="h-48 w-full rounded-xl object-cover"
              />
            </figure>
          </div>

          <div className="reveal lg:col-span-7" ref={mapReveal}>
            <div className="surface-card overflow-hidden p-3">
              <div className="relative h-[360px] overflow-hidden rounded-xl md:h-[460px]">
                <iframe
                  title={`Mapa de ${siteConfig.locality}`}
                  src={siteConfig.mapsEmbedSrc}
                  className="absolute inset-0 h-full w-full grayscale-[15%]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.mapsQuery)}`}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-2 px-1 text-sm font-semibold text-teal-800 transition hover:text-teal-900"
              >
                Cómo llegar
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7-7 7M21 12H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Location;
