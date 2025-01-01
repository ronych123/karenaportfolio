import React from 'react';
import './../style/projects.css';

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>My Creative Projects</h2>
      <div className="project-container">
        <div className="project">
          <div className="project-image">
            <img src='images/pjct1.jpg' className='project-image' />
          </div>
          <h3>Elegance in Every Detail</h3>
          <p>This kitchen blends functionality with modern aesthetics, creating a perfect space for culinary creativity.</p>
        </div>
        <div className="project">
          <div className="project-image">
            <img src='images/pjct2.jpg' className='project-image' />
          </div>
          <h3>Where Comfort Meets Chic</h3>
          <p>This bedroom is a testament to the power of simplicity, featuring a curated selection of furniture and decor that exude both comfort and sophistication.</p>
        </div>
        <div className="project">
          <div className="project-image">
            <img src='images/pjct3.jpg' className='project-image' />
          </div>
          <h3>The Art of Living</h3>
          <p>This living room design is a celebration of art and design, featuring statement pieces that elevate the space and create a truly unique atmosphere.</p>
        </div>
        <div className="project">
          <div className="project-image">
            <img src='images/pjct4.jpg' className='project-image' />
          </div>
          <h3>Kitchen with a View</h3>
          <p>This kitchen design maximizes natural light and offers stunning city views, creating a space that is both inspiring and functional.</p>
        </div>
        <div className="project">
          <div className="project-image">
            <img src='images/pjct5.jpg' className='project-image' />
          </div>
          <h3>Contemporary Charm</h3>
          <p>This living room design seamlessly blends modern aesthetics with warm, inviting textures, creating a space that is both stylish and comfortable.</p>
        </div>
        <div className="project">
          <div className="project-image">
            <img src='images/pjct6.jpg' className='project-image' />
          </div>
          <h3>Where Comfort Meets Tranquility</h3>
          <p>This hotel bedroom design is a sanctuary for the senses, where the soothing textures of wood and the calming influence of nature create a space of pure tranquility.</p>
        </div>
        <div className="project">
          <div className="project-image">
            <img src='images/pjct7.jpg' className='project-image' />
          </div>
          <h3>Artistic Sanctuary</h3>
          <p>This bedroom design is a celebration of art and design, featuring statement pieces that elevate the space and create a truly unique atmosphere.</p>
        </div>
        <div className="project">
          <div className="project-image">
            <img src='images/pjct8.JPG' className='project-image' />
          </div>
          <h3>A Symphony of Light and Space</h3>
          <p>This kitchen design is a symphony of light and space, where clean lines, minimalist elements, and carefully placed lighting create an airy and inviting atmosphere.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;