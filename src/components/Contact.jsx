import { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  // Basic validation
  if (!formData.name || !formData.email || !formData.phone || !formData.message) {
    toast.error("Please fill out all fields.");
    return;
  }
  if (!formData.email.includes("@")) {
    toast.error("Enter a valid email address.");
    return;
  }

  toast.loading("Sending...");
  try {
    const result = await emailjs.sendForm(
      'service_v8ljuef', // Replace with your EmailJS service ID
      'template_7eqwgej', // Replace with your EmailJS template ID
      e.target, // The form element
      'cUCYLH7tiseeBOKjG' // Replace with your EmailJS user ID
    );

    if (result.text === 'OK') {
      toast.dismiss();
      toast.success("Message sent!");
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setSubmitted(false), 6000);
    } else {
      throw new Error("Failed to send email");
    }
  } catch (err) {
    toast.dismiss();
    toast.error("Failed to send. Try again.");
  }
};

  return (
    <section id="contact" className="bg-black text-white py-16 px-4 sm:px-6">
      <Toaster position="top-right" />
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row flex-wrap items-start gap-12">
        
        {/* Left: Contact Info */}
        <div className="flex-1 mb-10 md:mb-0">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Get In Touch</h3>
          <p className="mb-8 text-gray-300 text-base md:text-lg">
            Ready to discuss your metal fabrication needs? Contact us today for a custom quote.
          </p>
          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-start gap-4">
              <span className="bg-gray-800 p-3 rounded text-xl flex items-center justify-center">
                <FaMapMarkerAlt />
              </span>
              <div>
                <div className="font-semibold text-base">Address</div>
                <div className="text-gray-300 text-sm">
                  Near Ramdev Hotel, Pandhapur Phata, Shirwal - 412801
                </div>
              </div>
            </div>
            {/* Phone */}
            <div className="flex items-start gap-4">
              <span className="bg-gray-800 p-3 rounded text-xl flex items-center justify-center">
                <FaPhoneAlt />
              </span>
              <div>
                <div className="font-semibold text-base">Phone</div>
                <div className="text-gray-300 text-sm">+91 8805888057</div>
              </div>
            </div>
            {/* Email */}
            <div className="flex items-start gap-4">
              <span className="bg-gray-800 p-3 rounded text-xl flex items-center justify-center">
                <FaEnvelope />
              </span>
              <div>
                <div className="font-semibold text-base">Email</div>
                <div className="text-gray-300 text-sm">vishwasari2260@gmail.com</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="flex-1 max-w-lg w-full bg-[#232323] rounded-xl shadow p-8 mx-auto">
          {!submitted ? (
            <>
              <h4 className="text-lg md:text-xl font-semibold mb-6">Request Quote</h4>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded bg-[#333] text-white px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded bg-[#333] text-white px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full rounded bg-[#333] text-white px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <textarea
                  name="message"
                  placeholder="Project Details"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full rounded bg-[#333] text-white px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-500 resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-[#ffa726] hover:bg-[#ff9800] text-white font-semibold py-3 rounded transition"
                >
                  Send Message
                </button>
              </form>
            </>
          ) : (
            <motion.div
              className="text-center py-10 px-4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="text-xl font-semibold mb-4">Thank You!</h4>
              <p className="text-gray-300 text-base">
                Your message has been received. We'll get back to you shortly.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
