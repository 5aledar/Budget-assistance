import React, { useState } from 'react'
import "./registerStyle.css"

import { NavLink } from "react-router-dom";
import logo from "../../assets/Logo.svg"
import useRegister from '../../hooks/useRegister';
const Register = () => {
  const register= useRegister()
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    otp: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(inputs);
  };
  return (
    <div>
      <div className="container container-form-register">
        <div className="row flex-column">
          <div className="col  py-3 d-flex align-items-end justify-content-center">
            <img className="logo-img" src={logo} alt="" />
            <h2 className="text-light title-form">Budget-Assistance</h2>
          </div>

          <div class="wrapperb">
            <form action="" onSubmit={handleSubmit}>
              <p class="form-login ">Welcome</p>
              <div class="input-box pt-2 ">
                <label htmlFor="" class=" label-form">User Name</label>
                <input required="" type="text" value={inputs.username} onChange={(e) => setInputs({ ...inputs, username: e.target.value })}/>
              </div>
              <div class="input-box pt-2 ">
                <label htmlFor="" class=" label-form">Email</label>
                <input required="" type="email" value={inputs.email} onChange={(e) => setInputs({ ...inputs, email: e.target.value })} />
              </div>
              <div class="input-box pt-2">
                <label htmlFor="" class=" label-form">Password</label>
                <input required="" type="password" value={inputs.password} onChange={(e) => setInputs({ ...inputs, password: e.target.value })} />
              </div>
              <div class="input-box pt-2">
                <label htmlFor="" class=" label-form">Confirm Password</label>
                <input required="" type="password" value={inputs.confirmPassword} onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })} />
              </div>
              <div class="input-box pt-2">
                <label htmlFor="" class=" label-form">OTP</label>
                <input required="" type="password" value={inputs.otp}  onChange={(e) => setInputs({ ...inputs, otp: e.target.value })}/>
              </div>
              <div class="remember-forgot pt-2 pb-5">
                <NavLink to={"/login"}>Already have an account</NavLink>
              </div>
             <button class="btn" type="submit">Regiter</button>
            </form>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Register
