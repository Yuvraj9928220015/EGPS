"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Navbar.css";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = () => {
        setIsMobileMenuOpen(false);
    };

    const isActive = (path) => {
        if (path === "/") return pathname === "/";
        return pathname.startsWith(path);
    };

    return (
        <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
            <div className="navbar-container">

                {/* Logo */}
                <Link href="/" className="navbar-brand">
                    <img src="/Logo.jpeg" alt="Logo" className="brand-logo-img" />
                </Link>

                {/* Desktop Menu */}
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link href="/" className={`nav-link ${isActive("/") ? "active" : ""}`} onClick={handleNavClick}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/about" className={`nav-link ${isActive("/about") ? "active" : ""}`} onClick={handleNavClick}>
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/services" className={`nav-link ${isActive("/services") ? "active" : ""}`} onClick={handleNavClick}>
                            Services
                        </Link>
                    </li>
                     <li className="nav-item">
                        <Link href="/blog" className={`nav-link ${isActive("/blog") ? "active" : ""}`} onClick={handleNavClick}>
                            Blog
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/team" className={`nav-link ${isActive("/team") ? "active" : ""}`} onClick={handleNavClick}>
                            Team
                        </Link>
                    </li>
                     <li className="nav-item">
                        <Link href="//contact" className={`nav-link ${isActive("//contact") ? "active" : ""}`} onClick={handleNavClick}>
                            Contact Us
                        </Link>
                    </li>
                </ul>

                {/* Distributor Logos */}
                <div className="distributor-Logo">
                    <div><img src="/Logo-1.jpeg" alt="" /></div>
                    <div><img src="/Logo-2.jpeg" alt="" /></div>
                </div>

                {/* Mobile Toggle */}
                <button
                    className={`mobile-menu-toggle ${isMobileMenuOpen ? "active" : ""}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
                <nav className="mobile-nav">
                    <Link href="/" className={`nav-link ${isActive("/") ? "active" : ""}`} onClick={handleNavClick}>Home</Link>
                    <Link href="/about" className={`nav-link ${isActive("/about") ? "active" : ""}`} onClick={handleNavClick}>About</Link>
                    <Link href="/services" className={`nav-link ${isActive("/services") ? "active" : ""}`} onClick={handleNavClick}>Services</Link>
                    <Link href="/team" className={`nav-link ${isActive("/team") ? "active" : ""}`} onClick={handleNavClick}>Team</Link>
                    <Link href="/blog" className={`nav-link ${isActive("/blog") ? "active" : ""}`} onClick={handleNavClick}>Blog</Link>
                </nav>

                <div className="mobile-actions">
                    <Link href="/contact" className="btn-primary" onClick={handleNavClick}>
                        Contact Us
                    </Link>
                </div>
            </div>
        </nav>
    );
}