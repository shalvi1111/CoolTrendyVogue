import React from 'react';
import { Link } from 'react-router-dom';


function Siderbar() {

    return ( 
    
          <nav className="navbar navbar-expand-lg bg-body-primary  object-fit-bottom text-center mt-4" style={{height:"20px" }}>
          <div className="container-fluid" >  
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav   text-center">
        
    
                <li className="nav-item ms-5  mx-5 text-end">
              <Link className="nav-link fs-5" to="/addProduct" >
                <b>ADD PRODUCT</b>
              </Link>
            </li>

            <li className="nav-item  ms-5  mx-5  text-end">
              <Link className="nav-link fs-5" to="/listProduct" >
                <b>LIST PRODUCT</b>
              </Link>
            </li>

            <li className="nav-item  ms-5  mx-5  text-end">
              <Link className="nav-link fs-5" to="/cart" >
                <b>ORDERS</b>
              </Link>
            </li>

         


            </ul>
            </div>
            </div>
          
            </nav>

           
    
         
     );
}

export default Siderbar;