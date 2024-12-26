import axios from 'axios';
import React ,{useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
// import ShowProducts from '../ShowProducts';
// import { useParams } from 'react-router-dom';



const EveryThing =() =>{

   
         const [products, setProducts] = useState([]);
         const [loading, setLoading] = useState(true);
       
         // Fetch data from the backend
         useEffect(() => {
           const fetchProducts = async () => {
             try {
               const response = await  axios.get("http://localhost:4000/showProduct"); // Replace with your server IP if needed
               setProducts(response.data);
               setLoading(false);
             } catch (error) {
               console.error("Error fetching products:", error);
               setLoading(false);
             }
           };
       
           fetchProducts();
         }, []);
     
         

    
    return ( 
        <>
         <div className="container">
            {products.map((product)=>(

          
             <div className="row" key={product._id}>

                <div className="col-7">
                <img src=' ../font-awesome/images/Denim/DenimmJeans.webp' alt='logo' style={{width:"80%"  , height:"80%"}} className='m-2 p-2' />
                <div className="desription m-1 p-2">
                  <h1 className='fs-4 text-muted '>Desription</h1>
                    <p className='text-muted p-2 m-2' style={{width:"100%"}}> 
                        {product.description}
                    </p>
                </div>
                </div>
                

                <div className="col-5">
                    <h1 className='mt-4 mb-5 pt-5 fs-4 text-muted'>{product.title}   </h1>

                    <p ><b className='fs-2'>&#8377;{product.price} &nbsp; </b>
                        <span style={{color:"green" , fontWeight:"600"}}>inclusive of all taxes</span> </p>

                        <div className="size mt-5 border-bottom">
                            <p className='fs-4 mb-5' style={{fontWeight:"700"}}>Select Size</p>

                           <p style={{fontWeight:"600"}} >Size chart</p>

                    <div className="col-8 mb-4">
                    <div class="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
                       <div class="btn-group me-2" role="group" aria-label="First group">
                        <button type="button" class="btn btn-outline-secondary">XS</button>
                        <button type="button" class="btn btn-outline-secondary">S</button>
                        <button type="button" class="btn btn-outline-secondary">M</button>
                        <button type="button" class="btn btn-outline-secondary">L</button>
                        <button type="button" class="btn btn-outline-secondary">XL</button>
                        <button type="button" class="btn btn-outline-secondary">XXL</button>
                     </div>
  
                    </div>
                   </div>

                        </div>

                        <form>
                            <button className='btn btn-dark m-2 p-2' style={{width:"80%" }}>
                                <Link to="/cart" style={{textDecoration:"none" , color:"white"}}>Add to shopping bag</Link></button>
                           
                        </form>

                        <div className="social-media mb-5 ">
                        <i className="fa fa-facebook-square m-2 fs-4" aria-hidden="true"></i>
                        <i className="fa fa-twitter m-2 fs-4" aria-hidden="true"></i>
                        <i className="fa fa-pinterest-square m-2 fs-4" aria-hidden="true"></i>
                        </div>

                        <p className='fs-5' style={{color:"#1A3636" , fontWeight:"400"}}>CHECK PINCODE FOR DELIEVRY</p>
                        <form>
                            <input type='text' placeholder='Enter your Pincode' ></input> &nbsp;
                            <button className='btn btn-dark m-2'>Check</button>
                        </form>

                        <div className="alternation  text-muted">
                            <p className='m-2 fs-5' ><i class="fa fa-scissors" aria-hidden="true" style={{color:"#A04747"}}></i> &nbsp;
                            Free alternation at store</p>

                            <p className='m-2 fs-5' ><i class="fa fa-undo" aria-hidden="true"style={{color:"#A04747"}}></i>&nbsp;
                            15 days return policy</p>

                            <p className='m-2 fs-5' ><i class="fa fa-credit-card-alt" aria-hidden="true" style={{color:"#A04747"}}></i> &nbsp;
                            Easy checkout with multiple payment options</p>

                       
                        </div>
                        </div>

                    
             </div>
                ))} 
         
            </div>
     
       
        </>
     );
}

export default EveryThing;