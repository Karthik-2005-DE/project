import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white  ">

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 px-6">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold text-amber-500">BiteBox.</h2>
          <p className="mt-2 text-gray-300">
            Delicious food delivered to your doorstep with speed and love.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-4 mt-4">
            <FaFacebook className="text-xl hover:text-amber-500 cursor-pointer" />
            <FaInstagram className="text-xl hover:text-amber-500 cursor-pointer" />
            <FaTwitter className="text-xl hover:text-amber-500 cursor-pointer" />
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-xl font-semibold text-amber-500">Contact Us</h3>

          <div className="flex items-center gap-3 mt-3">
            <FaMapMarkerAlt />
            <p>Kochi, Kerala, India</p>
          </div>

          <div className="flex items-center gap-3 mt-2">
            <MdEmail />
            <p>support@bitebox.com</p>
          </div>

          <div className="flex items-center gap-3 mt-2">
            <IoMdCall />
            <p>+91 98765 43210</p>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-xl font-semibold text-amber-500">Quick Links</h3>

          <ul className="mt-3 space-y-2">
            <li className="hover:text-amber-500 cursor-pointer">Home</li>
            <li className="hover:text-amber-500 cursor-pointer">Menu</li>
            <li className="hover:text-amber-500 cursor-pointer">About Us</li>
            <li className="hover:text-amber-500 cursor-pointer">Contact</li>
          </ul>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-gray-400 mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} BiteBox. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;
