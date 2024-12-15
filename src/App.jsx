// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Menu from './components/Menu';
import Monials from './components/Monials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LocomotiveScroll from 'locomotive-scroll';


function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Menu />
      <Monials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
