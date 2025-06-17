import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from "../assets/HospitalImages/Logo.png"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-sm text-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-20 w-20" />
          
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <a href="#" className="hover:text-blue-300">Home</a>
          <a href="#" className="hover:text-blue-300">Services</a>
          <a href="#" className="hover:text-blue-300">Doctors</a>
          <a href="#" className="hover:text-blue-300">Templates</a>
          <a href="#" className="hover:text-blue-300">Blog</a>
          <a href="#" className="hover:text-blue-300">Contact Us</a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-80 px-4 py-4 space-y-3 text-sm">
          <a href="#" className="block hover:text-blue-300">Home</a>
          <a href="#" className="block hover:text-blue-300">Services</a>
          <a href="#" className="block hover:text-blue-300">Doctors</a>
          <a href="#" className="block hover:text-blue-300">Templates</a>
          <a href="#" className="block hover:text-blue-300">Blog</a>
          <a href="#" className="block hover:text-blue-300">Contact Us</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
