import { motion } from "motion/react";
const AnimateShapes = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      className="relative"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateShapes;
