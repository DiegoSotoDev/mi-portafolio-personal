import React from 'react';
import styles from './Banner.module.scss';
import { motion } from 'framer-motion';
import logo from '../../assets/images/logo1.png'; // Asegúrate de que la ruta sea correcta

const Banner = () => {
  return (
    <div className={styles.Banner}>
      <motion.img 
      id='inicio'
        src={logo} 
        alt="Mi Portafolio Logo" 
        className={styles.logo}
        initial={{ scale: 0 }}
        animate={{ scale: 2 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      />
      
      <motion.p 
        className={styles.subtitle}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        Desarrollador Web Full Stack
      </motion.p>
    </div>
  );
};

export default Banner;