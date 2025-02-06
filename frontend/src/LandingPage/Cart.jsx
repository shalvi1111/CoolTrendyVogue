import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// import { Link } from 'react-router-dom';


function Cart() {
   const id = useParams();
   const navigate = useNavigate();
   console.log(id);
  // const prodid = carts.map( (cart)=>cart._id)
  // console.log(prodid);
  const [carts, setCarts] = useState([]);
  const [count, setCount] = useState(0);
  const [sizes, setSizes] = useState([]);
  const [qty , setQty] = useState(0);
  const [cartT, setCarT] = useState(0);
  const [remove, setRemove] = useState(null);


    
  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const result = await axios.get(`http://localhost:4000/cart`);
        const result1 = await axios.get('http://localhost:4000/cart/count');
        const result2 = await axios.get('http://localhost:4000/cart/tp');
        setCarT(result2.data.message);

        const resSize = await axios.get('http://localhost:4000/sizeqty');
    //     console.log(resSize);
    //     console.log(resSize.data.message.map(s=>s.size ),"fred");
    //    console.log(Array.isArray(sizes))
    //     setSizes(resSize.data.message.map(s => s.size));
    //     setQty(resSize.data.message);

     if(resSize.data && resSize.data.message){
         const sizes = resSize.data.message.map( s=> s.size);
         setSizes(sizes);
         const qt = resSize.data.message.map( q=> q.qty);
         setQty(qt);
     }
        setCount(result1.data.message);
        setCarts(result.data.message);
      } catch (err) {
        alert(err.message);
      }
    };
    fetchCartData();
  }, []);
      


      
  const handleDelete = async (id) => {
    // const ti = carts.map((cart)=> {cart.title});
    // console.log(ti ,"447");
    try {
      const response = await axios.delete(`http://localhost:4000/cart/delete/${id}`, {
        data: {id},
      });
         
      const data = await response.json();
      if (response.data.success) {
        setRemove(carts.filter((item) => item.id !== id));
        // alert("Item deleted successfully");
      } else {
        alert('Failed to delete item:', data.message);
      }
    } catch (error) {
      alert('Product deleted successfully.');
    }
  };

  return (
    <div className="contain">
      <h1 className="text-center fs-2 p-2 m-5" style={{ textDecoration: 'underline' }}>
        <i>
          TRACK <span style={{ color: '#A3567A' }}>MY ORDER</span>
        </i>
      </h1>
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
          <div className="display-details">
            <div className="col-5 text-center mb-5">
              <div className="card" style={{ width: '800px', marginLeft: '380px', backgroundColor: '#F8E7F6' }}>
                <div className="card-body">
                  <h5 className="card-title">PRICE DETAILS</h5>
                  <hr />
                  <p className="card-text">
                    Sub-total of {count} item
                    <strong className="mx-5 px-5 text-sm-end">&#8377;{cartT}</strong>
                  </p>
                  <br />
                  <p>
                    DELIVERY CHARGES <strong className="mx-5 px-5" style={{ color: 'green' }}>Free Delivery</strong>
                  </p>
                  <hr />
                  <p>
                    TOTAL AMOUNT
                    <strong className="mx-5 px-5" style={{ color: 'black' }}>&#8377;{cartT}</strong>
                  </p>
                  <hr />

                  <button className='btn btn-dark'onClick={()=>navigate("/placeorder")} >Proceed to pay </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        {carts.map((cart) => (
          <div className="container mb-5" key={cart._id}>
            <div className="row">
              <div className="col-10 me-2 ms-5">
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
                        <div className="size">

{/* {sizes.flatMap(s => s.size).map((size, idx) => ( */}

{sizes.map((size,idx) => (
 <p key={idx}> 
  <strong  >{size}</strong>
  </p>
 ))}  
</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <p><b>PRICE</b></p>
                    <strong>&#8377;{cart.price}</strong>
                  </div>
                  <div className="col-2 text-end">
                    <p><b>Quantity</b></p>
                    <strong className="me-4">{qty.map((q,idx)=>( <p key={idx}> {q}</p>))}</strong>
                  </div>
                  <div className="col-3 text-end mt-5 pt-2">
                    <button className="btn btn-dark" onClick={() => handleDelete(cart._id)} value={remove}>
                       Remove
                    </button>
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
