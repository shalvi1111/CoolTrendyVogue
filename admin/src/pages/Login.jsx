import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer } from "react-toastify";
// import { backendURL } from "../App";


const LoginAdmin = ({setResult}) => {


  

     const [email, setEmail] = useState('');
     const [password , setPassword] = useState('');
  
    
  
 
   const handleSubmit = async(event) =>{
     try{
      event.preventDefault();
      const response = await axios.post( "http://localhost:4000/adminLogin" , {email,password});
      console.log(response);
      // if(response.data.success){
      //   setResult(response.data.result)
      // }
     }
     catch(err){
      console.log(err)
     }

   }

   const onChangeEmail = (e)=>{
    setEmail(e.target.value);
   }
   const onChangePassword = (e)=>{
    setPassword(e.target.value);
   }


  return (
    <div className="form_container m-5 p-5">
      <form onSubmit={handleSubmit}>
      <h2 className="fs-4 text-center">Login Account</h2>
      <div className="row ">
      <div className="col-6">
      <img
                src="../assets/images/BrandLogo.png"
                alt="Signup"
                style={{ width: "80%" }}
              />
      </div>
      
          <div className="col-4 offset-2">
            <div className="row">
        <div className="col-7" >
          <label htmlFor="email" class="form-label">Email</label>
          <input
            type="email"
            name="email"
            class="form-control" 
            value={email}
            placeholder="Enter your email"
            onChange={onChangeEmail}
          />
        </div>
        <div className="col-7 mb-5">
          <label htmlFor="password" class="form-label">Password</label>
          <input
            type="password"
            class="form-control" 
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={onChangePassword}
          />
        </div>
        <button type="submit" className="btn btn-dark">Log in</button>&nbsp; &nbsp;
        <span>
          Already have an account? &nbsp;<Link to={"/signupSaler"}>Signup</Link>
        </span>
        </div>
        </div>
     
      <ToastContainer />
      </div>
      </form>
    </div>
  );
};
export default LoginAdmin;