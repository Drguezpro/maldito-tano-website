import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import './PizzaBanner.css'

const pastaImages = [
  '/assets/Pasta1.webp',
  '/assets/Pasta2.webp',
  '/assets/Pasta3.webp',
  '/assets/Pasta4.webp',
  '/assets/Pasta5.webp',
  '/assets/Pasta6.webp',
  '/assets/Pasta7.webp',
  '/assets/Pasta8.webp',
  '/assets/Pasta9.webp',
  '/assets/Pasta10.webp'
]

export default function PastaBanner() {
  return (
    <div className="w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, FreeMode]}
        slidesPerView="auto"
        spaceBetween={16}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={6000}
        grabCursor={false}
        allowTouchMove={false}
        freeMode={{ enabled: true, momentum: false }}
        className="py-4"
      >
        {pastaImages.map((src, i) => (
          <SwiperSlide key={i} className="!w-[400px]">
            <img
              src={src}
              alt={`Pasta ${i + 1}`}
              className="object-cover w-full h-[380px] rounded-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
