import React, { useRef } from "react";

const CLIENTS = [
  "Ayush Ishpat Trading Company",
  "Anant Defence System Pvt. Ltd.",
  "Unique Uhpc Infra llp",
  "Sai Techno Fab.",
  "Rudra Enterprises",
  "Perfect Metal",
  "Mannar Tools",
];

const QUOTE = "Meet Out Happy Clients";

const CARD_COLORS = [
  "bg-blue-50 border-blue-200 text-blue-800",
  "bg-amber-50 border-amber-200 text-amber-900",
  "bg-red-50 border-red-200 text-red-800",
  "bg-slate-100 border-slate-300 text-slate-800",
  "bg-emerald-50 border-emerald-200 text-emerald-800",
];

function ClientLogoCard({ name, colorIndex }) {
  const colorClass = CARD_COLORS[colorIndex % CARD_COLORS.length];
  return (
    <div
      className={`rounded-xl shadow-md p-4 sm:p-5 flex items-center justify-center min-h-[100px] min-w-[160px] sm:min-w-[180px] flex-shrink-0 max-w-[220px] border-2 ${colorClass}`}
    >
      <p className="text-sm sm:text-base font-semibold font-quicksand text-center leading-tight">
        {name}
      </p>
    </div>
  );
}

export default function Clients() {
  const scrollRef = useRef(null);

  const handleWheel = (e) => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    const canScrollLeft = scrollLeft > 0;
    const canScrollRight = scrollLeft < scrollWidth - clientWidth - 1;
    if (e.deltaY !== 0 && (e.deltaY > 0 ? canScrollRight : canScrollLeft)) {
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    }
  };

  return (
    <section id="clients" className="max-w-6xl mx-auto py-16 px-4 sm:px-6">
      <h3 className="text-2xl sm:text-3xl font-bold tracking-wide text-center text-gray-800 font-quicksand mb-3">
        Our Clients
      </h3>

      <p className="text-center mb-12 font-inter text-base sm:text-lg">
        {QUOTE}
      </p>

      <div
        ref={scrollRef}
        onWheel={handleWheel}
        className="clients-cards-scroll flex flex-nowrap gap-4 sm:gap-6 overflow-x-auto overflow-y-hidden scroll-smooth pb-2 -mx-4 px-4 sm:-mx-6 sm:px-6"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {CLIENTS.map((name, index) => (
          <ClientLogoCard key={index} name={name} colorIndex={index} />
        ))}
      </div>
      <style>{`
        .clients-cards-scroll::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}