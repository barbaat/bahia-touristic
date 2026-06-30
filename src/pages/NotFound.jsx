import { Link } from 'react-router-dom';
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import { siteConfig } from '../config/site';

function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-site-gradient">
      <Header />
      <main className="flex flex-grow items-center justify-center px-4 pt-24 text-center">
        <div className="max-w-lg">
          <span className="kicker">Error 404</span>
          <h1 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">Esta página se ha quedado en el mar</h1>
          <p className="mt-3 text-base text-slate-600">
            No hemos encontrado lo que buscabas. Vuelve al inicio o consulta directamente la disponibilidad.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link to="/" className="btn-primary">
              Volver al inicio
            </Link>
            <a href={siteConfig.bookingUrl} target="_blank" rel="noreferrer" className="btn-secondary">
              Ver disponibilidad
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default NotFound;
