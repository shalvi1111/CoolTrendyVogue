import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function SignUpSaler() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;

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
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password || !username) {
      handleError("All fields are required.");
      return;
    }
    try {
      const {data}  = await axios.post(
        "http://localhost:4000/signupUser",
        inputValue,
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
        // console.log(success);
        setInputValue({
          email: "",
          password: "",
          username: "",
        });
      } else {
        handleError(message);
      }
    } catch (error) {
      if (error.response) {
        handleError(error.response.data.message || "Something went wrong");
      } else {
        console.log(error);
        handleError("Server error. Please try again later.");
      }
    }
  };

  return (
    <>
      <div className="container m-2 p-2 text-center">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-7">
              <img
                src="../font-awesome/images/BrandLogo.png"
                alt="Signup"
                style={{ width: "80%" }}
              />
            </div>
            <div className="col-5 mt-5">
              <h1 className="fs-2 mb-5">
                <b>Sign up</b>
              </h1>

              <label htmlFor="email" className="mt-4 pt-2 ml-5">
                <b>Email: &nbsp; </b>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                style={{ width: "50%" }}
                value={email}
                onChange={handleOnChange}
              />
              <br />

              <label htmlFor="username" className="mt-4 pt-2 ml-5">
                <b>Username: &nbsp; </b>
              </label>
              <input
                type="text"
                name="username"
                placeholder="Enter your Username"
                style={{ width: "50%" }}
                value={username}
                onChange={handleOnChange}
              />
              <br />

              <label htmlFor="password" className="mt-4 pt-2 ml-5">
                <b>Password: &nbsp; </b>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your Password"
                style={{ width: "50%" }}
                value={password}
                onChange={handleOnChange}
              />
              <br />

              <button
                className="btn btn-dark mt-5 m-2"
                style={{ width: "100px" }}
                type="submit"
              >
                Sign up
              </button>
              <span>
                Already have an account? <Link to="/userLogin">Login</Link>
              </span>
            </div>
          </div>
        </form>
        <ToastContainer />
      </div>
    </>
  );
}

export default SignUpSaler;

