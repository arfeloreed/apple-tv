import { motion } from "framer-motion";
import { brands } from "../../variables/movies";

const BrandsCon = () => {
  return (
    <motion.div
      className="mt-[38px] flex flex-wrap justify-center text-center"
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            delay: 0.5, // 0.5s delay before the stagger starts
            staggerChildren: 0.5,
          },
        },
      }}
      viewport={{ once: true, margin: "100% 0px -300px 0px" }}
      initial="hidden"
      whileInView="show"
    >
      {brands.map((item) => (
        <motion.div
          key={item.id}
          className="mx-8 mb-[26px]"
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
        >
          <div
            style={{
              width: "117px",
              height: "81px",
              backgroundImage: `url(${item.name})`,
              backgroundSize: "117px 81px",
              backgroundRepeat: "no-repeat",
            }}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default BrandsCon;
