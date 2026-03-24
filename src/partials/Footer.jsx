import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white/70 py-8">
      <div className="container-shell">
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <div>
            <Link to="/" className="font-display text-xl text-slate-900">
              La Bahía
            </Link>
            <p className="mt-1 text-sm text-slate-600">Apartamento turístico en Moaña, Galicia</p>
          </div>

          <nav aria-label="Navegación del pie" className="flex items-center gap-5 text-sm font-semibold text-slate-600">
            <a href="#inicio" className="transition hover:text-teal-700">
              Inicio
            </a>
            <a href="#experiencias" className="transition hover:text-teal-700">
              Experiencias
            </a>
            <a href="#reservas" className="transition hover:text-teal-700">
              Reservas
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
