import { FaTools, FaUserFriends, FaAward, FaClock, FaRegSmile } from "react-icons/fa";

export default function ChooseUs() {
  const features = [
    {
      icon: <FaTools className="text-white text-2xl" />,
      bg: "bg-[#2346a0]",
      title: "State-of-the-Art Equipment",
      desc: "Our machine shop is equipped with the latest CNC machinery, welding equipment, and tools to handle projects of all sizes and complexities.",
    },
    {
      icon: <FaUserFriends className="text-white text-2xl" />,
      bg: "bg-[#fbb017]",
      title: "Skilled Workforce",
      desc: "Our team consists of highly trained machinists, fabricators, welders, and engineers committed to providing the best results.",
    },
    {
      icon: <FaAward className="text-white text-2xl" />,
      bg: "bg-[#1fa463]",
      title: "Commitment to Quality",
      desc: "We follow strict quality control procedures to ensure that every part we produce meets our clients' exact specifications.",
    },
    {
      icon: <FaClock className="text-white text-2xl" />,
      bg: "bg-[#495057]",
      title: "Timely Delivery",
      desc: "We understand the importance of deadlines and ensure that all projects are completed on time, every time.",
    },
    {
      icon: <FaRegSmile className="text-white text-2xl" />,
      bg: "bg-[#a01d1d]",
      title: "Customer Satisfaction",
      desc: "Our clients are our priority, and we work closely with them from concept to completion, providing solutions that meet or exceed expectations.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 mt-10">
      <h3 className="text-3xl font-bold text-center mb-2 font-quicksand">Why Choose Us ?</h3>
      <p className="text-center mb-12 font-inter text-base sm:text-lg">
        State-of-the-art machinery for precision manufacturing
      </p>

      {/* First Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-10">
        {features.slice(0, 3).map((f) => (
          <div key={f.title} className="flex flex-col items-center text-center px-4">
            <div className={`w-14 h-14 flex items-center justify-center rounded-full mb-4 shadow ${f.bg}`}>
              {f.icon}
            </div>
            <h4 className="font-semibold text-base sm:text-lg mb-2">{f.title}</h4>
            <p className="text-gray-600 font-inter text-sm sm:text-base">{f.desc}</p>
          </div>
        ))}
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:w-2/3 mx-auto">
        {features.slice(3).map((f) => (
          <div key={f.title} className="flex flex-col items-center text-center px-4">
            <div className={`w-14 h-14 flex items-center justify-center rounded-full mb-4 shadow ${f.bg}`}>
              {f.icon}
            </div>
            <h4 className="font-semibold text-base sm:text-lg mb-2">{f.title}</h4>
            <p className="text-gray-600 font-inter text-sm sm:text-base">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
