import React from 'react';
import Banner from '../../components/Banner/Banner'; // Asumimos que lo renombraste a Banner
import SobreMi from '../SobreMi/SobreMi';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Banner />
      <SobreMi />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;