import React from "react";
import {
  FaLaptopCode,
  FaShoppingCart,
  FaGlobe,
  FaBriefcase,
  FaMobileAlt,
  FaBullhorn,
  FaPenFancy,
  FaPalette,
  FaDatabase,
  FaChartLine,
  FaCogs,
  FaLock,
  FaPython,
  FaJava,
  FaCloud,
  FaNetworkWired,
  FaRobot,
  FaCloudDownloadAlt,
  FaReact,
  FaPhp,
} from "react-icons/fa";

const courses = [
  {
    title: "Web Development",
    details: "Master HTML, CSS, and JavaScript to create dynamic, responsive websites.",
    icon: <FaLaptopCode className="text-4xl text-primary" />,
  },
  {
    title: "Shopify Development",
    details: "Build custom e-commerce stores using Shopify.",
    icon: <FaShoppingCart className="text-4xl text-primary" />,
  },
  {
    title: "WordPress Development",
    details: "Develop and customize websites using WordPress.",
    icon: <FaGlobe className="text-4xl text-primary" />,
  },
  {
    title: "Freelancing",
    details: "Learn how to build a successful freelance career and secure clients.",
    icon: <FaBriefcase className="text-4xl text-primary" />,
  },
  {
    title: "Mobile App Development",
    details: "Learn to create innovative mobile applications.",
    icon: <FaMobileAlt className="text-4xl text-primary" />,
  },
  {
    title: "Social Media Marketing",
    details: "Boost brand visibility on social media platforms.",
    icon: <FaBullhorn className="text-4xl text-primary" />,
  },
  {
    title: "Content Writing",
    details: "Master the art of creating SEO-friendly and engaging content.",
    icon: <FaPenFancy className="text-4xl text-primary" />,
  },
  {
    title: "Graphic Design",
    details: "Design stunning visuals and brand assets with modern tools.",
    icon: <FaPalette className="text-4xl text-primary" />,
  },
  {
    title: "Data Science",
    details: "Analyze and interpret complex data to make data-driven decisions.",
    icon: <FaDatabase className="text-4xl text-primary" />,
  },
  {
    title: "SEO Optimization",
    details: "Improve search engine rankings and website traffic.",
    icon: <FaChartLine className="text-4xl text-primary" />,
  },
  {
    title: "Machine Learning",
    details: "Build predictive models using machine learning techniques.",
    icon: <FaCogs className="text-4xl text-primary" />,
  },
  {
    title: "Cyber Security",
    details: "Learn how to protect systems from cyber threats.",
    icon: <FaLock className="text-4xl text-primary" />,
  },
  {
    title: "Python Programming",
    details: "Master Python for data analysis, automation, and web development.",
    icon: <FaPython className="text-4xl text-primary" />,
  },
  {
    title: "Java Programming",
    details: "Build robust applications using Java programming language.",
    icon: <FaJava className="text-4xl text-primary" />,
  },
  {
    title: "Cloud Computing",
    details: "Learn cloud technologies and deploy scalable applications.",
    icon: <FaCloud className="text-4xl text-primary" />,
  },
  {
    title: "Networking",
    details: "Understand the fundamentals of computer networking.",
    icon: <FaNetworkWired className="text-4xl text-primary" />,
  },
  {
    title: "Artificial Intelligence",
    details: "Develop AI models for automation and decision-making.",
    icon: <FaRobot className="text-4xl text-primary" />,
  },
  {
    title: "DevOps",
    details: "Learn to automate and streamline software development processes.",
    icon: <FaCloudDownloadAlt className="text-4xl text-primary" />,
  },
  {
    title: "React Development",
    details: "Create interactive UIs using React.js library.",
    icon: <FaReact className="text-4xl text-primary" />,
  },
  {
    title: "PHP Development",
    details: "Build dynamic websites and applications using PHP.",
    icon: <FaPhp className="text-4xl text-primary" />,
  },
];

const Courses = () => {
  const createWhatsAppLink = (courseTitle) => {
    const phoneNumber = "923340002029"; // Your phone number in international format
    const message = `Hi, are you offering the ${courseTitle} course?`;
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">
            Courses We Provide
          </h2>
          <p className="text-center py-8">
            Discover a world of knowledge with our diverse range of courses. <br />
            From beginner to advanced, our expert-led programs are designed
            <br /> to help you achieve your goals. Empower yourself today.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course, index) => (
            <a
              key={index}
              href={createWhatsAppLink(course.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white shadow-md rounded-lg p-6 text-center transition-transform transform hover:scale-105"
            >
              <div className="flex items-center justify-center mb-4">
                {course.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-800">{course.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{course.details}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
