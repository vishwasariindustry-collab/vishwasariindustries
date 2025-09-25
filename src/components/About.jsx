import { motion } from "framer-motion";

export default function About() {
  const items = [
    {
      title: "Our Mission",
      icon: "/images/mission-icon.png",
      content: (
        <p className="text-sm sm:text-base">
          To deliver innovative and reliable metal fabrication services using state-of-the-art equipment, including arc welding, bending, and drilling machines, while providing customized solutions that meet our clients' specific requirements. We aim to produce durable, high-quality metal products that exceed industry standards and client expectations.
        </p>
      ),
    },
    {
      title: "Our Vision",
      icon: "/images/vision-icon.png",
      content: (
        <p className="text-sm sm:text-base">
          To be the go-to mechanical works provider for custom metal fabrication, known for our precision, efficiency, and commitment to quality. We strive to continually improve our capabilities, investing in advanced machinery and a skilled workforce to meet the evolving needs of our clients and industry.
        </p>
      ),
    },
    {
      title: "Core Values",
      icon: "/images/values-icon.png",
      content: (
        <ul className="list-none pl-0 text-sm sm:text-base space-y-1">
          <li>Quality Excellence</li>
          <li>Innovation</li>
          <li>Customer Satisfaction</li>
          <li>Integrity</li>
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
          Vishwasari Industries is a mechanical works company specializing in custom metal fabrication services, offering a wide range of solutions for industries such as construction, automotive, manufacturing, and energy. We utilize advanced equipment, including arc welding machines, bending machines, and drilling machines, to produce high-quality metal components and structures. Our expertise in precision fabrication, combined with a commitment to safety and reliability, ensures that we meet the diverse needs of our clients with excellence.
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
