import { useCallback, useEffect, useRef, useState } from 'react';

import VistaImage from '../images/vista-pajaro.jpeg';
import PlayaImage from '../images/playa.jpeg';
import PulpoImage from '../images/pulpo.jpeg';
import RutaImage from '../images/ruta.jpeg';
import CaminoImage from '../images/camino.jpeg';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { siteConfig } from '../config/site';

const PHOTOS = [
  { src: VistaImage, alt: 'Vista panorámica de la ría desde el apartamento', title: 'La vista desde casa', w: 1047, h: 820 },
  { src: PlayaImage, alt: 'Playa en la costa de Moaña', title: 'Costa y baño', w: 800, h: 534 },
  { src: RutaImage, alt: 'Arroyo en una ruta de senderismo del entorno de Moaña', title: 'Rutas de senderismo', w: 1200, h: 960 },
  { src: PulpoImage, alt: 'Plato típico de pulpo gallego', title: 'Sabores locales', w: 1366, h: 910 },
  { src: CaminoImage, alt: 'Mirador con vistas a la ría', title: 'Miradores y panorámicas', w: 1920, h: 1080 },
];

function Gallery() {
  const [openIndex, setOpenIndex] = useState(-1);
  const dialogRef = useRef(null);
  const triggerRef = useRef(null);
  const headingReveal = useScrollReveal({ threshold: 0.2 });

  const close = useCallback(() => {
    setOpenIndex(-1);
    if (triggerRef.current) triggerRef.current.focus();
  }, []);

  const openAt = (index, event) => {
    triggerRef.current = event.currentTarget;
    setOpenIndex(index);
  };

  const showPrev = useCallback(() => {
    setOpenIndex((current) => (current <= 0 ? PHOTOS.length - 1 : current - 1));
  }, []);

  const showNext = useCallback(() => {
    setOpenIndex((current) => (current >= PHOTOS.length - 1 ? 0 : current + 1));
  }, []);

  useEffect(() => {
    if (openIndex === -1) return undefined;

    document.body.style.overflow = 'hidden';
    dialogRef.current?.focus();

    function onKeyDown(event) {
      if (event.key === 'Escape') close();
      if (event.key === 'ArrowLeft') showPrev();
      if (event.key === 'ArrowRight') showNext();
    }

    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [openIndex, close, showPrev, showNext]);

  const activePhoto = openIndex >= 0 ? PHOTOS[openIndex] : null;

  return (
    <section id="galeria" className="relative py-16 md:py-24" aria-labelledby="galeria-titulo">
      <div className="container-shell">
        <div className="reveal mx-auto max-w-3xl text-center" ref={headingReveal}>
          <span className="kicker">Galería</span>
          <h2 id="galeria-titulo" className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
            Para que te imagines ya allí
          </h2>
        </div>

        <div className="surface-card mt-8 overflow-hidden p-3 md:mt-10">
          <div className="relative pb-9/16">
            <iframe
              className="absolute h-full w-full rounded-xl"
              src={`https://player.vimeo.com/video/${siteConfig.vimeoVideoId}`}
              title={`Tour virtual de ${siteConfig.name} en ${siteConfig.locality}`}
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>

        <div className="mt-6 columns-2 gap-4 sm:columns-3 md:mt-8 [&>*]:mb-4">
          {PHOTOS.map((photo, index) => (
            <button
              key={photo.title}
              type="button"
              onClick={(event) => openAt(index, event)}
              className="surface-card group block w-full break-inside-avoid overflow-hidden p-2 text-left transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              aria-label={`Ampliar foto: ${photo.title}`}
            >
              <img
                src={photo.src}
                width={photo.w}
                height={photo.h}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
                className="w-full rounded-xl object-cover transition duration-500 group-hover:scale-[1.03]"
              />
              <span className="mt-2 block px-1 pb-1 text-sm font-semibold text-slate-800">{photo.title}</span>
            </button>
          ))}
        </div>
      </div>

      {activePhoto ? (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={`Foto ampliada: ${activePhoto.title}`}
          tabIndex={-1}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/90 p-4 outline-none"
          onClick={(event) => {
            if (event.target === event.currentTarget) close();
          }}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Cerrar galería"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            type="button"
            onClick={showPrev}
            className="absolute left-2 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-6"
            aria-label="Foto anterior"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <figure className="max-h-[80vh] max-w-3xl">
            <img
              src={activePhoto.src}
              alt={activePhoto.alt}
              className="max-h-[70vh] w-full rounded-xl object-contain"
            />
            <figcaption className="mt-3 text-center text-sm font-semibold text-white/90">{activePhoto.title}</figcaption>
          </figure>

          <button
            type="button"
            onClick={showNext}
            className="absolute right-2 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6"
            aria-label="Foto siguiente"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      ) : null}
    </section>
  );
}

export default Gallery;
