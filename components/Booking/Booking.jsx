import React, {useState} from 'react';
import './booking.css';
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";
import { useNavigate } from 'react-router-dom';

const Booking = ({ tour, avgRating }) => {
    const { price, reviews } = tour;
    const navigate=useNavigate()
    const [credentials,setCredentials]= useState({
        userId:'01',
        userEmail:'example@gmail.com',
        fullName:'',
        phone:'',
        guestSize:1,
        bookAt:''
    })

    const handleChange= e =>{
        setCredentials(prev=>({...prev,[e.target.id]:e.target.value}))

    };
    const serviceFee= 3;
    const totalAmount =Number(price) * Number(credentials.guestSize)+Number(serviceFee)
    const handleClick=e=>{
        e.preventDefault()
        navigate("/thank-you");
    }
    return <div className='booking'>
        <div className='booking__top d-flex align-items-center
        justify-content-between'>
            <h3>
                Rs:{price}<span>/per person</span>
            </h3>
        <span className="tour__rating d-flex align-items-center ">
            <i class="ri-star-half-s-line" ></i>
            {avgRating === 0 ? null : avgRating} ({reviews?.length})
        </span>

    </div>
    {/* booking form */}
    <div className="booking__form">
        <h5>Information</h5>
        <Form className="booking__info-form" onSubmit={handleClick}>
            <FormGroup>
                <input type="text" placeholder="Full Name" id="fullName" required onChange={handleChange}/>
            </FormGroup>
            <FormGroup>
                <input type="number" placeholder="Phone" id="phone" required onChange={handleChange}/>
            </FormGroup>
            <FormGroup className='d-flex align-items-center gap-3'>
                <input type="date" placeholder="" id="bookAt"  onChange={handleChange} required/>
                <input type="number" placeholder="How Many?" id="guestSize" onChange={handleChange} required/>
            </FormGroup>
        </Form>
    </div>
    {/* booking end*/}
    {/*booking bottom */}
     <div className='booking__bottom'>
        <ListGroup>
        <ListGroupItem className='border-0 px-0'>
            <h5 className='d-flex align-items-center gap-1'>
                Rs:{price}<i class="ri-close-fill"></i> {credentials.guestSize} people</h5>
            <span>Rs:{price}</span>
        </ListGroupItem>
        <ListGroupItem className='border-0 px-0'>
            <h5>service Charges</h5>
            <span>Rs:{serviceFee}</span>
        </ListGroupItem>
        <ListGroupItem className='border-0 px-0 total'>
            <h5>Total</h5>
            <span>Rs.{totalAmount}</span>
        </ListGroupItem>
        </ListGroup>
     </div>
     <Button className="btn primary__btn w-100 mt-4" onClick={handleClick} >Book Now</Button>
    {/*booking bottom  end*/}
    </div>
};

export default Booking;