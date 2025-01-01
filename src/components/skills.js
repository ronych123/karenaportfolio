import React from "react";
import './../style/skills.css'

export default function Skills() {
    return (
        <section class="skills">
            <div class="container">
                <h2>Top Skills</h2>
                <div class="skills-grid">
                <div class="skill">
                    <img src="images/sketchup.png" alt="SketchUp" className="image-skill" />
                    <p>SketchUp</p>
                </div>
                <div class="skill">
                    <img src="images/autocad.png" alt="AutoCAD Architecture" className="image-skill" />
                    <p>AutoCAD Architecture</p>
                </div>
                <div class="skill">
                    <img src="images/canva-new-UI.webp" alt="Canva" className="image-skill" />
                    <p>Canva</p>
                </div>
                <div class="skill">
                    <img src="images/autodesk.png" alt="Autodesk 3ds Max" className="image-skill" />
                    <p>Autodesk 3ds Max</p>
                </div>
                <div class="skill">
                    <img src="images/adobe-Illustrator.webp" alt="Adobe Illustrator" className="image-skill" />
                    <p>Adobe Illustrator</p>
                </div>
                </div>
            </div>
            </section>
    )
}