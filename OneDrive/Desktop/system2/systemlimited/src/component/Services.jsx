import React from "react";
import {
  FaLaptopCode,
  FaPenFancy,
  FaSearch,
  FaVideo,
  FaPaintBrush,
  FaFilm,
  FaBullhorn,
  FaMobileAlt,
} from "react-icons/fa";

const services = [
  {
    title: "Website Development",
    details: "Building responsive and dynamic websites. Also custom Shopify and WordPress solutions.",
    icon: <FaLaptopCode className="text-4xl text-primary" />,
  },
  {
    title: "Content Writing",
    details: "Creating engaging and SEO-friendly content.",
    icon: <FaPenFancy className="text-4xl text-primary" />,
  },
  {
    title: "SEO",
    details: "Optimize websites for search engines.",
    icon: <FaSearch className="text-4xl text-primary" />,
  },
  {
    title: "Video Editing",
    details: "Professional video editing services.",
    icon: <FaVideo className="text-4xl text-primary" />,
  },
  {
    title: "Graphic Designing",
    details: "Stunning visuals and branding designs.",
    icon: <FaPaintBrush className="text-4xl text-primary" />,
  },
  {
    title: "Animation/Motion Graphics",
    details: "High-quality animation and motion graphics.",
    icon: <FaFilm className="text-4xl text-primary" />,
  },
  {
    title: "Social Media Marketing",
    details: "Boost your presence on social media platforms.",
    icon: <FaBullhorn className="text-4xl text-primary" />,
  },
  {
    title: "Mobile Application Development",
    details: "Building innovative mobile applications.",
    icon: <FaMobileAlt className="text-4xl text-primary" />,
  },
];

const Services = () => {
  return (
    <section className="py-12 lg:py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">
            Services We Offer
          </h2>
          <p className="text-center py-8">Explore our wide range of IT services designed to meet the unique needs of your business.<br /> From custom web development to powerful mobile apps and digital marketing strategies,<br /> we’re here to provide innovative solutions that drive results.</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-center transition-transform transform hover:scale-105"
            >
              <div className="flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-800">{service.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{service.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
