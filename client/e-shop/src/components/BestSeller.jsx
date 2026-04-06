import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
    const {products} = useContext(ShopContext);
    const [bestseller, setBestSeller] = useState([]);
    useEffect(()=>{
     const bestProduct = products.filter((item)=>(item.bestseller));
     setBestSeller(bestProduct.slice(0,5)) 
    },[products])
  return (
    <div className="my-10">
      <div className="text-center text-2xl py-7">
        <Title text1="BEST" text2="SELLERS" />
        <p className="w-3/4 text-xs sm:text-sm md:text-base m-auto text-gray-700">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
          molestiae autem rerum repudiandae! Unde veritatis velit eos omnis
          fugit dolore,?
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg-grid-cols-5 gap-4 gap-y-4">
        {bestseller.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            name={item.name}
            image={item.image} // 🛑 You had item.price here by mistake
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default BestSeller
