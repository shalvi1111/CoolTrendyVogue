import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Men() {
  const [category, setCategory] = useState(null);
  const [products, setProducts] = useState([]);

<<<<<<< HEAD
  useEffect(() => {
    const fetchCateg = async () => {
      try {
        const res = await axios.get(
          "https://cooltrendyvogue.onrender.com/getMenCategory",
          { withCredentials: true }
        );

        if (res.data.success) {
          const menProd = res.data.message.filter(
            (categ) => categ.category === "Men"
          );
          if (menProd.length > 0) {
            setCategory("Men");
            setProducts(menProd);
          } else {
            alert("Category doesn't exist!");
            setCategory(null);
          }
=======
    useEffect( ()=>{
        const fetchCateg = async()=>{
            try{
            const res = await axios.get("http://localhost:4000/getMenCategory");
            console.log(res.data);
            if(res.data.success){
                const menProd = res.data.message.filter( (categ)=> categ.category === "Men");
                if(menProd.length >0){
                setCategory("Men");
                setProducts(menProd);
                }
                else{
                    alert("Category doesn't exist!");
                    setCategory(null);
                }
            }
>>>>>>> 2fb6be762aacb9269b29b4102b51af8bf6ba5280
        }
      } catch (err) {
        alert(err.message);
        setProducts(null);
      }
    };
    fetchCateg();
  }, []);
  return (
    <>
      {category === "Men" ? (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            padding: "20px",
          }}
        >
          {products.map((product) => (
            <Link
              to={`/productDetail/${product._id}`}
              style={{
                textDecoration: "none",
                color: "black",
                display: "flex",
                flexWrap: "wrap",
              }}
            >
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
                    style={{
                      width: "100%",
                      height: "400px",
                      objectFit: "contain",
                      borderRadius: "8px",
                    }}
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
                <h2
                  style={{ fontSize: "18px", margin: "12px 0", color: "#333" }}
                >
                  {product.title}
                </h2>
                <p>
                  <strong>Price:</strong> ₹{product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <h1 className="fs-4 text-center m-5 p-5">
          {" "}
          "<span style={{ color: "red" }}>Oops!</span> No Men's category found.{" "}
          <span style={{ color: "purple" }}>
            Maybe fashion is still loading… ⏳✨
          </span>
          "
        </h1>
      )}
    </>
  );
}

export default Men;
