import { useEffect, useState } from 'react';
import { siteConfig } from '../config/site';

function MobileActionBar() {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const target = document.getElementById('reservas');
    if (!target || typeof IntersectionObserver === 'undefined') return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHidden(entry.isIntersecting);
      },
      { threshold: 0.2 },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 flex h-16 border-t border-slate-200 bg-white/95 backdrop-blur-md transition-transform duration-300 lg:hidden ${
        isHidden ? 'translate-y-full' : 'translate-y-0'
      }`}
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <a
        href={siteConfig.phoneHref}
        className="flex flex-1 items-center justify-center gap-2 border-r border-slate-200 text-sm font-bold text-teal-900"
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 0 1 2-2h2.28a1 1 0 0 1 .97.76l1.1 4.4a1 1 0 0 1-.5 1.13L7.1 10.4a12.05 12.05 0 0 0 6.5 6.5l1.1-1.75a1 1 0 0 1 1.13-.5l4.4 1.1a1 1 0 0 1 .77.97V19a2 2 0 0 1-2 2h-1C9.16 21 3 14.84 3 7V6Z" />
        </svg>
        Llamar
      </a>
      <a href="#reservas" className="flex flex-1 items-center justify-center gap-2 bg-teal-700 text-sm font-bold text-white">
        Reservar
      </a>
    </div>
  );
}

export default MobileActionBar;
