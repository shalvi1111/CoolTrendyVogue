import React from 'react';
import { useState , useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Women() {
    
    const [ category , setCategory] = useState(null);
    const [products, setProducts] = useState("Women");
     
       useEffect( ()=>{
        const fetchCateg = async()=>{
            try{
          const res = await axios.get("http://localhost:4000/getWomCategory")
              
          console.log(res.data.message);
          if (res.data.success && res.data.message && Array.isArray(res.data.message)) {
            // if you need to filter by category (if the API returns multiple categories)
            const womenProd = res.data.message.filter(prod => prod.category === "Women");
            if (womenProd.length > 0) {
              setCategory("Women");
              setProducts(womenProd);
            } 
          }
          else{
            alert("Category doesn't exist!");
            setCategory(null);
          }
        }catch(err){
            alert(err.message);
            setCategory(null);
        }


        }
        fetchCateg();
       },[]) 
      
    return ( 
        <>
       
                {category === "Women" ? (
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
                   style={{ width: "100%", height: "400px", objectFit: "contain", borderRadius: "8px"    }}
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
           
        ) : (
          <h1 className='fs-4 text-center m-5 p-5'> "<span style={{color:"red"}}>Oops!</span> No Women's section? <span style={{color:"maroon"}}>Impossible! </span><span style={{color:"purple"}}>Maybe it's just hiding… 👗✨</span>"</h1>
        )}
    </>
);

}

export default Women;