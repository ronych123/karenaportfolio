import React from 'react';
import './App.css'; // Make sure to style appropriately
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Projects from './components/projects';
import Gallery from './components/gallery';
import Services from './components/services';
import Skills from './components/skills';
import Certifications from './components/certifications';
import Footer from './components/footer';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div id='home'>
        <Home />
      </div>
      <div id='about'>
        <About />
      </div>
      <div id='services'>
        <Services />
      </div>
      <div id='skills'>
        <Skills />
      </div>
      <div id='projects'>
        <Projects />
      </div>
      <div id='gallery'>
        <Gallery />
      </div>
      <div id='certifications'>
        <Certifications />
      </div>
      <div id='footer'>
        <Footer />
      </div>
    </div>
  );
}

export default App;