import React from "react";
import { FaTools, FaUsers, FaAward, FaClock, FaRegSmile } from "react-icons/fa";

export default function ChooseUs() {
  const features = [
    {
      icon: <FaTools />,
      bg: "bg-blue-600",
      title: "Advanced CNC & Fabrication Machinery",
      desc: "State-of-the-art equipment for high-precision manufacturing and complex part production.",
    },
    {
      icon: <FaUsers />,
      bg: "bg-gray-500",
      title: "Skilled Technical Workforce",
      desc: "Highly trained machinists, fabricators, welders, and engineers committed to excellence.",
    },
    {
      icon: <FaAward />,
      bg: "bg-green-600",
      title: "Strict Quality Control",
      desc: "Rigorous inspection processes ensure every component meets exact technical specifications.",
    },
    {
      icon: <FaClock />,
      bg: "bg-purple-600",
      title: "Timely Project Execution",
      desc: "We understand deadlines matter. Projects completed on schedule, every time.",
    },
    {
      icon: <FaRegSmile />,
      bg: "bg-red-600",
      title: "Long-Term Client Partnerships",
      desc: "Building lasting relationships through reliability, transparency, and exceptional service.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 mt-10">
      <h3 className="text-3xl font-bold text-center mb-2 font-quicksand">Why Choose Vishwasari Industries?</h3>
      <p className="text-center mb-12 font-inter text-base sm:text-lg text-gray-600">
        Industry-leading expertise with proven reliability and commitment to your success
      </p>

      {/* First Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-10">
        {features.slice(0, 3).map((f) => (
          <div key={f.title} className="flex flex-col items-center text-center px-4">
            <div className={`w-14 h-14 flex items-center justify-center rounded-full mb-4 shadow ${f.bg}`}>
              {React.cloneElement(f.icon, { className: 'text-white text-2xl' })}
            </div>
            <h4 className="font-semibold text-base sm:text-lg mb-2">{f.title}</h4>
            <p className="text-gray-600 font-inter text-sm sm:text-base">{f.desc}</p>
          </div>
        ))}
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:w-2/3 mx-auto">
        {features.slice(3).map((f) => (
          <div key={f.title} className="flex flex-col items-center text-center px-4">
            <div className={`w-14 h-14 flex items-center justify-center rounded-full mb-4 shadow ${f.bg}`}>
              {React.cloneElement(f.icon, { className: 'text-white text-2xl' })}
            </div>
            <h4 className="font-semibold text-base sm:text-lg mb-2">{f.title}</h4>
            <p className="text-gray-600 font-inter text-sm sm:text-base">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
