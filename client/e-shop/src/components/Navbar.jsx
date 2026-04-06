import React, { useContext, useState } from 'react';
import { images } from '../assets/assets';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { MenuIcon, Search, ShoppingCart, User } from 'lucide-react';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { setShowSearch, getCartCount,addToCart, token, setToken, setCartItems } = useContext(ShopContext);
  const navigate = useNavigate();

const logout = () => {
  
  localStorage.removeItem('token');
   navigate('/login')
  setToken('');
  setCartItems({});
  setDropdownOpen(false);
  navigate('/login')
};

  const handleUserIconClick = () => {
    console.log('User icon clicked, token:', token); // Debug: Check token state
    if (!token) {
      setDropdownOpen(false); // Ensure dropdown is closed
      navigate('/login', { replace: true }); // Navigate to login
    } else {
      setDropdownOpen(prev => !prev); // Toggle dropdown
    }
  };
  

  return (
    <div className='shadow-lg z-50 sticky bg-white-50 top-0 w-full'>
      <div className="flex items-center justify-between py-6 px-4 sm:px-6 font-medium">
        {/* Mobile Menu Icon */}
        <div className="sm:hidden">
          <MenuIcon onClick={() => setVisible(true)} className="w-6 h-6 cursor-pointer" />
        </div>

        {/* Logo */}
        <Link to={'/'}>
          <img src={images.logoimg} alt="Logo" className="w-20 h-12 mx-auto sm:mx-0" />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden sm:flex gap-4 text-sm text-black">
          <NavLink to="/" className="hover:text-red-600">HOME</NavLink>
          <NavLink to="/collection" className="hover:text-red-600">COLLECTIONS</NavLink>
          <NavLink to="/contact" className="hover:text-red-600">CONTACT</NavLink>
          <NavLink to="/about" className="hover:text-red-600">ABOUT</NavLink>
        </ul>

        {/* Right Icons */}
        <div className="flex items-center gap-4 relative">
          {/* Search Icon */}
          <Search className="cursor-pointer" onClick={() => setShowSearch(true)} />

          {/* User Icon and Dropdown */}
          <div className="relative">
            <User onClick={handleUserIconClick} className="cursor-pointer" size={20} />

            {token && dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-50 text-sm">
                <Link
                  to="/profile"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setDropdownOpen(false)}
                >
                  My Profile
                </Link>
                <Link
                  to="/orders"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setDropdownOpen(false)}
                >
                  Orders
                </Link>
                <button
                  onClick={() => logout()}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Cart */}
          <Link to="/cart" className="relative inline-block">
            <ShoppingCart className="w-6 h-6" />
            <p className="absolute -top-1 -right-1 w-4 h-4 flex items-center justify-center bg-black text-white text-[8px] rounded-full">
              {getCartCount()}
            </p>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className={`fixed top-0 left-0 w-full h-full bg-white shadow-lg transform ${visible ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50 sm:hidden`}>
          <div className="flex flex-col p-6 h-full">
            <div className="flex justify-between items-center mb-6">
              <img src={images.logoimg} alt="Logo" className="w-20 h-12" />
              <button onClick={() => setVisible(false)} className="text-gray-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <NavLink onClick={() => setVisible(false)} to="/" className="py-2 text-gray-700 hover:text-red-600">HOME</NavLink>
            <NavLink onClick={() => setVisible(false)} to="/collection" className="py-2 text-gray-700 hover:text-red-600">COLLECTIONS</NavLink>
            <NavLink onClick={() => setVisible(false)} to="/contact" className="py-2 text-gray-700 hover:text-red-600">CONTACT</NavLink>
            <NavLink onClick={() => setVisible(false)} to="/about" className="py-2 text-gray-700 hover:text-red-600">ABOUT</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;