import React from 'react';
import { useNavigate } from 'react-router-dom';
function LogOutSaler() {
    const navigate = useNavigate();
    const Logout = ()=>{ 
       
        window.localStorage.removeItem("isLoggedIn")
        alert("LoggedOut")
        navigate('/')
    }

    return ( 
        <div className='text-center p-5 m-5'>
            <h1 className='fs-4 mb-4' style={{fontWeight:"bold"}}><i>Logged Out, but Fashion Never Sleeps!</i></h1>
        <button onClick={() =>Logout()} className='btn btn-dark p-2'>LOGOUT</button>
     </div>
     );
}

export default LogOutSaler;