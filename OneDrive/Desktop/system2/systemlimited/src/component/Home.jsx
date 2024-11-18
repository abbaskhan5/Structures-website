import React, { useState, useEffect } from "react";
import SlideOne from '../images/slideOne.png';

const slides = [
  {
    titlePartOne: "Lessons and insights",
    titlePartTwo: "from 8 years",
    description: "Where to grow your business as a photographer: site or social media?",
    image: SlideOne,
  },
  {
    titlePartOne: "Grow your photography skills",
    titlePartTwo: "with new techniques",
    description: "Discover new techniques and expand your portfolio.",
    image: SlideOne,
  },
  {
    titlePartOne: "Connect with your audience",
    titlePartTwo: "through social media",
    description: "Learn effective ways to engage with followers online.",
    image: SlideOne,
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between py-20 px-4 md:px-16 bg-gray-100 h-auto md:h-[90vh] overflow-hidden">
      {/* Text Section */}
      <div className="text-center md:text-left md:w-1/2 transition-transform duration-1000 ease-in-out">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="text-gray-800">{slides[currentSlide].titlePartOne} </span>
          <span className="text-sky-800">{slides[currentSlide].titlePartTwo}</span>
        </h1>
        <p className="text-gray-600 mb-6">
          {slides[currentSlide].description}
        </p>
      </div>

      {/* Image Section */}
      <div className="mt-4 md:mt-0 md:w-1/2 flex justify-center transition-transform duration-1000 ease-in-out">
        <img
          src={slides[currentSlide].image}
          alt="Hero Illustration"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain h-[370px]"
        />
      </div>
    </section>
  );
};

export default HeroSection;
