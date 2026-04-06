import React from 'react';
import Title from '../components/Title';
import { images } from '../assets/assets';
import NewsLetterBox from '../components/NewsLetterBox';

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-6 bg-gray-100 min-h-screen">
      <div className="md:w-1/2 p-4">
        <img
          src={images.img4}
          alt="Office Desk"
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </div>
      <div className="md:w-1/2 p-4 text-center md:text-left">
        <Title text1={'Contact'} text2={'Us'}  />
        <div className="mb-6">
          <h3 className="text-lg font-semibold">Our Store</h3>
          <div className='mt-3'>
            <p>54709 Willms Station</p>
          <p>Suite 350, Washington, USA</p>
          </div>
          <div className='mt-3'>
            <p>Tel: (415) 555-0132</p>
          <p>Email: admin@forever.com</p>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Careers at Forever</h3>
          <p className="mb-4">Learn more about our teams and job openings.</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Explore Jobs
          </button>
        </div>
      </div>
     
    </div>
  );
};

export default Contact;
