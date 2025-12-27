import React from 'react'
import { FaGraduationCap, FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

function CourseCard({ sednCC }) {
  if (!sednCC) return null;

  return (
    <Link to={sednCC.route} className="block">
      <div
        className="
          bg-white border border-slate-200 rounded-2xl
          p-5 sm:p-6
          
          flex flex-col sm:flex-row
          items-center sm:items-start
          gap-4 sm:gap-5

          text-center sm:text-left

          shadow-[0_10px_25px_rgba(0,0,0,0.08)]
          transition-all duration-300
          hover:-translate-y-1
          hover:shadow-[0_26px_60px_rgba(0,0,0,0.18)]
          cursor-pointer
        "
      >
        {/* ICON */}
        <div
          className="
            p-4 rounded-xl
            bg-blue-50 text-blue-600
            shadow-sm
            flex-shrink-0
          "
        >
          <FaGraduationCap className="text-3xl" />
        </div>

        {/* CONTENT */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-base sm:text-lg font-bold text-slate-900">
            {sednCC.title}
          </h3>

          <span
            className="
              mt-2 sm:mt-3
              inline-flex items-center gap-2
              text-blue-600 font-semibold
              transition-all
              hover:gap-3
            "
          >
            {sednCC.linkText}
            <FaArrowRight />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default CourseCard;
