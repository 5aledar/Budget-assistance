import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import headerimg from "../../assets/header.jpg";
import "./headerStyle.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [email, setEmail] = useState(null);
  const Navigate=useNavigate()
  const sentOTB = async (email) => {
    try{
        const res = await fetch("http://localhost:3000/api/send-otp", {
            headers: { "Content-Type": "application/json" },
            method: "POST",
            body: JSON.stringify({ email: email }),
        });
        console.log(res);
        const data = await res.json();

        return data;
    }catch(err){
        console.log(err.message);
    }
}

const handleSubmit = async (e) => {
    e.preventDefault();
    await sentOTB(email);
    Navigate('/register')
    
  };
  return (
    <>
      <div
        className="container-header"
        style={{
          backgroundImage: `url(${headerimg})`,
          backgroundSize: "cover",
        }}
      >
        <Navbar />
        <div className="header text-light">
          <div className="content-header">
            <h1 class="title-header pb-2">Stay Financially aware</h1>
            <p class="subt-header">
              Using our website , we can help you keep tracking all your incomes
              , expenses and give you all the statistics you need{" "}
            </p>
            <form>
              <button type="submit"
                onClick={handleSubmit}
                class="text-light btn-header mt-5 mb-5"
              >
                Try it for free
              </button>
              <input
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                type="email"
                placeholder="enter your email address"
                required
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
