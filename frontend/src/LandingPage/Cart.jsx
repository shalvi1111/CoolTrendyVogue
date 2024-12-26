import React from 'react';
function Cart() {

    // const [item , setItem] = useState([]);

    // if(item < 1){
    //    return( 
    //     <div className="container text-center p-5 m-5">
    //         <strong className='fs-4'>Track my order</strong>
    //         <p className='fs-1 text-muted' style={{color:"grey"}}><i class="fa fa-times-circle-o " aria-hidden="true"></i></p>
    //          <p>Your shopping cart is empty!</p>
    //          <button className='btn btn-success m-1 p-2 ' style={{fontWeight:"bold"}}>CONTINUE</button>
    //     </div>
    //    )
    // }
    
    return ( 
        <div className="container">
            <div className="row p-5 m-5">

                <div className="col-7 ">
                   <div className="row">
                    <div className="col-10">
                        <strong>ITEM(S)</strong>
                    </div>
                    <div className="col-2">
                     <p>   <strong>TOTAL</strong> </p>
                      <strong>PRICE</strong>
                    </div>
                   </div>

                   <div className="row">
                    <div className="col-5">
                       <p><b>PRODUCT</b></p>
                      
                    </div>
                    <div className="col-3">
                    <p><b>PRICE</b></p>

                    </div>
                    <div className="col-4 text-end">
                    <p><b>Quantity</b></p>

                    </div>
                   </div>

                </div>


                <div className="col-5 text-center  ">
                  
                <div class="card w-100">
                <div class="card-body">
                   <h5 class="card-title">PRICE DETAILS</h5>
                  <p class="card-text">PRICE qty  
                    <strong className='mx-5 px-5 text-sm-end' >rupees</strong> </p>
                    <br></br>
                    <p>DELIVERY CHARGES 
                        <strong className='mx-5 px-5' style={{color:"green"}}>Free</strong>
                    </p>
                    <hr></hr>
                  
                  {/* <a href="#" class="btn btn-success mx-5  text-center" style={{alignItems:"center"}}>PLACE ORDER</a> */}
                 </div>
                </div>

                 
                </div>
            </div>
           
        </div>
     );
}

export default Cart;