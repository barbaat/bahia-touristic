import { useScrollReveal } from '../hooks/useScrollReveal';

function WaveIcon() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2 17c1.5 1.5 3 1.5 4.5 0s3-1.5 4.5 0 3 1.5 4.5 0 3-1.5 4.5 0" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M2 12c1.5 1.5 3 1.5 4.5 0s3-1.5 4.5 0 3 1.5 4.5 0 3-1.5 4.5 0" opacity="0.5" />
      <circle cx="17" cy="6" r="2.4" />
    </svg>
  );
}

function ForkIcon() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 2v8a2 2 0 0 0 4 0V2M8 10v12M17 2c-1.7 0-3 2-3 5s1.3 5 3 5v9" />
    </svg>
  );
}

function WaveDeskIcon() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <rect x="3" y="4" width="18" height="11" rx="1.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M2 19h20M9 19l1-3.5h4L15 19" />
    </svg>
  );
}

function Features() {
  const features = [
    {
      icon: WaveIcon,
      title: 'Playas y naturaleza a minutos',
      description:
        'A Xunqueira, A Borna y Rodeira en un entorno atlántico con paseos costeros para disfrutar sin desplazamientos largos.',
    },
    {
      icon: ForkIcon,
      title: 'Gastronomía gallega auténtica',
      description: 'Marisco, pulpo, pescado fresco y restaurantes locales para vivir Moaña con sabor propio.',
    },
    {
      icon: WaveDeskIcon,
      title: 'Comodidad para escapadas y teletrabajo',
      description: 'Espacio tranquilo, conexión práctica y una base ideal para descansar o trabajar cerca del mar.',
    },
  ];

  const headingReveal = useScrollReveal({ threshold: 0.3 });

  return (
    <section id="servicios" className="relative py-16 md:py-24" aria-labelledby="servicios-titulo">
      <div className="container-shell">
        <div className="reveal mx-auto max-w-3xl text-center" ref={headingReveal}>
          <span className="kicker">Servicios y entorno</span>
          <h2 id="servicios-titulo" className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
            Todo lo importante, a mano
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Para que resuelvas tus dudas antes de reservar y llegues sabiendo qué te espera.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article key={feature.title} className="surface-card group h-full p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 text-teal-800">
                  <Icon />
                </span>
                <h3 className="mt-4 text-xl font-bold text-slate-900">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{feature.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;
