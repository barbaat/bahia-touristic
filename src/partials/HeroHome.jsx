
import HeroImage from '../images/vista-pajaro.jpeg';

function HeroHome() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="container-shell">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6" data-aos="fade-right">
            <h1 className="mt-4 text-5xl font-bold leading-tight text-slate-900 md:text-6xl">
              Despierta con el mar delante y todo listo para desconectar
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-700 md:text-xl">
              Apartamento acogedor, vistas panorámicas y acceso rápido a playas, rutas y gastronomía local.
              Reserva de forma directa, clara y segura.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#reservas" className="btn-primary">
                Ver disponibilidad
              </a>
              <a href="#experiencias" className="btn-secondary">
                Explorar experiencias
              </a>
            </div>

            <ul className="mt-8 grid max-w-xl grid-cols-1 gap-3 text-sm font-medium text-slate-700 sm:grid-cols-3">
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
                className="h-[480px] w-full rounded-xl object-cover"
                fetchPriority="high"
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
