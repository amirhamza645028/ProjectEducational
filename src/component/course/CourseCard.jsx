import React from 'react'
import { FaGraduationCap, FaArrowRight } from "react-icons/fa";

function CourseCard({sednCC}) {
  return (
    <div>
        <div className="border-2 border-primary rounded-xl bg-[#d9e9df] p-6  hover:shadow-lg transition flex">
             <div className='p-4 ml-4'>
               <FaGraduationCap className="text-primary text-3xl mx-auto mb-3" />
             </div>
              <div>
                <h3 className="text-lg font-bold text-primary">{sednCC.title}</h3>
                <button className="mt-4 flex  gap-2 mx-auto text-primary font-semibold">
                {sednCC.linkText} <FaArrowRight />
              </button>
              </div>
              
            </div>
          
    </div>
  )
}

export default CourseCard