import { FooterWhiteHirewalks } from "./icons/footer-icons";

// components/Footer.js
const Footer = () => {
  return (
    <footer className="bg-[#131316] text-white py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-row md:flex-col">
        {/* Left Section */}
        <div className="mb-8 md:mb-0">
          <div className="flex flex-row gap-[5.14px] items-center mb-4">
            <div>
              <FooterWhiteHirewalks />
            </div>

            <div>
              <div>Hirewalks</div>
              <div>Hire In Minutes, Not In Months! 😎</div>
            </div>
          </div>

          <div className="text-sm space-y-2">
            <p>
              <strong>Phone:</strong> +91 79079-33430
            </p>
            <p>
              <strong>Email:</strong> support@hirewalks.com
            </p>
            <p>
              Join with us to get Faster, Easier, Promising jobs and Talents.
              Explore the millions of opportunities. Search Jobs, Post Jobs For
              Free.
            </p>
          </div>
        </div>

        {/* Center Section */}
        <div className="flex flex-row md:flex-wrap">
          <div className="mr-8 md:min-w-[40%]">
            <h4 className="font-bold mb-2">Information</h4>
            <ul className="space-y-1">
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Refund Policy</li>
              <li>Contact Us</li>
              <li>Product Pricing</li>
            </ul>
          </div>

          <div className="mr-8 md:min-w-[40%]">
            <h4 className="font-bold mb-2">Jobs by Location</h4>
            <ul className="space-y-1">
              <li>Jobs in Bangalore</li>
              <li>Jobs in Chennai</li>
              <li>Jobs in Coimbatore</li>
              <li>Jobs in Kochi</li>
              <li>Jobs in Pune</li>
              <li>Jobs in Mumbai</li>
            </ul>
          </div>

          <div className="md:min-w-[40%]">
            <h4 className="font-bold mb-2">Jobs by Industry</h4>
            <ul className="space-y-1">
              <li>Electrical / Electronics / Communication</li>
              <li>Education / Training</li>
              <li>Mechanical & Automobile</li>
              <li>Construction & Real Estate</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-center md:text-left">
          © 2024 - Hirewalks. All rights reserved
        </p>
        {/* <div className="flex items-center mt-4 md:mt-0 space-x-6">
          <a href="#">
            <Image
              src={googlePlayIcon}
              alt="Download on Google Play"
              width={120}
              height={40}
            />
          </a>
          <a href="#">
            <Image
              src={appStoreIcon}
              alt="Download on App Store"
              width={120}
              height={40}
            />
          </a>
        </div> */}
        {/* <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#">
            <img src="/facebook-icon.png" alt="Facebook" className="w-6 h-6" />
          </a>
          <a href="#">
            <img src="/youtube-icon.png" alt="YouTube" className="w-6 h-6" />
          </a>
          <a href="#">
            <img
              src="/instagram-icon.png"
              alt="Instagram"
              className="w-6 h-6"
            />
          </a>
          <a href="#">
            <img src="/twitter-icon.png" alt="Twitter" className="w-6 h-6" />
          </a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
