import React from 'react';



function FeaturesBlocks() {
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-white pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-white-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">¿Quiénes somos?</h2>
            <p className="text-2xl text-gray-600">Somos 15 estudiantes del grado en Ingeniería Informática en la Universidad de Sevilla. </p>
            <p className="text-2xl text-gray-600">Somos consciente de la cantidad de gente que quiere practicar este deporte y lo complicado que es encontrar a compañeros para jugar.
              Por eso, ¡queremos darte las facilidades para que tu hagas el resto para conocer a los demás!</p>
          </div>
          {/* <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20 font-bold">
            <p className="text-4xl text-black-600">EQUIPO FRONTEND</p>
          </div>


          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">


          </div>



        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
