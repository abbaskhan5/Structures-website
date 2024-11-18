import React from 'react';
import logo1 from '../images/abasenl.jpeg';
import logo2 from '../images/travalair.jpeg';
import logo3 from '../images/yousifT.jpeg';
import logo4 from '../images/namal.jpeg';
import logo5 from '../images/iqraLog.png';
import logo6 from '../images/aireLog.png';  

const partners = [
  { name: 'Salesforce', logo: logo1 },
  { name: 'Cloudera', logo: logo2 },
  { name: 'Microsoft', logo: logo3 },
  { name: 'AWS', logo: logo4 },
  { name: 'Google', logo: logo5 },
  { name: 'Partner 6', logo: logo6 }, 
];

const PartnersSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-primary mb-6">
          Trusted by Industry Leaders
        </h2>
        <p className="text-center text-gray-700 mb-10 px-4 md:px-0">
          We’ve earned the trust of top businesses across various industries by delivering reliable, <br />
          cutting-edge IT solutions that make a real impact. Join the growing list of companies who rely <br />
          on Structure Limited for their digital success. 
          <br className="hidden md:block" />
        </p>
        <div className="flex flex-wrap justify-center items-center gap-5">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="w-24 h-24 flex items-center justify-center rounded-full overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-white mx-7"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
