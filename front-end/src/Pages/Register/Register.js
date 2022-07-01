import React from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import './register.css'
import {Button} from '@mui/material'



const REGISTER_URL = 'http://localhost:3500/register';

function Register() {

  const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

  
    useEffect(() => {
        
        setValidMatch(pwd === matchPwd);
        console.log(pwd);
        }, [pwd, matchPwd])


  const handleSubmit = async (e) => {

      e.preventDefault();

          const response = await axios.post(REGISTER_URL,
              JSON.stringify({ user, pwd }),
              {
                  headers: { 'Content-Type': 'application/json' },
                  withCredentials: true
              }
          );
  }

  
  return (
    <>
      <h2 className="registration-heading">Регистрация</h2>
      <form onSubmit={handleSubmit} className="register-form">
      <label htmlFor="username">
                            Username:
                        </label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                            aria-describedby="uidnote"
                        />
                       
                        <label htmlFor="password">
                            Password:
                        </label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                            aria-describedby="pwdnote"
                        />


                        <label htmlFor="confirm_pwd">
                            Confirm Password:
                        </label>
                        <input
                            type="password"
                            id="confirm_pwd"
                            onChange={(e) => setMatchPwd(e.target.value)}
                            value={matchPwd}
                            required
                        />
                      
        <Button type="submit" variant="contained" disabled={!validMatch ? true : false} style={{width: '150px', textAlign: 'center', backgroundColor: '#124FF2'}}>Регистрация</Button> 
      </form>
    </>
  );
}

export default Register;
