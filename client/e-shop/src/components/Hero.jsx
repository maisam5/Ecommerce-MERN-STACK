import React from 'react'
import {images} from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
       <div className='text-gray-600'>
          <div className='flex items-center gap-2'>
            <p className='w-8 md:w-11 h-[2px] bg-gray-700'></p>
            <p className='font-semibold text-sm md:text-base'>Our Best Seller</p>
          </div>
          <h1 className='text-2xl font-bold'>Latest Arrivals</h1>
          <div className='flex gap-2 items-center'>
           <p className='font-semibold tex-sm md:text-base'>Shop Now</p>
           <p className='w-8 md:w-11 h-[1px] bg-gray-700'></p>
           <p></p>
          </div>
       </div>
      </div>
      {/* .right-side.*/}
      <img className='w-full h-100 sm:w-1/2 bg-no-repeat' src={images.img6} alt="" />
    </div>
  )
}

export default Hero
