// import axios from 'axios';
// import React ,{useEffect , useState} from 'react';
// import {Link} from 'react-router-dom' ;
// // import { useParams } from 'react-router-dom';
// function Cart() {
   
//     // const {id} = useParams();
//     // console.log(id , "56")
    
 
//     const [ carts , setCarts] = useState([]);
//     const [count , setCount] = useState(0);
//     const [getsize, setGetsize] = useState([]);
//     const [cartT , setCarT] = useState(0);
//     const [remove , setRemove] = useState(null);

//       useEffect(()=>{
//         const fetchCartData = async()=>{
//         try{
//          const result = await axios.get(`http://localhost:4000/cart`);
//          const result1 = await axios.get("http://localhost:4000/cart/count");
//          const result2 = await axios.get(`http://localhost:4000/cart/tp`);
//          setCarT(result2.data.message)
//         //  const {id} = (carts.map((cart)=> cart.size._id));
//         //  console.log(id),"237";
        
//           const resSize = await axios.get(`http://localhost:4000/size`);
      
//                    console.log(resSize.data.message)
//                        setGetsize(resSize.data.message);
//                       setCount(result1.data.message)
//                       setCarts(result.data.message)
                    
//          console.log(result.data.message ,"jhgv");
//             // setCarts(result.data.message)
            
         
    
//         }
//         catch(err){
//             alert(err.message)
//         }
//         }
//         fetchCartData();
//       },[])
     
               
  
      
//        const handleDelete = async(id)=>{
   
//         try{
//         const response = await fetch(`http://localhost:3000/cart/delete/${id}`, {
//             method: "DELETE",
//           });
    
//           const data = await response.json();
//           if (data.success) {
//             // Update state to remove the deleted item
//             setRemove(carts.filter((item) =>  item._id ));
//           } else {
//             alert("Failed to delete item:", data.message);
//           }
//         } catch (error) {
//           alert("Error deleting product:", error);
//         }
    
//        }
      
//    return(
//     <div className="contain">
//         <h1 className='text-center fs-2 p-2 m-5' style={{textDecoration:"underline"}}><i>TRACK <span style={{color:"#A3567A"}}>MY ORDER</span></i></h1>
//        <div className="details ">
//          <div className="row"style={{backgroundColor:"white" ,alignItems:"center" }}> 
//          <hr></hr> 
//           <div className="col-10 " >
//                 <strong className='m-5 p-2'>ITEM(S): &nbsp; <span style={{color:"red"}}>{count}</span></strong>
//             </div>
//             <div className="col-2 text-end">
//              <p className='mt-2 me-5  p-2'>   <strong>TOTAL: &nbsp; <span style={{color:'green'}}>&#8377;{cartT}</span></strong> </p>
//               {/* <strong className='text-muted me-5 p-2'>&#8377;{cartT}
//                   </strong> */}
//             </div>
//             <hr></hr>
//             <div className="display-details">
       
//        <div className="col-5 text-center mb-5 " >
     
//    <div class="card  " style={{width:"800px" ,marginLeft:"380px",backgroundColor:"#F8E7F6" }}>
//    <div class="card-body">
//       <h5 class="card-title">PRICE DETAILS</h5>
//       <hr></hr>
//      <p class="card-text">PRICE {count} item  
//        <strong className='mx-5 px-5 text-sm-end' >&#8377;{cartT}</strong> </p>
//        <br></br>
//        <p>DELIVERY CHARGES 
//            <strong className='mx-5 px-5' style={{color:"green"}}>Free Delievry </strong>
//        </p>
//        <hr></hr>
//        <p>TOTAL AMOUNT
//            <strong className='mx-5 px-5' style={{color:"black"}}>&#8377;{cartT}</strong>
//        </p>
//        <hr></hr>
//       </div>
     
//      {/* <a href="#" class="btn btn-success mx-5  text-center" style={{alignItems:"center"}}>PLACE ORDER</a> */}
//     </div>
//    </div>
//    </div>
//          </div>
//        </div>
//        <hr></hr>
//        {carts.map((cart) => (
//        <div className="container mb-5"  >
    
    
//     <div className="row  ">
  
  
  

//         <div className="col-10 me-2 ms-5 ">
        
//            <div className="row " style={{backgroundColor:"white"}}>
//             <div className="col-4 mt-2">
//                <p><b>PRODUCT</b></p>
//                <div className="row text-muted">
//                  <div className="col-4  ">
//                   <img src={cart.image[0]} alt="Product Image" style={{width:"100px" , height:"`100px" , objectFit:"cover"}}  />
//                   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
//                  </div>

//                  <div className="col-6 m-3 text-center ">
//                  <h1 className='fs-5  '> {cart.title}</h1>
//                  </div>
             
                
//                 </div>
//                 </div>
//             ))}
//                  {/* <strong> &nbsp;{cart.sizes} </strong> */}
             
//                  {/* </div>
//                  </div> */}
              
//             </div>
//             <div className="col-3">
//             <p><b>PRICE</b></p>
//             <strong>&#8377;{cart.price}</strong>

//             </div>
//             <div className="col-2 text-end ">
//             <p ><b>Quantity</b></p>
//             <strong className='me-4'>{cart.qty}</strong>
//            {/* <label for="customRange1" class="form-label">Example range</label> */}
//             {/* <input type="Number" class="form-range" id="customRange1"  /> */}

//             </div>

//              <div className="col-3 text-end mt-5 pt-2" >
//              <button className='btn btn-dark' onClick={()=>handleDelete(cart._id)}><Link to="/cart" style={{textDecoration:"none" , color:"white"}}>Remove</Link> </button>
//              </div>

           
//            </div>

//         // </div>


//         {/* <div className="col-5 text-center mb-5 "> */}
          
//         {/* <div class="card w-100"> */}
//         {/* <div class="card-body"> */}
//            {/* <h5 class="card-title">PRICE DETAILS</h5> */}
//            {/* <hr></hr> */}
//           {/* <p class="card-text">PRICE {cart.qty} item   */}
//             {/* <strong className='mx-5 px-5 text-sm-end' >&#8377;{cart.price}</strong> </p>
//             <br></br>
//             <p>DELIVERY CHARGES 
//                 <strong className='mx-5 px-5' style={{color:"green"}}>Free</strong>
//             </p> */}
//             {/* <hr></hr> */}
//             {/* <p>TOTAL AMOUNT
//                 <strong className='mx-5 px-5' style={{color:"black"}}>&#8377;{cart.price}</strong>
//             </p> */}
//             {/* <hr></hr> */}
           
          
//           {/* <a href="#" class="btn btn-success mx-5  text-center" style={{alignItems:"center"}}>PLACE ORDER</a> */}
//          {/* </div> */}
//         {/* </div> */}

         
//         {/* </div> */}
  
//     // </div>
//     <br></br>
//             <br></br>
//             <br></br>
//             <br></br>
//             // </div>
//         // ))}

//         <div className="row">
//         <div className="size" > 
//                      {/* <strong >Size{cart.size ||"M/A"}</strong> */}
//                      {getsize.map( (sizes)=> 
//                     <strong key={sizes._id}>{sizes.size}</strong>)}
//                   </div>
//         </div>

       
     
//     {/* </div> */}
       

     
//     </div>
//    );
// }

// export default Cart;



import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { Link } from 'react-router-dom';


function Cart() {
  //  const id = useParams();
  //  console.log(id);
  // const prodid = carts.map( (cart)=>cart._id)
  // console.log(prodid);
  const [carts, setCarts] = useState([]);
  const [count, setCount] = useState(0);
  const [sizes, setSizes] = useState([]);
  const [cartT, setCarT] = useState(0);
  const [remove, setRemove] = useState(null);


    
  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const result = await axios.get(`http://localhost:4000/cart`);
        const result1 = await axios.get('http://localhost:4000/cart/count');
        const result2 = await axios.get('http://localhost:4000/cart/tp');
        setCarT(result2.data.message);

        const resSize = await axios.get('http://localhost:4000/size');
        console.log(resSize.data.message.map(s=>s.size));
       console.log(Array.isArray(sizes))
        setSizes(resSize.data.message.map(s => s.size));
        setCount(result1.data.message);
        setCarts(result.data.message);
      } catch (err) {
        alert(err.message);
      }
    };
    fetchCartData();
  }, []);
      

      
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/cart/delete/${id}`, {
        method: 'DELETE',
      });

      const data = await response.json();
      if (data.success) {
        setRemove(carts.filter((item) => item._id !== id));
      } else {
        alert('Failed to delete item:', data.message);
      }
    } catch (error) {
      alert('Error deleting product:', error);
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
                    PRICE {count} item
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
                    <strong className="me-4">{cart.qty}</strong>
                  </div>
                  <div className="col-3 text-end mt-5 pt-2">
                    <button className="btn btn-dark" onClick={() => handleDelete(cart._id)} value={remove}>
                       {cart._id}
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
