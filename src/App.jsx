import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Equipment from "./components/Equipment";
import Industries from "./components/Industries";
import Quality from "./components/Quality";
import Clients from "./components/Clients";
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
      <Industries />
      <Clients />
      <ChooseUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;