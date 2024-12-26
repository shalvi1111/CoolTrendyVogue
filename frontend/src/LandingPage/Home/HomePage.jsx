import React from 'react';
// import AllProducts from '../AllProducts/AllProducts';
// import Jacket from '../AllProducts/Jacket';
import { Link } from 'react-router-dom';
import ShowProducts from '../../ShowProducts';

  function HomePageofAllProducts() {
    return ( 
        <>
                
      <nav className="navbar navbar-expand-lg bg-body-primary  object-fit bottom-bottom text-center m-3" style={{height:"20px"}}>
      <div className="container-fluid" >  
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
      <li className="nav-item dropdown ms-2">
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
        </li>

        <li className="nav-item dropdown ms-4">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <span className='fs-5'><b>DRESSESS</b></span>
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/bodycon">BODYCON </Link></li>
            <li><Link className="dropdown-item" to="/floralDressess">FLORAL DRESSESS</Link></li>
            <li><Link className="dropdown-item" to="/jumpSuit">JUMPSUITS</Link></li>
            <li><Link className="dropdown-item" to="/shortDressess">SHORT DRESSESS</Link></li>
          </ul>
        </li>

        <li className="nav-item dropdown ms-5  " >
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <span className='fs-5'><b>WINTER WEAR</b></span>
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/blazer">BLAZERS</Link></li>
            <li><Link className="dropdown-item" to="/cardigans">CARDIGANS</Link></li>
            <li><Link className="dropdown-item" to="/coats">COATS</Link></li>
            <li><Link className="dropdown-item" to= "/jacket">JACKETS</Link></li>
          </ul>
        </li>

        <li className="nav-item  ms-5">
          <Link className="nav-link fs-5" to="/shirts" >
            <b>SHIRTS</b>
          </Link>
        </li>

        <li className="nav-item dropdown ms-5">
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
        </li>

        <li className="nav-item dropdown ms-5">
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
        </li>

        <li className="nav-item dropdown ms-5">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <span className='fs-5'><b>EXCLUSIVE</b></span>
          </Link>
          <ul className="dropdown-menu">
          <li><Link className="dropdown-item" to="/shirts">Shirts</Link></li>
          <li><Link className="dropdown-item" to="/tops">Tops</Link></li>
          <li><Link className="dropdown-item" to="/tees">Tees</Link></li>
            <li><Link className="dropdown-item" to="/accessories">Accessories</Link></li>
          </ul>
        </li>

        <li className="nav-item  ms-5">
          <Link className="nav-link fs-5" to="#" >
            <b> MY ORDER</b>
          </Link>
        </li>


      </ul>
    </div>
    </div>
    </nav>
    <hr></hr>

    <div>
      <h1 style={{ textAlign: "center", margin: "20px 0" }}>Our Products</h1>
      <ShowProducts />
    </div>

      </>
         
      
      );
  }
  
  export default HomePageofAllProducts;