import React from "react";
// import Logo from "../../assets/logo/logo.png";
import { useSelector } from "react-redux";

const Footer = () => {
  const { mode } = useSelector((state) => state.buttonclick);

  return (
    <footer
      className={`w-full ${
        mode === "light" ? "bg-[#FFFFFF]" : "bg-[#333]"
      } text-white py-4 shadow`}
    >
      <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-end">
        {/* Left Section */}
        <div className="mb-4 lg:mb-0">
          {/* <img alt="" src={Logo} className="hidden w-[100px] lg:block" /> */}
          <p className="text-[13px] text-gray-400">
            © {new Date().getFullYear()} Task Tracker. All rights reserved.
          </p>
        </div>

        {/* Center Section - Navigation */}
        <ul className="flex gap-4 text-[13px] text-gray-400">
          <li>
            <a href="/" className="hover:text-gray-200">
              About
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-gray-200">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-gray-200">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
