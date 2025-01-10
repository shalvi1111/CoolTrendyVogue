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
          setProducts(response.data.message.slice(0,21));
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
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", padding: "20px" }}>
     
      {products.map((product) => (
         <Link to={`/productDetail/${product._id}`} style={{textDecoration:"none", color:"black", display:"flex", flexWrap:"wrap" }}>
        <div
          key={product._id}
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

export default ListProducts;










