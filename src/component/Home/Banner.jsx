import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

// Swiper styles
import "swiper/css";

function Banner() {
  return (
    <section className="px-6 py-14 bg-[#f5f7fb]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* LEFT SIDE */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-extrabold mb-5 leading-tight text-slate-900">
              জেনেসিস পরিবারে <br />
              <span className="text-blue-600">আপনাকে স্বাগতম!</span>
            </h1>

            <p className="mb-8 text-slate-600 text-lg max-w-xl">
              পোস্ট-গ্রাজুয়েশন জগতে আপনার সফলতার সঙ্গী হবে জেনেসিস।
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              
              {/* LOGIN */}
              <Link
                to="/login"
                className="
                  px-7 py-3 rounded-xl font-semibold text-white
                  bg-gradient-to-r from-blue-600 to-indigo-600
                  shadow-md
                  transition-all
                  hover:from-indigo-600 hover:to-blue-700
                  hover:shadow-lg
                  active:scale-95
                  text-center
                "
              >
                Login / Register
              </Link>

              {/* DEMO LECTURE */}
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  px-7 py-3 rounded-xl font-semibold
                  text-blue-600 border border-blue-200
                  bg-white
                  shadow-sm
                  transition-all
                  hover:bg-blue-50 hover:shadow-md
                  text-center
                "
              >
                Demo Lectures
              </a>
            </div>
          </div>

          {/* RIGHT SIDE - CAROUSEL */}
          <div className="flex-1 w-full max-w-md">
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

        </div>
      </div>
    </section>
  );
}

export default Banner;
