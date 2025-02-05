import React from 'react';
import { Link } from 'react-router-dom';
function Navbar({setToken}) {
    return (  
       

        <nav className="navbar navbar-expand-lg bg-body-white border-bottom sticky-top " style={{backgroundColor:"#EEEDEB" , width:"100%" , display:"flex", margin:"0" , padding:"0"}} >
  
        <div className="container-fluid ">
         {/* <Link className="navbar-brand" to="/" style={{ flexGrow: 1 }}> */}
         <h4 className='fs-1 ' style={{fontWeight:"bolder"}}> <i>Cool Trendy Vogue   </i>     </h4>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
                   <ul className="navbar-nav   text-center">
                 
             
                         <li className="nav-item m-2 text-end">
                       <Link className="nav-link fs-5" to="/addProduct" >
                         <b>ADD PRODUCT</b>
                       </Link>
                     </li>
         
                     <li className="nav-item  m-2  text-end">
                       <Link className="nav-link fs-5" to="/listProduct" >
                         <b>LIST PRODUCT</b>
                       </Link>
                     </li>
         
                     <li className="nav-item m-2  text-end">
                       <Link className="nav-link fs-5" to="/cart" >
                         <b>ORDERS</b>
                       </Link>
                     </li>
                     </ul>
                     </div>
         <button className='btn btn-dark' onClick={()=>setToken("")}>Log Out</button>
           {/* </Link> */}
           </div>
   </nav>




    );
}

export default Navbar;