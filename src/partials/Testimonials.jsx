import React from 'react';

import logoB from '../images/logo-B.png';
import logoA from '../images/logo-a.png';

function Testimonials() {
  return (
    <section className="relative">

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-5xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">Para contactarnos te dejamos los enlaces del apartamento, o si lo prefiere, nuestro número de teléfono para obtener más información:</h2>
            <br />
            <br />
            <h5 className='h3 mb-4'>Teléfono: <a href='tel:+34654154413'>+34 654154413</a></h5>
            <h5 className='h3 mb-4'>Correo: <a href='mailto:anisocosta@gmail.com'>anisocosta@gmail.com</a>
            </h5>
            <br />
            <h6 className='h4 mb-2'>Puedes reservar directamente en los siguientes enlaces:
              <br />
              <br />
              <a href='https://www.booking.com/Share-gRFNe2' className='mt-5 mb-5 pt-5 mt-5' target="_blank"><img className="mx-auto" src={logoB} width="200 " height="200" alt="Features bg" /></a>
              <a href='https://abnb.me/6sE7Sqh4GCb' className='mt-5 mb-5 pt-5 mt-5' target="_blank"><img className="mx-auto" src={logoA} width="150" height="180" alt="Features bg" /></a>
            </h6>
          </div>
          <div className="pb-12 md:pb-20 max-w-6xl mx-auto">
            <div className="h3 relative rounded py-5 px-8 md:py-8 md:px-12 shadow-2xl overflow-hidden text-center" data-aos="zoom-y-out">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">¡¡Disfruta de las mejores vacaciones en familia!!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;