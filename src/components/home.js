import React from 'react';
import './../style/home.css';

function Home() {
  return (
    <section className="home" id="home">
      <div className="intro">
        <h1 className="name">Karen Abdel Khalek</h1>
        <p className="profession">Interior Architect & Project Developer</p>
        <p className="tagline">Transforming ideas into visually stunning experiences</p>
        <a href="#projects" className="cta-button">Download My CV</a>
      </div>
    </section>
  );
}

export default Home;