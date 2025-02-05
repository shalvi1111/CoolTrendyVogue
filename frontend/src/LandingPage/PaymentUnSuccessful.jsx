import React from 'react';
function PaymentUnsuccessful() {
    return ( 
        <div className="container p-5 m-5 text-center">
         <img src='../font-awesome/images/close.png' alt='Unsuccessful' style={{height:"150px" , width:"150px"}} />
         <h1 className='fs-2 mt-4'><b>Payment Unsuccessful!</b></h1>
         </div>
     );
}

export default PaymentUnsuccessful;