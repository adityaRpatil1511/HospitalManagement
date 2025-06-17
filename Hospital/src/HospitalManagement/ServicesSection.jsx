// src/Components/ServicesSection.jsx
import React from "react";
import {
  HeartPulse,
  Brain,
  Bone,
  Baby,
  Camera,
  Activity,
  Dumbbell,
  Radiation,
  Sun,
} from "lucide-react";

const services = [
  { icon: <HeartPulse />, title: "Cardiology" },
  { icon: <Brain />, title: "Neurology" },
  { icon: <Bone />, title: "Orthopedics" },
  { icon: <Baby />, title: "Pediatrics" },
  { icon: <Camera />, title: "Radiology" },
  { icon: <Activity />, title: "Emergency & Trauma" },
  { icon: <Dumbbell />, title: "Physiotherapy" },
  { icon: <Radiation />, title: "Oncology" },
  { icon: <Sun />, title: "Dermatology" },
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Our Specialties
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
          {services.map((service, index) => (
            <ServiceCard key={index} icon={service.icon} title={service.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon, title }) => {
  return (
    <div className="bg-gray-100 hover:bg-blue-50 p-6 rounded-lg shadow-md transition duration-300">
      <div className="text-blue-600 mb-3 flex justify-center">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
    </div>
  );
};

export default ServicesSection;
