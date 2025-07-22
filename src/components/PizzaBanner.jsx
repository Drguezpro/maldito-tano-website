// src/components/PizzaBanner.jsx
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper/modules'
import 'swiper/css'
import './PizzaBanner.css'

const pizzaImages = [
  '/assets/Pizza1.png',
  '/assets/Pizza2.jpg',
  '/assets/Pizza3.png',
  '/assets/Pizza4.jpg',
  '/assets/Pizza5.jpg',
  '/assets/Pizza6.png',
  '/assets/Pizza7.jpg',
  '/assets/Pizza8.png',
  '/assets/Pizza9.jpg',
  '/assets/Pizza10.png',
  '/assets/Pizza11.jpg',
  '/assets/Pizza12.jpg',
  '/assets/Pizza13.png',
  '/assets/Pizza14.png',
  '/assets/Pizza15.png',
  '/assets/Pizza16.jpg',
  '/assets/Pizza17.jpg',
  '/assets/Pizza18.png',
  '/assets/Pizza19.png',
  '/assets/Pizza20.jpg'
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
