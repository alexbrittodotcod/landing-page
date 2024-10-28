// components/Footer.js
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 text-center">
      <p>&copy; {new Date().getFullYear()} My Website. All Rights Reserved.</p>
      <p className="mt-2">
        <a href="#privacy-policy" className="text-blue-400">
          Privacy Policy
        </a>{" "}
        |
        <a href="#terms" className="text-blue-400">
          {" "}
          Terms & Conditions
        </a>
      </p>
    </footer>
  );
};

export default Footer;
