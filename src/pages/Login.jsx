import React from 'react'
import { useState } from 'react';
function Login() {
    const [email,setemail]=useState();
    const [password,setpassword]=useState();
    let logindeatils=async(e)=>{
         e.preventDefault();
         let data={email,password}
         let result =await fetch('https://ecomm-backend-m1u4.onrender.com/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
              body:JSON.stringify(data)
         })
           let finalresult=await result.json();
        alert(`${finalresult.msg}`)
    }
  return (
    <>
    <h1>Login</h1>
    <form onSubmit={logindeatils}>
        <div>
            <label>Email</label>
            <br />
            <input type="text" onChange={(e)=>{setemail(e.target.value)}} />
        </div>
        <div>
            <label>Password</label>
            <br />
            <input type="text" onChange={(e)=>{setpassword(e.target.value)}} />
        </div>
        <br />
        <button type='submit'>
            Submit
        </button>
    </form>
    </>
  )
}

export default Login;
