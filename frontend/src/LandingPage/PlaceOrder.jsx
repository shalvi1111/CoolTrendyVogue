import React from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect ,useState } from 'react';
function PlaceOrder() {

    //  const id = useParams();
    //  console.log(id ,"12");
    const [count, setCount] = useState(0);
    const [cartT, setCarT] = useState(0);
     const navigate = useNavigate();
     const [nAME , setNAME] = useState('');
     const [eMAIL , setEMAIL] = useState('');
     const [address , setAddress] = useState('');
     const [phone , setPhone] = useState('');
     const [paymentMode, setPaymentMode] = useState('');
     const [carts , setCarts] = useState([]);
    //  console.log(count._id);
       

     useEffect(() => {
        const fetchCartData = async () => {

          try {
              const result = await axios.get(`https://cooltrendyvogue.onrender.com/cart`);
            const result1 = await axios.get('https://cooltrendyvogue.onrender.com/cart/count');
                    const result2 = await axios.get('https://cooltrendyvogue.onrender.com/cart/tp');
                    // const placeorder = await axios.post("http://localhost:4000/placeorder");
                    // console.log(placeorder.data);
                    setCarT(result2.data.message);
                    setCount(result1.data.message);
                    
                    setCarts(result.data.message);
                    console.log(result.data.message.map( (cart)=>cart._id))
                  } catch (err) {
                    alert(err.message);
                  }
                };
                fetchCartData();
              }, []);  

              
              const handleSubmitOrder = async(e)=>{
                e.preventDefault();
                try {
                  // const userId = carts.map( (cart)=> cart._id); // Extract userId from the first cart item

                  // if (!userId) alert('User ID is missing.');

                   const userId = carts[0]._id;
                   console.log(userId);
          
                  const orderData = {
                    userId, // Use appropriate userId if available
                    items: [], // Add items from cart if necessary
                    paymentMode, // Based on selected payment method
                    price: cartT,
                    address,
                  };
            
                  const placeorder = await axios.post('https://cooltrendyvogue.onrender.com/placeorder', orderData);
                  console.log(placeorder.data);
                  if(placeorder.data.success){
                    navigate('/paymentSuccessful'); 
                  }
                  else{
                     navigate("/paymentUnsuceessful");
                    // alert("Please, try again to make a payment successfull!")
                  }

                

                } catch (err) {
                  alert('Error placing order: ' + err.message);
                }
              };

             
            
              








return(
  <div className="contain h-auto " style={{ backgroundColor: 'wheat' }}>
  <div className="row m-4 p-2">
    <form onSubmit={handleSubmitOrder} className="d-flex justify-content-between">
      <div className="col-5 text-center">
        <h1 className="fs-4 mt-5"><b>Your Address, Our Priority – Smooth & Swift Delivery!</b></h1>

        <div className="mb-3 mt-5 d-flex">
          <label htmlFor="name" className="form-label me-4" style={{ alignSelf: 'center' }}><b>NAME:</b></label>
          <input type="text" className="form-control" name="name" value={nAME} onChange={(e) => setNAME(e.target.value)} style={{ height: '40px', width: '380px' }} />
        </div>

        <div className="mb-3 mt-3 d-flex">
          <label htmlFor="email" className="form-label me-4" style={{ alignSelf: 'center' }}><b>EMAIL:</b></label>
          <input type="email" className="form-control" name="email" value={eMAIL} onChange={(e) => setEMAIL(e.target.value)} style={{ height: '40px', width: '380px' }} />
        </div>

        <div className="mb-3 mt-3 d-flex">
          <label htmlFor="address" className="form-label me-4" style={{ alignSelf: 'center' }}><b>ADDRESS:</b></label>
          <input type="text" className="form-control" name="address" value={address} onChange={(e) => setAddress(e.target.value)} style={{ height: '40px', width: '380px' }} />
        </div>

        {/* <div className="row">
          <div className="input-group col-12 mb-3">
            <input type="text" className="form-control" placeholder="CITY" />
            <input type="text" className="form-control" placeholder="STATE" />
          </div>

          <div className="input-group col-12 mb-3">
            <input type="number" className="form-control" placeholder="PINCODE" />
            <input type="text" className="form-control" placeholder="COUNTRY" />
          </div>
        </div> */}

        <div className="mb-3 mt-3 d-flex">
          <label htmlFor="phone" className="form-label me-4" style={{ alignSelf: 'center' }}><b>PHONE NUMBER:</b></label>
          <input type="number" className="form-control" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} style={{ height: '40px', width: '380px' }} />
        </div>
      </div>

      <div className="col-5 text-center">
        <div className="col-12 text-center mb-5 mt-5">
          <div className="card" style={{ width: '100%', backgroundColor: '#F8E7F6' }}>
            <div className="card-body">
              <h5 className="card-title">PRICE DETAILS</h5>
              <hr />
              <p className="card-text">
                Sub-total of {count} item
                <strong className="mx-4 px-5 text-sm-end">&#8377;{cartT}</strong>
              </p>
              <br />
              <p>
                DELIVERY CHARGES <strong className="mx-4 px-3" style={{ color: 'green' }}>Free Delivery</strong>
              </p>
              <hr />
              <p>
                TOTAL AMOUNT
                <strong className="mx-5 px-5" style={{ color: 'black' }}>&#8377;{cartT}</strong>
              </p>
              <hr />
              <div className="method">
                <h1 className="fs-6"><b>PAYMENT METHOD</b></h1>
                <div className="row ">
                  <div className="col-4 d-flex">
                    <div className="form-check ">
                      <input className="form-check-input" type="radio" name="paymentMethod" value="cod" checked={paymentMode === 'COD'} onChange={(e) => setPaymentMode(e.target.value)} />
                      <label className="form-check-label " htmlFor="cod">  <strong>Cash on Delivery</strong>
                        <img src="../font-awesome/images/cash-on-delivery.png" alt="COD" style={{ height: '100px', width: '100px' }} className="m-2 " />
                      </label>
                    </div>

                    {/* <div className="form-check">
                      <input className="form-check-input" type="radio" name="paymentMethod" value="stripe" checked={paymentMode === 'stripe'} onChange={(e) => setPaymentMode(e.target.value)} />
                      <label className="form-check-label" htmlFor="paymentMethod">
                        <img src="../font-awesome/images/stripe.png" alt="stripe" style={{ height: '100px', width: '100px' }} className="m-2" />
                      </label>
                    </div>

                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="paymentMethod" value="razorpay" checked={paymentMode === 'razorpay'} onChange={(e) => setPaymentMode(e.target.value)} />
                      <label className="form-check-label" htmlFor="paymentMethod">
                        <img src="../font-awesome/images/razorpay-icon.webp" alt="razorpay" style={{ height: '100px', width: '100px' }} className="m-2" />
                      </label>
                    </div> */}
                  </div>
                  <div className="col-12">
                    <button className="btn btn-dark text-center" type="submit">PLACE ORDER</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</div>
);
}

export default PlaceOrder;


