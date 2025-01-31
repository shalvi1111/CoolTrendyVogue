import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter , Route ,Routes} from 'react-router-dom';

import Navbar from './Navbar';
// import { BrowserRouter } from 'react-router-dom';
import HomePageofAllProducts from './LandingPage/Home/HomePage';



// import Shirt from './LandingPage/AllProducts/Shirts';


// import ShowProducts from './ShowProducts';
// import Cardigans from './LandingPage/WinterWear/Cardigans';
// // import AllDresses from './LandingPage/Dresses/AllDresses';
// import Accessories from './LandingPage/AllProducts/Accessaries';
// import BottomWear from './LandingPage/AllProducts/BottomWear';
// import EveryThing from './LandingPage/EveryThingDenim';
// import Tops from './LandingPage/AllProducts/Tops';
// import Jacket from './LandingPage/AllProducts/Jacket';
// import Tees from './LandingPage/AllProducts/Tees';
// import Bodycorn from './LandingPage/Dresses/Bodycorn';
// import FloralDress from "./LandingPage/Dresses/FloralDresses" ;
// import JumpSuit from './LandingPage/Dresses/JumpSuits';
// import ShortDress from "./LandingPage/Dresses/ShortDress";
// import Blazer from "./LandingPage/WinterWear/Blazer" ;
// import Coat from './LandingPage/WinterWear/Coat';
// import BootCut from './LandingPage/Jeans/Bootcut';
// import Ripped from './LandingPage/Jeans/Ripped';
// import Skinny from './LandingPage/Jeans/Skinny';
// import Straight from './LandingPage/Jeans/Straight';
// import WideLeg from './LandingPage/Jeans/WideLeg';
// import CoOrds from "./LandingPage/co-ords/Co-ords";
import Footer from './Footer';
import SalerFormLogin from './Authentication/LoginSaler';
import SignUpSaler from './Authentication/SignUpSaler';
import LogOutSaler from './Authentication/LogOutSaler';
import AddProduct from "./AddProduct/AddProduct";
import EveryThing from './LandingPage/EveryThingDenim';
import Cart from './LandingPage/Cart';
import ShowProducts from './ShowProducts';
import Edit_Product from './Edit';
import Hero from './LandingPage/Hero';
import BestSeller from './BestSeller';
import Order from './LandingPage/Order';
// import MainHome from './LandingPage/Home/MainHome';
// import ShowProduc from './LandingPage/ShowProducts';



const root = ReactDOM.createRoot(document.getElementById('root'));
// const login = window.localStorage.getItem("isLoggedIn");
root.render(
   
   <BrowserRouter>
   <Navbar />
   <Routes>
      <Route path='/' element={<HomePageofAllProducts />}></Route>
{/*      
       All Products Folder 
      <Route path='/shirts' element={<Shirt />} ></Route>
      <Route path='/accessories' element={<Accessories/>}></Route>
      <Route path='/bottomWear' element={<BottomWear/>}></Route>
      <Route path='/denim' element={<EveryThing/>}></Route>
      <Route path='/showProduct' element={<ShowProducts/>}></Route>
      
      <Route path='/jacket' element={<Jacket/>}></Route>
      <Route path='/tees' element={<Tees/>}></Route>
      <Route path='/tops' element={<Tops/>}></Route>

      Dresses Folder 

      <Route path='/bodycon' element={<Bodycorn />}></Route>
      <Route path='/floralDressess' element={<FloralDress/>}></Route>
      <Route path='/jumpSuit' element={<JumpSuit/>}></Route>
      <Route path='/shortDressess' element={< ShortDress/>}></Route>

      Winter Wear
      <Route path='/blazer' element={<Blazer />}></Route>
      <Route path='/cardigans' element={<Cardigans />}></Route>
      <Route path='/coats' element={<Coat />}></Route>
      <Route path='/jacket' element={<Jacket />}></Route>
      
     Shirts Folder
     <Route path='/shirts' element={<Shirt />} ></Route>

     Jeans Folder
     <Route path='/bootcut' element={<BootCut />} ></Route>
     <Route path='/ripped' element={<Ripped />} ></Route>
     <Route path='/skinny' element={<Skinny />} ></Route>
     <Route path='/straight' element={<Straight />} ></Route>
     <Route path='/wideLeg' element={<WideLeg />} ></Route>

     Co-ords
     <Route path='/co-ords' element={<CoOrds />} ></Route> */}
     
      {/* Saler  */}

      <Route path='/userLogin' element={ <SalerFormLogin />}></Route>
      <Route path='/signupUser' element={<SignUpSaler />} ></Route>
      <Route path='/logoutSaler'element={<LogOutSaler/>}></Route>

      {/* Add Product */}
      <Route path='/home' element={<Hero />}></Route>
      <Route path='/addProduct' element={<AddProduct/>} ></Route>
      <Route path='/productDetail/:id' element={<EveryThing/>}></Route>
       {/* <Route path='/cart/:id' element={<Cart/>}></Route> */}
       <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/listProduct' element={<ShowProducts />}></Route>
      <Route path='/editProduct' element={<Edit_Product />}></Route>
      <Route path="/bestSeller" element={<BestSeller />}></Route>
      <Route path='/buy' element={<Order/>}></Route>
      {/* <Route path='/cart/delete' element={<Cart/>}></Route> */}
      
    
      



    </Routes>
    <Footer />
   </BrowserRouter>
  
);

