import React, { useEffect, useState } from 'react';
import LoginAdmin from './pages/Login';
// import AddItems from './pages/AddItems';

import Navbar from "./Navbar";
// import Siderbar from "./Sidebar";
import { ToastContainer } from 'react-toastify';
import ListItems from './pages/ListItems';
// import OrderItem from './pages/OrderItems';
import AddProduct from './pages/AddProduct';
// import { useState } from 'react';
import { Routes , Route } from 'react-router-dom';
import Cart from './pages/Cart';
import DetailProd from './pages/ProductDetail';


// export const backendURL = import.meta.env.VITE_BACKEND_URL;

const App =() =>{

    const [ token , setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):'');
    useEffect( ()=>{
        localStorage.setItem('token',token);
    })
    return (  
        
        <>
            <ToastContainer />
           { token ==="" ? <LoginAdmin setToken ={setToken} /> :
              
             
             <div className="container">
              <Navbar setToken={setToken} />
                
                 {/* <Siderbar /> */}
                 <Routes >
               <Route path='/addProduct' element={<AddProduct token={token}/>}  ></Route>
               <Route path='/listProduct' element={<ListItems token={token}/>}  ></Route>
                {/* <Route path='/orders' element={<OrderItem /> } ></Route> */}
                <Route path='/cart' element={<Cart token ={token}/>} ></Route>
                <Route path='/productDetail/:id' element={<DetailProd token ={token}/>}  ></Route>
      </Routes>

           
           </div>

            
           
            
            
            
        
            }
        </>

       
    );
}

export default App;