import React from 'react'

const NewsLetterBox = () => {
    const onSubmitHandler = (e)=>{
e.preventDefault();
    }
  return (
    <div className='text-center'>
      <p className='text-2xl font-bold text-gray-900'>Subscribe Now & Get 20% Off</p>
      <p className='text-gray-700 mt-3'>
        Lorem ispum text dumy json web industry axios
      </p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 rounded-lg'>
        <input type="email" placeholder='Enter Your Email' required className='w-full sm:flex-1 outline-none' />
        <button type='button' className='bg-gray-800 text-white px-9 py-4 rounded-lg hover:bg-gray-600 cursor-pointer'>Subscribe</button>
      </form>
    </div>
  )
}

export default NewsLetterBox
