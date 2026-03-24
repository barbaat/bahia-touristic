import React from 'react';

function Faq() {
  const items = [
    {
      q: 'Donde esta ubicado el alojamiento La Bahia?',
      a: 'La Bahia esta en Moana, en las Rias Baixas (Galicia), con acceso cercano a playa y zonas de paseo costero.',
    },
    {
      q: 'Como puedo reservar en La Bahia?',
      a: 'Puedes reservar directamente desde la web usando el enlace oficial de Booking, ademas de contacto por telefono o correo.',
    },
    {
      q: 'Que opinan los huespedes sobre La Bahia?',
      a: 'La propiedad cuenta con valoraciones destacadas de huespedes en Booking y comentarios positivos sobre vistas, limpieza y comodidad.',
    },
  ];

  return (
    <section className="py-12 md:py-16" aria-labelledby="faq-title">
      <div className="container-shell">
        <h2 id="faq-title" className="text-3xl font-bold text-slate-900 md:text-4xl" data-aos="fade-up">
          Preguntas frecuentes
        </h2>
        <div className="mt-5 grid gap-3">
          {items.map((item, index) => (
            <details key={item.q} className="surface-card px-5 py-4" data-aos="fade-up" data-aos-delay={60 + index * 60}>
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
