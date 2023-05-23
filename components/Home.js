import React,{useEffect,useState} from 'react'
import { useNavigate } from "react-router-dom"
import '../componentsCSS/Home.css'
import { useContext } from 'react';
import NoteContext from '../context/Notecontext';
// import Cardadd from './Cardadd';
import axios from 'axios';


function Home() {

  const[user,setUser]=useState([]);
  
  const fetchAllData = async() => {     
    await axios.get("http://localhost:8000")
  .then(res => {
    const persons = res.data;
    setUser(persons); 
  }) 
}


  //do not disturb plz
  const {setTemp,array,data}=useContext(NoteContext);

  const navigate = useNavigate();

  function onclick(item){
    console.log("clicked",item);
    setTemp(item);
    console.log(item);
    navigate("/product");
  }

  useEffect(()=>{

    fetchAllData();
    console.log("user name: ",user);

    //do not disturb
    let item=localStorage.getItem("key");
    
      if(!item){
      navigate("/signup"); 
      }
    },[]);

  return (
    <div className='home_body'>


{data=="" ? user.map((item) => {
  const base64String1 = btoa(
    new Uint8Array(item.image1.data.data).reduce(function (data, byte) {
      return data + String.fromCharCode(byte);
    }, "")
  )
        return <div className='home_card my-3' key={item._id} onClick={()=>{onclick(item)}}>
          <img src={`data:image/png;base64,${base64String1}`} alt="alternative" className='home_card_image' width="150px"/>
          <div className="home_cardinfo">
          {item.address} <br/>
          {item.cost}
          </div>
        </div>
      })
      :
      data.map((item) => {
        const base64String1 = btoa(
          new Uint8Array(item.image1.data.data).reduce(function (data, byte) {
            return data + String.fromCharCode(byte);
          }, "")
        )
              return <div className='home_card my-3' key={item._id} onClick={()=>{onclick(item)}}>
                <img src={`data:image/png;base64,${base64String1}`} alt="alternative" className='home_card_image' width="150px"/>
                <div className="home_cardinfo">
                {item.address} <br/>
                {item.cost}
                </div>
              </div>
            })

      }


    </div>
  )
}

export default Home
