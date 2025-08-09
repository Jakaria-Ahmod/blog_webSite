import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { Link } from 'react-router';
import CommonBtn from '../../../globalComponents/CommonBtn';

const MobileMenu: React.FC = () => {
  return (
    <div className=" w-[300px] mx-auto py-3">
      <div
        className="
          flex flex-col items-center gap-y-4
          md:flex-row md:items-center md:gap-x-[58px]
        "
      >
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
          About
        </Link>

        <CiSearch size={22} className="cursor-pointer text-primary" />

        <Link to="/contact" className="w-full md:w-auto">
          <CommonBtn
            children="Contact"
            className="
              bg-primary py-[16px] px-[48px] text-white font-Ralwway text-base font-semibold leading-[24px] rounded-[8px] cursor-pointer
              w-full md:w-auto
            "
          />
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
