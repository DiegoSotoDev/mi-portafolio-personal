import React from 'react';
import styles from './Footer.module.scss';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className={styles.footer}
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
    >
      <p>&copy; {new Date().getFullYear()} Diego Soto | Creado por Diego Soto</p>
    </motion.footer>
  );
};

export default Footer;