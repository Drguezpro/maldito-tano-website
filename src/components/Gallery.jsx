// src/components/Gallery.jsx
import React, { useState } from 'react';
import galleryImages from '../data/gallery';

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  return (
    <section id="gallery" className="px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-6">Galería</h2>
      <div className="grid gap-2 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {galleryImages.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Galería ${i + 1}`}
            className="w-full h-48 object-cover rounded-lg cursor-pointer"
            onClick={() => { setCurrent(i); setOpen(true); }}
          />
        ))}
      </div>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
            {/* Botón de cierre */}
            <button
            className="absolute top-4 right-4 text-white text-3xl font-bold z-50"
            onClick={() => setOpen(false)}
            >
            &times;
            </button>

            <img
            src={galleryImages[current]}
            alt={`Galería ${current + 1}`}
            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg"
            />
        </div>
    )}

    </section>
  );
}