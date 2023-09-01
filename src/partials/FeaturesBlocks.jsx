import React from 'react';
import Fj from '../images/fj.png';
import Alejandro from '../images/alejandro.png';
import Angela from '../images/angela.jpeg';
import Paco from '../images/paco.jpg';
import Paola from '../images/paola.png';
import Jose from '../images/jose.png';
import Mema from '../images/mema.png';
import Jorge from '../images/jorge.png';
import Gines from '../images/gines.png';
import Analu from '../images/analu.png';
import Angel from '../images/angel.png';
import JoseCano from '../images/joseCano.png';
import Roberto from '../images/roberto.png';
import Juanlo from '../images/juanlo.png';
import Manu from '../images/manu.png';



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
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20 font-bold">
            <p className="text-4xl text-black-600">EQUIPO FRONTEND</p>
          </div>


          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img className="md:max-w-none mx-auto rounded pb-5" src={Paola} width="200" height="200" alt="Features bg" />
            <p> </p>
              <h4 className="text-2xl font-bold leading-snug tracking-tight mb-1">Paola</h4>
              <h4 className="text-2xl font-bold leading-snug tracking-tight mb-1">Martín Sánchez</h4>
              
            </div>

            
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img className="md:max-w-none mx-auto rounded pb-5" src={Angela} width="195" height="195" alt="Features bg" />
            <p> </p>
              <h4 className="text-2xl font-bold leading-snug tracking-tight mb-1">Ángela</h4>
              <h4 className="text-2xl font-bold leading-snug tracking-tight mb-1">Bernal Martín</h4>
              
            </div>

            
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img className="md:max-w-none mx-auto rounded pb-5" src={Paco} width="200" height="200" alt="Features bg" />
            <p> </p>
              <h4 className="text-2xl font-bold leading-snug tracking-tight mb-1">Francisco</h4>
              <h4 className="text-2xl font-bold leading-snug tracking-tight mb-1">Reyes Madrid</h4>
              
            </div>

            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img className="md:max-w-none mx-auto rounded pb-5" src={Analu} width="200" height="200" alt="Features bg" />
            <p> </p>
              <h4 className="text-2xl font-bold leading-snug tracking-tight mb-1">Ana Lucía</h4>
              <h4 className="text-2xl font-bold leading-snug tracking-tight mb-1">Durán Lengo</h4>
              
            </div>

            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img className="md:max-w-none mx-auto rounded pb-5" src={Mema} width="200" height="200" alt="Features bg" />
            <p> </p>
              <h4 className="text-2xl font-bold leading-snug tracking-tight mb-1">Mercedes</h4>
              <h4 className="text-2xl font-bold leading-snug tracking-tight mb-1">Iglesias Martín</h4>
              
            </div>

            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img className="md:max-w-none mx-auto rounded pb-5" src={Gines} width="200" height="200" alt="Features bg" />
            <p> </p>
              <h4 className="text-2xl  font-bold leading-snug tracking-tight mb-1">Gińes</h4>
              <h4 className="text-2xl font-bold leading-snug tracking-tight mb-1">Pastor Fernandez</h4>
            </div>

            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img className="md:max-w-none mx-auto rounded pb-5" src={Angel} width="150" height="140" alt="Features bg" />
            <p> </p>
              <h4 className="text-2xl font-bold leading-snug tracking-tight mb-1">Ángel</h4>
              <h4 className="text-2xl font-bold leading-snug tracking-tight mb-1">Martín Núñez</h4>
            </div>

            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img className="md:max-w-none mx-auto rounded pb-5" src={Roberto} width="200" height="200" alt="Features bg" />
            <p> </p>
              <h4 className="text-2xl font-bold leading-snug tracking-tight mb-1">Roberto</h4>
              <h4 className="text-2xl font-bold leading-snug tracking-tight mb-1">Paz Rivera</h4>              
            </div>

            </div>
            
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20 pt-20 font-bold">
              <p className="text-4xl text-black-600">EQUIPO BACKEND</p>
            </div>
            
            <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img className="md:max-w-none mx-auto rounded pb-5" src={Alejandro} width="200" height="200" alt="Features bg" />
            <p> </p>
              <h4 className="text-2xl font-bold leading-snug tracking-tight mb-1">Alejandro</h4>
              <h4 className="text-2xl font-bold leading-snug tracking-tight mb-1">Carrasco Núnez</h4>
              
            </div>

            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img className="md:max-w-none mx-auto rounded pb-5" src={Juanlo} width="200" height="200" alt="Features bg" />
            <p> </p>
              <h4 className="text-2xl font-bold leading-snug tracking-tight mb-1">Juan</h4>
              <h4 className="text-2xl font-bold leading-snug tracking-tight mb-1">López Quirós</h4>
            </div>

            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img className="md:max-w-none mx-auto rounded pb-5" src={Fj} width="210" height="210" alt="Features bg" />
            <p> </p>
              <h4 className="text-2xl font-bold leading-snug tracking-tight mb-1">Francisco Javier</h4>
              <h4 className="text-2xl font-bold leading-snug tracking-tight mb-1">Barba Trejo</h4>
            </div>


            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img className="md:max-w-none mx-auto rounded pb-5" src={JoseCano} width="210" height="210" alt="Features bg" />
            <p> </p>
              <h4 className="text-2xl font-bold leading-snug tracking-tight mb-1">Carlos</h4>
              <h4 className="text-2xl font-bold leading-snug tracking-tight mb-1">Cano Gómez</h4>
            </div>

            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img className="md:max-w-none mx-auto rounded pb-5" src={Jose} width="230" height="230" alt="Features bg" />
            <p> </p>
              <h4 className="text-2xl font-bold leading-snug tracking-tight mb-1">José Ignacio</h4>
              <h4 className="text-2xl font-bold leading-snug tracking-tight mb-1">Castro Vázquez</h4>
            </div>

            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img className="md:max-w-none mx-auto rounded pb-5" src={Jorge} width="210" height="210" alt="Features bg" />
            <p> </p>
              <h4 className="text-2xl font-bold leading-snug tracking-tight mb-1">Jorge</h4>
              <h4 className="text-2xl font-bold leading-snug tracking-tight mb-1">Sillero Manchón</h4>
            </div>

            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img className="md:max-w-none mx-auto rounded pb-5" src={Manu} width="210" height="210" alt="Features bg" />
            <p> </p>
              <h4 className="text-2xl font-bold leading-snug tracking-tight mb-1">Manuel</h4>
              <h4 className="text-2xl font-bold leading-snug tracking-tight mb-1">Fernández Rodríguez</h4>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
