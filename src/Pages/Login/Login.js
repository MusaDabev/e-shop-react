import React from 'react'
import {Button} from '@mui/material'
import './login.css'


 function Login() {

 
  return (
    <>  
    <h2 className="login-heading">Вход</h2>
    <form action="#" className="login-form">
    
      <input type="email" name="email" placeholder="Email" />

      <input type="password" name="password" placeholder="Парола" />

      <Button type="submit" variant="contained" style={{width: '150px', textAlign: 'center', backgroundColor: '#124FF2'}}>Вход</Button> 
    </form>
    </>
  )
}

export default Login
