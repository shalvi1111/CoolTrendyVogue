import axios from 'axios';
import React ,{useState,useEffect } from 'react';
import {  useNavigate, useParams} from 'react-router-dom';
import {Link} from "react-router-dom";

function DetailProd() {
    const  {id}  = useParams();  
    const navigate = useNavigate();
    console.log(id);
         
         
    const [products, setProducts] = useState(null);
    const [delProd , setDelProd] = useState('');
   //  const [qty,setQty] = useState();

  
   //  const [loading, setLoading] = useState(true);
  
    // Fetch data from the backend
    useEffect(() => {
      const   fetchProducts =  async() =>{
       
      
        try {
         const response = await axios.get(`http://localhost:4000/productDetail/${id}`); 
         

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

    const handleDelete = async (id) => {
    
          try {
           const resDelete = await axios.delete(`http://localhost:4000/productDetail/${id}`, {
              data: {id},
            });
               
            const data = await resDelete.json();
            console.log(resDelete.data);
            if (data.success) {
              setDelProd(products.filter((item) => item.id !== id));
             
    
            } else {
              alert("some issue")
            }
          } catch (error) {
            // console.log(error.message);
            alert( "Product deleted successfully" );
            navigate("/listProduct");
           
          }
        };
      
  


    if (!products) return <div>Product not found!</div>;
 
  

return ( 
   <>
    <div className="container">
    {/* {products.map((product)=>( */}
     
        <div className="row" key={products._id} >

           <div className="col-7">
           <img src= {products.image?.[0] || 'fallback-image-url.jpg'} alt='Product visual' style={{width:"70%"  , height:"500px"}} className='m-2 p-2 object-fit-contain' />
           <div className="desription m-1 p-2">
             <h1 className='fs-4 text-muted '>Description</h1>
               <p className='text-muted p-2 m-2' style={{width:"100%"}}> 
                   {products.description}
               </p>
           </div>
           </div>
           

           <div className="col-5" >
               <h1 className='mt-4 mb-5 pt-5 fs-4 text-muted'>{products.title}   </h1>

               <p ><b className='fs-2'>&#8377;{products.price} &nbsp; </b>
                   <span style={{color:"green" , fontWeight:"600"}}>inclusive of all taxes</span> </p>

            

                  
                     <div className="row mt-4" >
                    
                      
                      <div className="col-4 ">
                      
                       <button className='btn btn-dark' type='submit' value={delProd} onClick={() => handleDelete(products._id)} > DELETE </button>
                       
                      </div>
                      
                      <div className="col-6">
                      <button className='btn btn-dark' ><Link to={`/edit/${products._id}`}  style={{textDecoration:"none" , color:"white" }}>EDIT</Link></button>
                      </div>

                     


                      </div>
                   

                  
                   </div>

               
        </div>
          

    
       </div>

  
   </>
);

}

export default DetailProd;