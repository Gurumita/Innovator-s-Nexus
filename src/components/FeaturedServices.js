// FeaturedServices.js
import React, { useState } from "react";
import Modal from "./Modal";
import "../Styles/FeaturedServices.css";
import "../Styles/Model.css";

const services = [
  { 
    title: "Social Media Management", 
    subtitle: "Elevate Your Presence", 
    points: [
      "Digital Marketing",
      "SEO",
      "Content Scheduling",
      "Inbox Management",
      "Team Collaboration",
      "Ad Management",
      "Hashtag Tracking",
      "Audience Insights"
    ],
  },
  { 
    title: "Content Creation & Scriptwriting", 
    subtitle: "Content That Resonates", 
    points: [
      "AI-Powered Writing Assistance",
      "Script Formatting",
      "Scene and Character Management",
      "Voice and Tone Customization",
      "Grammar and Style Checker",
      "Revision History",
      "Export Options (PDF, Word, Final Draft, etc.)",
      "Real-Time Feedback and Suggestions",
      "Idea Generator and Prompts",
      "Outline",
      "Time Estimation for Read/Speech"
    ],
  },
  { 
    title: "Business Strategy & Analytics", 
    subtitle: "Data-Driven Decisions", 
    points: [
      "Influencer Marketing",
      "Analytics and Data Tracking",
      "Customer Relationship Management (CRM)",
      "Business Analysis",
      "SWOT Analysis",
      "Performance Evaluation",
      "Customer Insights",
      "Strategic Recommendations"
    ],
  },
  { 
    title: "Web & Software Development", 
    subtitle: "Your Digital Foundation", 
    points: [
      "Build responsive websites optimized for all devices.",
      "Implement user-friendly interfaces and navigation.",
      "Ensure website security and performance.",
      "Provide ongoing maintenance and support."
    ],
  },
  { 
    title: "Graphic Design & Videography", 
    subtitle: "Visuals That Inspire", 
    points: [
      "Template Library",
      "Layer and Mask Management",
      "Color Grading and Correction",
      "Animation and Motion Graphics",
      "3D Modeling and Rendering",
      "Text and Typography Tools",
      "Video Editing Timeline",
      "Audio Synchronization and Editing",
      "Effects and Filters",
      "Transitions and Visual Effects",
      "Aspect Ratio and Resizing Options",
      "Watermarking and Copyright Tools"
    ],
  },
];


const FeaturedServices = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleLearnMoreClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <div className="py-16 px-4 bg-[#1c1c1c] text-white">
      <h2 className="text-3xl font-semibold text-center mb-8">Our Services</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-black p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105"
          >
            <h3 className="text-xl font-bold text-white">{service.title}</h3>
            <h4 className="text-lg text-gray-400">{service.subtitle}</h4>
            <button onClick={() => handleLearnMoreClick(service)} className="mt-4 inline-block text-blue-500 hover:underline">
              Learn More
            </button>
          </div>
        ))}
      </div>

      {/* Modal for service details */}
      <Modal isOpen={isModalOpen} onClose={closeModal} service={selectedService} />
    </div>
  );
};

export default FeaturedServices;
