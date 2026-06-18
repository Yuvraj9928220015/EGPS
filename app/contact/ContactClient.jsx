"use client";

import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import "./contact.css";

export default function ContactClient() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = () => {
        if (!formData.name || !formData.email || !formData.subject) {
            alert("Please fill in all required fields");
            return;
        }

        console.log("Form submitted:", formData);
        alert("Message sent successfully!");

        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        });
    };

    return (
        <div className="contact-wrapper">
            {/* ───── Left Side ───── */}
            <div className="contact-left">
                <div className="contact-left-content">
                    <h1 className="contact-title">Contact Us | EGPS</h1>

                    <div className="contact-info-cards">
                        <div className="info-card">
                            <div className="icon-wrapper">
                                <MapPin size={32} strokeWidth={1.5} />
                            </div>
                            <div className="info-content">
                                <h3>Office Address</h3>
                                <p>
                                    16, Janak Vihar, Sirsi Road, Panchyawaala
                                    Jaipur – 302034, Rajasthan
                                </p>
                            </div>
                        </div>

                        <div className="info-card">
                            <div className="icon-wrapper">
                                <Mail size={32} strokeWidth={1.5} />
                            </div>
                            <div className="info-content">
                                <h3>Email Address</h3>
                                <p>evergreenpowersolar@gmail.com</p>
                            </div>
                        </div>

                        <div className="info-card">
                            <div className="icon-wrapper">
                                <Phone size={32} strokeWidth={1.5} />
                            </div>
                            <div className="info-content">
                                <h3>Office Contact</h3>
                                <p>+91 9079061648</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ───── Right Side ───── */}
            <div className="contact-right">
                <div className="form-container">
                    <h2 className="form-title">Send Us Message</h2>

                    <div className="form-wrapper">
                        <div className="form-group">
                            <label htmlFor="name">Your name</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder=""
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Your email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder=""
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input
                                id="subject"
                                name="subject"
                                type="text"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder=""
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Your message (optional)</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder=""
                            />
                        </div>

                        <button className="submit-btn" onClick={handleSubmit}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}