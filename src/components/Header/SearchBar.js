import React from 'react'
import './searchBar.css'
import {FaSearch} from 'react-icons/fa'

function SearchBar({products, placeholder}) {
  return (
    <div className='search-bar'>
      <input type="text" placeholder={placeholder} />
      <FaSearch className='search-bar-icon' />
    </div>
  )
}

export default SearchBar
