import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Rishidpic from '../images/rashidpic.jpeg'
import Shrazpic from '../images/shrazpic.jpeg'
import Ceoibrahim from '../images/ceoibrahim.jpeg'
import Sawerpic from '../images/sawerpic.jpeg'
import Mubisher from '../images/mubisherpic.jpg'
import mempic from '../images/mempic.jpg'
import hamadpic from '../images/hamadpic.jpg'
const teamMembers = [
  {
    name: "Malik Ibrahim Awan",
    position: "CEO",
    image: Ceoibrahim, 
  },
  {
    name: "Saira Ramzan",
    position: "Co-Founder",
    image: mempic,
  },
  {
    name: "Rashid Imran",
    position: "Manager ",
    image: Rishidpic,
  },
  {
    name: "Savaira Adil",
    position: "Legal Advisor",
    image: Sawerpic,
  },
  {
    name: "Mubashir Hussain ",
    position: "Bussiness Development Manager",
    image: Mubisher,
  },
  {
   
    name: "Sheraz Ahmed",
    position: "Finance Manager",
    image: Shrazpic,
  },
  {
    name: "Hammad Sajid",
    position: "Director of Designs & Editing",
    image: hamadpic,
  },
  // {
  //   name: "Emma Watson",
  //   position: "Project Manager",
  //   image: "https://via.placeholder.com/150",
  // },
];

const OurTeam = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">
            Our Creative Team
          </h2>
          <p className="text-gray-600 mt-2">
          Meet the brilliant minds behind our innovative solutions. Our dedicated team  of creative experts<br /> is passionate about pushing boundaries and delivering exceptional results.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-center transition-transform transform hover:scale-105"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
              <p className="text-gray-600 text-sm">{member.position}</p>
              <div className="flex justify-center gap-4 mt-4 text-gray-500">
                <a href="#" className="hover:text-blue-500">
                  <FaFacebookF />
                </a>
                <a href="#" className="hover:text-blue-400">
                  <FaTwitter />
                </a>
                <a href="#" className="hover:text-pink-500">
                  <FaInstagram />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
