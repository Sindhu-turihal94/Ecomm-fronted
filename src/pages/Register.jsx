import React from 'react'
import { useState } from 'react';
function Register() {
    const [username,setusername]=useState('')
     const [email,setemail]=useState('')
      const [password,setpassword]=useState('')
    //   function which handles my deatils
    let submitdetails=async(e)=>{
        // the page will reload
        e.preventDefault()

        // send the deatails to the backed
        let data={username,password,email}
       let result=await fetch('https://ecomm-backend-m1u4.onrender.com/register',{
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
   <div style={{borderRadius: "50%", display:'flex',alignItems:'center'}}>
   <h1>REGISTRATION FROM</h1>
   <form onSubmit={submitdetails}>
    <div>
        <label>Username</label>
        <br />
    <input type="text" onChange={(e)=>{setusername(e.target.value)}} />
    </div>
    <br />

    <div>
        <label>Email</label>
        <br />
    <input type="text" onChange={(e)=>{setemail(e.target.value)}}/>
    </div>
<br />
    <div>
        <label>Password</label>
        <br />
    <input type="text" onChange={(e)=>{setpassword(e.target.value)}}/>
    </div>
    <br />
    <button type='submit'>Submit</button>
   </form>
   </div>
   </>
  )
}

export default Register;