import React from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import FeaturesHome from '../partials/Features';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import GuestReviews from '../partials/GuestReviews';
import Faq from '../partials/Faq';
import Contact from '../partials/Contact';
import Footer from '../partials/Footer';

function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <Header />

      <main className="flex-grow" id="inicio">
        <HeroHome />
        <FeaturesHome />
        <FeaturesBlocks />
        <GuestReviews />
        <Faq />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default Home;
