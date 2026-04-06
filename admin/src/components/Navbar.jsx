import React from 'react'
import {assets} from '../assets/assets'
const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center justify-between py-2 px-[4%]'>
      <img src={assets.mylogo} alt="" className='w-[max(10%,80px)] h-17 rounded-lg' />
     <button onClick={()=>setToken('')} className='bg-gray-600 px-4 text-white py-2 sm:px-7 rounded-lg text-xs sm:text-sm cursor-pointer'>Logout</button>
    </div>
  )
}

export default Navbar
