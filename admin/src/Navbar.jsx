import React from 'react';
function Navbar() {
    return (  
       

<nav class="navbar  sticky-top" style={{backgroundColor:"#E9ECEF"}}>
<div className="container">
        <h1><strong><span style={{color:"#ADB5BD"}}>Cool</span> <span style={{color:"#343A40"}} >Trendy</span> <span style={{color:"pink"}}>Vogue</span></strong></h1>
           <button className='btn btn-dark'>Log Out</button>
          
       </div>
     
</nav>
    );
}

export default Navbar;