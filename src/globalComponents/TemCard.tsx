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
      <div className="p-[24px] group shadow transition-all hover:bg-primary cursor-pointer  text-white rounded-[16px]">
        <h4 className="text-[#666] text-[72px] group-hover:text-white group-hover:opacity-100 opacity-20 font-bold leading-[96px]">
          {number}
        </h4>
        <div>
          <strong className="text-primary group-hover:text-white font-Roboto text-[24px] font-bold leading-[31px]">
            {title}
          </strong>
        </div>
        <div className="mt-[16px]">
          <p className="text-[#666] group-hover:text-white font-Roboto text-base font-normal leading-[24px]">
            {description.substring(0, 230)}.....
          </p>
        </div>
      </div>
    </section>
  );
};

export default TemCard;
