import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../images/logo.png';
import Transition from '../utils/Transition';
import { siteConfig } from '../config/site';

const NAV_LINKS = [
  { href: '#alojamiento', label: 'Alojamiento' },
  { href: '#galeria', label: 'Galería' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#entorno', label: 'Entorno' },
  { href: '#reservas', label: 'Contacto' },
];

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.pageYOffset > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const headerIsSolid = isScrolled || isMobileMenuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        headerIsSolid ? 'bg-white/90 shadow-lg backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container-shell">
        <div className="flex h-16 items-center justify-between md:h-20">
          <Link to="/" className="flex items-center gap-3" aria-label={`${siteConfig.name} inicio`}>
            <img src={Logo} width="44" height="44" alt={`Logotipo de ${siteConfig.name}`} className="rounded-xl" />
            <span className={`font-display text-xl md:text-2xl ${headerIsSolid ? 'text-slate-900' : 'text-white drop-shadow'}`}>
              {siteConfig.name}
            </span>
          </Link>

          <nav aria-label="Navegación principal" className="hidden lg:block">
            <ul
              className={`flex items-center gap-7 text-sm font-semibold transition-colors duration-300 ${
                headerIsSolid ? 'text-slate-700' : 'text-white/90'
              }`}
            >
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition hover:text-sunset-400">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={siteConfig.phoneHref}
              className={`text-sm font-semibold transition hover:text-sunset-400 ${headerIsSolid ? 'text-slate-700' : 'text-white/90'}`}
            >
              {siteConfig.phoneDisplay}
            </a>
            <a href="#reservas" className="btn-primary px-4 py-2 text-sm">
              Reservar
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-lg lg:hidden ${
              headerIsSolid ? 'text-slate-900' : 'text-white'
            }`}
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <Transition
        show={isMobileMenuOpen}
        tag="div"
        id="mobile-menu"
        className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-white lg:hidden"
        enter="transition ease-out duration-300"
        enterStart="opacity-0 -translate-y-3"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-in duration-200"
        leaveStart="opacity-100 translate-y-0"
        leaveEnd="opacity-0 -translate-y-3"
      >
        <nav aria-label="Navegación móvil" className="container-shell flex h-full flex-col justify-between py-8">
          <ul className="space-y-1 text-2xl font-display text-slate-900">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block border-b border-slate-100 py-4 transition hover:text-teal-700"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-8 space-y-3">
            <a href="#reservas" onClick={() => setIsMobileMenuOpen(false)} className="btn-primary w-full text-base">
              Reservar en Booking
            </a>
            <a href={siteConfig.phoneHref} className="btn-secondary w-full text-base">
              Llamar: {siteConfig.phoneDisplay}
            </a>
          </div>
        </nav>
      </Transition>
    </header>
  );
}

export default Header;
