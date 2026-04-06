import React from 'react'
import Title from '../components/Title'
import { images } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-center pt-8 border-t text-2xl'>
     <Title text1={'About'} text2={'Us'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-15'>
       <img src={images.img4} alt="" className='w-full md:max-w-[450px]' />
       <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-500'>
      <p>Welcome to <span className='text-lg text-green-500'>E-SHOP</span>, your trusted destination for quality, affordability, and style. We’re more than just an online store — we’re a team passionate about delivering products that enhance your daily life. From the latest trends to everyday essentials, we carefully select each item to ensure it meets our standards of excellence. With secure shopping, fast shipping, and dedicated support, we’re here to make your experience smooth, reliable, and enjoyable. Join our growing community of satisfied customers and discover the difference.</p>

      <p>Whether you’re looking for everyday basics or something special, we’re here to help you find it with ease and confidence. We’re proud to serve our customers with care, fast delivery, and support you can count on. Your trust is our greatest asset — and we work every day to earn it.</p>

      <b className='text-gray-800'>Our Mission</b>

      <p>At <span className='text-lg text-green-500'>E-SHOP</span>, our mission is to make quality shopping accessible, affordable, and enjoyable for everyone. We are committed to offering a wide range of carefully curated products that meet your lifestyle needs, while delivering outstanding customer service at every step. By combining innovation with convenience, we aim to create a seamless online shopping experience that brings value, trust, and satisfaction to every customer we serve.

</p>
       </div>
      </div>
      <div className='text-xl py-4'>
   <Title text1={'Why'} text2={'Choose Us'} />
      </div>
      <div className=' flex flex-col md:flex-row text-sm mb-18'>
       <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-4'>
      <b>Quality Assurance:</b>
      <p>Your trust is our top priority. We guarantee 100% authentic products, secure payments, and a transparent return policy to ensure your peace of mind. Every order is carefully handled and shipped with care, and our dedicated support team is always ready to help. With us, you’re not just making a purchase — you’re getting a reliable shopping experience you can count on.</p>
       </div>
       <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-4'>
      <b>convenience :</b>
      <p>We make online shopping effortless and stress-free. From easy navigation to secure checkout, everything is designed with your convenience in mind. Enjoy fast delivery, multiple payment options, and responsive customer support — all from the comfort of your home. Whether you're shopping on desktop or mobile, our user-friendly platform ensures a smooth and satisfying experience every time.</p>
       </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-4'>
      <b>Top-tier customer satisfaction :</b>
      <p>At the heart of our brand lies a commitment to top-tier customer satisfaction. We go beyond just fulfilling orders — we aim to deliver a seamless, personalized shopping experience that leaves every customer feeling valued and supported. From prompt responses to inquiries to smooth returns and exchanges, our team is dedicated to making every interaction stress-free and satisfying. Your happiness is our highest priority, and we strive to exceed your expectations at every step.</p>
       </div>
      </div>
      <NewsLetterBox />
    </div>
  )
}

export default About
