import React, { useContext } from 'react'
import { Context } from '../Context'
import './singleProduct.css'
import SingleProduct from './SingleProduct';

function SearchResults({ onAddToCart}) {

    const {filteredData, setFilteredData} = useContext(Context);

      return (

    <div className='search-container'>
            {filteredData.length >= 1 && filteredData.map((product) => (
               <>
               <SingleProduct key={product.id} product={product}  onAddToCart={ onAddToCart} />
             </>
            ))}
    </div>
  )
}

export default SearchResults
