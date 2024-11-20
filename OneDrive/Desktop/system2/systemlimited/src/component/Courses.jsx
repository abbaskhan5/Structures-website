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

const courses = [
  {
    title: "Web Development",
    details: "Master HTML, CSS, and JavaScript to create dynamic, responsive websites.",
    icon: <FaLaptopCode className="text-4xl text-primary" />,
  },
  {
    title: "App Development",
    details: "Learn to build mobile and desktop applications using Java, Python, and more.",
    icon: <FaMobileAlt className="text-4xl text-primary" />,
  },
  {
    title: "React Native",
    details: "Cross-platform mobile applications using React Native.",
    icon: <FaReact className="text-4xl text-primary" />,
  },
  {
    title: "Flutter",
    details: "Developing cross-platform apps using Flutter.",
    icon: <FaAndroid className="text-4xl text-primary" />,
  },
  {
    title: "Machine Learning",
    details: "Build predictive models using machine learning techniques.",
    icon: <FaRobot className="text-4xl text-primary" />,
  },
  {
    title: "Artificial Intelligence",
    details: "Develop AI models for automation and decision-making.",
    icon: <FaBrain className="text-4xl text-primary" />,
  },
  {
    title: "MLOps",
    details: "Efficient deployment and monitoring of ML models.",
    icon: <FaCogs className="text-4xl text-primary" />,
  },
  {
    title: "Cyber Security",
    details: "Learn how to protect systems from cyber threats.",
    icon: <FaShieldAlt className="text-4xl text-primary" />,
  },
  {
    title: "UI/UX Design",
    details: "Crafting user-friendly and engaging designs.",
    icon: <FaPencilRuler className="text-4xl text-primary" />,
  },
  {
    title: "Shopify Development",
    details: "Build custom e-commerce stores using Shopify.",
    icon: <FaShopify className="text-4xl text-primary" />,
  },
  {
    title: "Graphic Designing",
    details: "Design stunning visuals and brand assets with modern tools.",
    icon: <FaPaintBrush className="text-4xl text-primary" />,
  },
  {
    title: "Freelancing",
    details: "Learn how to build a successful freelance career and secure clients.",
    icon: <FaUserTie className="text-4xl text-primary" />,
  },
  {
    title: "WordPress Development",
    details: "Develop and customize websites using WordPress.",
    icon: <FaWordpress className="text-4xl text-primary" />,
  },
  {
    title: "SEO",
    details: "Improve search engine rankings and website traffic.",
    icon: <FaSearch className="text-4xl text-primary" />,
  },
  {
    title: "Digital Marketing",
    details: "Effective strategies to grow your online presence.",
    icon: <FaBullhorn className="text-4xl text-primary" />,
  },
  {
    title: "Content Writing",
    details: "Master the art of creating SEO-friendly and engaging content.",
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
    details: "Analyze and interpret complex data to make data-driven decisions.",
    icon: <FaChartLine className="text-4xl text-primary" />,
  },
  {
    title: "Social Media Marketing",
    details: "Boost brand visibility on social media platforms.",
    icon: <FaBullhorn className="text-4xl text-primary" />,
  },
];

const Courses = () => {
  const createWhatsAppLink = (courseTitle) => {
    const phoneNumber = "923340002029"; 
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
            Discover a world of knowledge with our diverse range of courses.
            <br />
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
