import React from 'react';

import HeroHome from '../partials/HeroHome';
import FeaturesHome from '../partials/Features';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import Contact from '../partials/Contact';
import Footer from '../partials/Footer';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <main className="flex-grow">
        <HeroHome />
        <FeaturesHome />
        <FeaturesBlocks />
        <Contact />
      </main>

      <Footer />

    </div>
  );
}

export default Home;