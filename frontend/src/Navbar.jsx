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
 
    
      <form className="d-flex" role="search">
        <input className="form-control me-2 " type="search" placeholder="SEARCH " aria-label="Search" style={{width:"600px", height:"2rem"}}  />
        <button className="btn btn-dark fs-6 text-center   " type="submit" style={{width:"100px" ,height:"2rem"}}>SEARCH
        </button>
      
      
      </form>

      <div className="icons  "    >
      <i className="fa fa-user-o fs-4 m-2 p-2" aria-hidden="true" ></i>
      <i className="fa fa-heart-o fs-4  m-2 p-2" aria-hidden="true"></i>
      <i className="fa fa-shopping-bag fs-4  m-2 p-2" aria-hidden="true"></i>
      </div>
    </div>
  
</nav>
</>
     );
}

export default Navbar;