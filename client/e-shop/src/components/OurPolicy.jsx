import React from 'react'

import {  ArrowRightLeftIcon,  Headphones, ShieldCheck } from 'lucide-react';

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 py-20 text-xs sm:text-sm md:text-base text-gray-700 '>
      <div className='flex flex-col items-center text-center'>
        <ArrowRightLeftIcon className='m-auto w-12 mb-5'   />
        <p className='font-semibold text-gray-600'>Exhange Policy</p>
        <p className='text-gray-500'>We Offer Free Exchange Policy</p>

      </div>
      <div className='flex flex-col items-center text-center'>
        <ShieldCheck className='m-auto w-12 mb-5'   />
        <p className='font-semibold text-gray-600'>7 Days Return Policy</p>
        <p className='text-gray-500'>We Offer 7 Day Free Return Policy</p>

      </div>
      <div className='flex flex-col items-center text-center'>
        <Headphones className='m-auto w-12 mb-5 '   />
        <p className='font-semibold text-gray-600'>Best Customer Support</p>
        <p className='text-gray-500'>We Offer 24/7 Customer Support</p>

      </div>
    </div>
  )
}

export default OurPolicy
