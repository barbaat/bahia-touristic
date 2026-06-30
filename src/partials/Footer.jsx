import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site';

function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white py-10 pb-24 lg:pb-10">
      <div className="container-shell">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Link to="/" className="font-display text-xl text-slate-900">
              {siteConfig.name}
            </Link>
            <p className="mt-2 text-sm text-slate-600">{siteConfig.tagline}</p>
            <p className="mt-1 text-sm text-slate-600">
              {siteConfig.locality}, {siteConfig.region} · {siteConfig.country}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Contacto</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>
                <a href={siteConfig.phoneHref} className="transition hover:text-teal-700">
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="transition hover:text-teal-700">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a href={siteConfig.bookingUrl} target="_blank" rel="noreferrer" className="transition hover:text-teal-700">
                  Reservar en Booking
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Navegación</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>
                <a href="#inicio" className="transition hover:text-teal-700">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#alojamiento" className="transition hover:text-teal-700">
                  Alojamiento
                </a>
              </li>
              <li>
                <a href="#galeria" className="transition hover:text-teal-700">
                  Galería
                </a>
              </li>
              <li>
                <a href="#reservas" className="transition hover:text-teal-700">
                  Reservas
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. Todos los derechos reservados.
          </p>
          <nav aria-label="Legal" className="flex items-center gap-4">
            <Link to="/aviso-legal" className="transition hover:text-teal-700">
              Aviso legal
            </Link>
            <Link to="/privacidad" className="transition hover:text-teal-700">
              Privacidad
            </Link>
            <Link to="/cookies" className="transition hover:text-teal-700">
              Cookies
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
