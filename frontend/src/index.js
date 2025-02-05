import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter , Route ,Routes} from 'react-router-dom';

import Navbar from './Navbar';
import HomePageofAllProducts from './LandingPage/Home/HomePage';


import Footer from './Footer';
import SalerFormLogin from './Authentication/LoginSaler';
import SignUpSaler from './Authentication/SignUpSaler';
import LogOutSaler from './Authentication/LogOutSaler';

import EveryThing from './LandingPage/EveryThingDenim';
import Cart from './LandingPage/Cart';
import ShowProducts from './ShowProducts';
import Edit_Product from './Edit';
// import Hero from './LandingPage/Hero';
import BestSeller from './BestSeller';
import Order from './LandingPage/Order';

import Men from './LandingPage/Men';
import Women from './LandingPage/Women';
import Kid from './LandingPage/Kids';
import About from './LandingPage/About';
import Contact from './LandingPage/Contact';
import PlaceOrder from './LandingPage/PlaceOrder';
import PaymentSuccessful from './LandingPage/PaymentSuccessful';
import PaymentUnsuccessful from './LandingPage/PaymentUnSuccessful';



const root = ReactDOM.createRoot(document.getElementById('root'));
// const login = window.localStorage.getItem("isLoggedIn");
root.render(
   
   <BrowserRouter>
   <Navbar />
   <Routes>
      <Route path='/' element={<HomePageofAllProducts />}></Route>

     
      {/* Saler  */}

      <Route path='/userLogin' element={ <SalerFormLogin />}></Route>
      <Route path='/signupUser' element={<SignUpSaler />} ></Route>
      <Route path='/logoutuser'element={<LogOutSaler/>}></Route>

      {/* Add Product */}
      {/* <Route path='/' element={<Hero />}></Route> */}

      <Route path='/productDetail/:id' element={<EveryThing/>}></Route>
       {/* <Route path='/cart/:id' element={<Cart/>}></Route> */}
       <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/listProduct' element={<ShowProducts />}></Route>
      <Route path='/editProduct' element={<Edit_Product />}></Route>
      <Route path="/bestSeller" element={<BestSeller />}></Route>
      <Route path='/buy' element={<Order/>}></Route>
      {/* <Route path='/cart/delete' element={<Cart/>}></Route> */}
      <Route path='/mens' element= {<Men />}></Route>
      <Route path='/womens' element = {<Women />} ></Route>
      <Route path='/kids' element = {<Kid />} ></Route>
      <Route path='/about' element = {<About />} ></Route>
      <Route path='/contact' element ={<Contact />} ></Route>
      <Route path='/placeorder' element={<PlaceOrder />} ></Route>
      <Route path='/paymentSuccessful' element ={<PaymentSuccessful />} ></Route>
      {/* <Route path='/paymentNotsuccessful' element ={<PaymentNotSuccessful />} ></Route> */}
      <Route path='/paymentUnsuceessful'  element = {<PaymentUnsuccessful />} ></Route>
      
    
      



    </Routes>
    <Footer />
   </BrowserRouter>
  
);

