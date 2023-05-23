import React, {useState} from 'react'
import { useNavigate } from "react-router-dom"
import '../componentsCSS/Intro.css'
import axios from 'axios';
import FormData from 'form-data';

function Intro() {

  const navigate = useNavigate();
  const [user,setuser]=useState({firstName: "",lastName: "",city: "",state: "",email: "",password: ""});
  const [show,setShow]=useState("d-none");
 
  const addData = async() => { 

    // e.preventDefault();

    var formData = new FormData();

    formData.append('firstName',user.firstName);
    formData.append('lastName',user.lastName);  
    formData.append('city',user.city); 
    formData.append('state',user.state);
    formData.append('email',user.email);
    formData.append('password',user.password);


    // console.log("FormData is : ",Array.from(formData));

    const config=  {
      headers: {
        // "Content-Type": "multipart/form-data",
        "Content-Type": "application/json",
        "type": "FormData"
        
    }
  };

    await axios.post('http://localhost:8000/signup',formData,config).then(()=>{
      console.log("Succeed");
      localStorage.setItem("key",JSON.stringify(user));
      navigate("/");
    }).catch((err)=>{
      setShow("d-block");

      setTimeout(() => {
        setShow("d-none");
      },3000);
    })

    }


//  function handleClick(e){
//   e.preventDefault();
//   console.log("user: ",user);
//   localStorage.setItem("key",JSON.stringify(user));
//   navigate("/");
//  }
 
 const handleOnChange=(e)=>{
  setuser({...user,[e.target.name]: e.target.value});
//  console.log(user); 
 }
  
  return (
    <div className='bodyBox'>
      {/* <div className="intro_box container">
        <form action="/signup">
        <div className="intro_inputname">
          <input type="text " className="firstName inputName form-control" placeholder='First Name' name="firstName" value={user.firstName} onChange={handleOnChange}/>
          <input type="text " className="lastName inputName" placeholder='Last Name' name="lastName" value={user.lastName} onChange={handleOnChange}/>
        </div>

        <div className="intro_inputname">
          <input type="text " className="inputName form-control" placeholder='city' name="city" value={user.city} onChange={handleOnChange}/>
          <input type="text " className="inputName" placeholder='state' name="state" value={user.state} onChange={handleOnChange}/>
        </div>

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
  <span className="btn btn-dark text-light my-2" onClick={addData}>signup</span>
  </form>
      </div> */}

<div className={`position-absolute alert alert-danger ${show}`} role="alert">
  sorry user already exists with this email
</div>

<div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
  <div className="toast-header">
    {/* <img src="..." className="rounded me-2" alt="..."/> */}
    <strong className="me-auto">Bootstrap</strong>
    <small className="text-body-secondary">11 mins ago</small>
    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
  <div className="toast-body">
    Hello, world! This is a toast message.
  </div>
</div>


<div className="inforationBOX col col-md-7">
  <div className='row m-auto my-3'>
<div className="container d-flex justify-content-evenly">
    <input type="text" id="inputfirstname" className="form-control mx-2 " placeholder='FirstName' name="firstName" value={user.firstName} onChange={handleOnChange}/>
    <input type="text" id="inputlastname" className="form-control mx-2 " placeholder='LastName' name="lastName" value={user.lastName} onChange={handleOnChange}/>
    </div>
</div>

<div className='row m-auto my-3'>
<div className="container d-flex justify-content-evenly">
    <input type="text" id="inputcityname" className="form-control mx-2" placeholder='City' name="city" value={user.city} onChange={handleOnChange}/>
    <input type="text" id="inputstate" className="form-control mx-2" placeholder='State' name="state" value={user.state} onChange={handleOnChange}/>
    </div>
</div>

  <div className="my-3 mrow m-auto">
  <div className="emailclass m-auto">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"name="email" value={user.email} onChange={handleOnChange} />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  </div>

  <div className="my-3 row m-auto">
  <div className=" m-auto">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={user.password} onChange={handleOnChange}/>
  </div>
  <button type="submit" className="my-2 submit btn btn-primary" onClick={addData}>Signup</button>
  <a href="\login">Login with existing account</a>
   </div>
  </div>
    </div>
  )
}

export default Intro
