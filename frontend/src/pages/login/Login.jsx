import React, { useState } from 'react'
import "./LoginStyle.css"
import { NavLink } from "react-router-dom";
import logo from "../../assets/Logo.svg"
import useLogin from '../../hooks/useLogin'
const Login = () => {
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const  login  = useLogin();
  
	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(email, password);
	};
  return (
    <div>
      <div className="container container-form-login">
        <div className="row  flex-column">
          <div className="col mt-4 mb-4 pb-3 d-flex align-items-end justify-content-center">
            <img className="logo-img" src={logo} alt="" />
            <h2 className="text-light title-form">Budget-Assistance</h2>
          </div>
          
            <div className="wrapperb">
              <form onSubmit={handleSubmit}>
                <p className="form-login mb-4 mt-5">Welcome Back</p>
                <div className="input-box pt-4 mb-2">
                  <label htmlFor="" class="mb-2 label-form">Email</label>
                  <input required="" type="email" />
                </div>
                <div className="input-box pt-4">
                  <label htmlFor="" class="mb-2 label-form">Password</label>
                  <input required="" type="password" />
                </div>
                <div className="remember-forgot pt-4 pb-5">
                  <NavLink to={"/"}>register a new account</NavLink>
                </div>
                <NavLink to={"/home"}><button class="btn" type="submit">LogIn</button></NavLink>
              </form>
            </div>
          
        </div>
      </div>

    </div>
  )
}

export default Login
