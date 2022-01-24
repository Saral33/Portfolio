import React, { useEffect } from 'react';
import Header from './components/header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Contact from './components/Contact';

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, delay: 200 });
  }, []);
  return (
    <React.Fragment>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </React.Fragment>
  );
};

export default App;
