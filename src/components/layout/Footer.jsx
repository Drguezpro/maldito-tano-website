import React from 'react'
import { FaInstagram, FaWhatsapp, FaFacebook } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-gray-900 text-gray-300 text-sm py-6">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        {/* Nombre, año y desarrollador */}
        <div className="text-center md:text-left">
          <div>© {currentYear} Maldito Tano VCP</div>
          <div className="mt-1 text-xs text-gray-500">
            Sitio desarrollado por{' '}
            <a
              href="https://paginasweb.restaurant"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              paginasweb.restaurant
            </a>
          </div>
        </div>

        {/* Dirección & Horarios */}
        <div className="text-center">
          <div>Las Verbenas 134, Villa Carlos Paz</div>
          <div className="mt-1">
            Jue-Vie-Sáb-Dom 12:30–16:00 / 20:00– 01:00
          </div>
        </div>

        {/* Contacto y Redes Sociales */}
        <div className="text-center md:text-right space-y-2">
            
          <div className="flex justify-center md:justify-end space-x-4 text-2xl">
            <a
              href="https://instagram.com/malditotano_vcp"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/maldito.tano.vcp.cordoba"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaFacebook />
            </a>
            <a
              href="https://wa.me/543541516069"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaWhatsapp />
            </a>
          </div>

          <div className="flex justify-center md:justify-end items-center space-x-2">
            <a
              href="mailto:malditotanocordoba@gmail.com"
              className="hover:text-white"
            >
              malditotanocordoba@gmail.com
            </a>
            <span>|</span>
            <a
              href="tel:+543541516069"
              className="hover:text-white"
            >
              (03541) 516069
            </a>
          </div>
          
        </div>
      </div>
    </footer>
  )
}
