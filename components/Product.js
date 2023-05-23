import React,{useState} from 'react'
import { useContext } from 'react'
import NoteContext from '../context/Notecontext';
import '../componentsCSS/Product.css'
import Carousel from 'react-bootstrap/Carousel';

function Product() {

    const {temp,setTemp}=useContext(NoteContext);
    console.log("The value of temp is: ",temp);


    const base64String1 = btoa(
      new Uint8Array(temp.image1.data.data).reduce(function (data, byte) {
        return data + String.fromCharCode(byte);
      }, "")
    )

    const base64String2 = btoa(
      new Uint8Array(temp.image2.data.data).reduce(function (data, byte) {
        return data + String.fromCharCode(byte);
      }, "")
    )

    const base64String3 = btoa(
      new Uint8Array(temp.image3.data.data).reduce(function (data, byte) {
        return data + String.fromCharCode(byte);
      }, "")
    )

    const base64String4 = btoa(
      new Uint8Array(temp.image4.data.data).reduce(function (data, byte) {
        return data + String.fromCharCode(byte);
      }, "")
    )

    // const [color,setColor]=useState(true);

    // setTimeout(() => {
    //   setColor(false);
    // },1500);

    // setTimeout(() => {
    //   setColor(true);
    // },2500);
     
  return (
    <div className='body'>
    <div className="box">
<Carousel>
      <Carousel.Item>
        {/* <img
          className="d-block w-100"
          src={temp.image1}
          alt="First slide"
        /> */}
        <img src={`data:image/png;base64,${base64String1}`} 
        className="d-block w-100"
          alt="First slide"/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        {/* <img
          className="d-block w-100"
          src={temp.image2}
          alt="Second slide"
        /> */}

<img src={`data:image/png;base64,${base64String2}`} 
        className="d-block w-100"
          alt="First slide"/>

        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        {/* <img
          className="d-block w-100"
          src={temp.image4}
          alt="Third slide"
        /> */}

<img src={`data:image/png;base64,${base64String3}`} 
        className="d-block w-100"
          alt="First slide"/>

        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>



      <Carousel.Item>
        {/* <img
          className="d-block w-100"
          src={temp.image4}
          alt="Third slide"
        /> */}

<img src={`data:image/png;base64,${base64String4}`} 
        className="d-block w-100"
          alt="First slide"/>

        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
    </div>

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">

      <div className="input-group inp">
      <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)"/>
      <span className="input-group-text">₹</span>
      </div>


         <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
         </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>


    <div className="description">
      <h3>{temp.address} <hr /></h3>
      <h3>{temp.cost}<hr /></h3>
      <h2>Phone: +91 9131396014</h2>
      <h3>This is a description Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque repellat exercitationem animi, ipsam assumenda voluptatem incidunt soluta quis delectus perspiciatis eum et quam reprehenderit. Dicta illo assumenda similique! Autem, ex! desc={temp.description}</h3>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Make an offer
</button>
    </div>
    </div>
  )
}

export default Product
