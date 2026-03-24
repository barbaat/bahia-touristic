import React from 'react';

function GuestReviews() {
  const bookingReviewsUrl = 'https://www.booking.com/reviews/es/hotel/la-bahia-moana2.es.html';

  const topReviews = [
    {
      author: 'Alessia',
      score: '10',
      label: 'Genial',
      text: 'Precioso apartamento, espacioso y con todas las comodidades. Las vistas y los atardeceres son una maravilla. Sonia, la anfitriona, es encantadora.',
      photo:
        'https://q-xx.bstatic.com/xdata/images/xphoto/max1280x900/568862342.jpg?k=5a42a49fa4be4e26144a255fa9c53765105e5952779627be3a36f28864754de2&o=',
    },
    {
      author: 'Mertxe',
      score: '9,0',
      label: 'Fantastico',
      text: 'El apartamento es muy comodo y esta impecable. Destacan la atencion de los anfitriones, las vistas a la ria y la experiencia de ver el atardecer.',
      photo:
        'https://r-xx.bstatic.com/xdata/images/xphoto/max1280x900/265378023.jpg?k=3b22b4844ee64a9e1c57b2342ccbb4988cbb62d6b05e0dc482860563bd004b10&o=',
    },
    {
      author: 'Jose',
      score: '10',
      label: 'Para repetir',
      text: 'Muy valorada la cercania a la ria y el trato de Sonia, descrito como cercano y muy amable.',
    },
  ];

  return (
    <section className="py-12 md:py-16" aria-labelledby="guest-reviews-title">
      <div className="container-shell">
        <h2 id="guest-reviews-title" className="text-3xl font-bold text-slate-900 md:text-4xl" data-aos="fade-up">
          Valoraciones de nuestros huéspedes
        </h2>

        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {topReviews.map((review, index) => (
            <article key={review.author} className="surface-card overflow-hidden p-3" data-aos="fade-up" data-aos-delay={70 + index * 70}>
              {review.photo ? (
                <img
                  src={review.photo}
                  alt={`Foto de resena de ${review.author} en Booking`}
                  loading="lazy"
                  decoding="async"
                  className="h-28 w-full rounded-lg object-cover"
                />
              ) : null}
              <div className={review.photo ? 'pt-3' : 'pt-1'}>
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-bold text-slate-900">{review.author}</p>
                  <a
                    href={bookingReviewsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-md bg-blue-700 px-2 py-1 text-xs font-bold text-white transition hover:bg-blue-800"
                    aria-label={`Ver valoracion de ${review.author} en Booking`}
                  >
                    {review.label} {review.score}
                  </a>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-slate-700">{review.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GuestReviews;
