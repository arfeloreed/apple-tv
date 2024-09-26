import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const FadeIn = ({ children, className }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: "100% 0px -300px 0px" }}
      className={className ? className : ""}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
