"use client";

import { useState } from "react";
import Image from "next/image";
import "./Header.css";

export default function Header() {
    const [activeSection, setActiveSection] = useState(null);

    const toggleSection = (section) => {
        setActiveSection(activeSection === section ? null : section);
    };

    const categories = [
        {
            id: "commercial",
            label: "COMMERCIAL",
            items: [
                "Schools & Universities",
                "Hotels",
                "Clubs",
                "Shopping Complex / Malls",
                "Office Buildings",
                "Hospitals / Nursing Home",
                "And many more.",
            ],
        },
        {
            id: "residential",
            label: "RESIDENTIAL",
            items: [
                "Own Residence",
                "Group Housing Society",
                "PM Surya Ghar Muft Bijli Yojna",
            ],
        },
        {
            id: "industrial",
            label: "INDUSTRIAL",
            items: [
                "All type of industries.",
                "Cold Storages",
            ],
        },
    ];

    return (
        <div className="hero-container">
            <div className="hero-background">
                <div className="hero-overlay"></div>
            </div>

            {/* Content */}
            <div className="hero-content">
                <p className="hero-subtitle">
                    A Path More Traveled With Renewables.
                </p>

                <h1 className="hero-title">
                    Evergreen Power Solar
                </h1>

                {/* Feature Card */}
                <div className="features-grid">
                    <div className="Header-feature-card">
                        <div className="feature-icon blue-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                            </svg>
                        </div>
                        <div className="feature-text">
                            <h3>Your Solar Power</h3>
                            <p>Solutions</p>
                        </div>
                    </div>
                </div>

                {/* Categories */}
                <div className="Header-feature-link">
                    <ul className="feature-main-list">
                        {categories.map((cat) => (
                            <li key={cat.id} className="feature-main-item">
                                <button
                                    className={`feature-category-btn ${activeSection === cat.id ? "active" : ""}`}
                                    onClick={() => toggleSection(cat.id)}
                                >
                                    {cat.label}
                                    <span className="chevron">
                                        {activeSection === cat.id ? "▲" : "▼"}
                                    </span>
                                </button>

                                {activeSection === cat.id && (
                                    <ul className="feature-sub-list">
                                        {cat.items.map((item, idx) => (
                                            <li key={idx} className="feature-sub-item">
                                                <span className="bullet">•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Power Section */}
            <section className="power-section">
                <div className="decorative-vector-shape">
                    <svg viewBox="0 0 600 400" preserveAspectRatio="none" className="vector-svg">
                        <path d="M0,100 Q150,50 300,80 T600,100 L600,0 L0,0 Z" fill="rgba(249,115,22,0.1)" />
                        <path d="M0,150 Q200,120 400,140 T600,160 L600,400 L0,400 Z" fill="rgba(249,115,22,0.08)" />
                    </svg>
                </div>

                <div className="power-container">

                    {/* Images */}
                    <div className="power-image-wrapper">
                        <div className="image-grid">

                            <div className="grid-image top-image">
                                <Image
                                    src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop"
                                    alt="Solar Panels Installation"
                                    width={800}
                                    height={600}
                                />
                            </div>

                            <div className="grid-image bottom-left-image">
                                <Image
                                    src="https://cdn.britannica.com/94/192794-050-3F3F3DDD/panels-electricity-order-sunlight.jpg"
                                    alt="Solar Energy"
                                    width={600}
                                    height={400}
                                />
                            </div>

                            <div className="grid-image">
                                <Image
                                    src="https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=600&h=400&fit=crop"
                                    alt="Renewable Energy"
                                    width={600}
                                    height={400}
                                />
                            </div>

                        </div>
                    </div>

                    {/* Content */}
                    <div className="power-content">
                        <p className="power-subtitle">
                            WHEN THE PATH MORE TRAVELED WITH RENEWABLES.
                        </p>

                        <h2 className="power-title">
                            Our Mission
                        </h2>

                        <p className="power-description">
                            To accelerate the adoption of solar energy by providing dependable, high-performance solar solutions that reduce energy costs while contributing to a greener future
                        </p>

                        <div className="power-contact">
                            <div className="contact-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                            </div>

                            <div className="contact-text">
                                <p className="contact-label">Have a Question? Call Us Today</p>
                                <p className="contact-number">8387096814</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}