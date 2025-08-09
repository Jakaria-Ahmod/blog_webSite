import { useFormik } from 'formik';
import React from 'react';
import { toast } from 'react-toastify';
import CommonBtn from '../../../globalComponents/CommonBtn';

const ContactFrom: React.FC = () => {
  type Values = {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
  };

  const formik = useFormik<Values>({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
    onSubmit: values => {
      if (!values.name) {
        toast.error('Please Enter Your name');
        return;
      }
      if (!values.email) {
        toast.error('Please Enter Your email');
        return;
      }
      if (!values.phone) {
        toast.error('Please Enter Your phone');
        return;
      }
      if (!values.subject) {
        toast.error('Please Enter Your subject');
        return;
      }
      if (!values.message) {
        toast.error('Please Enter Your message');
        return;
      }

      console.log(values);
      formik.resetForm(); // ✅ reset form after submit
    },
  });

  return (
    <div>
      <div>
        <form
          className="py-[71px] px-[61px] shadow-2xl w-[768px] mx-auto auto-rows-min gap-y-6"
          onSubmit={formik.handleSubmit}
        >
          <div className="grid grid-cols-2 gap-x-4">
            <div>
              <label className="block text-balck01 text-base font-semibold leading-[28px] mb-[8px]">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                placeholder="Enter Your Name"
                className="p-5 rounded-md border-gray-400 w-full outline-0 border"
              />
            </div>

            <div>
              <label className="block text-balck01 text-base font-semibold leading-[28px] mb-[8px]">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                placeholder="Enter Your Email"
                className="p-5 rounded-md border-gray-400 w-full border outline-0"
              />
            </div>

            <div>
              <label className="block text-balck01 text-base font-semibold leading-[28px] mb-[8px]">
                Phone
              </label>
              <input
                type="number"
                id="phone"
                name="phone"
                onChange={formik.handleChange}
                value={formik.values.phone}
                placeholder="Enter Your Phone"
                className="p-5 rounded-md border-gray-400 w-full border outline-0"
              />
            </div>

            <div>
              <label className="block text-balck01 text-base font-semibold leading-[28px] mb-[8px]">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                onChange={formik.handleChange}
                value={formik.values.subject}
                placeholder="Enter Your Subject"
                className="p-5 rounded-md border-gray-400 w-full border outline-0"
              />
            </div>
          </div>

          <div className="row-span-2 mt-[22px]">
            <label className="block text-balck01 text-base font-semibold leading-[28px] mb-[8px]">
              Message
            </label>
            <textarea
              placeholder="Enter Your Message"
              onChange={formik.handleChange}
              id="message"
              name="message"
              value={formik.values.message}
              className="p-5 rounded-md border-gray-400 h-[200px] w-full border outline-0 resize-none"
            />
          </div>
          <div>
            <CommonBtn
              children="Send Message"
              className="bg-primary py-[16px] px-[48px] text-white font-Ralwway text-sm font-semibold leading-[24px] rounded-[4px] cursor-pointer mt-[22px] mx-auto block"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactFrom;
