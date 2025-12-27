import React from "react";
import Galarybanner from "./Galarybanner";

const images = [
  "https://i.ibb.co/7KgmMm3",
  "https://i.ibb.co/wr01MGP",
  "https://i.ibb.co/1633PHZ",
  "https://ibb.co.com/7KgmMm3",
  "https://i.ibb.co/1633PHZ",
  "https://ibb.co.com/7KgmMm3",

  // নিচের ছবিগুলো তুমি চাইলে future এ add করতে পারো
  // শুধু এই array তে link বসালেই হবে
];

function Galary() {
  return (
     <div>
    <Galarybanner></Galarybanner>
    <div className="py-14 px-4 bg-gradient-to-br from-slate-100 to-blue-100">

      
      {/* HEADING */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-slate-800 uppercase tracking-wide">
          Photo Gallery
        </h2>
        <p className="text-slate-600 mt-2">
          আমাদের স্মরণীয় মুহূর্তগুলো
        </p>
      </div>

      {/* IMAGE GRID */}
      <div className="
        max-w-7xl mx-auto
        grid grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        gap-6
      ">
        {images.map((img, index) => (
          <div
            key={index}
            className="
              group
              rounded-2xl
              overflow-hidden
              bg-white
              shadow-[0_10px_30px_rgba(0,0,0,0.12)]
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-[0_25px_60px_rgba(0,0,0,0.22)]
            "
          >
            <img
              src={img}
              alt={`gallery-${index}`}
              className="
                w-full h-64
                object-cover
                transition-transform duration-500
                group-hover:scale-110
              "
            />
          </div>
        ))}
      </div>
    </div></div>
  );
}

export default Galary;
