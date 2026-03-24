import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../images/logo.png';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.pageYOffset > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/85 shadow-lg backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container-shell">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3" aria-label="La Bahia inicio">
            <img src={Logo} width="44" height="44" alt="Logotipo de La Bahia" className="rounded-xl" />
            <span className="font-display text-xl text-slate-900 md:text-2xl">La Bahia</span>
          </Link>

          <nav aria-label="Navegacion principal" className="hidden md:block">
            <ul className="flex items-center gap-7 text-sm font-semibold text-slate-700">
              <li>
                <a href="#experiencias" className="transition hover:text-teal-700">
                  Experiencias
                </a>
              </li>
              <li>
                <a href="#video" className="transition hover:text-teal-700">
                  Tour virtual
                </a>
              </li>
              <li>
                <a href="#reservas" className="transition hover:text-teal-700">
                  Reservas
                </a>
              </li>
            </ul>
          </nav>

          <a href="#reservas" className="btn-primary px-4 py-2 text-sm">
            Reservar ahora
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
