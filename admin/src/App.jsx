import React, { useState } from 'react';
import LoginAdmin from './pages/Login';
import { Routes , Route } from 'react-router-dom';
// import AddItems from './pages/AddItems';
import ListItems from './pages/ListItems';
import OrderItem from './pages/OrderItems';
import Navbar from "./Navbar";
import Siderbar from "./Sidebar";
import AddProduct from './pages/AddProduct';
// export const backendURL = import.meta.env.VITE_BACKEND_URL;

const App =() =>{

    // const [ result , setResult] = useState('');
    return (  
        
        <div className="constainer">
           
            {/* {result === ''? <LoginAdmin setResult ={setResult} /> : */}
              
             
              <>
              <Navbar />
               <Siderbar />
                <Routes>
                <Route path='/adminLogin' element={<LoginAdmin />} ></Route>
                <Route path='/addProduct' element={<AddProduct />} ></Route>
               <Route path='/list' element={<ListItems />} ></Route>
                <Route path='/orders' element={<OrderItem />} ></Route>
                
        
            </Routes>
            </>

            
           
            
            
            
        
            }
        </div>

       
    );
}

export default App;