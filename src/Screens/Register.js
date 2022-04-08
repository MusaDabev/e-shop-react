import React from "react";
import './register.css'
import {Button} from '@mui/material'
import { textAlign } from "@mui/system";

function Register() {
  return (
    <>
      <h2 className="registration-heading">Регистрация</h2>
      <form action="#" className="register-form">
        <input type="text" name="fname" placeholder="Име" />

        <input type="text" name="lname" placeholder="Фамилия" />

        <input type="email" name="email" placeholder="Email" />

        <input type="password" name="password" placeholder="Парола" />

        <Button type="submit" variant="contained" style={{width: '150px', textAlign: 'center', backgroundColor: '#252525'}}>Регистрация</Button> 
      </form>
    </>
  );
}

export default Register;
