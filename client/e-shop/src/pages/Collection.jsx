import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { ChevronDown } from 'lucide-react';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products,search,showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts]= useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType,setSortType] = useState('relevent')
  const toggleCategory = (e)=>{
  if(category.includes(e.target.value)){
    setCategory(prev=>prev.filter(item=>item !== e.target.value))
  }
  else{
    setCategory(prev=>[...prev,e.target.value])
  }
  }
   const toggleSubCategory = (e)=>{
  if(subCategory.includes(e.target.value)){
    setSubCategory(prev=>prev.filter(item=>item !== e.target.value))
  }
  else{
    setSubCategory(prev=>[...prev,e.target.value])
  }
  }
  const applyFilter = ()=>{
    let productCopy = products.slice();
    if(showSearch && search){
      productCopy = productCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
    }
    if(category.length > 0){
      productCopy = productCopy.filter(item=>category.includes(item.category));

    };
    if (subCategory.length > 0) {
      productCopy = productCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }
    
    
    setFilterProducts(productCopy);
  }
  const sortProducts = ()=>{
    let fpCopy = filterProducts.slice();
    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)));
        break;
        case 'high-low':
          setFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)));
          break;
          default:
            applyFilter();
            break;

    }
  }
   useEffect(()=>{
   applyFilter();
  },[category, subCategory, search, showSearch,products])

  useEffect(()=>{
    sortProducts();
  },[sortType])

 
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* filters */}
      <div className="min-w-60">
        {/* Header: click only shows filter on mobile */}
        <h3
          className="text-xl cursor-pointer flex items-center gap-2 sm:cursor-default"
          onClick={() => setShowFilter(!showFilter)}
        >
          Filters <ChevronDown className={`sm:hidden ${showFilter ? 'rotate-90' : ''}`} />
        </h3>

        {/* category filters */}
        <div
          className={`border border-gray-900 pl-5 py-3 mt-6 ${
            showFilter ? 'block' : 'hidden'
          } sm:block`} // always block on sm+ screens
        >
          <p className="mb-3 font-medium text-sm">Categories</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Men'} onChange={toggleCategory} /> Men
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Women'} onChange={toggleCategory} /> Women
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Kids'} onChange={toggleCategory} /> Kids
            </p>
          </div>
        </div>
        {/*subcategory filter */}
         <div
          className={`border border-gray-900 pl-5 py-3 my-5 ${
            showFilter ? 'block' : 'hidden'
          } sm:block`} // always block on sm+ screens
        >
          <p className="mb-3 font-medium text-sm">Type</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Topwear'} onChange={toggleSubCategory} /> TopWear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Winterwear'} onChange={toggleSubCategory} /> WinterWear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Bottomwear'} onChange={toggleSubCategory} /> BottomWear
            </p>
          </div>
        </div>
      </div>
      {/* rightside*/}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
         <Title text1={'All'} text2={'Collections'} />
         {/* productsort*/}
         <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-500 text-sm px-2'>
          <option value="relevant">Sort By: Relevent</option>
          <option value="low-high">Sort By: Low To High</option>
          <option value="high-low">Sort By: High To Low</option>
         </select>
        </div>
        {/* map products*/}
        <div className='grid grid-col-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
         {
          filterProducts.map((item,index)=>(
            <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
          ))
         }
        </div>
      </div>
    </div>
  );
};

export default Collection;
