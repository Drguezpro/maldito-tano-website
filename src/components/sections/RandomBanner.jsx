// src/components/SimpleBanner.jsx
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const images = import.meta.glob('/src/assets/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
})

export default function SimpleBanner() {
  const allImages = Object.values(images)

  return (
    <div className="w-full overflow-hidden relative">
      <Swiper
        modules={[Autoplay]}
        slidesPerView="auto"
        spaceBetween={16}
        loop={true}
        speed={3500}
        autoplay={{
          delay: 0, // 0 para scroll continuo
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        allowTouchMove={false}
        grabCursor={false}
        className="py-4"
      >
        {allImages.map((src, i) => (
          <SwiperSlide key={i} className="!w-[300px] md:!w-[400px]">
            <img
              src={src}
              alt={`Banner ${i + 1}`}
              className="w-full h-[320px] md:h-[380px] object-cover rounded-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Botón fijo superpuesto */}
            <div className="absolute inset-x-0 bottom-4 flex justify-center z-10">
        <a
          href="#carta"
          className="bg-yellow-500 px-6 py-2 rounded-lg text-xl hover:bg-yellow-600 transition"
        >
          Ver Carta
        </a>
      </div>

    </div>
  )
}
