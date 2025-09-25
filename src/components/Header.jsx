import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="shadow-md sticky top-0 z-50 bg-white">
      <header className="max-w-7xl mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/images/logo.png"
            alt="Vishwasari Industries Logo"
            className="h-8 w-10 mr-1"
          />
          <h1 className="text-2xl font-bold font-inter">Vishwasari Industries</h1>
        </div>
        {/* Desktop Nav */}
        <nav className="space-x-6 hidden md:block">
          <a href="#about" className="hover:text-red-500">About</a>
          <a href="#services" className="hover:text-red-500">Services</a>
          <a href="#equipment" className="hover:text-red-500">Equipment</a>
          <a href="#contact" className="hover:text-red-500">Contact Us</a>
        </nav>
        {/* Hamburger Icon */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <span>&#9776;</span>
        </button>
      </header>
      {/* Mobile Nav */}
      {open && (
        <nav className="md:hidden bg-white px-4 pb-4">
          <a href="#about" className="block py-2 hover:text-red-500">About</a>
          <a href="#services" className="block py-2 hover:text-red-500">Services</a>
          <a href="#equipment" className="block py-2 hover:text-red-500">Equipment</a>
          <a href="#contact" className="block py-2 hover:text-red-500">Contact Us</a>
        </nav>
      )}
    </div>
  );
}