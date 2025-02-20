import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const SalerFormLogin = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

     
   
    try {
      const { data } = await axios.post(
        "https://cooltrendyvogue.onrender.com/userLogin",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        window.localStorage.setItem("isLoggedIn" , true);
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    
  }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };

  return (
    <div className="form_container m-5 p-5">
      <form onSubmit={handleSubmit}>
     
      <div className="row ">
      <div className="col-6">
      <img
                src="../font-awesome/images/BrandLogo.png"
                alt="Signup"
                style={{ width: "80%" }}
              />
      </div>
      
          <div className="col-4 offset-2">
          <h2 className="fs-4 text-start mb-4"><b>Login Account</b></h2>
            <div className="row">
        <div className="col-7" >
          <label htmlFor="email" class="form-label">Email</label>
          <input
            type="email"
            name="email"
            class="form-control" 
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
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
            onChange={handleOnChange}
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
export default SalerFormLogin;