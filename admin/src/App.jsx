import React, { useState } from 'react';
import LoginAdmin from './pages/Login';
import { Routes , Route } from 'react-router-dom';
import AddItems from './pages/AddItems';
import ListItems from './pages/ListItems';
import OrderItem from './pages/OrderItems';
import Navbar from "./Navbar";
import Siderbar from "./Sidebar";
// export const backendURL = import.meta.env.VITE_BACKEND_URL;

const App =() =>{

    const [ result , setResult] = useState('');
    return (  
        
        <div className="constainer">
           
            {result === ''? <LoginAdmin setResult ={setResult} /> :
              
             
              <>
              <Navbar />
               <Siderbar />
                <Routes>
                {/* <Route path='/login' element={<LoginAdmin />} /> */}
                <Route path='/add' element={<AddItems />} />
               <Route path='/list' element={<ListItems />} />
                <Route path='/orders' element={<OrderItem />} />
                
        
            </Routes>
            </>

            
           
            
            
            
        
            }
        </div>

       
    );
}

export default App;