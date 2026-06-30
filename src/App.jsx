import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import './css/style.css';

import Home from './pages/Home';
import AvisoLegal from './pages/AvisoLegal';
import Privacidad from './pages/Privacidad';
import Cookies from './pages/Cookies';
import NotFound from './pages/NotFound';
import SiteNotice from './partials/SiteNotice';

function App() {
  const location = useLocation();

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'auto';
    window.scroll({ top: 0 });
    document.documentElement.style.scrollBehavior = '';
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aviso-legal" element={<AvisoLegal />} />
        <Route path="/privacidad" element={<Privacidad />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <SiteNotice />
    </>
  );
}

export default App;
