import "./App.css";
// import { use } from "react";
// import { useState } from "react";
// import { useEffect } from "react";
import Products from "./pages/Products";
import Register from "./pages/Register";
import Header from "./Header";
import Home from "./pages/Home";
import About from "./pages/About"
import Login from "./pages/Login"
import {BrowserRouter,Routes,Route} from 'react-router-dom'

// jsx is javascript function which returns html code
// use state is used to handle the state in react
// use effect is used to handle side effects in react like api calls

function App() {
  return(
  <>
 <BrowserRouter>
   <Header/>
<Routes>

 <Route path="/register" element={<Register/>}/>
 <Route path="/products" element={<Products/>}/>
  <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
      <Route path="/login" element={<Login/>}/>


</Routes>

 </BrowserRouter>
  

    </>
  )
}
export default App;
