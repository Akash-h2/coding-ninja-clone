import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import logo from "../assets/logo.svg";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Contact Us Section */}
        <div>
          <img
            src={logo}
            alt="Coding Ninjas Logo"
            className="h-12 mx-auto md:mx-0 mb-4"
          />
          <h3 className="text-lg font-bold mb-3">Contact Us</h3>
          <p className="flex justify-center md:justify-start items-center gap-2 text-sm">
            <FaPhoneAlt className="text-orange-500" /> 1800-123-3598
          </p>
          <p className="flex justify-center md:justify-start items-center gap-2 mt-2 text-sm">
            <FaEnvelope className="text-orange-500" /> contact@codingninjas.com
          </p>
        </div>

        {/* Offerings & Links */}
        <div>
          <h3 className="text-lg font-bold mb-3">Our Offerings</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex justify-center md:justify-start items-center gap-2">
              <img src={logo} alt="CN Logo" className="h-5" />{" "}
              
            </li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-3">Legal & Info</h3>
          <ul className="space-y-2 text-sm">
            <li>Careers</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Pricing & Refund Policy</li>
            <li>Bug Bounty</li>
            <li>Review</li>
            <li>Press Release</li>
          </ul>
        </div>

        {/* Products & Community */}
        <div>
          <h3 className="text-lg font-bold mb-3">Products</h3>
          <ul className="space-y-2 text-sm">
            <li>Job Bootcamp</li>
            <li>Code 360</li>
            <li>Professional Certifications</li>
            <li>Student Certifications</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-3">Community</h3>
          <ul className="space-y-2 text-sm">
            <li>10X Club</li>
            <li>Student Chapters</li>
            <li>Hire from Us</li>
          </ul>
        </div>
      </div>

      {/* Ninja Running Light Effect */}
      <div className="relative text-center mt-12">
        <h2 className="text-5xl md:text-7xl font-bold text-white relative inline-block overflow-hidden">
          <span className="relative z-10">Coding Ninjas</span>
          <span className="absolute inset-0 animate-ninja-light"></span>
        </h2>
      </div>

      {/* Bottom Footer */}
      <div className="mt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Akash Kanaujiya. Made with Passion
      </div>

      {/* Running Ninja Light Keyframes */}
      <style>
        {`
          @keyframes runningNinja {
            0% {
              transform: translateX(-100%) scaleX(1.2);
              opacity: 0;
              filter: blur(10px);
            }
            20% {
              opacity: 1;
              filter: blur(4px);
            }
            50% {
              transform: translateX(0%) scaleX(1);
              opacity: 1;
              filter: blur(2px);
            }
            80% {
              opacity: 0.5;
              filter: blur(5px);
            }
            100% {
              transform: translateX(100%) scaleX(1.2);
              opacity: 0;
              filter: blur(12px);
            }
          }

          .animate-ninja-light {
            position: absolute;
            top: 50%;
            left: -100%;
            width: 200%;
            height: 120%;
            background: linear-gradient(90deg, transparent, rgba(255, 165, 0, 1), transparent);
            mix-blend-mode: screen;
            animation: runningNinja 2.5s infinite ease-in-out;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
