import React, { useState, useEffect, useRef } from "react";

const Modal = ({ isOpen, onClose, service }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
        onClose(); 
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 transition-opacity duration-300 ease-in-out">
      <div ref={modalRef} className="bg-black text-white p-6 rounded-lg w-11/12 md:w-1/2 animate-fadeIn relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-xl">✕</button>
        <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
        <h4 className="text-lg mb-4">{service.subtitle}</h4>

  
        <ul className="list-none mb-4 flex flex-col items-start">
          {service.points.map((point, index) => (
            <li key={index} className="flex items-center mb-2">
              <span className="text-blue-500 mr-2">➜</span> 
              <span className="text-center">{point}</span>
            </li>
          ))}
        </ul>

        <div className="flex justify-center">
          <button
            onClick={toggleDropdown}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Get Started
          </button>
        </div>

        {isDropdownOpen && (
          <div className="mt-2 bg-gray-800 p-2 rounded absolute left-1/2 transform -translate-x-1/2 transition-transform duration-300 ease-in-out">
            <button onClick={() => window.open('https://wa.me/8148085550?text=I%20would%20like%20to%20know%20more%20about%20your%20services', '_blank')} className="block mb-1 text-blue-400 hover:underline">
              WhatsApp
            </button>
            <button onClick={() => window.location.href = "mailto:team.innovatorsnexus@gmail.com"} className="block text-gray-300 hover:underline">
              Email
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
