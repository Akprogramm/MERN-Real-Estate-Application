import React from 'react'
import axios from "axios"
import { useState,useEffect} from 'react'
// import btoa from 'base-64'

export default function Image() {
  const [data,setData]=useState([]);
  

  useEffect(()=>{
    axios.get("http://localhost:8000").then((res)=>setData(res.data))
    .catch((err)=>console.log(err));
  })
  // console.log(data);
  return (
    <>
      THis is a image

        {/* {data.map((singleData)=>{

           const base64String=btoa(
            String.fromCharCode(...new Uint8Array((singleData.image.data.data)))
           );
      
           return <img src={`data:image/png;base64,${base64String}`} alt="alt" width="300" key={singleData.image.data.data}/>;
          })
        } */}
      
      {data.map((obj) => {
          const base64String = btoa(
            new Uint8Array(obj.image.data.data).reduce(function (data, byte) {
              return data + String.fromCharCode(byte);
            }, "")
          );
          return (
            <img
            key={obj._id}
              src={`data:image/png;base64,${base64String}`}
              alt="alt"
              width="300px"
              height="300px"
            />
          );
        })}



    </>
  )
}
