import type React from 'react';
import { Link } from 'react-router';

const NotFoundConponets: React.FC = () => {
  return (
    <section className="px-4">
      <div className="max-w-[816px] bg-primary mx-auto rounded-md p-20 sm:p-24">
        <div className="flex justify-center items-center flex-col">
          <h3 className="text-[70px] sm:text-[90px] font-bold text-white tracking-[5px]">
            404
          </h3>
          <div className="text-center mt-4">
            <p className="text-white font-Roboto text-lg sm:text-xl font-normal leading-[36px]">
              Sorry!
            </p>
            <p className="text-white font-Roboto text-lg sm:text-xl font-normal leading-[36px]">
              The link is broken, try to refresh or go to home
            </p>
          </div>
          <div className="mt-9">
            <Link
              to="/"
              className="py-4 px-12 rounded-md bg-white text-balck01 text-base font-semibold leading-[24px] hover:bg-gray-200 transition"
            >
              Go To Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundConponets;
