
import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../components/UserContext';

 function Login() {

 
  return (
    <div className='login-form'>
      <form action="#">
          <label htmlFor="userName">Потребителско име</label>
          <input type="username" placeholder='your username' />
      </form>
    </div>
  )
}

export default Login
