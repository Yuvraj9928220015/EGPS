import "./privacy.css";

export const metadata = {
  title: "Privacy Policy | Evergreen Power Solar",
  description:
    "Evergreen Power Solar (EGPS) provides reliable solar energy solutions and professional solar panel installation services in India. Save energy and reduce electricity costs.",
  alternates: {
    canonical: "https://egps.in/",
  },
};

export default function Privacy() {
  return (
    <>
      {/* Hero Section */}
      <div className="Service-container">
        <div className="Service-overlay"></div>
        <div className="Service-content">
          <p className="Service-subtitle">Harness The Power of Sun</p>
          <h1 className="Service-title">Privacy Policy</h1>
        </div>
      </div>

      {/* Privacy Content */}
      <div className="Privacy-container">
        <div className="Privacy-content">
          <h2>Privacy Policy</h2>
          <p>
            Evergreen Power Solar respects your privacy and is committed to
            protecting any personal information you share with us.
          </p>
        </div>

        <div className="Privacy-content">
          <h3>Information We Collect:</h3>
          <ul>
            <li>Name :</li>
            <li>Contact number :</li>
            <li>Email address :</li>
            <li>Location and site details shared via forms :</li>
          </ul>
        </div>

        <div className="Privacy-content">
          <h5>How We Use Your Information:</h5>
          <ul>
            <li>To respond to enquiries</li>
            <li>To provide quotations and services</li>
            <li>For internal communication and service improvement</li>
          </ul>
          <p>
            We do not sell, rent, or share your personal information with third
            parties unless required by law.
          </p>
        </div>

        <div className="Privacy-content">
          <h3>Terms & Conditions</h3>
          <ul>
            <li>
              All project timelines are indicative and may vary based on site
              conditions and approvals
            </li>
            <li>
              Pricing is subject to final site inspection and technical
              feasibility
            </li>
            <li>
              Warranty terms are governed by respective product manufacturers
            </li>
            <li>
              Evergreen Power Solar reserves the right to modify content and
              offerings without prior notice
            </li>
          </ul>
        </div>

        <div className="Privacy-content">
          <h3>Disclaimer</h3>
          <p>
            All information on this website is for general informational purposes
            only. Actual system performance may vary based on location, usage
            patterns, and environmental conditions.
          </p>
        </div>
      </div>
    </>
  );
}