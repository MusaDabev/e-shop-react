import React from 'react'
import {Link} from 'react-router-dom'

function Dashboard() {
  return (
    <>
     <nav>
      <ul>
        <li>
          <Link to={'/dashboard/orders'}>Поръчки</Link>
        </li>
      </ul>
     </nav>
    </>
  )
}

export default Dashboard
