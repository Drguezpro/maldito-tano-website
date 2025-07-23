// src/components/HeroCarousel.jsx
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'

const images = [
  //'/assets/MalditoTanoPortada3.webp',
  
  '/assets/MalditoTanoPortada10.webp',
  '/assets/MalditoTanoPortada5.webp',
  '/assets/MTSIsidroPortada.webp',
  '/assets/MTSI17.webp',
  '/assets/PortadaComidas.webp',
  '/assets/PortadaMT.webp',
  
  ]
export default function HeroCarousel() {
  return (
    <Swiper
      modules={[Autoplay, EffectFade, Navigation]}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
        pauseOnVisibilityChange: false  // no pausar al ocultar/mostrar la pestaña
      }}
      speed={1000}
      observer={true}          // re-escucha cambios en el DOM
      observeParents={true}    // re-escucha cambios en elementos padres
      navigation
      className="w-full h-screen"
    >
      {images.map((img, i) => (
        <SwiperSlide key={i}>
          <img src={img} className="object-cover w-full h-full" alt={`slide-${i}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}