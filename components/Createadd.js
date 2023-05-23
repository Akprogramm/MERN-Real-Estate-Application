import React, {useState} from 'react'
import '../componentsCSS/Createadd.css'
import { useNavigate } from "react-router-dom"
// import { useContext } from 'react';
// import NoteContext from '../context/Notecontext';
import axios from 'axios'; 
import FormData from 'form-data';

function Createadd() {
  
  const navigate=useNavigate();

  const[fileData1,setFileData1]=useState([]);
  const[fileData2,setFileData2]=useState([]);
  const[fileData3,setFileData3]=useState([]); 
  const[fileData4,setFileData4]=useState([]);
  
  const addData = async() => {     
     
    var formData = new FormData();

    formData.append('description',value.description); 
    formData.append('cost',value.cost);  
    formData.append('address',value.address); 
    formData.append('phone',value.phone); 

    formData.append('city',value.city); 
    formData.append('state',value.state); 

    formData.append('image1',fileData1); 
    formData.append('image1',fileData2);  
    formData.append('image1',fileData3);  
    formData.append('image1',fileData4);

    console.log("formData are: ",Array.from(formData)); 

    const config=  {
      headers: {
        "Content-Type": "multipart/form-data",
        "type": "formData"
        
    }
  };

    axios.post('http://localhost:8000/upload',formData,config).then(()=>{
      navigate("/");
    })

  console.log(formData);

}   

  

  const [value,setValue]=useState({description: "",phone: "",cost: "",address: "",email: "",city: "",state: ""});

  function onChangeHandler(e){
    setValue({...value,[e.target.name]: e.target.value});
  } 


  return (
<div>
    <div className="form">
         <div className="images">
           <div className="image1 d-flex">image1: <input type="file" className="form-control" onChange={(e)=> setFileData1(e.target.files[0])} name='image1' id="customFile" placeholder='image1' /></div>
           <div className="image2 d-flex">image2: <input type="file" className="form-control" onChange={(e)=> setFileData2(e.target.files[0])} name='image2'  id="customFile" placeholder='image2' /></div>
           <div className="image3 d-flex">image3: <input type="file" className="form-control" onChange={(e)=> setFileData3(e.target.files[0])} name='image3'  id="customFile" placeholder='image3' /></div>
           <div className="image4 d-flex">image4: <input type="file" className="form-control" onChange={(e)=> setFileData4(e.target.files[0])} name='image4' id="customFile" placeholder='image4' /></div>
        </div>

      
      <input type="text" onChange={onChangeHandler} name='phone' value={value.phone} className='number' placeholder='phone'/>

      <input type="text" onChange={onChangeHandler} name='address' value={value.address} className='number' placeholder='Address'/>

      <input type="text" className='city my-2' onChange={onChangeHandler} name='city' value={value.city} placeholder='enter your city name'/>

      <input type="text" className='state my-2' onChange={onChangeHandler} name='state' value={value.state} placeholder='enter your state'/> 

      <input type="email" className='email my-2' onChange={onChangeHandler} name='email' value={value.email} placeholder='enter your email address'/> 

      <input type="number" className='cost my-2' onChange={onChangeHandler} name='cost' value={value.cost} placeholder='price you want'/>

      <textarea className='description' onChange={onChangeHandler} name='description' value={value.description} id="" cols="30" rows="5" placeholder='Enter description'></textarea>
        

      <button className='btn btn-primary' onClick={addData}>submit</button>
    </div>

</div>
  )
}

export default Createadd;
