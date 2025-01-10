import React from 'react';
import {Link} from 'react-router-dom' ;


function Navbar() {
    return ( 
        <>
        {/* <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand">Cool Trendy Vogue</a>
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav> */}











        <nav className="navbar navbar-expand-lg bg-body-white border-bottom sticky-top" style={{backgroundColor:"white"}} >
  
   <div className="container-fluid ">
    <Link className="navbar-brand" to="#">
    <h4 className='fs-1 ' style={{fontWeight:"bolder"}}> <i>Cool Trendy Vogue   </i>     </h4>
      </Link>
    
 
    
      <div className="search text-center">
        <Link to="/home" style={{textDecoration:"none", color:"black"}}> <strong className='fs-2 m-3'><i class="fa fa-home" aria-hidden="true"></i></strong> </Link>
        <Link to="/collectionns" style={{textDecoration:"none", color:"black"}}> <strong className='fs-2 m-3'>Collections</strong> </Link>
        <Link to="/about" style={{textDecoration:"none", color:"black"}}>  <strong className='fs-2 m-3'><i class="fa fa-inbox" aria-hidden="true"></i></strong>  </Link>
        <Link to="/contact" style={{textDecoration:"none", color:"black"}}>  <strong className='fs-2 m-3'><i class="fa fa-envelope" aria-hidden="true"></i></strong> </Link>
        <Link to="/cart" style={{textDecoration:"none", color:"black"}}> <strong className='fs-2 m-3'> <i class="fa fa-shopping-cart" aria-hidden="true"></i></strong> </Link>
      </div>
       
      
      <span className='dropdown'>
      <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{backgroundColor:"transparent" }}>
  <i className="fa fa-user-o fs-4 m-2 p-2" aria-hidden="true" ></i>
  </button>
  <ul class="dropdown-menu" >
  <li><Link to= "/signupSaler"style={{textDecoration:"none" ,color:"black"}}>Register</Link></li>
  <li><Link to="/loginSaler" style={{textDecoration:"none" ,color:"black"}}>Login</Link></li>
  <li><Link to="/logoutSaler" style={{textDecoration:"none" ,color:"black"}}>logout</Link></li>
  </ul>
  </span>
          
    </div>
  
</nav>
</>
     );
}

export default Navbar;