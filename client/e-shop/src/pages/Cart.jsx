import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import { Trash2 } from 'lucide-react';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const {products, currency, cartItems,updateQuantity,navigate} = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);


 useEffect(() => {
  if(products.length > 0){
   const tempData = [];

  for (const items in cartItems) {
    for(const item in cartItems[items]){
      if(cartItems[items][item] > 0){
        tempData.push({
          _id:items,
          size:item,
          quantity:cartItems[items][item]
        })
      }
    }

   
  }
  setCartData(tempData);
  } 
}, [cartItems,products]);


  return (
    <div className='border-t pt-13'>
    <div className='text-2xl mb-3'>
      <Title text1={'YOUR'} text2={'CART'} />
    </div>
    <div>
     {
  cartData.map((item, index) => {
    const productData = Array.isArray(products)
      ? products.find((product) => product._id === item._id)
      : null;

    if (!productData) return null;

    return (
      <div
        key={index}
        className="py-4 border-t border-b grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4 text-gray-600"
      >
        <div className="flex items-start gap-5">
          <img src={productData.image[0]} alt="" className="w-16 sm:w-20" />
          <div>
            <p className="text-xs sm:text-lg font-medium">{productData.name}</p>
            <div className="flex items-center gap-4  mt-2">
              <p>
                {currency} {productData.price}
              </p>
              <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">
                {item.size}
              </p>
            </div>
          </div>
        </div>
        <input
          type="number"
          min={1}
          className="border max-w-10 sm:max-w-20 px-1 py-1"
          value={item.quantity}
          onChange={(e) => {
            const val = e.target.value;
            if (val === "" || val === "0") return;
            updateQuantity(item._id, item.size, Number(e.target.value));
          }}
        />
        <Trash2
          onClick={() => updateQuantity(item._id, item.size, 0)}
          className="cursor-pointer w-4 sm:w-5 mr-4"
        />
      </div>
    );
  })
}

    </div>
    <div className='flex justify-end my-20'>
      <div className='w-full sm:w-[450px]'>
        <CartTotal />
        <div className='w-full text-end'>
          <button onClick={()=>navigate('/place-order')} className='bg-black text-white my-8 px-8 py-3 rounded-lg cursor-pointer text-sm'>Proceed To checkout </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Cart
