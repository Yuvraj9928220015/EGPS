import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import "./team.css";

export const metadata = {
    title: "Our Team | Evergreen Power Solar",
    description: "Meet our expert solar energy team.",
};

export default function Team() {
    const boardMembers = [
        {
            name: "John Sharma",
            role: "Solar Engineer",
            image: "/team/john.jpg",
            description: "Expert in solar installation and renewable energy systems design.",
        },
        {
            name: "Rohit Verma",
            role: "Project Manager",
            image: "/team/rohit.jpg",
            description: "Handles large-scale solar projects from planning to completion.",
        },
        {
            name: "Amit Singh",
            role: "Technician",
            image: "/team/amit.jpg",
            description: "Field expert for solar panel setup and on-site maintenance.",
        },
        {
            name: "Neha Gupta",
            role: "Coordinator",
            image: "/team/neha.jpg",
            description: "Manages client communication and project scheduling.",
        },
        {
            name: "Priya Mehta",
            role: "Sales Manager",
            image: "/team/priya.jpg",
            description: "Drives business growth and manages customer relationships.",
        },
        {
            name: "Vikram Joshi",
            role: "Design Engineer",
            image: "/team/vikram.jpg",
            description: "Designs customised solar solutions for residential clients.",
        },
    ];

    return (
        <div className="team-page">

            {/* ── Banner ── */}
            <div className="banner-section">
                <div className="banner-overlay" />
                <div className="banner-content">
                    <h1 className="banner-title">Our Team</h1>
                    <div className="breadcrumb">
                        <Link href="/">Home</Link>
                        <ChevronRight size={14} />
                        <span>Team</span>
                    </div>
                </div>
            </div>

            <div className="team-container">

             <div className="team-container-main">
                   {/* ── Intro ── */}
                <div className="hero-section">
                    <h2>Meet Our Team</h2>
                    <p>
                        Behind every solar installation is a team of passionate experts dedicated
                        to building a cleaner, greener future. Meet the people who power your
                        solar journey from consultation to completion.
                    </p>
                </div>

                {/* ── CEO / Founder ── */}
                <div className="ceo-section">
                    <div className="ceo-grid">

                        {/* Left — Photo */}
                        <Image
                            src="/ceo.jpg"
                            alt="Founder & Director"
                            width={500}
                            height={520}
                            className="ceo-image"
                        />

                        {/* Right — Info */}
                        <div className="ceo-content">
                            <p className="ceo-role-label">Founder &amp; Director</p>
                            <h3 className="ceo-name">Rajesh Kumar</h3>
                            <p className="ceo-title">Chief Executive Officer, EGPS</p>

                            <p className="ceo-description">
                                With over two decades of experience in renewable energy, Rajesh has
                                led Evergreen Power Solar from a small startup to one of Rajasthan&apos;s
                                most trusted solar energy companies. His vision drives every project
                                we undertake.
                            </p>

                            <div className="social-icons">
                                <a href="#" aria-label="Facebook">
                                    <i className="fab fa-facebook-f" />
                                </a>
                                <a href="#" aria-label="LinkedIn">
                                    <i className="fab fa-linkedin-in" />
                                </a>
                                <a href="#" aria-label="Twitter">
                                    <i className="fab fa-twitter" />
                                </a>
                            </div>

                            {/* Work Experience */}
                            <div className="experience-block">
                                <h4 className="experience-heading">Work Experience</h4>
                                <p className="experience-intro">
                                    A proven track record spanning solar engineering, project leadership,
                                    and sustainable energy consulting across India.
                                </p>
                                <ul className="experience-list">
                                    <li>
                                        <span>Senior Solar Engineer</span> — 8 years leading residential &amp; commercial solar projects.
                                    </li>
                                    <li>
                                        <span>Founded EGPS</span> — 10 years building a company trusted by 5,000+ clients.
                                    </li>
                                    <li>
                                        <span>Industry Consultant</span> — Advised 20+ solar companies on systems and compliance.
                                    </li>
                                    <li>
                                        <span>Early Member</span>, CleanTech India — Driving policy and innovation for renewable adoption.
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

                {/* ── Board Members ── */}
                <div className="board-section">
                    <div className="board-header">
                        <h3>Board of Directors</h3>
                        <p className="board-intro">
                            Our board brings together decades of experience in solar technology,
                            project management, and client relations — united by one goal: powering
                            a sustainable tomorrow.
                        </p>
                    </div>

                    <div className="board-grid">
                        {boardMembers.map((member, i) => (
                            <div key={i} className="member-card">

                                {/* Image + Hover Overlay */}
                                <div className="member-image-wrapper">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        width={380}
                                        height={260}
                                        className="member-image"
                                    />
                                    <div className="member-overlay">
                                        <div className="member-social">
                                            <a href="#" aria-label="Facebook">
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                            <a href="#" aria-label="LinkedIn">
                                                <i className="fab fa-linkedin-in" />
                                            </a>
                                            <a href="#" aria-label="Twitter">
                                                <i className="fab fa-twitter" />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Info */}
                                <div className="member-info">
                                    <h4 className="member-name">{member.name}</h4>
                                    <p className="member-role">{member.role}</p>
                                    <p className="member-description">{member.description}</p>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>

             </div>
            </div>
        </div>
    );
}