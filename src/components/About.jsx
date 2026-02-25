import { motion } from "framer-motion";

export default function About() {
  const items = [
    {
      title: "Our Mission",
      icon: "/images/mission-icon.png",
      content: (
        <p className="text-sm sm:text-base">
          To provide innovative and dependable metal fabrication and machining solutions using state-of-the-art equipment and skilled expertise, ensuring superior quality and complete customer satisfaction.
        </p>
      ),
    },
    {
      title: "Our Vision",
      icon: "/images/vision-icon.png",
      content: (
        <p className="text-sm sm:text-base">
          To become a leading mechanical works provider recognized for precision engineering, operational excellence, and long-term client partnerships.
        </p>
      ),
    },
    {
      title: "Core Values",
      icon: "/images/values-icon.png",
      content: (
        <ul className="list-none pl-0 text-sm sm:text-base space-y-1">
          <li>✓ Quality Excellence</li>
          <li>✓ Innovation & Continuous Improvement</li>
          <li>✓ Customer-Centric Approach</li>
          <li>✓ Integrity & Transparency</li>
          <li>✓ Safety & Compliance</li>
        </ul>
      ),
    },
  ];

  return (
    <section
      id="about"
      className="relative max-w-6xl mx-auto px-4 sm:px-6 py-8 pt-20"
    >
      <div className="relative z-10">
        <motion.h3
          className="text-2xl sm:text-3xl font-bold mb-4 font-quicksand"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Vishwasari Industries
        </motion.h3>

        <motion.p
          className="mb-10 pt-5 text-sm sm:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Vishwasari Industries is a precision-driven mechanical works company specializing in CNC machining, custom metal fabrication, welding, and industrial component manufacturing. Based in Shirwal, Maharashtra, we serve clients across diverse sectors including construction, automotive, manufacturing, energy, and defence.
          <br /> <br />
          With advanced machining centres, skilled technicians, and strict quality control processes, we deliver durable, high-performance components tailored to client specifications. Our focus on precision, reliability, and timely execution makes us a trusted industrial partner.
        </motion.p>

        <div className="flex flex-col gap-12">
          {/* Mission */}
          <motion.div
            className="flex flex-col md:flex-row items-center justify-end"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-full md:w-[45rem] rounded-xl p-6">
              <h4 className="font-bold text-xl mb-2 font-quicksand border-b border-black pb-2 text-right">
                {items[0].title}
              </h4>
              <div className="text-right">{items[0].content}</div>
            </div>
            <div className="hidden sm:flex w-16 sm:w-20 h-16 sm:h-20 ml-6 flex-shrink-0">
              <img src={items[0].icon} alt="Mission Icon" className="w-full h-full object-contain" />
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            className="flex flex-col md:flex-row items-center justify-start"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="hidden sm:flex w-16 sm:w-20 h-16 sm:h-20 mr-6 flex-shrink-0">
              <img src={items[1].icon} alt="Vision Icon" className="w-full h-full object-contain" />
            </div>
            <div className="w-full md:w-[45rem] rounded-xl p-6">
              <h4 className="font-bold text-xl mb-2 font-quicksand border-b border-black pb-2 text-left">
                {items[1].title}
              </h4>
              <div className="text-left">{items[1].content}</div>
            </div>
          </motion.div>

          {/* Core Values */}
          <motion.div
            className="flex flex-col md:flex-row items-center justify-end"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="w-full md:w-[45rem] rounded-xl p-6">
              <h4 className="font-bold text-xl mb-2 font-quicksand border-b border-black pb-2 text-right">
                {items[2].title}
              </h4>
              <div className="text-right">{items[2].content}</div>
            </div>
            <div className="hidden sm:flex w-16 sm:w-20 h-16 sm:h-20 ml-6 flex-shrink-0">
              <img src={items[2].icon} alt="Core Values Icon" className="w-full h-full object-contain" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
