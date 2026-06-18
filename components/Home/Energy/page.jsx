"use client";

import { useState, useEffect, useRef } from "react";
import "./energy.css";

const feedbacks = [
    {
        text: "We recently installed a solar plant at our home from Evergreen Power Solar, and the experience has been excellent. The installation process was smooth and professional, and the team explained everything clearly. Our electricity bills have reduced significantly, and we feel great contributing to a greener environment.",
        name: "Yuvraj Sharma",
        role: "Homeowner, Delhi",
        stars: 5,
    },
    {
        text: "Evergreen Power Solar transformed our factory's energy consumption completely. Their team was highly knowledgeable and handled the entire rooftop installation within the promised timeline. We've seen a 60% reduction in our electricity costs within the first three months. Highly recommend their services!",
        name: "Ramesh Gupta",
        role: "Factory Owner, Jaipur",
        stars: 5,
    },
    {
        text: "I was skeptical at first, but Evergreen Power Solar made the transition to solar energy incredibly easy. From initial consultation to final installation, everything was handled professionally. The after-sales support is outstanding, and the system performance has exceeded our expectations.",
        name: "Priya Mehta",
        role: "Business Owner, Mumbai",
        stars: 5,
    },
    {
        text: "Switching to solar was the best decision for our housing society. Evergreen Power Solar provided a customized solution that perfectly fit our needs. The team was responsive, transparent about pricing, and completed the installation without any disruption. Our residents are extremely happy with the results.",
        name: "Suresh Patel",
        role: "Society Secretary, Ahmedabad",
        stars: 4,
    },
    {
        text: "The Evergreen Power Solar team went above and beyond during our commercial installation. They ensured zero downtime and provided comprehensive training on system monitoring. Our ROI has been better than projected, and we are already planning to expand our solar capacity with them.",
        name: "Anita Verma",
        role: "Operations Manager, Pune",
        stars: 5,
    },
];

function StarIcon({ filled }) {
    return (
        <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill={filled ? "#ffc107" : "none"}
            stroke="#ffc107"
            strokeWidth="1.5"
        >
            <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
    );
}

export default function Energy() {
    const [current, setCurrent] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [direction, setDirection] = useState("next");
    const intervalRef = useRef(null);

    const goTo = (index, dir = "next") => {
        if (animating || index === current) return;

        setDirection(dir);
        setAnimating(true);

        setTimeout(() => {
            setCurrent(index);
            setAnimating(false);
        }, 350);
    };

    const next = () => {
        const nextIdx = (current + 1) % feedbacks.length;
        goTo(nextIdx, "next");
    };

    const prev = () => {
        const prevIdx = (current - 1 + feedbacks.length) % feedbacks.length;
        goTo(prevIdx, "prev");
    };

    useEffect(() => {
        intervalRef.current = setInterval(next, 5000);

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [current]);

    const fb = feedbacks[current];

    return (
        <div className="energy-container">
            <div className="energy-content">
                <div className="content-wrapper">
                    <div className="top-section">

                        {/* Left */}
                        <div className="left-content">
                            <p className="subtitle">Get Started With Us Today</p>
                            <h2 className="main-title">
                                We Offer Special<br />
                                Solar Energy
                            </h2>
                        </div>

                        {/* Right Slider */}
                        <div className="right-content">
                            <div className="review-slider-wrapper">

                                {/* Slide */}
                                <div className="slide-area">
                                    <div
                                        className={`slide-content ${
                                            animating
                                                ? direction === "next"
                                                    ? "exit-left"
                                                    : "exit-right"
                                                : ""
                                        }`}
                                    >
                                        <p className="review-text">"{fb.text}"</p>

                                        <div className="reviewer-info">
                                            <div className="reviewer-avatar">
                                                {fb.name.charAt(0)}
                                            </div>

                                            <div className="reviewer-details">
                                                <strong>{fb.name}</strong>
                                                <span>{fb.role}</span>
                                            </div>
                                        </div>

                                        <div className="stars">
                                            {[1, 2, 3, 4, 5].map((i) => (
                                                <StarIcon key={i} filled={i <= fb.stars} />
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Controls */}
                                <div className="slider-controls">

                                    {/* Arrows */}
                                    <div className="nav-arrows">
                                        <button className="arrow-btn" onClick={prev}>
                                            <svg viewBox="0 0 24 24">
                                                <polyline points="15 18 9 12 15 6" />
                                            </svg>
                                        </button>

                                        <button className="arrow-btn" onClick={next}>
                                            <svg viewBox="0 0 24 24">
                                                <polyline points="9 18 15 12 9 6" />
                                            </svg>
                                        </button>
                                    </div>

                                    {/* Dots */}
                                    <div className="dots">
                                        {feedbacks.map((_, i) => (
                                            <button
                                                key={i}
                                                className={`dot ${i === current ? "active" : ""}`}
                                                onClick={() =>
                                                    goTo(i, i > current ? "next" : "prev")
                                                }
                                            />
                                        ))}
                                    </div>

                                    {/* Counter */}
                                    <span className="slide-counter">
                                        {String(current + 1).padStart(2, "0")} /{" "}
                                        {String(feedbacks.length).padStart(2, "0")}
                                    </span>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}