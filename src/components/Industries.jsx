import React from "react";
import { motion } from "framer-motion";
import { FaBuilding, FaCar, FaCogs, FaWind, FaShieldAlt } from "react-icons/fa";

export default function Industries() {
  const industries = [
    {
      icon: <FaBuilding className="text-4xl" />,
      title: "Construction & Infrastructure",
      color: "bg-gray-700",
    },
    {
      icon: <FaCar className="text-4xl" />,
      title: "Automotive",
      color: "bg-red-500",
    },
    {
      icon: <FaCogs className="text-4xl" />,
      title: "Manufacturing",
      color: "bg-blue-600",
    },
    {
      icon: <FaWind className="text-4xl" />,
      title: "Energy & Power",
      color: "bg-green-500",
    },
    {
      icon: <FaShieldAlt className="text-4xl" />,
      title: "Defence",
      color: "bg-gray-700",
    },
  ];

  return (
    <section id="industries" className="py-16 px-4 sm:px-6 bg-[#0b1220] text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 font-quicksand text-white">
            Industries We Serve
          </h3>
          <p className="text-base sm:text-lg text-gray-300">
            Vishwasari Industries delivers precision solutions across diverse sectors
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              className={`${industry.color} rounded-xl p-8 text-white flex flex-col items-center justify-center text-center gap-4 hover:shadow-xl transition-shadow cursor-pointer`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 rounded-full">
                {React.cloneElement(industry.icon, { className: 'text-white text-3xl' })}
              </div>
              <h4 className="font-bold text-lg font-quicksand">
                {industry.title}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
