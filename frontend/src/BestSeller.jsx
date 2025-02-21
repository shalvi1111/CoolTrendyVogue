import axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

function BestSeller() {
  const [products, setProducts] = useState([]);
  const [bestSeller , setBestSeller] = useState(false);
  // const [loading, setLoading] = useState(true);
 

  useEffect(() => {
    const bestProd = async () => {
      try {
        
        const res_Prod = await axios.get("http://localhost:4000/bestSeller");
        console.log(res_Prod.data);
        if (res_Prod.data.success) {
          const BestSeller = res_Prod.data.message.filter( (s)=> s.bestSeller === true );
          if(setBestSeller.length >0){
            setBestSeller(true);
          setProducts(BestSeller); 
          }
        } else {
          alert(res_Prod.data.message);
          bestSeller(false);
         
        }
      } catch (err) {
        
        alert("Failed to fetch best-seller products.");
        bestSeller(false);

      } 
    };
    bestProd();
  }, []);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error}</p>;

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
          style={{ width: "100%", height: "400px", objectFit: "contain", borderRadius: "8px" }}
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
      
    </div>
    </Link>
  ))}
 
</div>
);
};


export default BestSeller;
