import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import axios from 'axios';

const Orders = () => {
  const {backendUrl,token,currency} = useContext(ShopContext);
  const [orderData,setOrderData] = useState([])
 const loadOrderData = async()=>{
  try {
    if(!token){
      return null
    }
    const response = await axios.post(backendUrl + '/api/order/userorders',{},{headers:{token}})
    if(response.data.success){
      let allOrders = []
      response.data.orders.map((order)=>{
        order.items.map((item)=>{
          item['status'] = order.status
          item['payment'] = order.payment
          item['paymentMethod'] = order.paymentMethod
          item['date'] = order.date
          allOrders.push(item)
        })
      })
      setOrderData(allOrders.reverse())
    }
  } catch (error) {
    
  }
 }
 useEffect(()=>{
  loadOrderData();
 },[token])

  return (
    <div className="mt-16 border-t">
      <div className="text-2xl">
        <Title text1={"My"} text2={"Orders"} />
      </div>
      <div>
  {
    orderData.map((item, index) => (
    <div
      key={index}
      className="flex py-4 border-t border-b bg-gray-200 flex-col md:flex-row items-center md:justify-between gap-4"
    >
      <div className="flex items-start text-sm gap-6">
        <img src={item.image[0]} alt="" className="w-16 sm:w-20" />
        <div className="text-gray-500">
          <p className="text-base font-medium">{item.name}</p>

          <div className="flex items-center text-base gap-3 mt-2">
            <p>{currency} {item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Size: {item.size}</p>
          </div>

          <p className="mt-3">
            Date: <span className="text-gray-500">{new Date(item.date).toDateString()}</span>
          </p>
         <p className="mt-3">
            Payment: <span className="text-gray-500">{item.paymentMethod}</span>
          </p>
        </div>
      </div>
      <div className='md:w-1/2 flex justify-between text-gray-500'>
        <div className='flex items-center gap-2'>
          <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
          <p className='text-sm lg:text-base' >{item.status}</p>
        </div>
        <button onClick={loadOrderData} className='border px-4 py-3 text-gray-500 rounded-lg font-medium cursor-pointer '>Track Order</button>
      </div>
    </div>
  ))}
</div>

    </div>
  );
}

export default Orders
