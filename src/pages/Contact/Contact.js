import React, { useRef, useState } from 'react';
import styles from './Contact.module.scss';
import { motion, useInView } from 'framer-motion';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Estado para controlar si el formulario ha sido enviado
  const [submitted, setSubmitted] = useState(false);

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita que la página se recargue

    const form = e.target;
    const data = new FormData(form);

    try {
      // Envía los datos a Formspree usando fetch
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        // Si el envío es exitoso, actualiza el estado
        setSubmitted(true);
      } else {
        // Maneja errores si el envío falla
        console.error('Error al enviar el formulario.');
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };

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
      id="contacto"
      className={styles.contactContainer}
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
          Contacto
        </motion.h2>

        {/* Renderizado condicional: muestra el mensaje si se envió el formulario */}
        {submitted ? (
          <motion.p
            className={styles.successMessage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            ¡Gracias por tu mensaje! Te responderé pronto.
          </motion.p>
        ) : (
          /* O muestra el formulario si no se ha enviado */
          <form 
            className={styles.contactForm}
            onSubmit={handleSubmit} // Llama a la función al enviar
            action="https://formspree.io/f/mgvzbwqe" // Tu URL de Formspree
            method="POST"
          >
            <motion.p
              className={styles.subtitle}
              variants={itemVariants}
            >
              ¿Quieres una innovación Tecnológica para tu marca?. Contáctame y hablemos sobre cómo puedo ayudarte a llevar tu proyecto al siguiente nivel!.
            </motion.p>
            <motion.div className={styles.formGroup} variants={itemVariants}>
              <label htmlFor="name">Nombre</label>
              <input type="text" id="name" name="name" required />
            </motion.div>
            <motion.div className={styles.formGroup} variants={itemVariants}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </motion.div>
            <motion.div className={styles.formGroup} variants={itemVariants}>
              <label htmlFor="message">Mensaje</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </motion.div>
            <motion.button type="submit" className={styles.submitButton} variants={itemVariants}>
              Enviar Mensaje
            </motion.button>
          </form>
        )}
      </div>
    </motion.div>
  );
};

export default Contact;