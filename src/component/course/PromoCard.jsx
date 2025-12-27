import React from 'react'

function PromoCard({ sendPc }) {
  if (!sendPc) return null;

  const {
    tag,
    title,
    buttonText,
    image,
    gradient = "from-slate-50 to-slate-100"
  } = sendPc;

  return (
    <div
      className={`
        rounded-3xl p-8 
        flex items-center justify-between
        bg-gradient-to-r ${gradient}

        shadow-[0_14px_40px_rgba(0,0,0,0.12)]
        transition-all duration-300 ease-out
        hover:-translate-y-1
        hover:shadow-[0_30px_80px_rgba(0,0,0,0.22)]
      `}
    >
      {/* LEFT */}
      <div className="max-w-xs">
        {tag && (
          <span
            className="
              inline-block mb-3 px-4 py-1
              text-xs font-semibold
              bg-white
              rounded-full
              text-slate-800
              shadow-sm
            "
          >
            {tag}
          </span>
        )}

        <h3 className="text-lg font-bold text-slate-900 mb-4 leading-snug">
          {title}
        </h3>

        <button
          className="
            px-5 py-2 rounded-xl text-sm font-semibold text-white
            bg-gradient-to-r from-blue-600 to-indigo-600
            shadow-md
            transition-all
            hover:from-indigo-600 hover:to-blue-700
            hover:shadow-lg
            active:scale-95
          "
        >
          {buttonText || "See Courses"}
        </button>
      </div>

      {/* RIGHT */}
      {image && (
        <img
          src={image}
          alt={title || "promo image"}
          className="
            w-36 hidden sm:block object-contain
            transition-transform duration-300
            hover:scale-105
          "
        />
      )}
    </div>
  );
}

export default PromoCard;
