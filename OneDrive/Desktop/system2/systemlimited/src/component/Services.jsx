import React from "react";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaReact,
  FaAndroid,
  FaRobot,
  FaBrain,
  FaCogs,
  FaShieldAlt,
  FaPencilRuler,
  FaShopify,
  FaPaintBrush,
  FaUserTie,
  FaWordpress,
  FaSearch,
  FaBullhorn,
  FaPenFancy,
  FaVideo,
  FaFilm,
  FaChartLine,
} from "react-icons/fa";

const services = [
  {
    title: "Website Development",
    details: "Building responsive and dynamic websites.",
    icon: <FaLaptopCode className="text-4xl text-primary" />,
  },
  {
    title: "Mobile Application Development",
    details: "Creating innovative and user-friendly mobile apps.",
    icon: <FaMobileAlt className="text-4xl text-primary" />,
  },
  {
    title: "React Native Development",
    details: "Cross-platform mobile applications using React Native.",
    icon: <FaReact className="text-4xl text-primary" />,
  },
  {
    title: "Flutter Development",
    details: "Developing cross-platform apps using Flutter.",
    icon: <FaAndroid className="text-4xl text-primary" />,
  },
  {
    title: "Machine Learning",
    details: "Building models to drive intelligent systems.",
    icon: <FaRobot className="text-4xl text-primary" />,
  },
  {
    title: "Artificial Intelligence",
    details: "Advanced AI solutions for businesses.",
    icon: <FaBrain className="text-4xl text-primary" />,
  },
  {
    title: "MLOps",
    details: "Efficient deployment and monitoring of ML models.",
    icon: <FaCogs className="text-4xl text-primary" />,
  },
  {
    title: "Cyber Security",
    details: "Protect your digital assets with robust security measures.",
    icon: <FaShieldAlt className="text-4xl text-primary" />,
  },
  {
    title: "UI/UX Design",
    details: "Crafting user-friendly and engaging designs.",
    icon: <FaPencilRuler className="text-4xl text-primary" />,
  },
  {
    title: "Shopify Development",
    details: "Custom Shopify stores to boost your online sales.",
    icon: <FaShopify className="text-4xl text-primary" />,
  },
  {
    title: "Graphic Designing",
    details: "Creating stunning visuals and branding materials.",
    icon: <FaPaintBrush className="text-4xl text-primary" />,
  },
  {
    title: "Freelancing",
    details: "Expert freelancing services across various fields.",
    icon: <FaUserTie className="text-4xl text-primary" />,
  },
  {
    title: "WordPress Development",
    details: "Custom WordPress themes and plugins.",
    icon: <FaWordpress className="text-4xl text-primary" />,
  },
  {
    title: "SEO",
    details: "Optimizing websites for better search engine visibility.",
    icon: <FaSearch className="text-4xl text-primary" />,
  },
  {
    title: "Digital Marketing",
    details: "Effective strategies to grow your online presence.",
    icon: <FaBullhorn className="text-4xl text-primary" />,
  },
  {
    title: "Content Writing",
    details: "Engaging and SEO-friendly content creation.",
    icon: <FaPenFancy className="text-4xl text-primary" />,
  },
  {
    title: "Video Editing",
    details: "Professional video editing to enhance your content.",
    icon: <FaVideo className="text-4xl text-primary" />,
  },
  {
    title: "Motion Graphics",
    details: "High-quality animation and motion graphics services.",
    icon: <FaFilm className="text-4xl text-primary" />,
  },
  {
    title: "Data Science",
    details: "Data-driven solutions for informed decision-making.",
    icon: <FaChartLine className="text-4xl text-primary" />,
  },
  {
    title: "Social Media Marketing",
    details: "Boost your presence on social media platforms.",
    icon: <FaBullhorn className="text-4xl text-primary" />,
  },
];

const Services = () => {
  const createWhatsAppLink = (serviceTitle) => {
    const phoneNumber = "923340002029"; 
    const message = `Hi, I am interested in your ${serviceTitle} services. Can you please provide more details?`;
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  };

  return (
    <section className="py-12 lg:py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">
            Services We Offer
          </h2>
          <p className="text-center py-8">
            Explore our wide range of IT services designed to meet the unique needs of your business.<br />
            From custom web development to powerful mobile apps and digital marketing strategies,<br />
            we’re here to provide innovative solutions that drive results.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <a
              key={index}
              href={createWhatsAppLink(service.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white shadow-md rounded-lg p-6 text-center transition-transform transform hover:scale-105"
            >
              <div className="flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-800">{service.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{service.details}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
