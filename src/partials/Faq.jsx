import { useScrollReveal } from '../hooks/useScrollReveal';

function Faq() {
  const items = [
    {
      q: '¿Dónde está ubicado el alojamiento La Bahía?',
      a: 'La Bahía está en Moaña, en las Rías Baixas (Galicia), con acceso cercano a playa y zonas de paseo costero.',
    },
    {
      q: '¿Cómo puedo reservar en La Bahía?',
      a: 'Puedes reservar directamente desde la web usando el enlace oficial de Booking, además de contacto por teléfono o correo.',
    },
    {
      q: '¿Qué opinan los huéspedes sobre La Bahía?',
      a: 'La propiedad cuenta con valoraciones destacadas de huéspedes en Booking y comentarios positivos sobre vistas, limpieza y comodidad.',
    },
  ];

  const headingReveal = useScrollReveal({ threshold: 0.3 });

  return (
    <section className="relative py-16 md:py-24" aria-labelledby="faq-title">
      <div className="container-shell">
        <h2 id="faq-title" className="reveal text-3xl font-bold text-slate-900 md:text-4xl" ref={headingReveal}>
          Preguntas frecuentes
        </h2>
        <div className="mt-6 grid gap-3">
          {items.map((item) => (
            <details key={item.q} className="surface-card px-5 py-4">
              <summary className="cursor-pointer text-sm font-bold text-slate-900 sm:text-base">{item.q}</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
