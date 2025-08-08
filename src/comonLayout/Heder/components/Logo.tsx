import React from 'react';
import { Link } from 'react-router';
import LogoImg from '../../../assets/img/blogLogo.png';
const Logo: React.FC = () => {
  return (
    <div>
      <Link to="/">
        <img src={LogoImg} alt="LogoImg" />
      </Link>
    </div>
  );
};

export default Logo;
