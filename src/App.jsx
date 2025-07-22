// src/App.jsx
import React, { useState } from 'react';

// Layout
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// UI
import HeroCarousel from './components/ui/HeroCarousel';
import Gallery from './components/ui/Gallery';
import ReviewsCarousel from './components/ui/ReviewsCarousel';
import ReservationButton from './components/ui/ReservationButton';
import ReservationModal from './components/ui/ReservationModal';

// Sections
import PizzaBanner from './components/sections/PizzaBanner';
import MenuFeatured from './components/sections/MenuFeatured';
import PastaBanner from './components/sections/PastaBanner';
import MenuPastas from './components/sections/MenuPastas';


function App() {
  // Estado para controlar el modal
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      {/* Navbar recibe la función para abrir el modal */}
      <Navbar onReserve={() => setModalOpen(true)} />

      {/* Hero / Inicio */}
      <section id="inicio">
        <HeroCarousel />
      </section>

      <main className="p-8 mt-16">
       <h1 className="text-6xl font-bold font-lato text-center flex justify-center items-center gap-4 -mt-16 mb-2">
        <span className="italic">Benvenuti a</span>
        <img
          src="/assets/LogoMTBco.png"
          alt="Logo Maldito Tano"
          className="h-10 md:h-44 object-contain"
        />
        <span className="italic">Ristorante Italiano</span>
      </h1>


        {/* Sección  Pizze */}
        <section id="carta" className="mt-16 scroll-mt-24">
          
          <div className="max-w-5xl mx-auto p-8">
            <h2 className="text-5xl font-bold font-lato text-center mb-6"><span className="italic">Nuestras Pizzas</span></h2>
            {/*<MenuFeatured />*/}
          </div>
          <PizzaBanner />
        </section>

        {/* Sección Pastas */}
        <section id="pastas" className="mt-16 scroll-mt-24">
          
          <div className="max-w-5xl mx-auto p-8">
            <h2 className="text-5xl font-bold font-lato text-center mb-6"><span className="italic">Nuestras Pastas</span></h2>
            {/*<MenuPastas />*/}
          </div>
          <PastaBanner />
        </section>

        {/* Galería */}
        <section id="galeria" className="mt-16 scroll-mt-24">
          <Gallery />
        </section>

        {/* Opiniones */}
        <section id="opiniones" className="mt-16 scroll-mt-24">
          <ReviewsCarousel />
        </section>

        {/* Contacto / Footer */}
        <section id="contacto" className="mt-16 scroll-mt-24">
          <Footer />
        </section>

        {/* Botón flotante de Reserva 
        <ReservationButton onClick={() => setModalOpen(true)} />*/}
      </main>

      {/* El modal de reserva, controlado por modalOpen */}
      <ReservationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  )
}

export default App
