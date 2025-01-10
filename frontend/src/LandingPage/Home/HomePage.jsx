import React from 'react';
// import AllProducts from '../AllProducts/AllProducts';
// import Jacket from '../AllProducts/Jacket';
import { Link } from 'react-router-dom';
import ShowProducts from '../../ShowProducts';
import Hero from '../Hero';
import NewCollections from '../../NewCollections';

  function HomePageofAllProducts() {
    return ( 
        <>
                
      <nav className="navbar navbar-expand-lg bg-body-primary  object-fit bottom-bottom text-center m-3" style={{height:"20px"}}>
      <div className="container-fluid" >  
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ms-5 ml-5">
      {/* <li className="nav-item dropdown ms-2">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <span className='fs-5'><b>ALL PRODUCTS</b></span>
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/shirts">Shirts</Link></li>
            <li><Link className="dropdown-item" to="/tops">Tops</Link></li>
            <li><Link className="dropdown-item" to="/bottomWear">Bottom Wear</Link></li>
            <li><Link className="dropdown-item" to="/denim">Denim</Link></li>
            <li><Link className="dropdown-item" to="/jacket">Jacket</Link></li>
            <li><Link className="dropdown-item" to="/tees">Tees</Link></li>
            <li><Link className="dropdown-item" to="/accessories">Accessories</Link></li>
          </ul>
        </li> */}

<li className="nav-item  ms-5">
          <Link className="nav-link fs-5" to="/home" >
            <b>HOME</b>
          </Link>
        </li>

        <li className="nav-item  ms-5">
          <Link className="nav-link fs-5" to="/mens" >
            <b>MENS</b>
          </Link>
        </li>

        <li className="nav-item  ms-5">
          <Link className="nav-link fs-5" to="/womens" >
            <b>WOMEN</b>
          </Link>
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
          <Link className="nav-link fs-5" to="/collections" >
            <b>COLLECTIONS</b>
          </Link>
        </li> 


        {/* <li className="nav-item dropdown ms-4">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <span className='fs-5'><b>DRESSESS</b></span>
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/bodycon">BODYCON </Link></li>
            <li><Link className="dropdown-item" to="/floralDressess">FLORAL DRESSESS</Link></li>
            <li><Link className="dropdown-item" to="/jumpSuit">JUMPSUITS</Link></li>
            <li><Link className="dropdown-item" to="/shortDressess">SHORT DRESSESS</Link></li>
          </ul>
        </li> */}

        {/* <li className="nav-item dropdown ms-5  " >
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <span className='fs-5'><b>WINTER WEAR</b></span>
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/blazer">BLAZERS</Link></li>
            <li><Link className="dropdown-item" to="/cardigans">CARDIGANS</Link></li>
            <li><Link className="dropdown-item" to="/coats">COATS</Link></li>
            <li><Link className="dropdown-item" to= "/jacket">JACKETS</Link></li>
          </ul>
        </li>  */}

        {/* <li className="nav-item  ms-5">
          <Link className="nav-link fs-5" to="/shirts" >
            <b>SHIRTS</b>
          </Link>
        </li> */}

        {/* <li className="nav-item dropdown ms-5">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <span className='fs-5'><b>JEANS</b></span>
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/bootcut">BOOTCUT JEANS</Link></li>
            <li><Link className="dropdown-item" to="/ripped">RIPPED JEANS</Link></li>
            <li><Link className="dropdown-item" to="/skinny">SKINNY JEANS</Link></li>
            <li><Link className="dropdown-item" to="/straight">STRAIGHT JEANS</Link></li>
            <li><Link className="dropdown-item" to="/wideLeg">WIDE LEG JEANS</Link></li>
          </ul>
        </li>

        <li className="nav-item  ms-4">
          <Link className="nav-link fs-5" to="/co-ords" >
            <b>CO-ORDS</b>
          </Link>
        </li> */}

        {/* <li className="nav-item dropdown ms-5">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <span className='fs-5'><b>SALE</b></span>
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/shirts">Shirts</Link></li>
            <li><Link className="dropdown-item" to="/tops">Tops</Link></li>
            <li><Link className="dropdown-item" to="/bottomWear">Bottom Wear</Link></li>
            <li><Link className="dropdown-item" to="/denim">Denim</Link></li>
            <li><Link className="dropdown-item" to="/jacket">Jacket</Link></li>
            <li><Link className="dropdown-item" to="/tees">Tees</Link></li>
            <li><Link className="dropdown-item" to="/accessories">Accessories</Link></li>
          </ul>
        </li> */}

        {/* <li className="nav-item dropdown  ">
        <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{backgroundColor:"transparent" }}>
  <i className="fa fa-user-o fs-4 m-2 p-2" aria-hidden="true" ></i>
  </button>
  <ul class="dropdown-menu">
  <li>Log in</li>
  <li>Register</li>
  </ul>
        </li> */}

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