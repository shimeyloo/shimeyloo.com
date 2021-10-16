// Notes: 
// https://opensourcelibs.com/lib/react-portfolio-template
// https://brittanychiang.com/
// https://michalsnik.github.io/aos/

import React from 'react'
import Header from './components/Header'; 
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import RightBar from './components/rightContactBar';
import Hobbies from './components/Hobbies';

const App = () => (
  <div id="homeSection">
    <RightBar />
    <Header />
    <Home />
    <About />
    <Projects />
    <Hobbies />
    <Contact />
    <Footer />
    
  </div>
)

export default App