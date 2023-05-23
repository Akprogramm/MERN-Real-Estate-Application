import React, {useState} from 'react'
import { useNavigate } from "react-router-dom"
import '../componentsCSS/Login.css'
import axios from 'axios'; 
import FormData from 'form-data';

function Login() {
  const navigate = useNavigate();
  const [user,setuser]=useState({email: "",password: ""});
  const [show,setShow]=useState("d-none");
  const [data,setData]=useState("");

 const fetchData = async() => {

  var formData = new FormData();

  formData.append('email',user.email); 
  formData.append('password',user.password);  
  console.log(Array.from(formData));

  const config=  {
    headers: {
      "Content-Type": "application/json",
      "type": "FormData"
      
  }
};

 await axios.post('http://localhost:8000/login',formData,config).then((res)=>{
    console.log("res is : ",res)
    if(res.data.email){
      return navigate("/"); 
    }
    else{
     console.log(res.data);
     setShow("d-block");

     setTimeout(() => {
      setShow("d-none");
     },3000);
     
     setData(res.data);
    }

   }).catch((err)=>{
    console.log("errname: ",err);
  });

 }

 
 const handleOnChange=(e)=>{
  setuser({...user,[e.target.name]: e.target.value});
 console.log(user); 
 }
  
  return (
    <div>
      <div className="intro_box container">

      <div className={`position-absolute alert alert-danger ${show}`} role="alert">
      {/* sorry user already exists with this email */}
      {data}
     </div>

        <form action="/signup">

  <div className="mb-3 my-2 container">
    <label htmlFor="email" className="form-label text-dark fs-5">
    <input type="email" className="email form-control intro_email" id="email" aria-describedby="emailHelp" placeholder='EX@gmail.com' name="email" value={user.email} onChange={handleOnChange}/>
    </label>
  </div>
  <div className="mb-3 container">
    <label htmlFor="exampleInputPassword1" className="form-label text-dark fs-5">
    <input type="password" className="password form-control intro_email" id="exampleInputPassword1" placeholder='Password' name="password" value={user.password} onChange={handleOnChange}/>
    </label>
  </div>

  <span className="btn btn-dark text-light my-2" onClick={fetchData}>Login</span>
  </form>
  <a href="\signup">Signup with a new existing account</a>
      </div>

    </div>
  )
}

export default Login