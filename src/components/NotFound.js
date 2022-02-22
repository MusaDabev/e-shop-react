import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='notFound'>
      <h1>Sorry...</h1>
      <h3>That page cannot be found</h3>
      <Link to='/'>Go back to home page</Link>
    </div>
  )
}

export default NotFound
