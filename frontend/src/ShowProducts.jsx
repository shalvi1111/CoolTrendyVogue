import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ListProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:4000/listProduct");
        if (response.data.success) {
          setProducts(response.data.message);
        } else {
          setError("Failed to fetch products: " + response.data.message);
        }
      } catch (err) {
        setError("Error fetching products: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);


  if (loading) return <p>Loading...</p>;
  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

 



  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", padding: "20px"}}
    >
     
      {products.map((product) => (
         <Link to={`/productDetail/${product._id}`} style={{textDecoration:"none", color:"black", display:"block",
          // ...getCardStyle(screenWidth),
            flex: "1 1 calc(30.33% - 20px)", // Three cards per row
            maxWidth: "calc(30.33% - 20px)", // Ensure max width matches
              //  maxWidth: "450px", // Limit max width
        margin: "10px",
          }}>
        <div
          key={product._id}
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "16px",
            width: "100%",
            textAlign: "center",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Display the first image or a placeholder */}
          {product.image && product.image.length > 0 ? (
            <img
              className="object-fit "
              src={product.image[0]} // Assuming the first image is displayed
              alt={product.title}
              style={{ width: "100%", height: "300px", objectFit: "contain", borderRadius: "8px"    }}
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
          <h2 style={{ fontSize: "18px", margin: "12px 0", color: "#333", wordWrap: "break-word" }}>{product.title}</h2>
          <p>
            <strong>Price:</strong> ₹{product.price}
          </p>
         
        </div>
        </Link>
      ))}
     
    </div>
  );
};

export default ListProducts;










