import React, { useEffect, useState } from "react";
import bg from "../../Hospital/src/assets/HospitalImages/bg.png";
import bg1 from "../../Hospital/src/assets/HospitalImages/bg3.png"
import Navbar from "./CommonFolder/Navbar";
import ServicesSection from "./HospitalManagement/ServicesSection";

const bgImages = [bg, bg1];

function App() {
  const [currentBg, setCurrentBg] = useState(0);

  // Automatically change background every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Rotating Background Hero Section */}
      <div
        className={`bg-cover bg-center bg-no-repeat bg-fixed min-h-screen transition-all duration-1000`}
        style={{ backgroundImage: `url(${bgImages[currentBg]})` }}
      >
        <Navbar />

        <div className="pt-32 px-6 text-white max-w-4xl mx-auto text-center animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 drop-shadow-lg">
            Advanced Multispecialty Hospital for Comprehensive Care
          </h1>
          <p className="text-lg md:text-xl text-white mb-8 leading-relaxed drop-shadow-md">
            Delivering world-class healthcare with modern facilities and expert doctors
            in cardiology, neurology, orthopedics, and more.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 px-6 py-3 rounded font-semibold shadow-md transition">
              Book an Appointment
            </button>
            <button className="bg-white text-blue-700 hover:bg-gray-100 px-6 py-3 rounded font-semibold shadow-md transition">
              Meet Our Doctors
            </button>
            <button className="bg-blue-900 hover:bg-blue-800 px-6 py-3 rounded font-semibold shadow-md transition">
              Explore Health Packages
            </button>
          </div>
        </div>
      </div>

      {/* Services Section (outside background image) */}
      <ServicesSection />
    </>
  );
}

export default App;
