import React from "react";
import contacts from "../../../public/data/contact.json";
import { FaPhoneAlt, FaFacebook, FaGlobe } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

function Contact() {
  return (
    <div className="py-10 bg-gradient-to-br from-sky-200 to-cyan-200 my-6">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
        Contact Us
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-6">
        {contacts.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border-2 border-blue-500 p-4 shadow-md"
          >
            <h3 className="font-bold text-center text-blue-700 mb-4">
              {item.title}
            </h3>

            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <FaPhoneAlt className="text-blue-600" />
                {item.phone}
              </p>

              <p className="flex items-center gap-2">
                <IoLogoWhatsapp className="text-green-600" />
                {item.whatsapp}
              </p>

              {item.links.includes("Facebook Page") && (
                <p className="flex items-center gap-2">
                  <FaFacebook className="text-blue-700" />
                  Facebook Page
                </p>
              )}

              {item.links.includes("Facebook Group") && (
                <p className="flex items-center gap-2">
                  <FaFacebook className="text-blue-700" />
                  Facebook Group
                </p>
              )}

              {item.links.includes("Website") && (
                <p className="flex items-center gap-2">
                  <FaGlobe className="text-blue-700" />
                  Website
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;
