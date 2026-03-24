import logoB from '../images/logo-B.png';
import HeroImage from '../images/vista-pajaro.jpeg';

function Contact() {
  return (
    <section id="reservas" className="py-16 md:py-24" aria-labelledby="reservas-titulo">
      <div className="container-shell">
        <div className="surface-card overflow-hidden p-8 md:p-12">
          <div className="grid items-start gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5" data-aos="fade-right">
              <span className="kicker">Reserva sin complicaciones</span>
              <h2 id="reservas-titulo" className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
                Elige tu canal preferido y confirma en minutos
              </h2>
              <p className="mt-4 text-lg text-slate-600">
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
                <a href="https://www.booking.com/Share-sOPjHU" target="_blank" rel="noreferrer" className="block">
                  <img
                    src={HeroImage}
                    width="1200"
                    height="700"
                    alt="Vista del alojamiento La Bahia en Moana"
                    className="h-56 w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />

                  <div className="p-6">
                    <img src={logoB} width="170" height="70" alt="Booking" className="h-11 w-auto object-contain" loading="lazy" decoding="async" />
                    <h3 className="mt-4 text-xl font-bold text-slate-900">La Bahia - Moana</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      Apartamento con vistas panoramicas al mar, ubicacion excelente y reserva segura en Booking.
                    </p>
                    <div className="mt-4 inline-flex items-center gap-2 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-sm font-semibold text-amber-900">
                      <span aria-hidden="true">★</span>
                      <span>Ver valoraciones de huespedes en Booking</span>
                    </div>
                    <div className="mt-4 inline-flex rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-800">
                      Ver preview completa en Booking
                    </div>
                  </div>
                </a>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
