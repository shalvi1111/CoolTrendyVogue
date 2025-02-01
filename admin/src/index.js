import './index.css';
import ReactDOM from 'react-dom/client'
import React  from 'react';
 import {BrowserRouter} from 'react-router-dom';
// import Navbar from './Navbar';
// import Siderbar from './Sidebar';
// import ListItems from './pages/ListItems';
// import OrderItem from './pages/OrderItems';
// import AddItems from './pages/AddItems';
// import LoginAdmin from './pages/Login';
// import LoginAdmin from './pages/Login';

  import App from './App';

//  const [login , setLogin] = useState('');

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
   <BrowserRouter>

      {/* <Navbar />
       <Siderbar />
        <Routes>
        <Route path='/login' element={<LoginAdmin />} />
        <Route path='/addProduct' element={<AddItems />} />
       <Route path='/list' element={<ListItems />} />
        <Route path='/orders' element={<OrderItem />} />
        

    </Routes> */}
    
   
 <App />
    
    


     </BrowserRouter>

  
);

