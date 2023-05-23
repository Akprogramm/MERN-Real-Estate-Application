import React, { useState } from "react";
import Notecontext from "./Notecontext";

const Notestate=(props)=>{
  const [state,setstate]=useState("This is a state");
  const [temp,setTemp]=useState("");
  const [none,setnone]=useState("none");
  const [array,setarray] = useState([
    {
      image1: "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg",
      image2: "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg",
      image3: "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg",
      image4: "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg",
      id: 1,
      address: "Moti tabela 71/1 indore",
      cost: "Price: Rs1000000"
    }, {
      image1: "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg",
      image2: "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg",
      image3: "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg",
      image4: "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg",
      id: 2,
      address: "Moti tabela 71/1 indore",
      cost: "Price: Rs1000000"
    }, {
      image1: "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg",
      image2: "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg",
      image3: "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg",
      image4: "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg",
      id: 3,
      address: "Moti tabela 71/1 indore",
      cost: "Price: Rs1000000"
    }, {
      image1: "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg",
      image2: "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg",
      image3: "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg",
      image4: "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg",
      id: 4,
      address: "Moti tabela 71/1 indore",
      cost: "Price: Rs1000000"
    }, {
      image1: "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg",
      image2: "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg",
      image3: "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg",
      image4: "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg",
      id: 5,
      address: "Moti tabela 71/1 indore",
      cost: "Price: Rs1000000"
    }, {
      image1: "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg",
      image2: "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg",
      image3: "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg",
      image4: "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg",
      id: 6,
      address: "Moti tabela 71/1 indore",
      cost: "Price: Rs1000000"
    }, {
      image1: "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg",
      image2: "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg",
      image3: "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg",
      image4: "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg",
      id: 7,
      address: "Moti tabela 71/1 indore",
      cost: "Price: Rs1000000"
    }, {
      image1: "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg",
      image2: "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg",
      image3: "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg",
      image4: "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg",
      id: 8,
      address: "Moti tabela 71/1 indore",
      cost: "Price: Rs1000000"
    }, {
      image1: "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg",
      image2: "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg",
      image3: "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg",
      image4: "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg",
      id: 9,
      address: "Moti tabela 71/1 indore",
      cost: "Price: Rs1000000"
    }, {
      image1: "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg",
      image2: "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg",
      image3: "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg",
      image4: "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg",
      id: 10,
      address: "Moti tabela 71/1 indore",
      cost: "Price: Rs1000000"
    }, {
      image1: "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg",
      image2: "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg",
      image3: "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg",
      image4: "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg",
      id: 11,
      address: "Moti tabela 71/1 indore",
      cost: "Price: Rs1000000"
    }, {
      image1: "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg",
      image2: "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg",
      image3: "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg",
      image4: "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg",
      id: 12,
      address: "Moti tabela 71/1 indore",
      cost: "Price: Rs1000000"
    }
  ]);
  const[data,setData]=useState("");


  return (
    <Notecontext.Provider value={{array,setarray,none,setnone,temp,setTemp,state,setstate,data,setData}}>
       {props.children}
    </Notecontext.Provider>
  )
}

export default Notestate;

