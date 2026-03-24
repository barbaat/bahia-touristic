import React from 'react';
import logoB from '../images/logo-B.png';
import HeroImage from '../images/vista-pajaro.jpeg';

function Contact() {
  const bookingUrl = 'https://www.booking.com/Share-sOPjHU';
  const bookingReviewsUrl =
    'https://www.booking.com/hotel/es/la-bahia-moana2.es.html?aid=304142&dest_id=8605178&dest_type=hotel&group_adults=2&group_children=0&label=gen173rf-10CBcoggI46AdIM1gDaEaIAQGYATO4AQfIAQzYAQPoAQH4AQGIAgGiAhBsYWJhaGlhbWVpcmEuY29tqAIBuALzxfzEBsACAdICJDA5ZDhlMmU2LWI0N2QtNGNlOC04M2Q3LTgyMTMwZmQ1NDVjYdgCAeACAQ-Share-sOPjHU%401755261060&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA#tab-reviews';

  return (
    <section id="reservas" className="py-12 md:py-16" aria-labelledby="reservas-titulo">
      <div className="container-shell">
        <div className="surface-card overflow-hidden p-6 md:p-8">
          <div className="grid items-start gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5" data-aos="fade-right">
              <span className="kicker">Reserva sin complicaciones</span>
              <h2 id="reservas-titulo" className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
                Elige tu canal preferido y confirma en minutos
              </h2>
              <p className="mt-3 text-base text-slate-600">
                Te atendemos de forma directa para que tengas claridad de precio, disponibilidad y condiciones desde el primer contacto.
              </p>

              <dl className="mt-6 space-y-4 text-slate-700">
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-wide text-slate-500">Telefono</dt>
                  <dd className="mt-1 text-lg font-semibold">
                    <a href="tel:+34654154413" className="transition hover:text-teal-700">
                      +34 654 154 413
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-wide text-slate-500">Correo</dt>
                  <dd className="mt-1 text-lg font-semibold">
                    <a href="mailto:anisocosta@gmail.com" className="transition hover:text-teal-700">
                      anisocosta@gmail.com
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            <div className="grid gap-5 lg:col-span-7" data-aos="fade-left" data-aos-delay="100">
              <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="relative">
                  <a href={bookingUrl} target="_blank" rel="noreferrer" className="block">
                    <img
                      src={HeroImage}
                      width="1200"
                      height="700"
                      alt="Vista del alojamiento La Bahia en Moana"
                      className="h-48 w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </a>
                  <a
                    href={bookingReviewsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-lg bg-white/95 px-3 py-2 shadow-md transition hover:bg-white"
                    aria-label="Ver valoraciones en Booking"
                  >
                    <span className="text-sm font-bold text-slate-900">Fabuloso</span>
                    <span className="rounded bg-blue-700 px-2 py-1 text-sm font-bold text-white">8,9</span>
                    <span className="text-xs text-slate-600">29 comentarios</span>
                  </a>
                </div>

                <div className="p-6">
                  <img src={logoB} width="170" height="70" alt="Booking" className="h-11 w-auto object-contain" loading="lazy" decoding="async" />
                  <h3 className="mt-3 text-lg font-bold text-slate-900">La Bahia - Moana</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    Apartamento con vistas panoramicas al mar, ubicacion excelente y reserva segura en Booking.
                  </p>

                  <a
                    href={bookingReviewsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-2 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-xs font-semibold text-amber-900 transition hover:bg-amber-100 sm:text-sm"
                  >
                    <span aria-hidden="true">★</span>
                    <span>Leer valoraciones en Booking</span>
                  </a>

                  <a href={bookingUrl} target="_blank" rel="noreferrer" className="btn-primary mt-4 w-full text-sm">
                    Reservar en Booking
                  </a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
