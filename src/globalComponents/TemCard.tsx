import React from 'react';

interface CardDetails {
  number: string;
  title: string;
  description: string;
}

const TemCard: React.FC<CardDetails> = ({
  number = '01',
  title = 'data load problem .....',
  description = 'welcome my website  Thank you...',
}) => {
  return (
    <section>
      <div className="p-6 group shadow transition-all hover:bg-primary cursor-pointer text-white rounded-[16px]">
        <h4 className="text-[#666] text-[72px] sm:text-[56px] xs:text-[40px] group-hover:text-white group-hover:opacity-100 opacity-20 font-bold leading-[96px] sm:leading-[72px] xs:leading-[52px]">
          {number}
        </h4>
        <div>
          <strong className="text-primary group-hover:text-white font-Roboto text-[24px] sm:text-[20px] xs:text-[18px] font-bold leading-[31px]">
            {title}
          </strong>
        </div>
        <div className="mt-4">
          <p className="text-[#666] group-hover:text-white font-Roboto text-base sm:text-sm xs:text-sm font-normal leading-[24px]">
            {description.substring(0, 230)}.....
          </p>
        </div>
      </div>
    </section>
  );
};

export default TemCard;
