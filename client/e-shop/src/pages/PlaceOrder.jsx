import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import {images} from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const PlaceOrder = () => {
   const [method, setMethod] =useState('cod');
  const {navigate,backendUrl,token,cartItems,setCartItems,getCartAmount,delivery_fee,products} = useContext(ShopContext);
 
  const [formdata, setFormData] = useState({
    firstName:'',
    lastName:'',
    email:'',
    street:'',
    city:'',
    state:'',
    zipcode:'',
    country:'',
    phone:''
  })

const onChangeHandler = (e) =>{
  const name = e.target.name
  const value = e.target.value
  setFormData(data=>({...data,[name]:value}))
}

const onSumbitHandler = async(e)=>{
  e.preventDefault();
 try {
  let orderItems = []
  for (const items in cartItems){
    for(const item in cartItems[items]){
      if(cartItems[items][item] > 0){
        const itemInfo = structuredClone(products.find(product => product._id===items))
        if(itemInfo){
          itemInfo.size = item
          itemInfo.quantity = cartItems[items][item] 
          orderItems.push(itemInfo)
        }
      }
    }
  }
  let orderData = {
    address:formdata,
    items:orderItems,
    amount:getCartAmount() + delivery_fee
  }
    switch(method) {
      
      case 'cod':
        const response = await axios.post(backendUrl + '/api/order/place', orderData,{headers:{token}})
       
        if(response.data.success){
          setCartItems({})
          navigate('/orders')
        } else{
          toast.error(response.data.message)
        }
        break;
        case 'stripe':
         const responseStripe = await axios.post(backendUrl + '/api/order/stripe',orderData,{headers:{token}})
         if(responseStripe.data.success){
          const{session_url} = responseStripe.data
          window.location.replace(session_url)
         } else{
          toast.error(responseStripe.data.message)
         }
        break;
        default:
          break;
    }
 } catch (error) {
  
 }
}

  
  

  return (
    <form onSubmit={onSumbitHandler} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-13 min-h-[80vh]border-t'>
      {/*..leftside*/}
      <div className='flex flex-col gap-4 w-full sm:max-w-[470px]'>
        <div className='text-xl my-3 sm:text-2xl'>
          <Title text1={'Delivery'} text2={'Information'} />
        </div>
        <div className='flex gap-3'>
          <input required onChange={onChangeHandler} name='firstName' value={formdata.firstName} type="text" placeholder='First Name' className='border border-gray-500 rounded py-1.5 px-3.5 w-full' />
            <input required onChange={onChangeHandler} name='lastName' value={formdata.lastName}  type="text" placeholder='Last Name' className='border border-gray-500 rounded py-1.5 px-3.5 w-full' />
        </div>
          <input required onChange={onChangeHandler} name='email' value={formdata.email}  type="email" placeholder='Email Address' className='border border-gray-500 rounded py-1.5 px-3.5 w-full' />
            <input required onChange={onChangeHandler} name='street' value={formdata.street}  type="text" placeholder='Street' className='border border-gray-500 rounded py-1.5 px-3.5 w-full' />
            <div className='flex gap-3'>
          <input required onChange={onChangeHandler} name='city' value={formdata.city}  type="text" placeholder='City' className='border border-gray-500 rounded py-1.5 px-3.5 w-full' />
            <input required onChange={onChangeHandler} name='state' value={formdata.state}  type="text" placeholder='State' className='border border-gray-500 rounded py-1.5 px-3.5 w-full' />
        </div>
        <div className='flex gap-3'>
          <input required onChange={onChangeHandler} name='zipcode' value={formdata.zipcode}  type="number" placeholder='Zipcode' className='border border-gray-500 rounded py-1.5 px-3.5 w-full' />
            <input required onChange={onChangeHandler} name='country' value={formdata.country}  type="text" placeholder='Country' className='border border-gray-500 rounded py-1.5 px-3.5 w-full' />
        </div>
        <input required onChange={onChangeHandler} name='phone' value={formdata.phone}  type="number" placeholder='Phone' className='border border-gray-500 rounded py-1.5 px-3.5 w-full' />
      </div>
      {/*....*/}
      <div className='mt-8'>
       <div className='mt-8 min-w-80'>
        <CartTotal />
       </div>
       <div className='mt-11'>
        <Title text1={'Payment'} text2={'Method'} />
        <div className='flex gap-4 flex-col lg:flex-row'>
          <div onClick={()=>setMethod('stripe')} className='flex items-center cursor-pointer border p-2 px-3'>
            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-600' : ''}`}></p>
            <img className='h-5 mx-5' src={images.stripelogo} alt="" />
          </div>
          <div onClick={()=>setMethod('paypal')} className='flex items-center cursor-pointer border p-2 px-4'>
            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'paypal' ? 'bg-green-600' : ''}`}></p>
            <img className='h-10  mx-5' src={images.paypallogo} alt="" />
          </div>
          <div onClick={()=>setMethod('cod')} className='flex items-center cursor-pointer border p-2 px-4'>
            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-600' : ''}`}></p>
             <p>Cash On delivery</p>
          </div>

        </div>
         <div className='w-full text-end mt-8'>
          <button type='submit' className='rounded-lg bg-gray-900 px-14 py-3 text-sm text-white'>Place Order</button>
         </div>
       </div>
      </div>
    </form>
  )
}

export default PlaceOrder
