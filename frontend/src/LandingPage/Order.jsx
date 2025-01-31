import React from 'react';
function Order() {
    return ( 
       <div className="container">
        <div className="row mb-5 p-2">
            <div className="col-4 m-4">
              <h1 className='fs-2' style={{textDecoration:"underline"}}><strong><i>Shipping <span style={{color:"#A3567A"}}>Address</span> </i></strong><i class="fa fa-map-marker" aria-hidden="true"></i></h1>
              <form>
                 <div className='mt-4'>
                  <label htmlFor='name'  class="form-label"><strong>Full name:</strong></label>
                <input type='text' placeholder='Enter your name' class="form-control" name='name' />
                </div>

                <div className='mt-4'>
                  <label htmlFor='email'  class="form-label"><strong>Email address:</strong></label>
                <input type='email' placeholder='Enter your email address' class="form-control" name='email' />
                </div>

                <div className='mt-4'>
                  <label htmlFor='address'  class="form-label"><strong>Address:</strong></label>
                <input type='object' placeholder='Enter your address' class="form-control" name='address' />
                </div>

                <div className="row mt-4">
                    <div className="col-6">
                    <label htmlFor='state'  class="form-label"><strong>State:</strong></label>
                    <input type='text'  class="form-control" name='state' />
                    </div>
                    <div className="col-6">
                    <label htmlFor='city'  class="form-label"><strong>City:</strong></label>
                    <input type='text'  class="form-control" name='city' />
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-6">
                    <label htmlFor='pincode'  class="form-label"><strong>Pincode:</strong></label>
                    <input type='Number'  class="form-control" name='pincode' />
                    </div>
                    <div className="col-6">
                    <label htmlFor='country'  class="form-label"><strong>Country:</strong></label>
                    <input type='text'  class="form-control" name='country' />
                    </div>
                </div>

              </form>
            </div>
            <div className="col-6 mt-4">
                  <h1 className='text-end' style={{textDecoration:"underline"}}><i>Cart <span style={{color:"#A3567A"}}>Total</span></i></h1>
                  <div className="row">
                    <div className="col-12 text-end mt-5 ">
                        <strong className=' me-5 pe-4'>Subtotal:</strong>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       
                        <strong className=' ms-5' >$price</strong>
                    </div>
                   <div className="line me-5" style={{marginLeft:"300px" , width:"500px"}}>
                    <hr className=''></hr>
                   </div>
                    <div className="col-12 text-end mt-1 ">
                        <strong className=' me-5  pe-4'>Shipping:</strong>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       
                        <strong className=' ms-5 ' >$free:</strong>
                    </div>

                    <div className="line me-5" style={{marginLeft:"300px" , width:"500px"}}>
                    <hr className=''></hr>
                   </div>
                    <div className="col-12 text-end mt-1 ">
                        <strong className=' me-5  pe-4 '>Total:</strong>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       
                        <strong className=' ms-5 ' >$abc:</strong>
                    </div>

                    <div className="col-12  mt-5" >
                      <h1 style={{textDecoration:"underline"}} className='fs-3 text-end'><i>Select payment method:</i></h1>
                     </div>

                      <div className="col-12  mt-3 ms-5 "  >
                      <div class="form-check  ms-5" >
                      <input class="form-check-input ms-5 "  type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                      <label class="form-check-label fs-2 " for="flexRadioDefault1" style={{color:"purple"}}>
                       <b>stripe</b>
                     </label>
                      </div>

                  <div class="form-check ">
                   <input class="form-check-input " type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                   <label class="form-check-label fs-4" for="flexRadioDefault1">
                    <i><b>Razorpay</b></i>
                   </label>
                  </div>


                  <div class="form-check ms-5">
                   <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                   <label class="form-check-label fs-4" for="flexRadioDefault1">
                     <b>Cash on delivery</b>
                    </label>
                   </div>
                       
                       <button className='btn btn-dark ' style={{marginLeft:"420px"}}>Place Order</button>
                    </div>
                  </div>
            </div>
        </div>
       </div>
     );
}

export default Order;