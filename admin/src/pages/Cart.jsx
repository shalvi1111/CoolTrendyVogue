import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';

function Cart() {
   const id = useParams();

   console.log(id);

  const [carts, setCarts] = useState([]);
  const [count, setCount] = useState(0);

  const [cartT, setCarT] = useState(0);
  


    
  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const result = await axios.get(`http://localhost:4000/cart`);
        const result1 = await axios.get('http://localhost:4000/cart/count');
        const result2 = await axios.get('http://localhost:4000/cart/tp');
        setCarT(result2.data.message);

        setCount(result1.data.message);
        setCarts(result.data.message);
      } catch (err) {
        alert(err.message);
      }
    };
    fetchCartData();
  }, []);
 

  return (
    <div className="container">
      <div className="details">
        <div className="row" style={{ backgroundColor: 'white', alignItems: 'center' }}>
          <hr />
          <div className="col-10">
            <strong className="m-5 p-2">
              ITEM(S): &nbsp; <span style={{ color: 'red' }}>{count}</span>
            </strong>
          </div>
          <div className="col-2 text-end">
            <p className="mt-2 me-5 p-2">
              <strong>
                TOTAL: &nbsp; <span style={{ color: 'green' }}>&#8377;{cartT}</span>
              </strong>
            </p>
          </div>
          <hr />
          
        </div>  
        {/* <hr /> */}
        {carts.map((cart) => (
          <div className="container mb-5" key={cart._id}>
            <div className="row">
              <div className="col-12 me-2 ms-5">
                <div className="row" style={{ backgroundColor: 'white' }}>
                  <div className="col-4 mt-2">
                    <p><b>PRODUCT</b></p>
                    <div className="row text-muted">
                      <div className="col-4">
                        <img
                          src={cart.image[0]}
                          alt="Product Image"
                          className='object-fit-fill'
                          style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                        />
                      </div>
                      <div className="col-6 m-3 text-center">
                        <h1 className="fs-5">{cart.title}</h1>
                       
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <p><b>PRICE</b></p>
                    <strong>&#8377;{cart.price}</strong>
                  </div>
                  <div className="col-2 text-center">
                    <p><b>Quantity</b></p>
                    {/* <div className="d-flex h-100  align-items-end "> */}
                
                     {cart.sizes.map((q, idx) => (
                    <p key={idx}><strong>{q.qty}</strong></p>
                    ))}
      
                {/* </div> */}
                  </div>

                  <div className="col-2 text-center">
                    <p><b>Size</b></p>
                    {/* <div className="d-flex h-100  align-items-end "> */}
                
                     {cart.sizes.map((s, idx) => (
                    <p key={idx}><strong>{s.size}</strong></p>
                    ))}
      
                {/* </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Cart;
