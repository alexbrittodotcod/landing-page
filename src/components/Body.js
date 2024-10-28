//import "./globals.css";
import "../styles/globals.scss";
import "../styles/landing-page.scss";
import LandingPgAdOns from "./BodyComponents/LandingPgAdOns";
import LandingPgBanner from "./BodyComponents/LandingPgBanner";
import LandingPgKeyFeatures from "./BodyComponents/LandingPgKeyFeatures";

// components/Body.js
const Body = () => {
  return (
    <main className="font-avenir flex flex-col items-center justify-center">
      {/* <section id="about" className="w-full text-center banner-gradient">
        <LandingPgBanner />
      </section> */}

      <section
        id="about"
        className="bg-[url('/bg-stripes.svg')] w-full text-center landing-page-box-shadow"
      >
        {/* 2. Key Features */}
        <LandingPgKeyFeatures />

        {/* 3. Hiring Adons */}
        <LandingPgAdOns />
      </section>

      <section id="services" className="bg-gray-100 p-8 w-full text-center">
        <h2 className="text-3xl font-semibold">Our Services</h2>
        <p className="text-md mt-2">
          We offer web development, mobile app development, and much more.
        </p>
      </section>

      <section id="contact" className="bg-white p-8 w-full text-center">
        <h2 className="text-3xl font-semibold">Get in Touch</h2>
        <p className="text-md mt-2">
          Feel free to contact us at any time for inquiries or support.
        </p>
      </section>
    </main>
  );
};

export default Body;
