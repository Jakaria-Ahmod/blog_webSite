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
      formik.resetForm();
    },
  });

  return (
    <div>
      <form
        className="py-16 px-6 shadow-2xl max-w-3xl mx-auto gap-y-6 grid grid-cols-1 md:grid-cols-2 md:gap-x-6"
        onSubmit={formik.handleSubmit}
      >
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-balck01 text-base font-semibold leading-7 mb-2"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            placeholder="Enter Your Name"
            className="p-4 rounded-md border border-gray-400 w-full outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-balck01 text-base font-semibold leading-7 mb-2"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder="Enter Your Email"
            className="p-4 rounded-md border border-gray-400 w-full outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block text-balck01 text-base font-semibold leading-7 mb-2"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            onChange={formik.handleChange}
            value={formik.values.phone}
            placeholder="Enter Your Phone"
            className="p-4 rounded-md border border-gray-400 w-full outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Subject */}
        <div>
          <label
            htmlFor="subject"
            className="block text-balck01 text-base font-semibold leading-7 mb-2"
          >
            Subject
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            onChange={formik.handleChange}
            value={formik.values.subject}
            placeholder="Enter Your Subject"
            className="p-4 rounded-md border border-gray-400 w-full outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Message */}
        <div className="md:col-span-2 mt-4">
          <label
            htmlFor="message"
            className="block text-balck01 text-base font-semibold leading-7 mb-2"
          >
            Message
          </label>
          <textarea
            placeholder="Enter Your Message"
            onChange={formik.handleChange}
            id="message"
            name="message"
            value={formik.values.message}
            className="p-4 rounded-md border border-gray-400 w-full h-48 resize-none outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 flex justify-center mt-6">
          <CommonBtn
            // type="submit"
            children="Send Message"
            className="bg-primary py-4 px-12 text-white font-Ralwway text-sm font-semibold leading-6 rounded-md cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactFrom;
