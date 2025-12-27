import React from 'react'
import { FaGraduationCap, FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Course({ course }) {
  const { title, subtitle, linkText } = course;

  return (
    <Link to="/CourseAllBatchFinder">
      <div
        className="
         
          bg-white
          border border-slate-200
          rounded-2xl
          p-6
          text-center
          shadow-[0_10px_30px_rgba(0,0,0,0.08)]
          transition-all duration-300
          hover:-translate-y-1
          hover:shadow-[0_25px_60px_rgba(0,0,0,0.18)]
          cursor-pointer
        "
      >
        {/* ICON */}
        <FaGraduationCap
          className="
            text-blue-600
            text-4xl
            mx-auto
            mb-4
            transition-all
            group-hover:scale-110
          "
        />

        {/* TITLE */}
        <h3 className="text-lg font-bold text-slate-900">
          {title}
        </h3>

        {/* SUBTITLE */}
        {subtitle && (
          <p className="text-sm text-slate-600 mt-1">
            {subtitle}
          </p>
        )}

        {/* CTA */}
        <div
          className="
            mt-5
            inline-flex
            items-center
            gap-2
            text-blue-600
            font-semibold
            transition-all
            hover:gap-3
          "
        >
          {linkText}
          <FaArrowRight />
        </div>
      </div>
    </Link>
  );
}

export default Course;
