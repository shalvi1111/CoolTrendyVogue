import React from 'react';
function Contact() {
    return (
        <div className="conatiner text-center m-5 p-5" style={{color:"black"}}>
            <h1 className='fs-2'><i><b>Contact Us</b></i></h1>
            <h2 className='fs-5 text-muted'>Questions? Style advice? We’re here for you!</h2>

            <div className="contact mt-5 row">
                <span className=' col-4 ' ><img src='../font-awesome/images/location-pin.png' alt='Location' style={{width:"100px" , height:"200x"}}/>
               <br></br> <span><b>Location</b></span></span>
                <span className='  col-4'><img src='../font-awesome/images/smartphone-call.png' alt='Phone' style={{width:"100px" , height:"200x"}}/>
                <br></br> <span><b>Phone</b></span></span>
                <span className='  col-4'><img src='../font-awesome/images/gmail.png' alt='Gmail' style={{width:"100px" , height:"200x"}} />
                <br></br> <span><b>Email</b></span></span>

            </div>


        </div>
      );
}

export default Contact;