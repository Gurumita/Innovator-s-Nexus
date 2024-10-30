import React from "react";

const testimonials = [
  { text: "Innovator’s Nexus has been a game-changer for our digital presence. They exceeded our expectations.", author: "Satisfied Client" },
  { text: "They understand our brand and create content that truly connects with our audience.", author: "Happy Client" },
];

const Testimonials = () => {
  return (
    <div className="text-center py-12 px-4 bg-[#1c1c1c] text-white transition-transform duration-300 hover:scale-105">
      <h2 className="text-3xl font-semibold mb-6">What Our Clients Say</h2>
      {testimonials.map((testimonial, index) => (
        <blockquote key={index} className="mb-4">
          <p className="italic text-gray-300">“{testimonial.text}”</p>
          <footer className="mt-2 text-gray-400">– {testimonial.author}</footer>
        </blockquote>
      ))}
    </div>
  );
};

export default Testimonials;
