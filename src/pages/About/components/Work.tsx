import React from 'react';

const Work: React.FC = () => {
  return (
    <div className="container mx-auto px-4 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-[#666] font-Roboto text-base font-bold leading-6 uppercase">
            HOW WE WORK
          </h2>
          <h3 className="text-[#333] mt-8 font-Roboto text-3xl md:text-4xl font-bold leading-tight max-w-full md:max-w-lg">
            I will show you how our team works
          </h3>
        </div>
        <div className="flex items-end justify-start md:justify-end">
          <p className="text-[#666] font-Roboto text-base font-normal leading-6 max-w-full md:max-w-md">
            Bring to the table win-win market strategies to ensure perfect
            articles.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Work;
