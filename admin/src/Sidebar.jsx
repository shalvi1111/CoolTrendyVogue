import React from 'react';
import { Link } from 'react-router-dom';


function Siderbar() {
    return ( 
       
          <div className="sidebar" style={{width:"300px" , height:"100vh" ,border:"2px solid grey" , borderRadius:"5px"}}>
              <div className="row ">
                <div className="col-12 me-5 text-center add" style={{border:"2px solid black" , width:"97%" , height:"50px"}} >
                <Link to="/addProduct" style={{textDecoration:"none" , color:"black"}}><span className='p-5'> <i className="fa-solid fa-plus fs-2"></i> Add items</span></Link>
                </div>
           
                <div className="col-12 mt-5 text-center list" style={{border:"2px solid black" , width:"97%",height:"50px"}}>
               <Link to="/list" style={{textDecoration:"none" , color:"black"}}> <span className='p-5'><i class="fa-solid fa-list-ul fs-2"></i> List items</span></Link>
                </div>
                
                <div className="col-12 mt-5 text-center orders" style={{border:"2px solid black" , width:"97%" ,height:"50px"}}>
                <Link to="/orders"style={{textDecoration:"none" , color:"black"}}><span className='p-5'> <i class="fa-regular fa-calendar-check fs-2"></i>&nbsp; Orders</span></Link>
                </div>
              </div>
          </div>
    
         
     );
}

export default Siderbar;