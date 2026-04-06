import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Search, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const [visible, setVisible] =useState(false)
  const location = useLocation();
  

  
  useEffect(()=>{
  if(location.pathname.includes('collection') && showSearch){
  setVisible(true);
  } else{
    setVisible(false)
  }
  },[location])

  return showSearch && visible ? (
    <div className="bg-gray-100 border-y border-gray-500 py-6 px-4">
      <div className="max-w-xl mx-auto flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
        <Search className="text-gray-400" size={20} />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
          className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder:text-gray-400"
        />
        <X
          onClick={() => setShowSearch(false)}
          className="text-gray-500 cursor-pointer hover:text-red-500 transition"
          size={20}
        />
      </div>
    </div>
  ) : null
};

export default SearchBar;
