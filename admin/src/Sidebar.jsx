import React from 'react';
import { Link, useParams } from 'react-router-dom';


function Siderbar() {
  // const {id} = useParams();

    return ( 
       
          // <div className="sidebar " style={{width:"300px" , height:"100vh" ,borderRight:"2px solid black" , borderRadius:"5px"}} >
          //     <div className="row ">
          //       <div className="col-12 me-5 text-center add" style={{border:"2px solid black" , width:"97%" , height:"50px"}} >
          //       <Link to="/addProduct" style={{textDecoration:"none" , color:"black"}}><span className='p-5'> <i className="fa-solid fa-plus fs-2"></i> Add items</span></Link>
          //       </div>
           
          //       <div className="col-12 mt-5 text-center list" style={{border:"2px solid black" , width:"97%",height:"50px"}}>
          //      <Link to="/list" style={{textDecoration:"none" , color:"black"}}> <span className='p-5'><i class="fa-solid fa-list-ul fs-2"></i> List items</span></Link>
          //       </div>
                
          //       <div className="col-12 mt-5 text-center orders" style={{border:"2px solid black" , width:"97%" ,height:"50px"}}>
          //       <Link to="/orders"style={{textDecoration:"none" , color:"black"}}><span className='p-5'> <i class="fa-regular fa-calendar-check fs-2"></i>&nbsp; Orders</span></Link>
          //       </div>
          //     </div>
          // </div>

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

            {/* <li className="nav-item  ms-5  mx-5 ps-5 px-5 text-end">
              <Link className="nav-link fs-5" to={`/productDetail`} >
                <b>PRODUCT DETAIL</b>
              </Link>
            </li> */}

            {/* <li className="nav-item  ms-5  mx-5 ps-5 px-5 text-end">
              <Link className="nav-link fs-5" to="/cart" >
                <b>CARTS</b>
              </Link>
            </li> */}


            </ul>
            </div>
            </div>
          
            </nav>

           
    
         
     );
}

export default Siderbar;