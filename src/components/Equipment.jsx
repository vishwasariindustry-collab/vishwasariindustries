import React from "react";

export default function Equipment() {
  return (
    <section id="equipment" className="max-w-6xl mx-auto py-16 px-4 sm:px-6">
      <h3 className="text-2xl font-bold mb-2 text-center font-quicksand">Our Equipment</h3>
      <p className="text-center mb-12 text-black font-inter">
        State-of-the-art machinery for precision manufacturing
      </p>

      {/* Machine 1 */}
      <div className="relative flex flex-col md:flex-row items-center rounded-3xl p-4 sm:p-8 overflow-hidden md:ml-40">
        <img
          src="/images/machine-1.png"
          alt="Vertical Machining Centre - MCV 450"
          className="w-full md:w-[360px] object-contain mb-8 md:mb-0 md:mr-5"
        />
        <div className="flex-1 flex items-center justify-center">
          <div className="bg-white rounded-xl shadow p-6 w-full max-w-md md:ml-10 md:mt-20 mt-4">
            <h4 className="font-bold text-lg mb-4 font-quicksand border-b border-black pb-2">
              Vertical Machining Centre - MCV 450
            </h4>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <div className="text-xs text-gray-500">Travel (X/Y/Z)</div>
                <div className="font-semibold">800/450/500 mm</div>
              </div>
              <div>
                <div className="text-xs text-gray-500">Table Size</div>
                <div className="font-semibold">1000 x 450 mm</div>
              </div>
            </div>
            <div className="bg-indigo-100 text-indigo-700 text-xs rounded px-3 py-2 mt-2">
              200 mm 4th Axis Rotary Table (U-Cam Make)
            </div>
          </div>
        </div>
      </div>

      {/* Machine 2 */}
      <div className="relative flex flex-col md:flex-row-reverse items-center rounded-3xl p-4 sm:p-5 overflow-hidden">
        <img
          src="/images/machine-2.png"
          alt="Horizontal Turning Centre - 2 Jobber XL"
          className="w-full md:w-[360px] h-[14rem] sm:h-[16rem] md:h-[19rem] object-contain mb-8 md:mb-0 md:mr-40 mt-10"
        />
        <div className="flex-1 flex items-center justify-center">
          <div className="bg-white rounded-xl shadow p-6 w-full max-w-md md:ml-10 md:mr-5 mt-4">
            <h4 className="font-bold text-lg mb-4 font-quicksand border-b border-black pb-2">
              Horizontal Turning Centre - 2 Jobber XL
            </h4>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <div className="text-xs text-gray-500">Between Centre</div>
                <div className="font-semibold">425 mm</div>
              </div>
              <div>
                <div className="text-xs text-gray-500">Swing Over Bed</div>
                <div className="font-semibold">500 mm</div>
              </div>
            </div>
            <div className="bg-yellow-100 text-yellow-700 text-xs rounded px-3 py-2 mt-2">
              High-precision turning capabilities
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}