import React from 'react';
import aobutImg from '../../../assets/img/about.png';
const AboutImg: React.FC = () => {
  return (
    <div>
      <div className="w-full h-[608px] rounded-md mt-[123px] overflow-hidden">
        <img
          src={aobutImg}
          alt="aobutImg"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default AboutImg;
