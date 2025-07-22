import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

export default function Navbar({ onReserve }) {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-70 text-white backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">
        {/* Logo y título */}
        <div className="flex items-center">
          <img
            src="/assets/LogoMTBco.png"
            alt="Logo Maldito Tano"
            className="h-10 md:h-14 object-contain"
          />
          <span className="text-2xl font-bold ml-4">Ristorante <span className="italic">La Casa del Maldito Tano</span>
          <br/> <span className="text-sm font-normal">Villa Carlos Paz (Córdoba) - San Isidro (Bs. As.)</span>
          </span>
        </div>

        {/* Navegación */}
        <ul className="hidden md:flex space-x-8 flex-grow justify-center">
          <li><a href="#inicio" className="hover:text-yellow-400">Inicio</a></li>
          <li><a href="#carta" className="hover:text-yellow-400">Carta</a></li>
          <li><a href="#chef" className="hover:text-yellow-400">Sobre el Chef</a></li>
          <li><a href="#galeria" className="hover:text-yellow-400">Galería</a></li>
          <li><a href="#opiniones" className="hover:text-yellow-400">Opiniones</a></li>
          <li><a href="#contacto" className="hover:text-yellow-400">Contacto</a></li>
        </ul>

        {/* Botón de Reserva en Navbar (solo md+) */}
        <button
          onClick={onReserve}
          className="hidden md:flex absolute bottom-4 right-4 z-20 overflow-hidden rounded-md shadow-lg"
          aria-label="Reservar"
        >
        
          <span className="bg-yellow-500 text-black font-semibold px-4 py-2 hover:bg-yellow-600 transition-colors text-center leading-tight">
            Reserva<br/>tu mesa
          </span>
          <span className="bg-green-600 text-white px-3 py-2 hover:bg-green-700 transition-colors flex items-center justify-center">
            <FaWhatsapp className="text-4xl" />
          </span>
        </button>
      </div>
    </nav>
  )
}
