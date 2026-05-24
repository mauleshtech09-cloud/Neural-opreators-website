import React from 'react';
import { motion } from 'framer-motion';

const Reveal = ({ 
  children, 
  delay = 0, 
  duration = 0.5, 
  yOffset = 30, 
  className = "" 
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: duration, 
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1] // Premium ease-out cubic
      }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
