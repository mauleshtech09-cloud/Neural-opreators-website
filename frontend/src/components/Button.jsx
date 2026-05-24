import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './Button.module.css';

const MotionLink = motion(Link);

const Button = ({ children, variant = 'primary', to, href, onClick, className = '', type = 'button' }) => {
  const classes = `${styles.btn} ${styles[variant]} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { type: "spring", stiffness: 400, damping: 25 }
  };

  if (to) {
    return <MotionLink to={to} className={classes} {...motionProps}>{children}</MotionLink>;
  }
  
  if (href) {
    const isExternal = href.startsWith('http');
    return (
      <motion.a
        href={href}
        className={classes}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button type={type} onClick={onClick} className={classes} {...motionProps}>
      {children}
    </motion.button>
  );
};

export default Button;
