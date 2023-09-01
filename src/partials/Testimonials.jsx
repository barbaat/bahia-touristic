import React from 'react';

import TestimonialImage from '../images/testimonial.jpg';

function Testimonials() {
  return (
    <section className="relative">

      {/* Illustration behind content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32" aria-hidden="true">
        
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">Juntos para promover la actividad deportiva y la vida saludable</h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">No dudes en probarla, y si tienes alguna pregunta estaremos encantados de responderte y ayudarte en todo lo posible.</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Testimonials;