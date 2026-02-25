import { motion } from "framer-motion";

// Hero.jsx with animation
export default function Hero() {
  return (
    <section
      className="relative h-[400px] sm:h-[600px] bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/images/hero-machine.png')" }}
    >
      <motion.div
        className="text-center bg-black bg-opacity-50 p-4 sm:p-6 rounded-xl w-[95vw] max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl sm:text-4xl font-bold mb-4">
          Engineered to Your Needs, Delivered with Precision
          {/* Precision CNC Machining & Custom Metal Fabrication Solutions */}
        </h2>
        <p className="text-sm sm:text-lg mb-6 text-gray-200">
          Delivering high-precision mechanical components and fabrication services for Construction, Automotive, Manufacturing, Energy, and Defence industries.
        </p>
        
        {/* Highlight Points */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8 text-xs sm:text-sm">
          <div className="flex items-center justify-center gap-2">
            <span className="text-yellow-400 font-bold">✔</span>
            <span>Tight Tolerance Machining</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="text-yellow-400 font-bold">✔</span>
            <span>Advanced CNC & Fabrication</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="text-yellow-400 font-bold">✔</span>
            <span>Quality Inspected</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="text-yellow-400 font-bold">✔</span>
            <span>On-Time Delivery</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded font-semibold text-black text-sm sm:text-base transition"
          >
            Request a Custom Quote
          </button>
          <button
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="border-2 border-yellow-500 hover:bg-yellow-500 hover:text-black px-6 py-3 rounded font-semibold text-white text-sm sm:text-base transition"
          >
            Contact Our Team
          </button>
        </div>
      </motion.div>
    </section>
  );
}
