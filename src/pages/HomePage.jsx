import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Menu from '../components/Menu';
import Monials from '../components/Monials';
import Contact from '../components/Contact';
import LocomotiveScroll from 'locomotive-scroll';

const HomePage = () => {
  // Initialize locomotive scroll for smooth scrolling
  React.useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
    
    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, []);

  return (
    <div>
      <Hero />
      <Services />
      <Menu />
      <Monials />
      <Contact />
    </div>
  );
};

export default HomePage;
