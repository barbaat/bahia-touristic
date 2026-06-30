import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const STORAGE_KEY = 'bahia-aviso-visto';

function SiteNotice() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      setIsVisible(true);
    }
  }, []);

  function accept() {
    window.localStorage.setItem(STORAGE_KEY, 'accepted');
    setIsVisible(false);
  }

  if (!isVisible) return null;

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      className="fixed inset-x-0 bottom-16 z-50 mx-auto max-w-xl px-4 lg:bottom-4"
    >
      <div className="surface-card flex flex-col gap-3 p-4 text-sm text-slate-700 sm:flex-row sm:items-center sm:justify-between">
        <p>
          Usamos cookies de terceros (vídeo y mapa) para mostrar contenido embebido. Consulta nuestra{' '}
          <Link to="/cookies" className="font-semibold text-teal-700 underline">
            política de cookies
          </Link>
          .
        </p>
        <button type="button" onClick={accept} className="btn-primary shrink-0 px-4 py-2 text-sm">
          Entendido
        </button>
      </div>
    </div>
  );
}

export default SiteNotice;
