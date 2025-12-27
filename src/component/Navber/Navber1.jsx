import React from 'react'
import { FaFacebook, FaFacebookF, FaWhatsapp } from "react-icons/fa";
function Navber1() {
  return (
    <div>
        <div className="w-full bg-blue-900 text-white px-2">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-10 text-sm">

          {/* Left side */}
          <div className="flex items-center gap-2 text-white">
            <span className="font-semibold ">📞 Phone:</span>
            <a
              href="tel:+880123456789"
              className="font-bold hover:underline text-white"
            >
              +880 1234-56789
            </a>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4 ">
            <a
              href="https://facebook.com"
              target="_blank"
              className="tooltip tooltip-bottom"
              data-tip="Facebook Page"
             
            >
              <FaFacebookF className="text-lg hover:text-primary" /> 
            </a>

            <a
              href="https://facebook.com/groups"
              target="_blank"
              className="tooltip tooltip-bottom"
              data-tip="Facebook Group"
            >
              <FaFacebook className="text-lg hover:text-primary" />
            </a>

            <a
              href="https://wa.me/880123456789"
              target="_blank"
              className="tooltip tooltip-bottom"
              data-tip="WhatsApp"
            >
              <FaWhatsapp className="text-lg hover:text-green-500" />
            </a>
          </div>

        </div>
      </div>
    </div>
    </div>
  )
}

export default Navber1