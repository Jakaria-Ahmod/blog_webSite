import { useState } from 'react';
import { toast } from 'react-toastify';

const CTA: React.FC = () => {
  const [email, setEmail] = useState<string>('');

  const handleFormData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please Enter Your Email');
      return;
    }
    toast.success('Your Email sent successfully');
    console.log('Your Email :', email);
    setEmail('');
  };

  return (
    <div className="bg-primary py-[132px]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h3 className="text-white font-Roboto text-[52px] font-bold leading-[48px] max-w-[768px] text-center">
            Get our stories delivered From us to your inbox weekly.
          </h3>
          <form
            onSubmit={handleFormData}
            className="mt-[48px] mb-[24px] flex flex-col sm:flex-row gap-4 sm:gap-x-[10px] w-full max-w-[600px]"
          >
            <input
              type="email"
              placeholder="Your Email"
              className="flex-grow p-3 rounded-md border border-white text-white outline-none bg-transparent"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="border border-white py-[10px] px-[32px] rounded cursor-pointer text-white font-Roboto text-[18px] font-bold hover:bg-white hover:text-primary transition"
            >
              Get started
            </button>
          </form>
          <p className="max-w-[555px] text-center text-[#BBB] text-base font-normal leading-[28px]">
            Get a response tomorrow if you submit by 9pm today. If we receive it
            after 9pm, you will get a response the following day.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CTA;
