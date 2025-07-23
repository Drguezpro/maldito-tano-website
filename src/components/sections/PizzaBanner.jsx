// src/components/PizzaBanner.jsx
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper/modules'
import 'swiper/css'
import './PizzaBanner.css'

const pizzaImages = [
  '/assets/Pizza1.webp',
  '/assets/Pizza2.webp',
  '/assets/Pizza3.webp',
  '/assets/Pizza4.webp',
  '/assets/Pizza5.webp',
  '/assets/Pizza6.webp',
  '/assets/Pizza7.webp',
  '/assets/Pizza8.webp',
  '/assets/Pizza9.webp',
  '/assets/Pizza10.webp',
  '/assets/Pizza11.webp',
  '/assets/Pizza12.webp',
  '/assets/Pizza13.webp',
  '/assets/Pizza14.webp',
  '/assets/Pizza15.webp',
  '/assets/Pizza16.webp',
  '/assets/Pizza17.webp',
  '/assets/Pizza18.webp',
  '/assets/Pizza19.webp',
  '/assets/Pizza20.webp'
]

export default function PizzaBanner() {
  return (
    <div className="w-full overflow-hidden">
      <Swiper
            modules={[Autoplay]}
            slidesPerView="auto"
            spaceBetween={16}
            loop={true}
            speed={6000}
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
            }}
            grabCursor={false}
            allowTouchMove={false}
            className="py-4"
            >
            {pizzaImages.map((src, i) => (
                <SwiperSlide key={i} className="!w-[400px]">
                <img
                    src={src}
                    alt={`Pizza ${i + 1}`}
                    className="object-cover w-full h-[380px] rounded-md"
                />
                </SwiperSlide>
            ))}
        </Swiper>

    </div>
  )
}
