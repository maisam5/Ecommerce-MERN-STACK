import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({id,image,name,price}) => {
    const {currency} = useContext(ShopContext);
    

  return (
    <Link className='text-shadow-gray-700 cursor-pointer' to ={`/product/${id}`}>
    <div className='overflow-hidden'>
        <img className='hover-scale-110 transition-transform duration-300 ease-in-out  hover:scale-110 w-full h-70 ' src={image[0]} alt="" />
    </div>
    <p className='pt-3 pb-1 text-sm'>{name}</p>
    <p>{currency} {price}</p>
    </Link>
  )
}

export default ProductItem
