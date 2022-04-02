import React from 'react'

function Register() {
  return (
    <div className='register'> 
      <form action="#">
          <div>
          <label htmlFor="fname">Име</label>
          <input type="text" />
          </div>

          <div>
          <label htmlFor="lname">Име</label>
          <input type="text" />
          </div>

          <div>
          <label htmlFor="userName">Име</label>
          <input type="username" />
          </div>

          <div>
          <label htmlFor="password">Име</label>
          <input type="password" />
          </div>
          

      </form>
    </div>
  )
}

export default Register
