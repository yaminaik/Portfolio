import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Project';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Recommendations from './components/Recommendations'

const App = () => {
  return (
    <div>
     <Header />
      <About />
      <Projects />
      <Experience />
      <Recommendations />
      <Footer />
     
    </div>
  );
};

export default App;
