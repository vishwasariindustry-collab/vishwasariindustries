import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Equipment from "./components/Equipment";
import ChooseUs from "./components/ChooseUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <div
        className="ml-0 sm:ml-20"
        style={{
          backgroundImage: "url('/images/AboutBackground.png')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          marginLeft: undefined, // let Tailwind handle margin
          backgroundPositionY: "-300px"
        }}
      >
        <About />
        <Services />
      </div>
      <div className="relative">
        {/* Top Background Image - Hidden on mobile */}
        <div
          className="hidden sm:block absolute right-0 top-0 pointer-events-none w-[90%]"
          style={{
            height: "430px",
            backgroundImage: "url('/images/equipment-bg-1.png')",
            backgroundSize: "contain",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
            zIndex: 1,
            opacity: 1,
            marginTop: "10rem",
          }}
        />

        {/* Bottom Background Image - Hidden on mobile */}
        <div
          className="hidden sm:block absolute left-0 bottom-0 pointer-events-none w-[90%]"
          style={{
            height: "430px",
            backgroundImage: "url('/images/equipment-bg-2.png')",
            backgroundSize: "contain",
            backgroundPosition: "bottom",
            backgroundRepeat: "no-repeat",
            zIndex: 2,
            opacity: 1,
          }}
        />

        <div className="relative z-10">
          <Equipment />
        </div>
      </div>
      <ChooseUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;