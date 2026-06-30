import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import Apartment from '../partials/Apartment';
import Gallery from '../partials/Gallery';
import Features from '../partials/Features';
import Location from '../partials/Location';
import GuestReviews from '../partials/GuestReviews';
import Faq from '../partials/Faq';
import Contact from '../partials/Contact';
import FinalCta from '../partials/FinalCta';
import Footer from '../partials/Footer';
import MobileActionBar from '../partials/MobileActionBar';

function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden bg-site-gradient">
      <Header />

      <main className="flex-grow">
        <HeroHome />
        <Apartment />
        <Gallery />
        <Features />
        <Location />
        <GuestReviews />
        <Faq />
        <Contact />
        <FinalCta />
      </main>

      <Footer />
      <MobileActionBar />
    </div>
  );
}

export default Home;
