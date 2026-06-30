import logoB from '../images/logo-B.png';
import HeroImage from '../images/vista-pajaro.jpeg';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { siteConfig } from '../config/site';

function Contact() {
  const textReveal = useScrollReveal({ threshold: 0.2 });
  const cardReveal = useScrollReveal({ threshold: 0.15, delay: 80 });

  return (
    <section id="reservas" className="py-16 md:py-24" aria-labelledby="reservas-titulo">
      <div className="container-shell">
        <div className="surface-card overflow-hidden p-6 md:p-8">
          <div className="grid items-start gap-10 lg:grid-cols-12">
            <div className="reveal lg:col-span-5" ref={textReveal}>
              <span className="kicker">Reserva sin complicaciones</span>
              <h2 id="reservas-titulo" className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
                Elige tu canal preferido y confirma en minutos
              </h2>
              <p className="mt-3 text-base text-slate-600">
                Te atendemos de forma directa para que tengas claridad de precio, disponibilidad y condiciones desde el primer contacto.
              </p>

              <dl className="mt-6 space-y-4 text-slate-700">
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-wide text-slate-500">Teléfono</dt>
                  <dd className="mt-1 text-lg font-semibold">
                    <a href={siteConfig.phoneHref} className="transition hover:text-teal-700">
                      {siteConfig.phoneDisplay}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-wide text-slate-500">Correo</dt>
                  <dd className="mt-1 text-lg font-semibold">
                    <a href={`mailto:${siteConfig.email}`} className="transition hover:text-teal-700">
                      {siteConfig.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-wide text-slate-500">Ubicación</dt>
                  <dd className="mt-1 text-lg font-semibold">
                    {siteConfig.locality}, {siteConfig.region}
                  </dd>
                </div>
              </dl>
            </div>

            <article
              className="reveal overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg lg:col-span-7"
              ref={cardReveal}
            >
              <div className="relative">
                <a href={siteConfig.bookingUrl} target="_blank" rel="noreferrer" className="block">
                  <img
                    src={HeroImage}
                    width="1047"
                    height="820"
                    alt={`Vista del alojamiento ${siteConfig.legalName}`}
                    className="h-48 w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </a>
                <a
                  href={siteConfig.bookingReviewsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-lg bg-white/95 px-3 py-2 shadow-md transition hover:bg-white"
                  aria-label="Ver valoraciones en Booking"
                >
                  <span className="text-sm font-bold text-slate-900">{siteConfig.bookingRatingLabel}</span>
                  <span className="rounded bg-blue-700 px-2 py-1 text-sm font-bold text-white">{siteConfig.bookingRating}</span>
                  <span className="text-xs text-slate-600">{siteConfig.bookingReviewCount} comentarios</span>
                </a>
              </div>

              <div className="p-6">
                <img src={logoB} width="170" height="70" alt="Booking" className="h-11 w-auto object-contain" loading="lazy" decoding="async" />
                <h3 className="mt-3 text-lg font-bold text-slate-900">{siteConfig.legalName}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  Apartamento con vistas panorámicas al mar, ubicación excelente y reserva segura en Booking.
                </p>

                <a
                  href={siteConfig.bookingReviewsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-2 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-xs font-semibold text-amber-900 transition hover:bg-amber-100 sm:text-sm"
                >
                  <span aria-hidden="true">★</span>
                  <span>Leer valoraciones en Booking</span>
                </a>

                <a href={siteConfig.bookingUrl} target="_blank" rel="noreferrer" className="btn-primary mt-4 w-full text-sm">
                  Reservar en Booking
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
