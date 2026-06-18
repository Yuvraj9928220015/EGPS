import Image from "next/image";
import "./services.css";

// SEO (Helmet replace)
export const metadata = {
  title: "Solar Energy Services | Evergreen Power Solar",
  description:
    "Evergreen Power Solar (EGPS) provides reliable solar energy solutions and professional solar panel installation services in India. Save energy and reduce electricity costs.",
  alternates: {
    canonical: "https://egps.in/",
  },
};

export default function Services() {
  const services = [
    {
      icon: "☀️",
      title: "Residential Evergreen Solar Power Plants",
      description:
        "Custom-designed rooftop solar systems to help homeowners reduce electricity bills and achieve energy independence.",
    },
    {
      icon: "🏭",
      title: "Commercial & Industrial Solar Solutions",
      description:
        "High-capacity solar installations for businesses, factories, warehouses, and institutions to lower operational costs and improve sustainability.",
    },
    {
      icon: "🔋",
      title: "Solar System Design & Engineering",
      description:
        "Site inspection, load analysis, and customized system design for maximum efficiency and performance.",
    },
    {
      icon: "💡",
      title: "Solar Installation & Commissioning",
      description:
        "Professional installation using high-quality components, ensuring safety, durability, and optimal output.",
    },
    {
      icon: "🌾",
      title: "Net Metering & Subsidy Assistance",
      description:
        "Complete support for approvals, documentation, and government subsidy processes.",
    },
    {
      icon: "🛠️",
      title: "Operation & Maintenance (O&M)",
      description:
        "Regular system monitoring, cleaning, and maintenance to ensure long-term performance.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="Service-container">
        <div className="Service-overlay"></div>

        <div className="Service-content">
          <p className="Service-subtitle">Harness The Power of Sun</p>
          <h1 className="Service-title">Services | EGPS</h1>
        </div>
      </div>

      {/* Category Section */}
      <div className="About-sec-container">
        <div className="container">
          <div className="row">

            {[
              { img: "/About-1.png", title: "Homes & Residential Societies" },
              { img: "/About-2.png", title: "Offices & Commercial Buildings" },
              { img: "/About-3.png", title: "Hospitals & Healthcare Facilities" },
              { img: "/About-4.png", title: "Educational Institutions" },
              { img: "/About-5.png", title: "Commercial Buildings" },
              { img: "/About-6.png", title: "Manufacturing Industries" },
            ].map((item, i) => (
              <div key={i} className="col-lg-2 col-md-4 col-sm-6 col-12">
                <div className="About-Box">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={120}
                    height={120}
                  />
                  <div className="About-Box-title">{item.title}</div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* Services */}
      <section className="services-section">
        <div className="services-header">
          <h2 className="services-main-title">Our Services</h2>

          <p className="services-description">
            We offer end-to-end solar solutions designed to meet the unique energy needs of residential,
            commercial, and industrial clients.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>

              <h3 className="service-title">{service.title}</h3>

              <p className="service-description">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}