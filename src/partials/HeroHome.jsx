
import HeroImage from '../images/vista-pajaro.jpeg';

function HeroHome() {
  return (
    <section className="relative overflow-hidden pt-24 pb-12 md:pt-28 md:pb-16">
      <div className="container-shell">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6" data-aos="fade-right">
            <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
              Despierta con el mar delante y todo listo para desconectar
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-700 md:text-lg">
              Apartamento acogedor, vistas panorámicas y acceso rápido a playas, rutas y gastronomía local.
              Reserva de forma directa, clara y segura.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#reservas" className="btn-primary">
                Ver disponibilidad
              </a>
              <a href="#experiencias" className="btn-secondary">
                Explorar experiencias
              </a>
            </div>

            <ul className="mt-6 grid max-w-xl grid-cols-1 gap-2 text-xs font-medium text-slate-700 sm:grid-cols-3 sm:text-sm">
              <li className="surface-card px-4 py-3">Check-in ágil</li>
              <li className="surface-card px-4 py-3">Ubicación estratégica</li>
              <li className="surface-card px-4 py-3">Atención directa</li>
            </ul>
          </div>

          <div className="lg:col-span-6" data-aos="fade-left" data-aos-delay="120">
            <figure className="surface-card overflow-hidden p-3">
              <img
                src={HeroImage}
                width="1200"
                height="800"
                alt="Vista panorámica de Moaña y la bahía"
                className="h-[400px] w-full rounded-xl object-cover md:h-[430px]"
                fetchpriority="high"
                decoding="async"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
