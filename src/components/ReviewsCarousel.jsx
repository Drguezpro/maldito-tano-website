// src/components/ReviewsCarousel.jsx
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'

import reviews from '../data/reviews'

// Suponiendo que tus imágenes están en public/assets/salon1.jpg, etc.
const salonImages = [
  '/assets/salon1.jpg',
  '/assets/salon2.jpg',
  '/assets/salon3.jpg',
  '/assets/salon4.jpg',
  '/assets/salon5.jpg',
]

function renderStars(rating) {
  return (
    <div className="flex justify-center text-yellow-500 mb-4">
      {Array.from({ length: 5 }, (_, i) =>
        i < rating
          ? <span key={i}>★</span>
          : <span key={i} className="text-gray-300">★</span>
      )}
    </div>
  )
}

export default function ReviewsCarousel() {
  return (
    <section className="w-full h-screen overflow-hidden">
      <h2 className="text-black text-3xl md:text-4xl font-semibold mb-8 text-center">
        Lo que opinan de nosotros en Google
      </h2>

      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        loop
        speed={1500}
        className="w-full h-[calc(100%-4rem)]" // deja espacio para el título
      >
        {reviews.map((review, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex w-full h-full">
              {/* Columna de imagen (2/3) */}
              <div className="w-2/3 h-full">
                <img
                  src={salonImages[idx % salonImages.length]}
                  alt={`Salón ${idx+1}`}
                  className="w-full h-5/6 object-cover mx-auto rounded-lg"
                />
              </div>

              {/* Columna de opinión (1/3) */}
              <div className="w-1/3 h-full flex items-center justify-center bg-white bg-opacity-90 p-8 -mt-12">
                <div className="text-center">
                  {renderStars(review.rating)}
                  <p className="text-gray-800 text-lg md:text-xl italic mb-4">
                    “{review.text}”
                  </p>
                  <div className="text-gray-700 font-semibold">
                    – {review.author}
                  </div>
                                    
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
