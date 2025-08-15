import React, { useEffect } from 'react';
import logoB from '../images/logo-B.png';
import logoA from '../images/logo-a.png';

function Contact() {
  useEffect(() => {
    const airbnbScript = document.createElement('script');
    airbnbScript.src = 'https://www.airbnb.es/embeddable/airbnb_jssdk';
    airbnbScript.async = true;
    document.body.appendChild(airbnbScript);
  }, []);

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 text-center">
          <h2 className="h2 mb-4">
            Para contactarnos te dejamos los enlaces del apartamento, o si lo prefiere, nuestro número de teléfono para obtener más información:
          </h2>
          <br />
          <h5 className="h3 mb-4">
            Teléfono: <a href="tel:+34654154413">+34 654154413</a>
          </h5>
          <h5 className="h3 mb-8">
            Correo: <a href="mailto:anisocosta@gmail.com">anisocosta@gmail.com</a>
          </h5>
          <h6 className="h4 mb-8">Puedes reservar directamente en los siguientes enlaces:</h6>

          {/* Contenedor flex */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            {/* Booking */}
            <div className="flex flex-col items-center w-full md:w-auto">
              <a
                href="https://www.booking.com/Share-sOPjHU"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={logoB}
                  width="200"
                  height="200"
                  alt="Booking logo"
                  className="mb-4"
                />
              </a>
              {/* Embed copia de Airbnb */}
              <div
                className="airbnb-embed"
                data-id="51267053"
                data-view="home"
                data-hide-price="true"
                style={{ width: '450px', height: '300px', margin: 'auto' }}
              >
                <a href="https://www.booking.com/Share-sOPjHU">
                  
                </a>
                <a
                  href="https://www.booking.com/Share-sOPjHU"
                  rel="nofollow"
                >
                  
                </a>
              </div>
            </div>

            {/* Airbnb */}
            <div className="flex flex-col items-center w-full md:w-auto">
              <a
                href="https://abnb.me/6sE7Sqh4GCb"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={logoA}
                  width="150"
                  height="180"
                  alt="Airbnb logo"
                  className="mb-4"
                />
              </a>
              <div
                className="airbnb-embed-frame"
                data-id="51267053"
                data-view="home"
                data-hide-price="true"
                style={{ width: '450px', height: '300px', margin: 'auto' }}
              >
                <a href="https://www.airbnb.es/rooms/51267053?check_in=2025-08-30&check_out=2025-09-04&guests=1&adults=2&s=66&source=embed_widget">
                  Ver en Airbnb
                </a>
                <a
                  href="https://www.airbnb.es/rooms/51267053?check_in=2025-08-30&check_out=2025-09-04&guests=1&adults=2&s=66&source=embed_widget"
                  rel="nofollow"
                >
                  Loft · Moaña · ★4,78 · 1 dormitorio · 2 camas · 1 baño
                </a>
              </div>
            </div>
          </div>

          {/* Mensaje final */}
          <div className="mt-12 max-w-6xl mx-auto">
            <div
              className="h3 relative rounded py-5 px-8 md:py-8 md:px-12 shadow-2xl overflow-hidden text-center"
              data-aos="zoom-y-out"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                ¡¡Disfruta de las mejores vacaciones en familia!!
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
