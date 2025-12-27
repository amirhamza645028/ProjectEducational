import { FaFacebookF, FaYoutube, FaPhoneAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#182a5a] text-white">
      {/* TOP FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* LEFT */}
        <div>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-white">GENESIS</span>
          </h2>

          <p className="text-sm leading-relaxed text-gray-200">
            <span className="font-semibold">Head Office :</span><br />
            230, New Elephant Road (4th floor)<br />
            West Side of Katabon Mor, Dhaka-1205
          </p>

          <div className="flex gap-3 mt-5">
            <a className="bg-green-500 p-3 rounded">
              <FaPhoneAlt />
            </a>
            <a className="bg-blue-600 p-3 rounded">
              <FaFacebookF />
            </a>
            <a className="bg-red-600 p-3 rounded">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* MIDDLE */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Company</h3>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li className="hover:underline cursor-pointer">About Us</li>
            <li className="hover:underline cursor-pointer">Contact Us</li>
            <li className="hover:underline cursor-pointer">Refund Policy</li>
            <li className="hover:underline cursor-pointer">
              Terms and Condition
            </li>
          </ul>
        </div>

        {/* RIGHT */}
        <div>
          <h3 className="font-semibold text-lg mb-4">
            GENESIS Android App
          </h3>

          <a href="#" className="inline-block mb-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-12"
            />
          </a>

          <p className="text-sm text-gray-200">
            Get the latest and updated Android app.
          </p>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="bg-[#1f3b8f] text-center py-3 text-sm text-gray-200">
        © 2024 GENESIS All Rights Reserved. Developed By Medigene IT
      </div>
    </footer>
  );
}

export default Footer;
