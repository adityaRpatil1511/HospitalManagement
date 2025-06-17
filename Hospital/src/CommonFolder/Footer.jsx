import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-300 pt-16 pb-8 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <h1 className="text-3xl font-extrabold text-white mb-4 tracking-wide">
            MediCare<span className="text-teal-400">+</span>
          </h1>
          <p className="text-sm leading-relaxed">
            Streamline your healthcare experience — search for doctors, book
            appointments, and manage hospital services all in one place.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Navigation</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:text-teal-400 transition">About Us</a></li>
            <li><a href="/doctors" className="hover:text-teal-400 transition">Doctors</a></li>
            <li><a href="/services" className="hover:text-teal-400 transition">Services</a></li>
            <li><a href="/appointments" className="hover:text-teal-400 transition">Book Appointment</a></li>
            <li><a href="/contact" className="hover:text-teal-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Our Services</h2>
          <ul className="space-y-2 text-sm">
            <li>24/7 Appointment Booking</li>
            <li>Electronic Medical Records</li>
            <li>Patient Portal Access</li>
            <li>Consultation Scheduling</li>
            <li>Hospital Resource Management</li>
          </ul>
        </div>

        {/* Social & Newsletter */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Stay Connected</h2>
          <p className="text-sm mb-4">Subscribe to receive health tips and updates:</p>
          <form className="flex items-center mb-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-l-md text-gray-900 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-teal-500 hover:bg-teal-600 px-4 py-2 text-white font-semibold rounded-r-md"
            >
              Subscribe
            </button>
          </form>

          <div className="flex space-x-3 mt-4">
            <a href="#" className="bg-white text-teal-700 hover:bg-teal-400 p-2 rounded-full transition-all">
              <FaFacebookF size={16} />
            </a>
            <a href="#" className="bg-white text-teal-700 hover:bg-teal-400 p-2 rounded-full transition-all">
              <FaTwitter size={16} />
            </a>
            <a href="#" className="bg-white text-teal-700 hover:bg-teal-400 p-2 rounded-full transition-all">
              <FaInstagram size={16} />
            </a>
            <a href="#" className="bg-white text-teal-700 hover:bg-teal-400 p-2 rounded-full transition-all">
              <FaLinkedinIn size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} MediCare+. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
