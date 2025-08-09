import type React from 'react';
import { Link } from 'react-router';

const NotFoundConponets: React.FC = () => {
  return (
    <section>
      <div className="w-[816px] bg-primary mx-auto rounded-md p-[83px]">
        <div className="flex justify-center items-center flex-col">
          <h3 className="text-[70px] font-bold text-white tracking-[5px]">
            404
          </h3>
          <div className="text-center">
            <p className="text-white font-Roboto text-[24px] font-normal leading-[36px]">
              Sorry!
            </p>
            <p className="text-white font-Roboto text-[24px] font-normal leading-[36px]">
              {' '}
              The link is broken, try to refresh or go to home
            </p>
          </div>
          <div className="mt-[36px]">
            <Link
              to="/"
              className="py-[16px] px-[48px] rounded-md bg-white text-balck01 text-base font-semibold leading-[24px]"
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
