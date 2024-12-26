import React from 'react';
function SalerForm() {
    return ( 

     
       <>
         <div className="container m-2 p-2 text-center">
            <div className="row m-2 ">
                <div className="col-7 " >
                <img src=' ../font-awesome/images/BrandLogo.png' alt='Signup' style={{width:"80%"}}/>
                </div>
                <div className="col-5 mt-5">
                    <h1 className='fs-2 mb-5'><b>Log in</b></h1>
                  
                    <label forname= "email" className='mt-4 pt-2 ml-5'><b>Email : &nbsp; </b></label>
                    <input type='text' name='email' placeholder='Enter yout email ' style={{width:"70%"}} />
                    <br></br>


                    
                    <label forname= "password" className='mt-4 pt-2 ml-5'><b>Password : &nbsp; </b></label>
                    <input type='password' name='password' placeholder='Password ' style={{width:"70%"}} />
                       <br></br> <br></br>
                       
                    <a href='#' style={{textDecoration:"none"}}>Forget Password ?</a>


                    <form>

                      <button className='btn btn-dark mt-5 m-2' style={{width:"100px"}} >Sign in</button>
                    </form>
                   
                   </div>
               
            </div>
          
         </div>
        </>
     );
}

export default SalerForm;