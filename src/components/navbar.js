import React from "react";
import './../style/navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo-container">
                <img src="images/main_logo-Photoroom.png" className="logo" alt="Logo" />
                <div className="fullName">Karen Abdelkhalek</div>
                <div className="major">Interior Architect</div>
            </div>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#certifications">Certifications</a></li>
            </ul>
        </nav>
    );
}