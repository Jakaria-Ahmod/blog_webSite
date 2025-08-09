import React from 'react';

interface ContactCard {
  img: string;
  title: string;
  descrption: string;
}

const ContactCard: React.FC<ContactCard> = ({ img, title, descrption }) => {
  return (
    <section>
      <div className="p-[44px] shadow shadow-blue-600  flex justify-center items-center flex-col rounded-md">
        <img src={img} alt="img" />
        <div className="my-[20px]">
          <h3 className="text-primary font-Roboto text-[20px] font-bold">
            {title}
          </h3>
        </div>
        <p className="text-[#7A7A7A] text-base font-medium leading-[28px]">
          {descrption}
        </p>
      </div>
    </section>
  );
};

export default ContactCard;
