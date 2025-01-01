import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faCertificate, faUserCheck, faPencilRuler, faUniversity, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import './../style/certifications.css';

export default function Certifications() {
    return (
        <section className="certifications">
            <div className="container">
                <h2>Certifications</h2>
                <div className="certification-grid">
                    <div className="certification">
                        <FontAwesomeIcon icon={faLightbulb} size="3x" style={{ color: 'var(--primary-color)' }} />
                        <p>Design Thinking - Simplilearn</p>
                        <p className="details">Issued: Aug 2023 | Expires: Aug 2033</p>
                    </div>
                    <div className="certification">
                        <FontAwesomeIcon icon={faCertificate} size="3x" style={{ color: 'var(--primary-color)' }} />
                        <p>Certification of Participation - Hult Prize Foundation</p>
                        <p className="details">Issued: Feb 2020</p>
                    </div>
                    <div className="certification">
                        <FontAwesomeIcon icon={faUserCheck} size="3x" style={{ color: 'var(--primary-color)' }} />
                        <p>Deputy Certificate - Hult Prize Foundation</p>
                        <p className="details">Issued: Feb 2020</p>
                    </div>
                    <div className="certification">
                        <FontAwesomeIcon icon={faPencilRuler} size="3x" style={{ color: 'var(--primary-color)' }} />
                        <p>Certified Professional AutoCAD 2D&3D - ALLC International House Beirut</p>
                        <p className="details">Issued: Aug 2019</p>
                    </div>
                    <div className="certification">
                        <FontAwesomeIcon icon={faUniversity} size="3x" style={{ color: 'var(--primary-color)' }} />
                        <p>Certificate of Participation - GC LAU Model United Nations</p>
                        <p className="details">Issued: Dec 2015</p>
                    </div>
                    <div className="certification">
                        <FontAwesomeIcon icon={faShareAlt} size="3x" style={{ color: 'var(--primary-color)' }} />
                        <p>Social Media Strategy Training Course - Udemy</p>
                        <p className="details">For Beginners</p>
                    </div>
                </div>
            </div>
        </section>
    );
}