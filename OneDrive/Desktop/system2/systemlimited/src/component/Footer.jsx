import React from 'react';
import Logo from '../images/whitLog.png';
import { FaFacebook, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-4 gap-3">
        {/* Our Services Column */}
        <div className="space-y-2">
          <h4 className="font-bold text-lg lg:ml-14">Our Services</h4>
          <ul className="space-y-2 lg:ml-14">
            <li>Web Development</li>
            <li>App Development</li>
            <li>Shopify Development</li>
            <li>Machine Learning</li>
            <li>Artificial Intelligence</li>
            <li>Cyber Security</li>
            <li>UI & UX Design</li>
            <li>Graphic Designing</li>
          </ul>
        </div>

        {/* Company Column */}
        <div className="space-y-2">
          <h4 className="font-bold text-lg">Company</h4>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Support</li>
            <li>Success</li>
            <li>History</li>
            <li>Projects</li>
            <li>Portfolio</li>
          </ul>
        </div>

        {/* Quick Links Column */}
        <div className="space-y-2">
          <h4 className="font-bold text-lg">Quick Links</h4>
          <ul className="space-y-2">
            <li>Home</li>
            <li>Partner</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Courses</li>
            <li>Our Team</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Company Logo & Description */}
        <div className="space-y-2 lg:mr-16">
          <img src={Logo} alt="Company Logo" className="h-12" />
          <p className='mt-20'>
            Structures Limited is a dynamic software house specializing in delivering cutting-edge projects and providing comprehensive IT courses. Our mission is to empower clients with innovative solutions and equip learners with the latest industry skills.
          </p>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-8 flex justify-between items-center border-t-2">
        {/* Powered By Section */}
        <div className="text-lg lg:ml-20 mt-5">
          Powered by Structures Limited All Rights Reserved.
        </div>

        {/* Follow Us Section */}
        <div className="space-x-4 lg:mr-20 mt-5 text-lg">
          <span>Follow Us:</span>
          <a href="https://www.facebook.com/profile.php?id=61562891199756&mibextid=LQQJ4d" className="inline-block">
            <FaFacebook />
          </a>
          <a href="mailto:info@structureslimited.com" className="inline-block">
            <FaEnvelope />
          </a>
          <a
            href="https://wa.me/923340002029" 
            className="inline-block"
          >
            <FaWhatsapp />
          </a>
          <a href="https://www.linkedin.com/company/structures-ltd/mycompany/" className="inline-block">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
