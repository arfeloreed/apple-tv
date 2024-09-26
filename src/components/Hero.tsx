import Button from "./ui/Button";
import Container from "./ui/Container";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import napoleonImg from "../assets/images/napoleon.webp";

const Hero = () => {
  const imgContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imgContainerRef,
    offset: ["start start", "end end"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.63, 1], [1, 1, 0]);

  return (
    <div className="relative bg-dark text-white">
      <motion.div
        style={{ opacity }}
        ref={imgContainerRef}
        className="absolute -top-[--header-height] left-0 h-[200vh] w-full"
      >
        <img
          className="sticky top-0 h-screen w-full object-cover"
          src={napoleonImg}
        />
      </motion.div>

      <Container className="relative z-10 h-[--hero-height] pb-7">
        <motion.div
          className="flex h-full flex-col items-start justify-end"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          whileInView="visible"
          exit="hidden"
          animate="hidden"
          viewport={{ amount: 0.9 }}
          transition={{
            duration: 1,
          }}
        >
          <h1 className="mb-10 text-4xl font-bold md:text-5xl">
            All Apple Originals. <br />
            Only on Apple TV+.
          </h1>

          <Button className="mb-16 font-bold" size="large">
            Stream now
          </Button>

          <p className="font-semibold">Watch on the 📺 app.</p>
        </motion.div>
      </Container>
    </div>
  );
};

export default Hero;
