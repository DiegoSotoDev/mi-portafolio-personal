import React, { useRef } from 'react';
import styles from './Projects.module.scss';
import { motion, useInView } from 'framer-motion';

// Importa una imagen de ejemplo para los proyectos
import projectImage from '../../assets/images/portada_tarjetas.png';

const Projects = () => {
  // Define tus proyectos en un array
  const projects = [
    {
      title: 'Proyecto 1: E-commerce',
      description: 'Una tienda online construida con React y Node.js, con pasarela de pago.',
      image: projectImage,
      liveUrl: 'https://ejemplo.com/proyecto1'
    },
    {
      title: 'Proyecto 2: Clon de Netflix',
      description: 'Clon de la interfaz de Netflix, consumiendo la API de películas.',
      image: projectImage,
      liveUrl: 'https://ejemplo.com/proyecto2'
    },
    // Agrega más proyectos aquí
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Cada tarjeta aparecerá con un pequeño retraso
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      id="proyectos"
      className={styles.projectsContainer}
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      <div className={styles.content}>
        <motion.h2
          className={styles.title}
          variants={itemVariants}
        >
          Mis Proyectos
        </motion.h2>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={styles.projectCard}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <img src={project.image} alt={project.title} className={styles.projectImage} />
              <div className={styles.projectInfo}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.liveButton}>
                  Ver en vivo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;