// src/App.jsx
import React, { useState, useEffect } from 'react';

// Layout
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// UI
import HeroCarousel from './components/ui/HeroCarousel';
import Gallery from './components/ui/Gallery';
import ReviewsCarousel from './components/ui/ReviewsCarousel';
import ReservationModal from './components/ui/ReservationModal';

// Sections
import RandomBanner from './components/sections/RandomBanner';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  // Mensajes con traducción
  const messages = [
    { it: 'Benvenuti a', es: '' },
    { it: 'Scopri i nostri sapori', es: 'Descubre nuestros sabores' },
    { it: 'Vieni a gustare la passione', es: 'Vení a saborear la pasión' },
    { it: 'Prenota la tua esperienza', es: 'Reservá tu experiencia' },
    { it: 'Lasciati tentare dal menu', es: 'Dejate tentar por la carta' }
  ];

  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setIdx(i => (i + 1) % messages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [messages.length]);

  const { it, es } = messages[idx];

  return (
    <>
      <Navbar onReserve={() => setModalOpen(true)} />

      <section id="inicio">
        <HeroCarousel />
      </section>

      <main className="p-4 md:p-8 mt-16">
        <h1 className="text-3xl md:text-6xl font-bold font-lato text-center flex flex-col items-center gap-2 md:gap-4 -mt-16 mb-2 px-4 md:px-0">
  {idx === 0 ? (
    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
      <span className="italic text-2xl md:text-5xl break-words md:break-normal w-full md:w-auto">
        {it}
      </span>
      <img
        src="/assets/LogoMTBco.webp"
        alt="Logo Maldito Tano"
        className="h-14 md:h-32 object-contain"
      />
      <span className="italic text-2xl md:text-5xl break-words md:break-normal w-full md:w-auto">
        Ristorante Italiano
      </span>
    </div>
  ) : (
    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
      <span className="italic text-xl md:text-5xl break-words md:break-normal w-full md:w-auto whitespace-normal">
        {it}
        {es && (
          <>
            {' '}...{' '}
            <span className="not-italic text-xl md:text-5xl whitespace-normal">
              {es}
            </span>
          </>
        )}
      </span>
      <img
        src="/assets/LogoMTBco.webp"
        alt="Logo Maldito Tano"
        className="h-14 md:h-32 object-contain"
      />
    </div>
  )}
</h1>


        {/* Carta */}
        <section id="carta" className="mt-4 scroll-mt-24">
          <RandomBanner />
        </section>

        {/* Galería */}
        <section id="galeria" className="mt-16 scroll-mt-24">
          <Gallery />
        </section>

        {/* Opiniones */}
        <section id="opiniones" className="mt-16 scroll-mt-24">
          <ReviewsCarousel />
        </section>

        {/* Footer */}
        <section id="contacto" className="mt-16 scroll-mt-24">
          <Footer />
        </section>
      </main>

      <ReservationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}

export default App;
