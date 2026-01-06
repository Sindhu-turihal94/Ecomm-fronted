import React from "react";
import {Link} from "react-router-dom"
function Header() {
  return (
    <>
    <div >
      <header style={{
            display: "flex",
            justifyContent: "space-evenly",
            border: "solid 1px black",
          }} >
        <div>
            <img
              height={50}
              width={50}
              style={{ borderRadius: "50%", display:'flex',alignItems:'center' }}
              dis
              src="https://res.cloudinary.com/dhdepk5ib/image/upload/v1757696461/samples/ecommerce/leather-bag-gray.jpg"
              alt=""
            />
            <b>My Bag</b>
          </div>
      <nav style={{display:"flex",gap:'20px',alignItems:"center"}}>
       <Link to={"/"}><a href="">Home</a></Link> 
       <Link to={"/about"}><a href="">About</a></Link> 
        <Link to={"/register"}><a href="">Register</a></Link>
      <Link to={"/login"}><a href="">Login</a></Link>  
       <Link to={"products"}><a href="">Products</a></Link> 
      </nav>
      </header>
      </div>
    </>
  );
}

export default Header;
