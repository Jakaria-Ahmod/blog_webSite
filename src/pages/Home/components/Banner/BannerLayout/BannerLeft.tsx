import React from 'react';
import { useNavigate } from 'react-router';
import CommonBtn from '../../../../../globalComponents/CommonBtn';

const BannerLeft: React.FC = () => {
  const naviget = useNavigate();
  const handleroute = () => {
    naviget('/blog');
  };
  return (
    <div>
      <section>
        <div>
          <div>
            <p className="text-white font-Ralwway text-base font-bold leading-[24px]">
              Featured Post
            </p>
          </div>
          <div>
            <h2 className="mt-[37px] mb-[28px]  text-white font-Ralwway text-[64px] font-bold leading-[86px] w-[582px]">
              How AI will Change the Future
            </h2>
          </div>
          <div>
            <h3 className="text-white font-Ralwway text-base font-normal leading-[24px] w-[417px]">
              The future of AI will see home robots having enhanced
              intelligence, increased capabilities, and becoming more personal
              and possibly cute. For example, home robots will overcome
              navigation, direction
            </h3>
          </div>
          <div className="mt-[64px]">
            <CommonBtn
              children="Read more"
              onClick={handleroute}
              className="bg-white py-[16px] px-[48px] text-balck font-Ralwway text-sm font-semibold leading-[24px] rounded-[8px] cursor-pointer"
            ></CommonBtn>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BannerLeft;
