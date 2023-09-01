import React from 'react';
import Instagram from '../images/instagram.png';
import Twitter from '../images/twitter.png';


function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Top area: Blocks */}

          {/* 3rd block */}
        <div className="content-center pb-130">
          <ul className="text-sm text-black-600 flex justify-center items-center text-lg">
            <li>
              <h1 className='text-black-600 font-bold text-3xl'>¿Quieres saber más? Contáctanos en <h1 className='text-blue-600 font-bold'><a href='mailto:volleymate-help@gmail.com'>volleymate.es@gmail.com</a></h1></h1></li>
          </ul>
        </div>
      

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">
        <div className="flex mb-4 md:order-1 md:ml-4 md:mb-0 text-sm text-black-600 mr-4 flex justify-center items-center text-xl pt-10">
        ¡Entérate de las novedades por redes sociales!
          {/* Social links */}
        <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li>
              <div className="flex justify-center items-center text-gray-600 hover:text-gray-900 hover:bg-white-100 rounded-full transition duration-150 ease-in-out pt-3" aria-label="Twitter">
                  <a href="https://www.instagram.com/volleymate.es"><img className="md:max-w-none mx-auto rounded pb-5" src={Instagram} width="24" height="24" alt="Features bg" /></a>
              </div>
            </li>
            
            <li>
              <div className="flex justify-center items-center text-gray-600 hover:text-gray-900 hover:bg-white-100 rounded-full transition duration-150 ease-in-out pl-4 pt-3" aria-label="Twitter">
                  <a href="https://www.twitter.com/volleymatees"><img className="md:max-w-none mx-auto rounded pb-5" src={Twitter} width="24" height="24" alt="Features bg" /></a>
              </div>
            </li>

          </ul>
        </div>
        

          {/* Copyrights note */}
          <div className="text-sm text-black-600 mr-4 text-xl pt-10">2023 VolleyMate. Todos los derechos reservados</div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
