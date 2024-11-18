import React from 'react';
import  backgroundvideo from '../video/hdvideos.mp4'

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden ">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src={backgroundvideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          <span>Transform </span>
          <span className="text-secondary">Your Future</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in">
        Empowering your business with cutting-edge IT services and training. Transform your ideas into reality with our expert solutions and courses. Let's build the future together.
        </p>
        <button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all transform hover:scale-105 animate-fade-in border-8">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
