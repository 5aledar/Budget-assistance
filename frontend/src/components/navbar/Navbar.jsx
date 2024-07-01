import React from "react";
import { NavLink } from "react-router-dom";
import './NavbarStyle.css'
import * as bootstrap from "bootstrap";
import logo from "../../assets/Logo.svg"


const NavBar = () => {
  window.addEventListener("DOMContentLoaded", (event) => {
    var navbarShrink = function () {
      const navbarCollapsible = document.body.querySelector("#mainNav");
      if (!navbarCollapsible) {
        return;
      }
      if (window.scrollY === 0) {
        navbarCollapsible.classList.remove("navbar-shrink");
      } else {
        navbarCollapsible.classList.add("navbar-shrink");
      }
    };

    // Shrink the navbar
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener("scroll", navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector("#mainNav");
    if (mainNav) {
      new bootstrap.ScrollSpy(document.body, {
        target: "#mainNav",
        rootMargin: "0px 0px -40%",
      });
    }

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector(".navbar-toggler");
    const responsiveNavItems = [].slice.call(
      document.querySelectorAll("#navbarResponsive .nav-link")
    );
    responsiveNavItems.map((responsiveNavItem) => {
      return responsiveNavItem.addEventListener("click", () => {
        if (window.getComputedStyle(navbarToggler).display !== "none") {
          navbarToggler.click();
        }
      });
    });
  });

  return (
    <>
      <nav
        className="navbar navbar-expand-lg  fixed-top"
        id="mainNav"
      >
        <div className="container container-nav">
          <div className="d-flex">
          <NavLink  to={"/home"}><img class="navbar-logo" src={logo} alt=""/></NavLink>
            <h1 className="navbar-brand text-light">
              Budget-Assistance
            </h1>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars ms-1"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
              <li className="nav-item p-2 about ">
                <NavLink class="text-light" to={"/about"}>About us</NavLink>
              </li>
              <li className="nav-item p-2 contact ">
                <NavLink class="text-light" to={""}>Contact us</NavLink>
              </li>
              <li className="nav-item-a p-2">
                <NavLink  to={"/login"}>LogIn</NavLink>
              </li>
              {/* <li className="nav-item-a p-2">
                <NavLink  to={"/register"}>Register</NavLink>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;


