import React from "react";
import './../style/services.css'

export default function Services() {
    return (
        <section class="services">
            <h2>My Services</h2>
            <div class="services-grid">
                <div class="service-card">
                    <h3>Visual Design</h3>
                    <p>Creating visually stunning designs that align with your brand and captivate your audience.</p>
                </div>
                <div class="service-card">
                    <h3>3D Design</h3>
                    <p>Bringing concepts to life with detailed and realistic 3D modeling and rendering.</p>
                </div>
                <div class="service-card">
                    <h3>Interior Design</h3>
                    <p>Transforming spaces into functional and aesthetically pleasing environments.</p>
                </div>
                <div class="service-card">
                    <h3>Presentation Design</h3>
                    <p>Crafting impactful presentations that effectively communicate your message.</p>
                </div>
                <div class="service-card">
                    <h3>Ad Design</h3>
                    <p>Designing compelling advertisements that drive engagement and conversions.</p>
                </div>
            </div>
        </section>
    )
}