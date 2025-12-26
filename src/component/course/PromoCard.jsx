import React from 'react'

function PromoCard({sendPc}) {
  if (!sendPc) return null; // ✅ safety

  const {
    tag,
    title,
    buttonText,
    image,
    gradient = "from-slate-100 to-slate-200"
  } = sendPc;

  return (
    <div
      className={`rounded-3xl p-8 flex items-center justify-between bg-gradient-to-r ${gradient}`}
    >
      {/* LEFT */}
      <div className="max-w-xs">
        {tag && (
          <span className="inline-block mb-3 px-3 py-1 text-xs font-semibold bg-white rounded-full text-primary">
            {tag}
          </span>
        )}

        <h3 className="text-lg font-bold text-primary mb-4 leading-snug">
          {title}
        </h3>

        <button className="btn btn-primary btn-sm">
          {buttonText || "See Courses"}
        </button>
      </div>

      {/* RIGHT */}
      {image && (
        <img
          src={image}
          alt={title || "promo image"}
          className="w-36 hidden sm:block object-contain"
        />
      )}
    </div>
  );
}

export default PromoCard