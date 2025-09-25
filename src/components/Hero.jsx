import { motion } from "framer-motion";

// Hero.jsx with animation
export default function Hero() {
  return (
    <section
      className="relative h-[400px] sm:h-[600px] bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/images/hero-machine.png')" }}
    >
      <motion.div
        className="text-center bg-black bg-opacity-50 p-4 sm:p-6 rounded-xl w-[95vw] max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl sm:text-4xl font-bold mb-4">
          Engineered to Your Needs. Delivered with Precision.
        </h2>
        <p className="text-base sm:text-lg mb-6">
          Custom CNC/VMC machining with quality and speed.
        </p>
        <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white text-sm sm:text-base">
          Get Custom Quote
        </button>
      </motion.div>
    </section>
  );
}
