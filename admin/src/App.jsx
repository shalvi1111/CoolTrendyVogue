import React, { useEffect, useState } from 'react';
import LoginAdmin from './pages/Login';


import Navbar from "./Navbar";
import { ToastContainer } from 'react-toastify';
import ListItems from './pages/ListItems';
import AddProduct from './pages/AddProduct';
import { Routes , Route } from 'react-router-dom';
import Cart from './pages/Cart';
import DetailProd from './pages/ProductDetail';
import Home from './pages/HomePage';
import EditItems from './pages/EditItems';




const App =() =>{

    const [ token , setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):'');
    useEffect( ()=>{
        localStorage.setItem('token',token);
    })
    return (  
        
        <>
            <ToastContainer />
           { token ==="" ? <LoginAdmin setToken ={setToken} /> :
              
             
             <div className="paths">
              <Navbar setToken={setToken} />
             
                 {/* <Siderbar /> */}
                 <Routes >
                    <Route path='/' element={<Home  token={token}/>} ></Route>
               <Route path='/addProduct' element={<AddProduct token={token}/>}  ></Route>
               <Route path='/listProduct' element={<ListItems token={token}/>}  ></Route>
                {/* <Route path='/orders' element={<OrderItem /> } ></Route> */}
                <Route path='/cart' element={<Cart token ={token}/>} ></Route>
                <Route path='/productDetail/:id' element={<DetailProd token ={token}/>}  ></Route>
                <Route path='/edit/:id' element={<EditItems token={token}  />} ></Route>

      </Routes>

           
           </div>

            
           
            
            
            
        
            }
        </>

       
    );
}

export default App;