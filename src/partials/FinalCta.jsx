import CaminoImage from '../images/camino.jpeg';
import { useParallax } from '../hooks/useParallax';
import { siteConfig } from '../config/site';

function FinalCta() {
  const imageRef = useParallax({ speed: 0.1 });

  return (
    <section className="relative isolate overflow-hidden py-20 md:py-28" aria-labelledby="cta-final-titulo">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          ref={imageRef}
          src={CaminoImage}
          width="1920"
          height="1080"
          alt="Mirador con vistas a la ría cerca de Moaña al atardecer"
          loading="lazy"
          decoding="async"
          className="parallax-layer absolute -top-[8%] left-0 h-[116%] w-full object-cover"
        />
        <div className="absolute inset-0 bg-teal-900/80" />
      </div>

      <div className="container-shell relative z-10 text-center">
        <span className="kicker-light">Tu próxima escapada</span>
        <h2 id="cta-final-titulo" className="mx-auto mt-4 max-w-2xl text-3xl font-bold text-white md:text-5xl">
          Reserva hoy, descansa frente al mar
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-white/95 md:text-lg">
          Confirma tu estancia en Moaña directamente con nosotros o a través de Booking, sin intermediarios.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href={siteConfig.bookingUrl} target="_blank" rel="noreferrer" className="btn-accent">
            Comprobar disponibilidad
          </a>
          <a href={siteConfig.phoneHref} className="btn-ghost-light">
            Llamar ahora · {siteConfig.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}

export default FinalCta;
