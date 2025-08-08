import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { Link } from 'react-router';
import CommonBtn from '../../../globalComponents/CommonBtn';
const Menu: React.FC = () => {
  return (
    <div>
      <div className="flex items-center gap-x-[58px]">
        <Link
          to="/blog"
          className="text-primary font-Ralwway text-base font-medium leading-[24px]"
        >
          Blog
        </Link>
        <Link
          to="/about"
          className="text-primary font-Ralwway text-base font-medium leading-[24px]"
        >
          about
        </Link>
        <CiSearch size={22} className="cursor-pointer" />
        <Link to="/contact">
          <CommonBtn
            children="contact"
            className="bg-primary py-[16px] px-[48px] text-white font-Ralwway text-base font-semibold leading-[24px] rounded-[8px] cursor-pointer"
          ></CommonBtn>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
