import React, { useEffect, useState} from 'react'
import '../componentsCSS/Navbar.css'
import axios from 'axios';
import { useContext } from 'react';
import NoteContext from '../context/Notecontext';


function Navbar() {

  const {setData}=useContext(NoteContext);

  const [search,setSearch]=useState({text: ""});
  
  function onChangeHandler(e){
   setSearch({...search,[e.target.name]: e.target.value});
   console.log(search);
  }

  const onChangeData = async(e) => { 

    e.preventDefault();

    var formData = new FormData();

    formData.append('city',search.text);

    console.log("FormData is : ",Array.from(formData));

    const config=  {
      headers: {
        // "Content-Type": "multipart/form-data", 
        "Content-Type": "application/json",
        "type": "FormData"
        
    }
  };

    await axios.post('http://localhost:8000/search',formData,config).then((res)=>{
      setData(res.data);
      console.log("Succeed : ",res.data);
    }).catch((err)=>{
      setData("no data found");
      console.log("err is : ",err);
    })

    }

    return (
        <div>
            <nav className={`navbar navbar-expand-lg `}>
                <div className="container-fluid">
                    
                        {/* <a className="navbar-brand" href="/">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button> */}

                       
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" name="text" value={search.text} onChange={onChangeHandler}/>
                                <button className="btn btn-outline-success" type="submit" onClick={onChangeData}>Search</button>
                            </form>
                        </div>
                    
                        <button type="button" className="nav_button btn btn-secondary mx-2 my-2 collapse navbar-collapse btn-sm" id="navbarSupportedContent"><a className='text-decoration-none text-light' href="/createADD">createADD</a></button>
                        <button type="button" className="nav_button btn btn-primary mx-2 my-2 collapse navbar-collapse btn-sm" id="navbarSupportedContent" data-bs-toggle="modal" data-bs-target="#exampleModal">Logout</button>
                        
                        
                </div>
            </nav>



  <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">are sure you want lo logout?</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal"><a className='text-decoration-none text-light' href='\login'>OK</a></button>
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default Navbar;