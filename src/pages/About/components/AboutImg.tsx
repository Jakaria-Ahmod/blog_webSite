import React from 'react';
import aboutImg from '../../../assets/img/about.png';

const AboutImg: React.FC = () => {
  return (
    <div className="mt-[123px]">
      <div className="w-full max-w-[900px] mx-auto h-[300px] sm:h-[450px] md:h-[608px] rounded-md overflow-hidden">
        <img
          src={aboutImg}
          alt="aboutImg"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default AboutImg;
