"use client";

import { useState } from "react";
import Image from "next/image";
import "./process.css";

export default function Process() {
    const processSteps = [
        {
            id: 1,
            image: "https://static.vecteezy.com/system/resources/thumbnails/073/580/939/small/engineers-monitoring-solar-panels-laptop-analysis-photo.jpg",
            title: "Initial Appointment",
            number: "01",
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=600&h=400&fit=crop",
            title: "Consultation Project",
            number: "02",
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&h=400&fit=crop",
            title: "Installation System",
            number: "03",
        },
        {
            id: 4,
            image: "/New-image.png", // local image (public folder)
            title: "Satisfaction Project",
            number: "04",
        },
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const faqData = [
        {
            id: 1,
            question: "1. Site Survey & Consultation?",
            answer: "Understanding your energy needs and site feasibility",
        },
        {
            id: 2,
            question: "2. Custom System Design",
            answer: "Tailored solar solutions for optimal output.",
        },
        {
            id: 3,
            question: "3. Professional Installation?",
            answer: "Safe, efficient, and timely execution.",
        },
        {
            id: 4,
            question: "4. Net Metering & Approvals",
            answer: "Complete assistance with documentation.",
        },
        {
            id: 5,
            question: "5. Monitoring & Support",
            answer: "Ongoing performance tracking and maintenance",
        },
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
            {/* Process Section */}
            <section className="process-section">
                <div className="process-container">
                    <div className="process-header">
                        <div className="process-subtitle">Our Working Process</div>
                        <div className="process-title">Privacy Policy | EGPS</div>
                        <p className="process-description">
                            Our seamless Solar Process ensures a smooth transition from initial concept to final completion,
                            delivering innovative and eco-friendly solutions that meet your energy needs with exceptional quality.
                        </p>
                    </div>

                    <div className="process-cards">
                        {processSteps.map((step) => (
                            <div key={step.id} className="process-card">
                                <div className="process-card-image-wrapper">
                                    <Image
                                        src={step.image}
                                        alt={step.title}
                                        width={400}
                                        height={300}
                                        className="process-card-image"
                                    />
                                </div>

                                <div className="process-card-content">
                                    <div className="process-card-number">{step.number}</div>
                                    <h3 className="process-card-title">{step.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="faq-section">
                <div className="container-fluid">
                    <div className="faq-container">
                        <div className="faq-header">
                            <div className="faq-subtitle">FREQUENTLY ASKED QUESTIONS</div>
                            <h2 className="faq-title">Our Process</h2>
                            <p className="faq-description">
                                Our seamless Solar Process ensures a smooth transition from initial concept to final completion,
                                delivering innovative and eco-friendly solutions that meet your energy needs with exceptional quality.
                                This service helps minimize your carbon footprint while you save money.
                            </p>
                        </div>

                        <div className="faq-accordion">
                            {faqData.map((item, index) => (
                                <div
                                    key={item.id}
                                    className={`faq-item ${activeIndex === index ? "active" : ""}`}
                                >
                                    <button
                                        className="faq-question"
                                        onClick={() => toggleAccordion(index)}
                                    >
                                        <span className="faq-question-text">{item.question}</span>

                                        <span className="faq-icon">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M19 9l-7 7-7-7"
                                                />
                                            </svg>
                                        </span>
                                    </button>

                                    <div className="faq-answer">
                                        <div className="faq-answer-content">
                                            {item.answer}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}