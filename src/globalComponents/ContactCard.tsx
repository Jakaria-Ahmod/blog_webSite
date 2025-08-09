import React from 'react';

interface ContactCard {
  img: string;
  title: string;
  descrption: string;
}

const ContactCard: React.FC<ContactCard> = ({ img, title, descrption }) => {
  return (
    <section>
      <div className="p-11 sm:p-8 xs:p-6 shadow shadow-blue-600 flex justify-center items-center flex-col rounded-md">
        <img
          src={img}
          alt="img"
          className="w-auto h-[120px] sm:h-[100px] xs:h-[80px] object-contain"
        />
        <div className="my-5 sm:my-4 xs:my-3">
          <h3 className="text-primary font-Roboto text-[20px] sm:text-[18px] xs:text-[16px] font-bold text-center">
            {title}
          </h3>
        </div>
        <p className="text-[#7A7A7A] text-base sm:text-sm xs:text-sm font-medium leading-[28px] text-center px-4">
          {descrption}
        </p>
      </div>
    </section>
  );
};

export default ContactCard;
