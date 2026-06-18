"use client";

import Link from "next/link";
import "./Footer.css";

export default function Footer() {
    return (
        <>
        <footer className="Footer">
            <div className="Footer-container">
                <div className="Footer-grid">

                    {/* Column 1 */}
                    <div className="Footer-column">
                        <div className="Footer-Box">
                            <h4 className="footer-title">Solar Energy Co.</h4>

                            <p>
                                We connect you with the power of the sun. Illuminate your home and office
                                with affordable, sustainable solar solutions.
                            </p>

                            <div className="social-icons">
                                <a href="https://www.facebook.com/EGPSOLAR/" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-facebook-f"></i>
                                </a>

                                <a href="https://www.instagram.com/evergreenpowersolar/" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="Footer-column">
                        <div className="Footer-Box">
                            <h4 className="footer-title">Solar Services</h4>

                            <ul className="footer-links">
                                <li><Link href="/">Home</Link></li>
                                <li><Link href="/about">About Us</Link></li>
                                <li><Link href="/services">Services</Link></li>
                                <li><Link href="/team">Team</Link></li>
                                <li><Link href="/contact">Contact Us</Link></li>
                                <li><Link href="/privacy">Privacy</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Column 3 */}
                    <div className="Footer-column">
                        <div className="Footer-Box">
                            <h4 className="footer-title">Contact Us</h4>

                            <p className="contact-item">
                                <i className="fas fa-map-marker-alt"></i>
                                <span>
                                    16, Janak Vihar, Sirsi Road, Panchyawaala
                                    Jaipur – 302034, Rajasthan
                                </span>
                            </p>

                            <p className="contact-item">
                                <i className="fas fa-phone"></i>
                                <span>+91 9079061648</span>
                            </p>

                            <p className="contact-item">
                                <i className="fas fa-envelope"></i>
                                <span>evergreenpowersolar@gmail.com</span>
                            </p>

                            <button className="btn btn-warning btn-sm mt-2">
                                Get A Quote
                            </button>
                        </div>
                    </div>

                </div>

                <hr className="footer-divider" />

                {/* Bottom */}
                <div className="footer-bottom">

                    <p className="copyright-text">
                        © {new Date().getFullYear()} SolarEnergy. All Rights Reserved. Designed for a Green Future.
                    </p>

                    <p className="copyright-text">
                        Created by{" "}
                        <a
                            href="https://lensclickerdigital.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LensClickerDigital.com
                        </a>
                    </p>

                </div>
            </div>
        </footer>
        </>
    );
}