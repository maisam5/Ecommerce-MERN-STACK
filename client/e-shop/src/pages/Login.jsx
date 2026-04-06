import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const [currentState,setCurrentState] = useState('Login');
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const{token,setToken,navigate,backendUrl} = useContext(ShopContext)
  const onSubmitHandler = async(e)=>{
    e.preventDefault();
    try {
      if(currentState == 'Sign Up'){
       const response = await axios.post(backendUrl + '/api/user/register',{name,email,password})
       if(response.data.success){
        setToken(response.data.token)
        localStorage.setItem('token',response.data.token)
       } else{
        toast.error(response.data.message)
       }
      } else{
        const response = await axios.post(backendUrl + '/api/user/login',{email,password})
         if(response.data.success){
           setToken(response.data.token)
        localStorage.setItem('token',response.data.token)
         } else{
           toast.error(response.data.message)
         }
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }
  useEffect(()=>{
  if(token){
    navigate('/')
  }
  },[token])
  
  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-600'>
   <div className='inline-flex items-center gap-2 mb-2 mt-10'>
    <p className='text-2xl'>{currentState}</p>
    <hr className='border-non w-8 bg-gray-800 h-[1.5px]' />
   </div>
  {currentState==='Login' ? '' :<input onChange={(e)=>setName(e.target.value)} value={name} className='w-full px-3 py-2 border border-gray-700' required type="text" placeholder='Enter your Name' />}
    <input onChange={(e)=>setEmail(e.target.value)} value={email} className='w-full px-3 py-2 border border-gray-700' required type="email" placeholder='Enter your email' />
     <input onChange={(e)=>setPassword(e.target.value)} value={password} className='w-full px-3 py-2 border border-gray-700' required type="password" placeholder='Enter your password' />
     <div className='flex justify-between w-full text-sm mt-[-8px]'>
      <p className='cursor-pointer'>forget your password?</p>
      {
        currentState === 'Login'
        ? <p onClick={()=>setCurrentState('Sign Up')} className='cursor-pointer'>Create Account</p>
        : <p onClick={()=>setCurrentState('Login')} className='cursor-pointer'>Login here</p>
      }
     </div>
     <button className='bg-gray-900 text-gray-300 rounded-lg px-8 w-full py-2 hover:text-white cursor-pointer'>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
    </form>
  )
}

export default Login
