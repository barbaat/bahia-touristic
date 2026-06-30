import { useScrollReveal } from '../hooks/useScrollReveal';
import { siteConfig } from '../config/site';

function GuestReviews() {
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

  const headingReveal = useScrollReveal({ threshold: 0.25 });

  return (
    <section id="opiniones" className="relative py-16 md:py-24" aria-labelledby="guest-reviews-title">
      <div className="container-shell">
        <div className="reveal flex flex-wrap items-end justify-between gap-4" ref={headingReveal}>
          <div>
            <span className="kicker">Confianza real</span>
            <h2 id="guest-reviews-title" className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
              Lo que cuentan nuestros huéspedes
            </h2>
          </div>
          <a
            href={siteConfig.bookingReviewsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-700 px-3 py-2 text-sm font-bold text-white transition hover:bg-blue-800"
          >
            {siteConfig.bookingRatingLabel} {siteConfig.bookingRating} · {siteConfig.bookingReviewCount} opiniones en Booking
          </a>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {topReviews.map((review) => (
            <article key={review.author} className="surface-card overflow-hidden p-3 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              {review.photo ? (
                <img
                  src={review.photo}
                  alt={`Foto de reseña de ${review.author} en Booking`}
                  loading="lazy"
                  decoding="async"
                  className="h-28 w-full rounded-lg object-cover"
                />
              ) : null}
              <div className={review.photo ? 'pt-3' : 'pt-1'}>
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-bold text-slate-900">{review.author}</p>
                  <a
                    href={siteConfig.bookingReviewsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-md bg-blue-700 px-2 py-1 text-xs font-bold text-white transition hover:bg-blue-800"
                    aria-label={`Ver valoración de ${review.author} en Booking`}
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
