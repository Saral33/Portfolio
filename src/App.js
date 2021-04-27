import React from 'react';
import Header from './components/header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App=()=> {
  return (
   <React.Fragment>
   <Header/>
   <About/>
   <Skills/>
   <Projects/>
   <Footer/>
   </React.Fragment>
  );
}

export default App;
