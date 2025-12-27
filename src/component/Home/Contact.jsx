import React from "react";
import contacts from "../../../public/data/contact.json";
import { FaPhoneAlt, FaFacebook, FaGlobe } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

function Contact() {
  return (
    <section className="py-16 bg-[#f5f7fb]">
      <h2 className="text-4xl font-extrabold text-center text-slate-900 mb-12">
        Contact Us
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-6 max-w-7xl mx-auto">
        {contacts.map((item, index) => (
          <div
            key={index}
            className="
              bg-white
              rounded-2xl
              p-6
              border border-slate-200

              shadow-[0_14px_40px_rgba(0,0,0,0.12)]
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-[0_30px_80px_rgba(0,0,0,0.22)]
            "
          >
            <h3 className="font-bold text-center text-slate-900 mb-5 text-lg">
              {item.title}
            </h3>

            <div className="space-y-3 text-sm text-slate-700">
              <p className="flex items-center gap-3">
                <FaPhoneAlt className="text-blue-600" />
                {item.phone}
              </p>

              <p className="flex items-center gap-3">
                <IoLogoWhatsapp className="text-green-600" />
                {item.whatsapp}
              </p>

              {item.links.includes("Facebook Page") && (
                <p className="flex items-center gap-3 cursor-pointer hover:text-blue-600 transition">
                  <FaFacebook className="text-blue-600" />
                  Facebook Page
                </p>
              )}

              {item.links.includes("Facebook Group") && (
                <p className="flex items-center gap-3 cursor-pointer hover:text-blue-600 transition">
                  <FaFacebook className="text-blue-600" />
                  Facebook Group
                </p>
              )}

              {item.links.includes("Website") && (
                <p className="flex items-center gap-3 cursor-pointer hover:text-blue-600 transition">
                  <FaGlobe className="text-blue-600" />
                  Website
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Contact;
