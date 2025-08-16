import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Header />
      <main style={{ flexGrow: 1 }} >
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      {<Footer />}
    </Router>
  );
}

export default App;