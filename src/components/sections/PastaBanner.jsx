import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import './PizzaBanner.css'

const pastaImages = [
  '/assets/Pasta1.png',
  '/assets/Pasta2.jpg',
  '/assets/Pasta3.png',
  '/assets/Pasta4.jpg',
  '/assets/Pasta5.png',
  '/assets/Pasta6.png',
  '/assets/Pasta7.png',
  '/assets/Pasta8.png',
  '/assets/Pasta9.png',
  '/assets/Pasta10.png'
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
