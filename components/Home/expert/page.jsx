"use client";

import Image from "next/image";
import Link from "next/link";
import "./expert.css";

export default function Expert() {
    return (
        <div className="expert-section">

            <div className="process-header">
                <div className="process-subtitle">Our Working Process</div>
                <h2 className="process-title">Our Seamless Solar Process</h2>
                <p className="process-description">
                    Our seamless Solar Process ensures a smooth transition from initial concept to final completion,
                    delivering innovative and eco-friendly solutions that meet your energy needs with exceptional quality.
                </p>
            </div>

            <div className="expert-container">
                <div className="expert-row">

                    {/* Content Box */}
                    <div className="expert-col">
                        <div className="expert-box content-box">
                            <span className="expert-subtitle">Our Team</span>
                            <h2 className="expert-title">Solar Energy Experts</h2>

                            <p className="expert-description">
                                Our certified professionals bring years of experience in solar installation,
                                maintenance, and consultation. Trust our experts to guide you through your
                                solar journey
                            </p>

                            <Link href="/team" className="expert-btn">
                                Meet Our Team
                            </Link>
                        </div>
                    </div>

                    {/* Image Box 1 */}
                    <div className="expert-col">
                        <div className="expert-box image-box">
                            <Image
                                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
                                alt="Solar Expert 1"
                                width={400}
                                height={300}
                                className="expert-image"
                            />
                            <div className="image-overlay">
                                <h3>Installation Specialist</h3>
                            </div>
                        </div>
                    </div>

                    {/* Image Box 2 */}
                    <div className="expert-col">
                        <div className="expert-box image-box">
                            <Image
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                                alt="Solar Expert 2"
                                width={400}
                                height={300}
                                className="expert-image"
                            />
                            <div className="image-overlay">
                                <h3>Energy Consultant</h3>
                            </div>
                        </div>
                    </div>

                    {/* Image Box 3 */}
                    <div className="expert-col">
                        <div className="expert-box image-box">
                            <Image
                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80"
                                alt="Solar Expert 3"
                                width={400}
                                height={300}
                                className="expert-image"
                            />
                            <div className="image-overlay">
                                <h3>Technical Expert</h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}