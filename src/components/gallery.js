import React from 'react';
import './../style/gallery.css'
function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <h2>My Creative Gallery</h2>
      <div className="gallery-grid">
        <div className="gallery-item">
          <img src="images/bois1.jpg" alt="Project 1" />
        </div>
        <div className="gallery-item">
          <img src="images/bois2.jpg" alt="Project 2" />
        </div>
        <div className="gallery-item">
          <img src="images/bois3.jpg" alt="Project 3" />
        </div>
        <div className="gallery-item">
          <img src="images/bois4.jpg" alt="Project 4" />
        </div>
        <div className="gallery-item">
          <img src="images/bois5.jpg" alt="Project 5" />
        </div>
        <div className="gallery-item">
          <img src="images/bois6.jpg" alt="Project 6" />
        </div>
        <div className="gallery-item">
          <img src="images/bois7.jpg" alt="Project 6" />
        </div>
        <div className="gallery-item">
          <img src="images/bois8.jpg" alt="Project 6" />
        </div>
      </div>
    </section>
  );
}

export default Gallery;