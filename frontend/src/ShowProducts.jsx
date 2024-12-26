// // import axios from "axios";
// // import React, { useEffect, useState } from 'react';
// // import { data } from "react-router-dom";



// // const ShowProducts =()=> {
// //     const [Products , setProduct] = useState([]) ;

   
// //       useEffect( ()=>{
// //         axios.get("http://localhost:4000/showProduct" , data)
// //         .then(res =>{
// //            setProduct(res.data);
// //         })

// //       },[])


// //     return(
// //      <div className="container m-5 p-5">
// //       <div className="card" style={{width: "18rem"}}>
// //           <img src="..." className="card-img-top" alt="..."/>
// //       <div className="card-body">
// //            <h5 className="card-title"></h5>
// //            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
// //           <a href="#" className="btn btn-primary">Go somewhere</a>
// //         </div>
// //         </div>

// //      </div>
// //     )


// // // ===============================================================================================================================================================================================
 


// // //   return ( 
// //   //       <>
// //   //       <div className="container">
// //   //       <div className="row">

// //   //          <div className="col-7">
// //   //          <img src=' ../font-awesome/images/Denim/DenimmJeans.webp' alt='logo' style={{width:"80%"  , height:"80%"}} className='m-2 p-2' />
// //   //          <div className="desription m-1 p-2">
// //   //            <h1 className='fs-4 text-muted '>Desription</h1>
// //   //              <p className='text-muted p-2 m-2' style={{width:"100%"}}> 
// //   //              </p>
// //   //          </div>
// //   //          </div>
           

// //   //          <div className="col-5">
// //   //              <h1 className='mt-4 mb-5 pt-5 fs-4 text-muted'>BLUE HIGH RISE FLORA FLARED JEANS   </h1>

// //   //              <p ><b className='fs-2'>&#8377;2999 &nbsp; </b>
// //   //                  <span style={{color:"green" , fontWeight:"600"}}>inclusive of all taxes</span> </p>

// //   //                  <div className="size p-2 m-2 border-bottom">
// //   //                      <p className='fs-6 mb-5' style={{fontWeight:"700"}}>Select Size</p>

// //   //                     <p style={{fontWeight:"600"}} >Size chart</p>

// //   //              <div className="col-8 mb-4">
// //   //              <div class="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
// //   //                 <div class="btn-group me-2" role="group" aria-label="First group">
// //   //                  <button type="button" class="btn btn-outline-secondary">XS</button>
// //   //                  <button type="button" class="btn btn-outline-secondary">S</button>
// //   //                  <button type="button" class="btn btn-outline-secondary">M</button>
// //   //                  <button type="button" class="btn btn-outline-secondary">L</button>
// //   //                  <button type="button" class="btn btn-outline-secondary">XL</button>
// //   //                  <button type="button" class="btn btn-outline-secondary">XXL</button>
// //   //               </div>

// //   //              </div>
// //   //             </div>

// //   //                  </div>

// //   //                  <form>
// //   //                      <button className='btn btn-dark m-2 p-2' style={{width:"80%" }}>Add to shopping bag</button>
                      
// //   //                  </form>

// //   //                  <div className="social-media mb-5 ">
// //   //                  <i className="fa fa-facebook-square m-2 fs-4" aria-hidden="true"></i>
// //   //                  <i className="fa fa-twitter m-2 fs-4" aria-hidden="true"></i>
// //   //                  <i className="fa fa-pinterest-square m-2 fs-4" aria-hidden="true"></i>
// //   //                  </div>

// //   //                  <p className='fs-5' style={{color:"#1A3636" , fontWeight:"400"}}>CHECK PINCODE FOR DELIEVRY</p>
// //   //                  <form>
// //   //                      <input type='text' placeholder='Enter your Pincode' ></input> &nbsp;
// //   //                      <button className='btn btn-dark m-2'>Check</button>
// //   //                  </form>

// //   //                  <div className="alternation  text-muted">
// //   //                      <p className='m-2 fs-5' ><i class="fa fa-scissors" aria-hidden="true" style={{color:"#A04747"}}></i> &nbsp;
// //   //                      Free alternation at store</p>

// //   //                      <p className='m-2 fs-5' ><i class="fa fa-undo" aria-hidden="true"style={{color:"#A04747"}}></i>&nbsp;
// //   //                      15 days return policy</p>

// //   //                      <p className='m-2 fs-5' ><i class="fa fa-credit-card-alt" aria-hidden="true" style={{color:"#A04747"}}></i> &nbsp;
// //   //                      Easy checkout with multiple payment options</p>

                  
// //   //                  </div>
// //   //                  </div>


// //   //       </div>
    
// //   //      </div>

  
// //   //  </>
// //     //  );
// //     // ===========================================================================================================================
// // }

// // export default ShowProducts;


// // **********************************************************************************************

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import {Link} from "react-router-dom";

// const ShowProducts = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch data from the backend
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await  axios.get("http://localhost:4000/showProduct"); // Replace with your server IP if needed
//         setProducts(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (loading) {
//     return <p>Loading products...</p>;
//   }

//   return (
//     <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", padding: "20px" }}>
//       {products.map((product) => (
//         <div
//           key={product._id}
//           style={{
//             border: "1px solid #ddd",
//             borderRadius: "8px",
//             padding: "16px",
//             width: "250px",
//             textAlign: "center",
//             boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//           }}
//         >
//           {product.image && (
//             <img
//             src={`http://localhost:4000${product.image}`}
//               alt={product.image}
//               style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "8px" }}
//             />
//           )}
//           <h2 style={{ fontSize: "18px", margin: "12px 0", color: "#333" }}><strong>Title:</strong>{product.title}</h2>
//           <p style={{ color: "#777", marginBottom: "8px" }}><strong>Description:</strong>{product.description}</p>
//           <p>
//             <strong>Price:</strong> ₹{product.price}.toLocaleString("en-IN")
//           </p>
//           <p>
//             <strong>Quantity:</strong> {product.qty}
//           </p>
//           {/* <Link to ="http://localhost:4000/showProduct" style={{textDecoration:"none" , color:"white"}} >Add to shopping bag</Link> */}
//           <Link to= "/denim">Show details</Link>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ShowProducts;





// .---------------------------------------------------------------------------------------------------------------------












import React, { useEffect, useState } from "react";
import axios from "axios";

const ShowProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:4000/showProduct");
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", padding: "20px" }}>
      {products.map((product) => (
        <div
          key={product._id}
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "16px",
            width: "250px",
            textAlign: "center",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          {product.image && (
            <img
              src={`http://localhost:4000${product.image}`}
              alt={product.image}
              style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "8px" }}
            />
          )}
          <h2 style={{ fontSize: "18px", margin: "12px 0", color: "#333" }}>{product.title}</h2>
          <p style={{ color: "#777", marginBottom: "8px" }}>{product.description}</p>
          <p>
            <strong>Price:</strong> ₹{product.price}
          </p>
          <p>
            <strong>Quantity:</strong> {product.qty}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ShowProducts;
