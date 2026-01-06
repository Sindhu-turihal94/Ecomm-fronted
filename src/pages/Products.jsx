import React from 'react'
 import { useState } from "react";
import { useEffect } from "react";
function Products() {
    const [products, setProducts] = useState([]);

    
  useEffect(() => { 
    fetch("https://ecomm-backend-m1u4.onrender.com/products")
     .then((response) => response.json())
     .then((data) => setProducts(data));
   }, []);
  const [count, setcount] = useState(0);
  // function which increases count
  //  let handlecount = () => { 
  //   setcount(count + 1);
  //  };

   return (
     <> 
     
   
       <h1>Ecommerce</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map(function (p) {
          return (
            <div key={p._id}>
              <img height={250} width={250} src={p.image} alt="" />
              <p>{p.title}</p>
              <p>{p.price}</p>
            </div>
          ); 
         })}
      </div>
    </>
  ); }

export default Products