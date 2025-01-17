import React from "react";
// import Logo from "../../assets/logo/logo.png";
import { useSelector } from "react-redux";

const Footer = () => {
  const { mode } = useSelector((state) => state.buttonclick);

  return (
    <footer
      className={`w-full ${
        mode === "light" ? "bg-[#FFFFFF]" : "bg-[#333]"
      } text-white py-2 shadow`}
    >
      <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-end">
        {/* Left Section */}
        <div className="mb-4 lg:mb-0">
          {/* <img alt="" src={Logo} className="hidden w-[100px] lg:block" /> */}
          <p className="text-[11px] text-gray-400">
            © {new Date().getFullYear()} Tripkaze Travels. All rights reserved.
          </p>
        </div>

        {/* Center Section - Navigation */}
        <ul className="flex gap-4 text-[11px] text-gray-400">
          <li>
            <a href="#h" className="hover:text-gray-200">
              About
            </a>
          </li>
          <li>
            <a href="#h" className="hover:text-gray-200">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#h" className="hover:text-gray-200">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="#h" className="hover:text-gray-200">
              Contact
            </a>
          </li>
        </ul>

        {/* Right Section - Social Media */}
        <div className="flex gap-4 text-gray-400">
          <a
            href="https://facebook.com"
            aria-label="Facebook"
            className="hover:text-gray-200"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#h" aria-label="Twitter" className="hover:text-gray-200">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#h" aria-label="Instagram" className="hover:text-gray-200">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#h" aria-label="LinkedIn" className="hover:text-gray-200">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
