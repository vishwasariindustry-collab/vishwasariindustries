import { Card, CardContent } from "../components/ui/Card";

export default function Services() {
  const services = [
    { title: "Precision CNC Machining", desc: "Custom CNC milling and turning for complex parts with tight tolerance machining for various metals." },
    { title: "Tool Room", desc: "Precision workspace for creating and maintaining molds, dies, and tools used in manufacturing." },
    { title: "Prototyping & Reverse Engineering", desc: "Rapid prototyping and 3D modeling Reverse engineering for obsolete or custom parts Small-run production." },
    { title: "Assembly & Finishing", desc: "Complete assembly services with surface finishing including painting and coating." },
    { title: "Die Casting & Design", desc: "Process of shaping metal parts using high-pressure molds, focused on accuracy and repeatability." },
    { title: "Custom Welding", desc: "MIG, Stick, and Flux-Cored welding for both ferrous and non-ferrous metals." },
  ];

  return (
    <section id="services" className="py-10 sm:py-20">
      <div className="max-w-6xl mx-auto p-4 sm:p-6 sm:ml-20">
        <h3 className="text-2xl font-bold mb-6 text-center font-quicksand">Our Services</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div key={service.title} className="relative rounded-xl overflow-hidden min-h-[220px]">
              {/* Blurred background image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('/images/services-bg-${i + 1}.png')`,
                  filter: "blur(3px)",
                  opacity: 1,
                  zIndex: 1,
                }}
              />
              {/* Optional: semi-transparent dark overlay for better text contrast */}
              <div className="absolute inset-0 bg-black bg-opacity-30 z-10" />
              {/* Card content on top, with transparent background */}
              <div className="relative z-20 p-4 sm:p-6 flex flex-col h-full">
                <h4 className="pt-3 font-bold text-lg mb-2 font-quicksand text-white drop-shadow text-center">
                  {service.title}
                </h4>
                <p className="py-3 sm:py-5 text-white drop-shadow text-center">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}