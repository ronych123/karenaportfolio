import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';  // Corrected imports for brands
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';  // Corrected import for envelope
import './../style/footer.css';  // Optional, for custom styling

export default function Footer () {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <p>© 2025 Karen Abdel Khalek</p>
                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/karenabdelkhalek?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" /> LinkedIn
                        </a>
                        <a href="https://www.instagram.com/karenkhalek.interiors?igsh=MWRlbWc3aGR3aHBuOQ==" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} size="2x" /> Instagram
                        </a>
                        <a href="Kkhalekinteriors@gmail.com">
                            <FontAwesomeIcon icon={faEnvelope} size="2x" /> Email
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}