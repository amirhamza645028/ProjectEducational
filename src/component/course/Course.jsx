import React from 'react'
import { FaGraduationCap, FaArrowRight } from "react-icons/fa";

function Course({course}) {
   const { title, subtitle, linkText } = course;
  return (
    <div className="border-2 border-primary rounded-xl bg-[#f1fff6] p-6 text-center hover:shadow-lg transition">
      <FaGraduationCap className="text-primary text-3xl mx-auto mb-3" />

      <h3 className="text-lg font-bold text-primary">{title}</h3>

      {subtitle && (
        <p className="text-sm text-gray-600 mt-1">{subtitle}</p>
      )}

      <button className="mt-4 flex items-center gap-2 mx-auto text-primary font-semibold">
        {linkText} <FaArrowRight />
      </button>
    </div>
  )
}

export default Course