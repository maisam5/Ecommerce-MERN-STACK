import React from 'react'
import { images } from '../assets/assets'

const Footer = () => {
  return (
    <footer className="w-full bg-white mt-40 px-5">
    
      <div className="max-w-7xl mx-auto">
       
        <div className="grid grid-cols-1 sm:grid-cols-[3fr_1fr_1fr] gap-14 text-sm">
 
          <div>
            <img src={images.logoimg} alt="" className="mb-5 w-20 h-12" />
            <p className="w-full md:w-2/3 text-gray-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora amet dolor ab placeat sunt eveniet! Enim, laboriosam ipsa
            </p>
          </div>

       
          <div>
            <p className="font-bold text-2xl text-gray-800 mb-5">COMPANY</p>
            <ul className="flex flex-col gap-1 text-gray-600">
              <li>HOME</li>
              <li>COLLECTION</li>
              <li>DELIVERY</li>
              <li>PRIVACY POLICY</li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-2xl text-gray-800 mb-5">GET IN TOUCH</p>
            <ul className="flex flex-col gap-1 text-gray-600">
              <li>+120303746</li>
              <li>eshop@gmail.com</li>
            </ul>
          </div>
        </div>

       
        <hr className="my-8 border-gray-300" />

        <p className="text-center text-sm text-gray-500 pb-5">
          © Copyright 2025 — E-Shop All Rights Reserved <span className='text-black'>DESIGN BY MAISAM ABBAS</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
