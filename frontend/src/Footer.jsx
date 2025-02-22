import React from 'react';


function Footer() {
    return ( 
       <>
        
      
       
          <footer className='mt-5 ' style={{backgroundColor:"#EEEDEB" , width:"100%" }}>
            <div className="container sticky-bottom row ">
        <div class="col-12  mt-5 mx-4 "  style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>

            <h1 className='fs-4 mt-5'>SHOPS BY CATEGORIES</h1>
          
      </div >
          <div className='mx-4 text-start '>
            <p style={{fontSize:"15px"}}>Dresses & Jumpsuits | Tops | T-Shirts | Shirts | Printed T-shirt | Jackets Accessories | Bottomwear | Outerwear |  Floral Tops  | Floral Tops | Skirts | Shorts | Skorts | Co- | Crop Tops | Floral Dresses | Exclusive Collection | Winterwear | Knitwear |</p>

            <h1 className='fs-5'>SHOPS BY COLOURS</h1>
            <p style={{fontSize:"15px"}}>Pink Dresses | Red Tops | Blue Tops | Yellow Tops | Pink Tops |</p>

            <h1 className='fs-5'>KEEP IN TOUCH</h1>
            <p className='fs-2 m-2'>
            <i className="fa fa-facebook-square m-2" aria-hidden="true"></i>
            <i className="fa fa-twitter m-2" aria-hidden="true"></i>
            <i className="fa fa-instagram m-2" aria-hidden="true"></i>
            </p>

            <h1 className='fs-5'>USEFUL LINKS</h1>
            <p style={{fontSize:"15px"}}>Contact Us | Find a Store | Size Guide | Where is my Order? | Track Order | FAQ | Blog | Book Appointment | E-GIFT VOUCHER | Corporate Info |</p>

            <p style={{fontSize:"15px"}}>About Us | About Bestseller | Privacy policy | T&C |</p>
        </div>
        
        
        </div>     
      </footer>
      {/* </div> */}
     </>
   
     );
}

export default Footer;