import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { Star } from 'lucide-react';
import RelatedProducts from '../components/RelatedProducts';

const Products = () => {
  const {productId} =  useParams();
  const {products,currency,addToCart} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('')
  const [size,setSize] = useState('')
  const fetchProductData = async()=>{
    products.map((item)=>{
     if(item._id === productId){
    setProductData(item)
    setImage(item.image[0])
    return null
     }
  })
  }
  useEffect(()=>{
    fetchProductData();
  },[productId])

  console.log(productId)
  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        <div className="flex-1 flex gap-3 flex-col-reverse sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                alt=""
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0"
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} alt="" className="w-full h-auto" />
          </div>
        </div>
        {/* productinfo*/}
        <div className="flex-1">
          <h1 className="font-medium mt-2 text-2xl">{productData.name}</h1>

          <div className="flex items-center gap-1 mt-2 text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4"
                fill={i < 4 ? "currentColor" : "none"} // fill first 4
                stroke="currentColor"
              />
            ))}
            <p className="pl-2 text-black">(122)</p>
          </div>
          <p className="mt-4 text-2xl font-medium">
            {currency} {productData.price}
          </p>
          <p className="mt-4 text-gray-600 w-4/5">{productData.description}</p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-400 cursor-pointer rounded-lg ${
                    item === size ? "border-orange-500" : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => {
              
              addToCart(productData._id, size);
            }}
            className="bg-gray-800 text-white px-8 py-3 rounded-lg text-sm active:bg-gray-700"
          >
            Add To Cart
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-gray-500 text-sm flex flex-col gap-1">
            <p>Orignal Product</p>
            <p>Cash on develivery available for this product</p>
            <p>Easy Return and 7 days Exchange Policy</p>
          </div>
        </div>
      </div>
      {/* review */}
      <div className="mt-18">
        <div className="flex ">
          <p className="border px-5 py-3 text-sm font-semibold ">Description</p>
          <p className="border px-5 py-3 text-sm ">Reviews(178)</p>
        </div>
        <div className="flex mt-3 flex-col gap-4 px-6 py-6 text-sm border text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            voluptatibus assumenda amet, deserunt quos explicabo quibusdam
            temporibus ipsa consectetur nobis at tempore vel. Obcaecati
            cupiditate reprehenderit ut reiciendis qui quisquam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde est
            eius harum exercitationem, quibusdam ipsa animi provident rerum? In
            sint quibusdam perspiciatis dicta maiores voluptates distinctio iste
            voluptate soluta id?
          </p>
        </div>
      </div>
      {/* relted products*/}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
}

export default Products
