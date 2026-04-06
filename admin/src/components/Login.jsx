import axios from 'axios'
import React, { useState } from 'react'
import { backendUrl } from '../App';
import { toast } from 'react-toastify';



const Login = ({setToken}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async(e)=>{
    try {
      e.preventDefault();
      const response = await axios.post(backendUrl + '/api/user/admin', {email,password})
      if(response.data.success){
        setToken(response.data.token)
      } else{
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }
  return (
   <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
  <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8">
    <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Admin Panel</h1>
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <p className="mb-1 text-sm font-medium text-gray-700">Email Address</p>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)} value={email}
          placeholder="example@gmail.com"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <p className="mb-1 text-sm font-medium text-gray-700">Password</p>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)} value={password}
          placeholder="Enter your password"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-200"
      >
        Login
      </button>
    </form>
  </div>
</div>

  )
}

export default Login
