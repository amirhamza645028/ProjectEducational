import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// ✅ MUST HAVE
import "swiper/css";

function Galarybanner() {
  return (
    <div className="mx-auto text-center w-full md:w-4/12 my-10 px-4">
      
      <h2 className="text-3xl uppercase font-bold leading-tight py-4 text-slate-800">
        Photo Gallery
      </h2>

      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        className="
          rounded-3xl
          shadow-[0_20px_60px_rgba(0,0,0,0.25)]
          overflow-hidden
        "
      >
        <SwiperSlide>
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="w-full h-72 object-cover"
            alt="slide 1"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            className="w-full h-72 object-cover"
            alt="slide 2"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
            className="w-full h-72 object-cover"
            alt="slide 3"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Galarybanner;
