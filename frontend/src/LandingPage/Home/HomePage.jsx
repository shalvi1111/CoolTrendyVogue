import React from 'react';

import { Link } from 'react-router-dom';
import ShowProducts from '../../ShowProducts';
import Hero from '../Hero';
import NewCollections from '../../NewCollections';

  function HomePageofAllProducts() {

 

    return ( 
        <>
                
      <nav className="navbar navbar-expand-lg bg-body-primary  object-fit-bottom text-center m-3" style={{height:"20px"}}>
      <div className="container-fluid" >  
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ms-5 ml-5">
    

<li className="nav-item  ms-5">
          <Link className="nav-link fs-5" to="/" >
            <b>HOME</b>
          </Link>
        </li>

        <li className="nav-item  ms-5">
        <Link className="nav-link fs-5" to="/mens" >
            <b>MENS</b>
          </Link>
          {/* </button> */}
        </li>

        <li className="nav-item  ms-5">
        {/* <button onClick={()=> fiterWomer("Women")}> */}
          <Link className="nav-link fs-5" to="/womens" >
            <b>WOMEN</b>
          </Link>
          {/* </button> */}
        </li>

        <li className="nav-item  ms-5">
          <Link className="nav-link fs-5" to="/kids" >
            <b>KIDS</b>
          </Link>
        </li>

        <li className="nav-item  ms-5">
          <Link className="nav-link fs-5" to="/about" >
            <b>ABOUT</b>
          </Link>
        </li>

        <li className="nav-item  ms-5">
          <Link className="nav-link fs-5" to="/contact" >
            <b>CONATCT</b>
          </Link>
        </li> 

        <li className="nav-item  ms-5">
          <Link className="nav-link fs-5" to="/bestSeller" >
            <b>BEST-SELLERS</b>
          </Link>
        </li> 


        <li className="nav-item  ms-5">
          <Link className="nav-link fs-5" to="cart" >
            <b> MY ORDER</b>
          </Link>
        </li>


      </ul>
    </div>
    </div>
    </nav>
    <hr></hr>

    <div>
        <Hero />
        <NewCollections />
         
      <ShowProducts />
    </div>

      </>
         
      
      );
  }
  
  export default HomePageofAllProducts;