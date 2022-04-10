import React, { useContext, useState } from 'react'
import './searchBar.css'
import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Context } from '../Context'

function SearchBar({products, placeholder}) {

 const {filteredData, setFilteredData} = useContext(Context);

  const handleFilter = (event) => {
    const searchWord = event.target.value 
   const newFilter = products.filter((value) => {
     return value.name.toLowerCase().includes(searchWord.toLowerCase())
   })
   setFilteredData(newFilter);

   if (searchWord === '' ) {
     setFilteredData([])
   }
  }

 

  return (
    <div className='search-bar'>
      <input type="text" placeholder={placeholder} onChange={handleFilter} />
      <Link to="/search-results" >
      <FaSearch style={{color: "black"}} className='search-bar-icon' />
      </Link>  
    </div>
  )
}

export default SearchBar
