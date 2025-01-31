// import axios from 'axios';
// // import { Link } from 'react-router-dom';
// import React, { useEffect, useState } from 'react';
// function BestSeller() {

//      const [ bestseller , setBestseller] = useState([]);

//        useEffect( ()=>{
        
//         const bestProd = async()=>{
//             try{
//         const res_Prod =  await axios.get("http://localhost:4000/bestSeller");
//              if(res_Prod.data.success){
//                 // console.log(res_Prod.data)

//                 setBestseller(res_Prod.data)
//              }    
//              else{
//                 console.log(res_Prod.data.message)
//              }   
//       }
//       catch(err){
//         console.log(err)
//       }
//       bestProd()

//        }},[])
//        return (
//         <div className="container">
//         {bestseller.map((product) => (
//             // <Link to={`/productDetail/${product._id}`} style={{textDecoration:"none", color:"black", display:"flex", flexWrap:"wrap" }}>
//            <div
//              key={product._id}
//              style={{
//                border: "1px solid #ddd",
//                borderRadius: "8px",
//                padding: "16px",
//                width: "450px",
//                textAlign: "center",
//                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//              }}
//            >
//              {/* Display the first image or a placeholder */}
//              {product.image && product.image.length > 0 ? (
//                <img
//                  className="object-fit"
//                  src={product.image[0]} // Assuming the first image is displayed
//                  alt={product.title}
//                  style={{ width: "100%", height: "auto", objectFit: "cover", borderRadius: "8px"    }}
//                />
//              ) : (
//                <div
//                  style={{
//                    width: "100%",
//                    height: "150px",
//                    display: "flex",
//                    alignItems: "center",
//                    justifyContent: "center",
//                    backgroundColor: "#f4f4f4",
//                    borderRadius: "8px",
//                  }}
//                >
//                  No Image Found
//                </div>
//              )}
//              <h2 style={{ fontSize: "18px", margin: "12px 0", color: "#333" }}>{product.title}</h2>
//              <p>
//                <strong>Price:</strong> ₹{product.price}
//              </p>
//              {/* <p>
//                <strong>Category:</strong> {product.category}
//              </p> */}
   
//              {/* <div className="row">
//                <div className="col-6">
//                  <button className="btn btn-dark" type="submit">
//                    <Link
//                      to={`/editProduct/${product._id}`} // Dynamic route for editing
//                      style={{ textDecoration: "none", color: "white" }}
//                    >
//                      Edit
//                    </Link>
//                  </button>
//                </div>
//                <div className="col-6">
//                  <button className="btn btn-dark" type="submit">
//                    <Link
//                      to={`/details/${product._id}`} // Dynamic route for details
//                      style={{ textDecoration: "none", color: "white" }}
//                    >
//                      Details
//                    </Link>
//                  </button>
//                </div>
//              </div> */}
//            </div>
//         //    </Link>
//          ))}
        
//        </div>
//      );
//    };
    
    

// export default BestSeller;



import axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

function BestSeller() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const bestProd = async () => {
      try {
        
        const res_Prod = await axios.get("http://localhost:4000/bestSeller");
        if (res_Prod.data.success) {
          setProducts(res_Prod.data); // Adjust based on backend response
        } else {
          console.error(res_Prod.data.message);
          setError(res_Prod.data.message);
        }
      } catch (err) {
        console.error(err);
        setError("Failed to fetch best-seller products.");
      } finally {
        setLoading(false);
      }
    };
    bestProd();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

   return (
  <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", padding: "20px" }}>
     
  {products.map((product , idx ) => (
     <Link to={`/productDetail/${product._id}`} style={{textDecoration:"none", color:"black", display:"flex", flexWrap:"wrap" }}>
    <div
      key={idx} id={product._id}
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        width: "450px",
        textAlign: "center",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Display the first image or a placeholder */}
      {product.image && product.image.length > 0 ? (
        <img
          className="object-fit"
          src={product.image[0]} // Assuming the first image is displayed
          alt={product.title}
          style={{ width: "100%", height: "auto", objectFit: "cover", borderRadius: "8px"    }}
        />
      ) : (
        <div
          style={{
            width: "100%",
            height: "150px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f4f4f4",
            borderRadius: "8px",
          }}
        >
          No Image Found
        </div>
      )}
      <h2 style={{ fontSize: "18px", margin: "12px 0", color: "#333" }}>{product.title}</h2>
      <p>
        <strong>Price:</strong> ₹{product.price}
      </p>
      {/* <p>
        <strong>Category:</strong> {product.category}
      </p> */}

      {/* <div className="row">
        <div className="col-6">
          <button className="btn btn-dark" type="submit">
            <Link
              to={`/editProduct/${product._id}`} // Dynamic route for editing
              style={{ textDecoration: "none", color: "white" }}
            >
              Edit
            </Link>
          </button>
        </div>
        <div className="col-6">
          <button className="btn btn-dark" type="submit">
            <Link
              to={`/details/${product._id}`} // Dynamic route for details
              style={{ textDecoration: "none", color: "white" }}
            >
              Details
            </Link>
          </button>
        </div>
      </div> */}
    </div>
    </Link>
  ))}
 
</div>
);
};


export default BestSeller;
