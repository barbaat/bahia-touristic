import HeroImage from '../images/playa.jpeg';
import { useParallax } from '../hooks/useParallax';
import { siteConfig } from '../config/site';

function HeroHome() {
  const parallaxRef = useParallax({ speed: 0.12 });

  return (
    <section className="relative isolate flex h-[92vh] min-h-[560px] items-end overflow-hidden md:h-screen" id="inicio">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          ref={parallaxRef}
          src={HeroImage}
          width="800"
          height="534"
          alt="Atardecer en la playa cerca de Moaña, con el sol reflejado en el mar"
          className="parallax-layer absolute -top-[8%] left-0 h-[116%] w-full object-cover"
          fetchpriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-900/85 via-teal-900/35 to-teal-900/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/40 via-transparent to-transparent" />
      </div>

      <div className="container-shell relative z-10 w-full pb-16 pt-32 md:pb-24">
        <div className="max-w-2xl">
          <span className="kicker-light">Moaña · Rías Baixas</span>
          <h1 className="mt-5 text-4xl font-bold leading-tight text-white drop-shadow-sm md:text-6xl">
            Despierta con el mar delante
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/90 md:text-lg">
            Apartamento con vistas panorámicas a la ría, a minutos de la playa y del paseo costero. Reserva de forma
            directa, clara y segura.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a href={siteConfig.bookingUrl} target="_blank" rel="noreferrer" className="btn-accent">
              Reservar en Booking
            </a>
            <a href={siteConfig.phoneHref} className="btn-ghost-light">
              Llamar para reservar
            </a>
          </div>
        </div>
      </div>

      <a
        href="#alojamiento"
        aria-label="Continuar viendo la página"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/80 md:flex"
      >
        Descubre más
        <svg className="h-5 w-5 motion-safe:animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </section>
  );
}

export default HeroHome;
