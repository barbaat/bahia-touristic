import React from 'react';

import PlayaImage from '../images/playa.jpeg';
import PulpoImage from '../images/pulpo.jpeg';
import RutaImage from '../images/ruta.jpeg';

function FeaturesBlocks() {
  const gallery = [
    {
      src: PlayaImage,
      alt: 'Playa en la costa de Moaña',
      title: 'Costa y baño',
      caption: 'Playas para pasar el día con calma y buenas vistas.',
    },
    {
      src: PulpoImage,
      alt: 'Plato típico de pulpo gallego',
      title: 'Sabores locales',
      caption: 'Gastronomía de producto fresco con identidad gallega.',
    },
    {
      src: RutaImage,
      alt: 'Ruta de senderismo con vistas al mar',
      title: 'Rutas y panorámicas',
      caption: 'Senderos y miradores para descubrir toda la ría.',
    },
  ];

  return (
    <section className="py-12 md:py-16" aria-labelledby="seccion-prueba-social" id="video">
      <div className="container-shell">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 id="seccion-prueba-social" className="text-3xl font-bold text-slate-900 md:text-4xl" data-aos="fade-up">
              Experiencia real, no promesas vacías
            </h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <article className="surface-card p-5 text-center" data-aos="zoom-in" data-aos-delay="80">
                <p className="text-2xl font-bold text-teal-800">4.7/5</p>
                <p className="mt-1 text-sm text-slate-600">Valoración destacada</p>
              </article>
              <article className="surface-card p-5 text-center" data-aos="zoom-in" data-aos-delay="140">
                <p className="text-2xl font-bold text-teal-800">2 min</p>
                <p className="mt-1 text-sm text-slate-600">Respuesta habitual</p>
              </article>
              <article className="surface-card p-5 text-center" data-aos="zoom-in" data-aos-delay="200">
                <p className="text-2xl font-bold text-teal-800">100%</p>
                <p className="mt-1 text-sm text-slate-600">Atención personalizada</p>
              </article>
            </div>

            <div className="surface-card mt-6 overflow-hidden p-3" data-aos="fade-up" data-aos-delay="220">
              <div className="relative pb-9/16">
                <iframe
                  className="absolute h-full w-full rounded-xl"
                  src="https://player.vimeo.com/video/860475560"
                  title="Tour virtual de La Bahía en Moaña"
                  loading="lazy"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            {gallery.map((item, index) => (
              <figure key={item.title} className="surface-card overflow-hidden p-3" data-aos="fade-left" data-aos-delay={index * 110}>
                <img
                  src={item.src}
                  width="900"
                  height="700"
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-48 w-full rounded-xl object-cover"
                />
                <figcaption className="px-1 pb-1 pt-4">
                  <p className="text-base font-bold text-slate-900">{item.title}</p>
                  <p className="text-sm text-slate-600">{item.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
