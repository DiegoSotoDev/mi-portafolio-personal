import React from 'react';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
    <Header />
    <main>
      <Home />
    </main>
    <Footer />
    </>
  );
}

export default App;