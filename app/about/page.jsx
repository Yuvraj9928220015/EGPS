import Image from "next/image";
import "./about.css";

// ✅ Next.js SEO (Helmet replace)
export const metadata = {
  title: "About Us | Evergreen Power Solar",
  description:
    "Evergreen Power Solar (EGPS) provides reliable solar energy solutions and professional solar panel installation services in India. Save energy and reduce electricity costs.",
  alternates: {
    canonical: "https://egps.in/",
  },
};

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <div className="About-container">
        <div className="About-overlay"></div>

        <div className="About-content">
          <p className="About-subtitle">Welcome To Green Future</p>
          <h1 className="About-title">About Us | EGPS</h1>
        </div>
      </div>

      {/* About Content */}
      <div>
        <div className="container">
          <div className="row">

            {/* Left */}
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="Solar-Panel">
                <div className="Solar-Panel-Subtitle">About Us</div>

                <div className="Solar-Panel-desc">
                  <p>
                    Evergreen Power Solar is a trusted solar system integrator committed to delivering reliable, affordable, and future-ready renewable
                    energy solutions. Operating across Tamil Nadu and Karnataka, we help homes, businesses, and institutions switch to clean energy through
                    thoughtfully designed solar power systems.
                  </p>

                  <p>
                    With a strong focus on quality, transparency, and long-term performance, our team manages the complete solar journey—from consultation
                    and system design to installation, net metering, and ongoing maintenance. Our mission is simple: to make solar energy accessible,
                    efficient, and hassle-free for every customer we work with.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="Solar-Panel">
                <div className="Solar-Panel-image">
                  <Image
                    src="/About-us.png"
                    alt="About Us"
                    width={600}
                    height={400}
                  />
                </div>
              </div>
            </div>

            {/* Milestone */}
            <div className="Milstone-Header">
              <div className="process-header">
                <div className="process-subtitle">Milestones</div>
                <h2 className="process-title">Our Journey to</h2>
                <p className="process-description">Solar Excellence</p>
              </div>

              <div className="row">
                <div className="col-12">
                  <div className="Milstone-section">
                    <Image
                      src="/milstone.webp"
                      alt="Milestones"
                      width={1000}
                      height={500}
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Reasons Section */}
      <div className="Reasons">
        <div className="process-header">
          <div className="process-subtitle">Reasons</div>

          <h2 className="process-title">
            Reasons to Choose Evergreen Power Solar
          </h2>

          <p className="process-description">
            Evergreen Power Solar is a forward-thinking solar power solutions company dedicated to accelerating the adoption of clean,
            renewable energy across residential, commercial, and industrial sectors. We specialize in the design, installation, and maintenance
            of high-performance solar power plants that help our customers significantly reduce electricity costs while contributing to a greener and more
            sustainable future.
          </p>
        </div>

        <div className="container">
          <div className="row">

            {[
              { img: "/Reasons-icon-1.png", title: "Save Money", desc: "Solar power plants help you save on your electricity bills" },
              { img: "/Reasons-icon-2.png", title: "Clean & Green", desc: "Say no to pollution with the eco-friendly solar power" },
              { img: "/Reasons-icon-3.png", title: "Perfect Investment", desc: "Solar power systems are the right greener investment choice" },
              { img: "/Reasons-icon-4.png", title: "Productive Rooftops", desc: "Get solar energy from your unutilized space and earn extra" },
              { img: "/Reasons-icon-5.png", title: "Great ROI", desc: "Attractive Return on Investment with reduced carbon emissions" },
              { img: "/Reasons-icon-6.png", title: "Go Off Grid", desc: "Do not worry about power cuts with our solar power systems" },
            ].map((item, i) => (
              <div key={i} className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="Reasons-Box">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={80}
                    height={80}
                  />

                  <div>
                    <div className="Reasons-Box-title">{item.title}</div>
                    <div className="Reasons-Box-des">{item.desc}</div>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </>
  );
}