import VistaImage from '../images/vista-pajaro.jpeg';
import { useParallax } from '../hooks/useParallax';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { siteConfig } from '../config/site';

const HIGHLIGHTS = [
  { label: 'Vistas', value: 'Panorámicas a la ría' },
  { label: 'Check-in', value: 'Ágil y sin esperas' },
  { label: 'Trato', value: 'Atención directa de la anfitriona' },
];

function Apartment() {
  const imageRef = useParallax({ speed: 0.08 });
  const textReveal = useScrollReveal({ threshold: 0.2 });

  return (
    <section id="alojamiento" className="relative py-16 md:py-24" aria-labelledby="alojamiento-titulo">
      <div className="container-shell">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="reveal lg:col-span-5 lg:order-2" ref={textReveal}>
            <span className="kicker">El apartamento</span>
            <h2 id="alojamiento-titulo" className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
              Un espacio pensado para bajar el ritmo
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
              {siteConfig.legalName} es un apartamento en {siteConfig.locality}, frente a la ría, equipado para que
              llegues y te instales sin complicaciones. Ideal para una escapada de pareja, una semana de descanso o
              unos días de teletrabajo junto al mar.
            </p>

            <dl className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {HIGHLIGHTS.map((item) => (
                <div key={item.label} className="surface-card px-4 py-4">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">{item.label}</dt>
                  <dd className="mt-1 text-sm font-semibold text-slate-900">{item.value}</dd>
                </div>
              ))}
            </dl>

            <a href="#galeria" className="btn-secondary mt-8">
              Ver el apartamento en imágenes
            </a>
          </div>

          <div className="lg:col-span-7 lg:order-1">
            <figure className="surface-card relative overflow-hidden p-3">
              <div className="relative h-[340px] overflow-hidden rounded-xl md:h-[460px]">
                <img
                  ref={imageRef}
                  src={VistaImage}
                  width="1047"
                  height="820"
                  alt="Vista panorámica de la ría desde el apartamento en Moaña"
                  loading="lazy"
                  decoding="async"
                  className="parallax-layer absolute -top-[6%] left-0 h-[112%] w-full object-cover"
                />
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Apartment;
