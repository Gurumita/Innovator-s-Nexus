import React, { useState, useRef, useEffect } from "react";
import logo from "../assets/logo.jpg";
import "../Styles/Herostyles.css";

const Hero = () => {
  const [showContactOptions, setShowContactOptions] = useState(false);
  const dropdownRef = useRef(null); 

  const handleContactClick = () => {
    setShowContactOptions((prev) => !prev);
  };

  const handleWhatsAppClick = () => {
    window.location.href = "https://wa.me/8148085550?text=I%20would%20like%20to%20know%20more%20about%20your%20services";
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:team.innovatorsnexus@gmail.com";
  };


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowContactOptions(false); 
      }
    };

    document.addEventListener("mousedown", handleClickOutside);


    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="bg-[#1c1c1c] text-white flex flex-col items-center pt-8 pb-8 px-8"> {/* Change items-start to items-center */}
      
      {/* Grey Background Bar with Logo and Menu */}
      <div className="bg-gray-800 rounded-full shadow-md flex items-center justify-between px-4 py-2 w-full mb-6 border border-white glow-effect">
        {/* Logo */}
        <div className="flex items-center justify-center bg-black rounded-full h-10 w-10 shadow-md mr-2">
          <img src={logo} alt="Innovator's Nexus Logo" className="h-7 w-7" />
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 text-sm">
          <a href="#services" className="hover:text-gray-400">Services</a>
          <a href="#about" className="hover:text-gray-400">About Us</a>
          <a href="#testimonials" className="hover:text-gray-400">Testimonials</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </div>
      </div>

      {/* Main Content */}
      <div className="text-center flex-grow mt-0">
        <h1 className="text-3xl font-bold mt-4">Innovator's Nexus – Redefining Digital Marketing for Modern Businesses</h1>
        <p className="mt-2 text-lg">
          Empowering brands with impactful strategies, creative storytelling, and data-driven insights.
        </p>
        
        {/* Get Started Button */}
        <div className="relative inline-block text-left" ref={dropdownRef}>
          <button
            onClick={handleContactClick}
            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Get Started with Innovator’s Nexus
          </button>

          {/* Dropdown Options */}
          {showContactOptions && (
            <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5">
              <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <button
                  onClick={handleWhatsAppClick}
                  className="block px-4 py-2 text-sm text-white hover:bg-green-500 w-full text-left"
                >
                  Contact via WhatsApp
                </button>
                <button
                  onClick={handleEmailClick}
                  className="block px-4 py-2 text-sm text-white hover:bg-blue-500 w-full text-left"
                >
                  Email Us
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
