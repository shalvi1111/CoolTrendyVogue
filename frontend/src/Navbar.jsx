import axios from 'axios';
import React from 'react';
import {Link, useNavigate} from 'react-router-dom' ;
import { useState , useEffect } from 'react';


function Navbar() {
  const [count , setCount] = useState(0);
  const navigate = useNavigate();
   useEffect ( ()=>{
       const countdata = async()=>{
         try {
          const result = await axios.get("https://cooltrendyvogue.onrender.com/cart/count");
          // console.log(result.data.message)
             setCount(result.data.message)
            }
            catch(err){
              console.log(err);
    
            }
       }
       countdata();
   },[])
   
    return ( 
        <>
        <nav className="navbar navbar-expand-lg bg-body-white border-bottom sticky-top" style={{backgroundColor:"#EEEDEB"}} >
  
   <div className="container-fluid ">
    <Link className="navbar-brand" to="/">
    <h4 className='fs-1 ' style={{fontWeight:"bolder"}}> <i>Cool Trendy Vogue   </i>     </h4>
      </Link>
    
 
      <div className="collapse navbar-collapse" id="navbarNav">
      <div className="search  d-flex justify-content-end align-items-end"  style={{marginLeft:"650px"}}>
        {/* <Link to="/home" style={{textDecoration:"none", color:"black"}}> <strong className='fs-2 m-3'><i class="fa fa-home" aria-hidden="true"></i></strong> </Link> */}
        <Link to="/bestSeller" style={{textDecoration:"none"}} > <strong className='fs-2 m-3'> <img src='../font-awesome/images/best-seller.png' alt="BEST-SELLER" style={{height:"50px"}}></img></strong> </Link>
        <Link to="/about" style={{textDecoration:"none"}}>  <strong className='fs-2 m-3'></strong> <img src='../font-awesome/images/about.png' alt="ABOUT" style={{height:"50px"}}></img> </Link>
        <Link to="/contact" style={{textDecoration:"none"}}>  <strong className='fs-2 m-3'><img src='../font-awesome/images/contact-information.png' alt="CONTACT" style={{height:"50px"}}></img></strong> </Link>
        {/* <Link to="/cart" style={{textDecoration:"none", color:"black"}}> <strong className='fs-2 m-3'> <i class="fa fa-shopping-cart" aria-hidden="true"></i>
</strong> </Link> */}
<button type="button" class="btn  position-relative" onClick={()=>navigate("/cart")}>
<img src='../font-awesome/images/trolley.png' alt="CART" style={{height:"50px"}}></img>
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {count}
    <span class="visually-hidden">{count} </span>
  </span>
</button>

      </div>
       
      
      <span className='dropdown' >
      <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{backgroundColor:"transparent" }}>
      <img src='../font-awesome/images/user.png' alt="USER" style={{height:"50px"}}></img>
  </button>
  <ul class="dropdown-menu" >
  <li><Link to= "/signupUser"style={{textDecoration:"none" ,color:"black"}}>Register</Link></li>
  <li><Link to="/userLogin" style={{textDecoration:"none" ,color:"black"}}>Login</Link></li>
  <li><Link to="/logoutuser" style={{textDecoration:"none" ,color:"black"}}>logout</Link></li>
  </ul>
  </span>
          
    </div>
    </div>
  
</nav>
</>
     );
}
 
export default Navbar;