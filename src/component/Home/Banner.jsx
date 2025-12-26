import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";

function Banner() {
  return (
    <div className="bg-base-200 px-12 mb-6 mt-6">
      <div className="max-w-6xl px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10">

          {/* LEFT SIDE */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              জেনেসিস পরিবারে <br />
              আপনাকে স্বাগতম!
            </h1>

            <p className="mb-6 text-base-content/80">
              পোস্ট-গ্রাজুয়েশন জগতে আপনার সফলতার সঙ্গী হবে জেনেসিস।
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="btn btn-primary">
                Login / Register
              </button>
              <button className="btn btn-secondary">
                Demo Lectures
              </button>
            </div>
          </div>

          {/* RIGHT SIDE - CAROUSEL */}
          <div className="flex-1 w-full max-w-md p-6 l ">
            <Swiper
              modules={[Autoplay]}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              direction="horizontal"
              className="rounded-tl-3xlxlrounded-br-3xl shadow-2xl"
            >
              <SwiperSlide>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                  className="w-full h-72 object-cover rounded-xl"
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                  className="w-full h-72 object-cover rounded-xl"
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
                  className="w-full h-72 object-cover rounded-xl"
                />
              </SwiperSlide>
            </Swiper>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Banner;
