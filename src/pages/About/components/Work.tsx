import React from 'react';

const Work: React.FC = () => {
  return (
    <div>
      <div className="grid grid-cols-2">
        <div>
          <div>
            <h2 className="text-[#666]  font-Roboto text-base font-bold leading-[24px] uppercase">
              HOW WE WORK
            </h2>
            <div>
              <h3 className="text-[#333] w-[500px] mt-[32px] font-Roboto text-[48px] font-bold leading-[63px]">
                I will show you how our team works
              </h3>
            </div>
          </div>
        </div>
        <div className="flex items-end justify-end">
          <p className="text-[#666]  w-[416px] font-Roboto text-base font-normal leading-[24px]">
            Bring to the table win-win market strategies to ensure perfect
            articles.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Work;
