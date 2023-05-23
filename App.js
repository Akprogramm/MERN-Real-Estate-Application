import './App.css';
import {Routes, Route} from "react-router-dom";


import Navbar from './components/Navbar';
import Intro from './components/Intro.js';
import Login from './components/Login.js';
import Home from './components/Home';
import Product from './components/Product';
import Notestate from './context/Notestate';
import Ex from './components/Ex';
import Createadd from './components/Createadd';
import { useState } from 'react';

// import Image from "./components/Image.js";

function App() {
  document.title="Reat-estate-app";
  // localStorage.setItem("key",JSON.stringify({name: "AK",age: 20}));
  let token=0;
  token=JSON.parse(localStorage.getItem("key"));
  // console.log("key is : ",token);

  return (
    <div className="App">

    {/* <Image/> */}

   <Notestate>
     <Routes>
     <Route exact path="/" element={[<Navbar key={1}/>,<Home key={2}/>]}/>
     <Route exact path="/signup" element={<Intro name={token}/>}/>
     <Route exact path="/login" element={<Login/>}/>
     <Route exact path="/product" element={<Product/>}/>
     <Route exact path="/createadd" element={<Createadd/>}/>
     <Route exact path="/ex" element={<Ex/>}/>
     </Routes>
    </Notestate>
    </div>
  );
}

export default App;



