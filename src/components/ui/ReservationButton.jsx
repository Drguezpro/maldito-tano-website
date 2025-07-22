// src/components/ReservationButton.jsx
import React, { useState } from 'react'
import ReservationModal from './ReservationModal'
import { FaWhatsapp } from 'react-icons/fa'

export default function ReservationButton() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-14 right-6 z-20 flex overflow-hidden rounded-md shadow-lg"
        aria-label="Reserva"
      >
        <span className="bg-yellow-500 text-black font-semibold px-4 py-2 hover:bg-yellow-600 transition">
          Reserva <br/>tu mesa
        </span>
        <span className="bg-green-600 text-white px-3 py-2 hover:bg-green-700 transition flex items-center justify-center">
          <FaWhatsapp className="text-4xl" />
        </span>
      </button>
      <ReservationModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  )
}
