import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

export default function Quality() {
  const tools = [
    "630 x 630 Surface Plate",
    "Vernier Height Gauge (600 mm)",
    "Vernier Calipers",
    "Micrometer Screw Gauges",
    "Magnetic Blocks",
  ];

  return (
    <section id="quality" className="bg-gray-50 py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 font-quicksand">
            Quality Assurance
          </h3>
          <p className="text-base sm:text-lg text-gray-700">
            Quality is integrated into every stage of our production process. We follow strict quality control protocols to ensure every component meets exact technical specifications.
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-xl shadow-lg p-8 sm:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h4 className="text-xl sm:text-2xl font-bold mb-8 text-center font-quicksand">
            Our Inspection Instruments
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={tool}
                className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <FaCheckCircle className="text-blue-600 text-2xl flex-shrink-0" />
                <span className="text-base sm:text-lg text-gray-800 font-medium">
                  {tool}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-10 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border-2 border-blue-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-center text-gray-800 text-base sm:text-lg">
              <span className="font-bold">Our Commitment:</span> Every component undergoes rigorous inspection and testing to guarantee precision, durability, and compliance with customer specifications.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
