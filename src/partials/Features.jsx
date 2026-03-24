import React from 'react';

function Features() {
  const features = [
    {
      title: 'Playas y naturaleza a minutos',
      description:
        'A Xunqueira, A Borna y Rodeira en un entorno atlántico con paseos costeros para disfrutar sin desplazamientos largos.',
    },
    {
      title: 'Gastronomía gallega auténtica',
      description:
        'Marisco, pulpo, pescado fresco y restaurantes locales para vivir Moaña con sabor propio.',
    },
    {
      title: 'Comodidad para escapadas y teletrabajo',
      description:
        'Espacio tranquilo, conexión práctica y una base ideal para descansar o trabajar cerca del mar.',
    },
  ];

  return (
    <section id="experiencias" className="relative py-16 md:py-24" aria-labelledby="beneficios-titulo">
      <div className="container-shell">
        <div className="mx-auto max-w-3xl text-center" data-aos="fade-up">
          <span className="kicker">Por qué elegir La Bahía</span>
          <h2 id="beneficios-titulo" className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Todo lo importante para unas vacaciones memorables
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Hemos organizado la experiencia para que tomes decisiones rápidas y reserves con confianza.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:mt-14 md:grid-cols-3">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className="surface-card group h-full p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              data-aos="fade-up"
              data-aos-delay={index * 80}
            >
              <h3 className="text-2xl font-bold text-slate-900">{feature.title}</h3>
              <p className="mt-3 leading-relaxed text-slate-600">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
