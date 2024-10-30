import React from "react";

const Footer = () => {
  return (
    <footer className="py-8 bg-[#1c1c1c] text-white text-center transition-transform duration-300 hover:scale-105">
      <div>Services: Social Media | Content Creation | Strategy & Analytics | Web Development | Design</div>
      <div className="mt-4">
        <a href="#" className="text-blue-400 hover:underline mx-2">Facebook</a>
        <a href="#" className="text-blue-400 hover:underline mx-2">Twitter</a>
        <a href="https://www.instagram.com/innovators__nexus?igsh=MWR4ZnIzb3hnMTh5Zg==" className="text-blue-400 hover:underline mx-2">Instagram</a>
        <a href="https://www.linkedin.com/company/innovator-s-nexus/" className="text-blue-400 hover:underline mx-2">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;
