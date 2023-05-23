import React from 'react'
import '../componentsCSS/Ex.css'
import { useState } from 'react';

function Ex() {

  const [net,setNet]=useState([5,4,3]);

  function handleclick(){
    setNet([...net,2]);
  }

 
  return (
    <div>
      {net}
    <div><button onClick={handleclick}>btn</button></div>
    </div>
  )
}

export default Ex
