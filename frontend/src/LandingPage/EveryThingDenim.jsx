import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
// import Select from "react-select";
// import { useNavigate } from "react-router-dom";

// import ShowProducts from '../ShowProducts';
// import { useParams } from 'react-router-dom';

const EveryThing = () => {
  const { id } = useParams();

  const [products, setProducts] = useState(null);
  const [size, setSize] = useState("XS");
  const [qty, setQty] = useState(1);

  //  const [loading, setLoading] = useState(true);

  // Fetch data from the backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `https://cooltrendyvogue.onrender.com/productDetail/${id}`,
          { withCredentials: true }
        );

        // // Replace with your server IP if needed

        //  console.log(response.data.message ,"Line no 23");
        setProducts(response.data.message);
        //  setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts(null);
      }
    };

    fetchProducts();
  }, [id]);

  //  if (loading) return <div>Loading...</div>;

  const hadleChangeSQ = (e) => {
    // console.log(e , "52");

    setSize(e);
    // setQty(e)
  };

  const hadleSubmitSQ = async (e) => {
    e.preventDefault();
    // const ndata = new FormData();
    // ndata.append("qty" , qty);
    // ndata.append("size",size);
    const sizeQtyData = {
      qty: qty,
      size: size,
      productId: id,
    };
    console.log(sizeQtyData, "8790");
    try {
      const resultSize = await axios.post(
        `https://cooltrendyvogue.onrender.com/sizeqty`,
        sizeQtyData,
        {
          headers: { "Content-Type": "application/json" }, // Ensure proper headers
        }
      );
      console.log(resultSize.data.message, "78");
      if (resultSize.data.success) {
        alert("Product added successfully ");
      }
      // setSize(resultSize.data.message);
    } catch {
      alert("Please select the size again");
    }
  };

  //  useEffect(() => {
  //   console.log("Current qty:", qty);  // Log qty when it updates
  // }, [qty]);
  //         const handleSubmitCart = async(event)=>{
  //             event.preventDefault() ;
  // //  image , title, price , qty , sizes ,
  //             const ShoppingData = {
  //               image : products.image[0],
  //               title: products.title,
  //               // qty : products.qty ,
  //               price : products.price ,
  //               // sizes : products.sizes
  //             }

  //             try{
  //               const result = await axios.post(`http://localhost:4000/cart` ,ShoppingData, {
  //                 headers: { "Content-Type": "application/json" }, // Ensure proper headers
  //               });
  //                   console.log(result.data.message);
  //               if(result.data.success){
  //                 alert("Product added in cart successfully!")

  //               }
  //               else{
  //                 alert(result.data);
  //               }

  //             }
  //             catch(err){
  //             //  alert(err);
  //               alert("Please try again to add a product in cart");
  //             }
  //         }
  if (!products) return <div>Product not found!</div>;

  return (
    <>
      <div className="container">
        {/* {products.map((product)=>( */}

        <div className="row" key={products._id}>
          <div className="col-7">
            <img
              src={products.image?.[0] || "fallback-image-url.jpg"}
              alt="Product visual"
              style={{ width: "80%", height: "auto" }}
              className="m-2 p-2"
            />
            <div className="desription m-1 p-2">
              <h1 className="fs-4 text-muted ">Description</h1>
              <p className="text-muted p-2 m-2" style={{ width: "100%" }}>
                {products.description}
              </p>
            </div>
          </div>

          <div className="col-5">
            <h1 className="mt-4 mb-5 pt-5 fs-4 text-muted">
              {products.title}{" "}
            </h1>

            <p>
              <b className="fs-2">&#8377;{products.price} &nbsp; </b>
              <span style={{ color: "green", fontWeight: "600" }}>
                inclusive of all taxes
              </span>{" "}
            </p>

            <div className="size mt-5 border-bottom">
              <p className="fs-4 mb-5" style={{ fontWeight: "700" }}>
                Select Size
              </p>

              <p style={{ fontWeight: "600" }}>Size chart</p>

              <div className="col-8 mb-4">
                <div
                  class="btn-toolbar mb-3"
                  role="toolbar"
                  aria-label="Toolbar with button groups"
                >
                  <div
                    class="btn-group me-2"
                    role="group"
                    aria-label="First group"
                  >
                    <button
                      onClick={() => hadleChangeSQ("XS")}
                      class="btn btn-outline-secondary"
                    >
                      XS
                    </button>

                    <button
                      onClick={() => hadleChangeSQ("S")}
                      class="btn btn-outline-secondary"
                    >
                      S
                    </button>
                    <button
                      onClick={() => hadleChangeSQ("M")}
                      class="btn btn-outline-secondary"
                    >
                      M
                    </button>
                    <button
                      onClick={() => hadleChangeSQ("L")}
                      class="btn btn-outline-secondary"
                    >
                      L
                    </button>
                    <button
                      onClick={() => hadleChangeSQ("XL")}
                      class="btn btn-outline-secondary"
                    >
                      XL
                    </button>
                    <button
                      onClick={() => hadleChangeSQ("XXL")}
                      class="btn btn-outline-secondary"
                    >
                      XXL
                    </button>
                    <input
                      type="number"
                      onChange={(e) => setQty(Number(e.target.value))}
                      placeholder="Enter Quantity"
                      value={qty}
                      style={{ width: "50px", marginLeft: "16px" }}
                      required
                    />

                    {/* <Select defaultValue={size} options={sizeOption} placeholder="Select size" isMulti noOptionsMessage={()=>"No size found"}/> */}
                    {/* {Array.isArray(products.sizes)?products.sizes.map((size , idx)=>(
                           <button type="button" class="btn btn-outline-secondary" key={idx}>{size}</button>
                        )) : "No prod avlbl"} */}
                    {/* <input type='text' placeholder='Enter size' value={}/> */}
                  </div>

                  <form
                    onSubmit={hadleSubmitSQ}
                    className="needs-validation"
                    novalidate
                  >
                    <button className="btn btn-dark mt-4" type="submit">
                      Add to Shopping Bag
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* <div className="row mt-4" > */}

            {/* <div className="col-6 "> */}
            {/* <form onSubmit={handleSubmitCart}> */}
            {/* <button className='btn btn-dark ' style={{width:"80%" }} type='submit'> */}
            {/* <Link to={`/cart`} style={{textDecoration:"none" , color:"white"}} >Add to shopping bag</Link></button> */}
            {/* Add to shopping bag </button> */}
            {/* </form> */}
            {/* </div> */}
            {/* <div className="col-6 ">
                            <button className='btn btn-dark' ><Link to="/cart" style={{textDecoration:"none" , color:"white"}} >Buy Now</Link></button>
                           </div> */}

            {/* </div> */}

            <div className="social-media mb-5 ">
              <i
                className="fa fa-facebook-square m-2 fs-4"
                aria-hidden="true"
              ></i>
              <i className="fa fa-twitter m-2 fs-4" aria-hidden="true"></i>
              <i
                className="fa fa-pinterest-square m-2 fs-4"
                aria-hidden="true"
              ></i>
            </div>

            <p className="fs-5" style={{ color: "#1A3636", fontWeight: "400" }}>
              CHECK PINCODE FOR DELIEVRY
            </p>
            <form>
              <input type="text" placeholder="Enter your Pincode"></input>{" "}
              &nbsp;
              <button className="btn btn-dark m-2">Check</button>
            </form>

            <div className="alternation  text-muted">
              <p className="m-2 fs-5">
                <i
                  class="fa fa-scissors"
                  aria-hidden="true"
                  style={{ color: "#A04747" }}
                ></i>{" "}
                &nbsp; Free alternation at store
              </p>

              <p className="m-2 fs-5">
                <i
                  class="fa fa-undo"
                  aria-hidden="true"
                  style={{ color: "#A04747" }}
                ></i>
                &nbsp; 15 days return policy
              </p>

              <p className="m-2 fs-5">
                <i
                  class="fa fa-credit-card-alt"
                  aria-hidden="true"
                  style={{ color: "#A04747" }}
                ></i>{" "}
                &nbsp; Easy checkout with multiple payment options
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EveryThing;

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// function ProductDetail() {
//   const [product, setProduct] = useState(null);
//   const [error, setError] = useState(null);
//   const { id } = useParams(); // gets the 'id' from URL params

//   useEffect(() => {
//     async function fetchProduct() {
//       try {
//         let response = await fetch(`http://localhost:4000/productDetail/${id}`);
//         let result = await response.json();

//         if (result.success) {
//           setProduct(result.message);
//         } else {
//           setError(result.message);
//         }
//       } catch (err) {
//         setError(err.message);
//       }
//     }

//     fetchProduct();
//   }, [id]);

//   // if (error) {
//   //   return <div style={{ color: 'red' }}>{error}</div>;
//   // }

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>Product Details</h1>
//       {product ? (
//         <div className="product-item" style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px', borderRadius: '5px' }}>
//           <h2>{product.name}</h2>
//           <p>{product.description}</p>
//           <p>Price: {product.price}</p>
//           {/* Add more fields as needed */}
//         </div>
//       ) : (
//         <p>Loading product details...</p>
//       )}
//     </div>
//   );
// }

// export default ProductDetail;
