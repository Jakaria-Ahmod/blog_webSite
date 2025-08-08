//

import { useState } from 'react';
import { toast } from 'react-toastify';

const CTA: React.FC = () => {
  const [email, setEmail] = useState<string>('');

  const handleFromData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return toast.success('Pliese Enter Your Email');
    setEmail('');
    toast.success('your Email send sucessfully');
    console.log('Your Email :', email);
  };

  return (
    <div className="bg-primary p-[132px]">
      <div className="container">
        <div className="flex justify-center items-center flex-col">
          <h3 className="text-white font-Roboto text-[52px] font-bold leading-[48px] w-[768px] text-center">
            Get our stories delivered From us to your inbox weekly.
          </h3>
          <div className="mt-[48px] mb-[24px]">
            <form
              action=""
              className="flex gap-x-[10px]"
              onSubmit={handleFromData}
            >
              <input
                type="text"
                placeholder="Your Email"
                className="w-[320px] text-white p-3 border rounded-md outline-none"
                onChange={e => setEmail(e.target.value)}
                value={email}
              />
              '
              <button
                className="border border-white ring-1 py-[10px] px-[32px] rounded cursor-pointer text-white font-Roboto text-[18px] font-bold"
                type="submit"
              >
                Get started
              </button>
            </form>
          </div>
          <p className="w-[555px] text-center text-[#BBB] text-base font-normal leading-[28px]">
            Get a response tomorrow if you submit by 9pm today. If we received
            after 9pm will get a reponse the following day.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CTA;
