import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { logos } from "../../variables/movies";

const DevicesCon = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const parentVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 1,
        staggerChildren: 0.5,
      },
    },
  };
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <motion.div
      ref={ref}
      variants={parentVariants}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className="mx-auto grid max-w-[480px] grid-cols-2 items-center gap-x-7 gap-y-8 text-center
        md:grid-cols-3"
    >
      {logos.map((item) => {
        return (
          <motion.div key={item.id} variants={childVariants}>
            <img
              src={item.img}
              width={83}
              height={82}
              alt={item.text}
              className="mx-auto"
            />
            <h3 className="mt-4 text-lg font-semibold tracking-[0.012em]">
              {item.text}
            </h3>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default DevicesCon;
