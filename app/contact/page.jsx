import ContactClient from "./ContactClient";

export const metadata = {
  title: "Contact Us | Evergreen Power Solar",
  description:
    "Evergreen Power Solar (EGPS) provides reliable solar energy solutions and professional solar panel installation services in India.",
  alternates: {
    canonical: "https://egps.in/",
  },
};

export default function Page() {
  return <ContactClient />;
}