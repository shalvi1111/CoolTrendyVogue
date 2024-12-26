import React, { useState } from 'react';
function SignUpSaler() {

    const [phoneNumber , setPhoneNumber] = useState("");

        const handlePhoneNumber = ()=>{
            setPhoneNumber();
        }

        const handlePhoneSubmit = ()=>{

        }
    return ( 
        <>
         <div className="container m-2 p-2 text-center">
         <form onSubmit={handlePhoneSubmit}>
            <div className="row  ">
                
                <div className="col-7 " >
                <img src=' ../font-awesome/images/BrandLogo.png' alt='Signup' style={{width:"80%"}}/>
                </div>
                <div className="col-5 mt-5">
                    <h1 className='fs-2 mb-5'><b>Sign up with Phone</b></h1>
                  
                    <label forname= "phone" className='mt-4 pt-2 ml-5'><b>Mobile Numbeer : &nbsp; </b></label>
                    <input type='tel' name='phone' placeholder='Enter yout Number 'pattern='[0-9]{10}' style={{width:"50%"}} 
                      value={phoneNumber} onChange={handlePhoneNumber}/>
                    <br></br>



                    
                    <label forname= "Number" className='mt-4 pt-2 ml-5'><b>OTP : &nbsp; </b></label>
                    <input type='Number' name='Number' placeholder='OTP ' pattern='[0-3]{4}' style={{width:"20%"}} />
                       <br></br> <br></br>
                       
                    <p className='mt-5 text-muted fs-6'>You will recieve an OTP on your number.</p>


                    

                      <button className='btn btn-dark mt-5 m-2' style={{width:"100px"}} type='submit'>Sign up</button>
                  
                   
                   </div>
                
            </div>
            </form>
         </div>
        </>
     );
}

export default SignUpSaler;
