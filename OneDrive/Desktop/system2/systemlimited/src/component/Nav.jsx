import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../images/logo.png";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white relative z-50">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-10">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center lg:mt-4 lg:ml-10">
            <a href="/" className="block h-12 w-36">
              <img src={logo} alt="Logo" />
            </a>
          </div>

          {/* Hamburger Menu for Mobile */}
          <button
            className="block md:hidden p-2 text-gray-600 hover:text-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Navigation Links */}
          <div
            className={`absolute top-16 left-0 w-full bg-white md:static md:w-auto md:flex md:items-center lg:mr-20 ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <nav>
              <ul className="flex flex-col items-center gap-6 text-sm md:flex-row md:gap-8 p-4 md:p-0 ">
                <li>
                  <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer text-black text-lg transition hover:text-blue-800"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="partner"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer text-black text-lg  transition hover:text-blue-800"
                  >
                    Partner
                  </Link>
                </li>
                <li>
                  <Link
                    to="services"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer text-black text-lg transition hover:text-blue-800"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="portfolio"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer text-black text-lg transition hover:text-blue-800"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    to="courses"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer text-black text-lg transition hover:text-blue-800"
                  >
                    Courses
                  </Link>
                </li>
                <li>
                  <Link
                    to="team"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer text-black text-lg transition hover:text-blue-800"
                  >
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer text-black text-lg transition hover:text-blue-800"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
