import React from 'react'
import "./registerStyle.css"
import { NavLink } from "react-router-dom";
import logo from "../../assets/Logo.svg"

const Register = () => {
  return (
<div>
      <div className="container container-form-register">
        <div className="row flex-column">
          <div className="col  py-3 d-flex align-items-end justify-content-center">
            <img class="logo-img" src={logo} alt="" />
            <h2 class="text-light title-form">Budget-Assistance</h2>
          </div>
          
            <div class="wrapperb">
              <form action="">
                <p class="form-login ">Welcome</p>
                <div class="input-box pt-2 ">
                  <label htmlFor="" class=" label-form">Name</label>
                  <input required="" type="text" />
                </div>
                <div class="input-box pt-2 ">
                  <label htmlFor="" class=" label-form">Email</label>
                  <input required="" type="email" />
                </div>
                <div class="input-box pt-2">
                  <label htmlFor="" class=" label-form">Password</label>
                  <input required="" type="password" />
                </div>
                <div class="input-box pt-2">
                  <label htmlFor="" class=" label-form">Confirm Password</label>
                  <input required="" type="password" />
                </div>
                <div class="input-box pt-2">
                  <label htmlFor="" class=" label-form">OTP</label>
                  <input required="" type="password" />
                </div>
                <div class="remember-forgot pt-2 pb-5">
                  <NavLink to={"/login"}>Already have an account</NavLink>
                </div>
                <NavLink to={"/home"}><button class="btn" type="submit">Regiter</button></NavLink>
              </form>
            </div>
          
        </div>
      </div>

    </div>
  )
}

export default Register
