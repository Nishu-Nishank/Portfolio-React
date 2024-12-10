import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Header';
import Portfolio from './components/Portfolio';
import Projects from './components/Project';
import Skills from './components/Skills';

const App = () => {
  return (
    <div id="app">
      <Navbar />
      <Portfolio />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;
