import React from 'react';
function PaymentSuccessful() {
    return ( 
       <div className="container p-5 m-5 text-center">
         <img src='../font-awesome/images/order.png' alt='Successful' style={{height:"150px" , width:"150px"}} />
         <h1 className='fs-2 mt-2'><b>Order is placed. Successfully!</b></h1>
         </div>
     );
}

export default PaymentSuccessful;