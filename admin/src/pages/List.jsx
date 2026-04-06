import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backendUrl, currency } from '../App'
import { toast } from 'react-toastify'

const List = ({token}) => {
  const [list, setList] = useState([])

  const fetchList = async() =>{
    try {
      const response = await axios.get(backendUrl + '/api/product/list',{headers:{token} })
      if(response.data.success){
        setList(response.data.products);
      } else{
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }
  
  const removeProduct = async(id)=>{
    try {
      const response = await axios.post(backendUrl + '/api/product/remove',{id},{headers:{token}})
      if(response.data.success){
        toast.success(response.data.message)
          await fetchList()
        
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(()=>{
fetchList();
  },[])
  return (
  <>
  <p className="mb-3 text-xl font-semibold">All Products</p>

  {/* Header row */}
  <div className="hidden md:grid md:grid-cols-[40%_20%_15%_15%_10%] items-center py-2 px-4 bg-blue-100 rounded-t-md text-lg text-black font-semibold mb-2">
    <div>Image</div>
    <div>Name</div>
    <div>Category</div>
    <div>Price</div>
    <div className="text-center">Action</div>
  </div>

  {/* Product rows */}
  <div className="flex flex-col gap-2">
    {list.map((item, index) => (
      <div
        key={index}
        className="grid grid-cols-1 md:grid-cols-[40%_20%_15%_15%_10%] items-center py-3 px-4 border rounded-md shadow-sm bg-amber-50"
      >
        {/* Image(s) */}
        <div className="flex flex-wrap gap-2">
          {item.image.map((imgUrl, imgIndex) => (
            <img
              key={imgIndex}
              src={imgUrl}
              alt={`product-${index}-img-${imgIndex}`}
              className="w-[60px] h-[60px] object-cover rounded-md border"
            />
          ))}
        </div>

        {/* Name */}
        <p className="text-base font-medium text-gray-800">{item.name}</p>

        {/* Category */}
        <p className="capitalize text-gray-600">{item.category}</p>

        {/* Price */}
        <p className="text-blue-600 font-semibold">{currency}{item.price}</p>

        {/* Action */}
        <div className="text-center">
          <button onClick={()=>removeProduct(item._id)} className="text-red-600 hover:underline">Delete</button>
        </div>
      </div>
    ))}
  </div>
</>


  );
}

export default List
