import React from 'react';
import styles from './SobreMi.module.scss';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// Importa los logos de tus habilidades aquí
import reactLogo from '../../assets/images/react.png';
import nodeLogo from '../../assets/images/nodejs.png';
import javascriptLogo from '../../assets/images/javascript.png';
import htmlLogo from '../../assets/images/html.png';
import cssLogo from '../../assets/images/css.png';
import pythonLogo from '../../assets/images/python.png';
import sassLogo from '../../assets/images/scss.svg';
import phpLogo from '../../assets/images/php.png';
import mysqlLogo from '../../assets/images/mysql.png';

const SobreMi = () => {
  const skills = [
    { name: 'React', logo: reactLogo },
    { name: 'Node.js', logo: nodeLogo },
    { name: 'JavaScript', logo: javascriptLogo },
    { name: 'HTML', logo: htmlLogo },
    { name: 'CSS', logo: cssLogo },
    { name: 'Python', logo: pythonLogo },
    { name: 'SASS', logo: sassLogo },
    { name: 'PHP', logo: phpLogo },
    { name: 'MySQL', logo: mysqlLogo },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      id="sobremi"
      className={styles.sobreMiContainer}
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      <div className={styles.content}>
        <motion.h2 className={styles.title} variants={itemVariants}>
          Experiencia
        </motion.h2>
        <motion.p variants={itemVariants}>
          Soy un desarrollador web con experiencia en la creación de aplicaciones modernas y eficientes. He trabajado con tecnologías como React, Node.js, y Python, tengo un solido conocimiento en bases de datos como MySQL. Me apasiona aprender nuevas tecnologías y mejorar continuamente mis habilidades.
        </motion.p>
        <motion.h2 className={styles.title} variants={itemVariants}>
          Habilidades
        </motion.h2>
        <ul className={styles.skillsList}>
          {skills.map((skill, index) => (
            <motion.li
              key={index}
              className={styles.skillItem}
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
            >
              <img src={skill.logo} alt={skill.name} className={styles.skillLogo} />
              <span>{skill.name}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default SobreMi;