import React from 'react'
import Navbar from "../navbar/Navbar"
import headerimg from "../../assets/header.jpg"
import "./headerStyle.css"

const Header = () => {
    return (
        <>
            <div className="container-header" style={{ backgroundImage: `url(${headerimg})`, backgroundSize: 'cover' }}>
                <Navbar />
                <div className="header text-light">
                    <div className="content-header">
                        <h1 class="title-header pb-2">Stay Financially aware</h1>
                        <p class="subt-header">Using our website , we can help you keep tracking all your incomes , expenses and give you all the statistics you need </p>
                        <button class="text-light btn-header mt-5 mb-5">Try it for free</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
