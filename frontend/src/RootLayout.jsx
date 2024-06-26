import React from "react";
// import Navbar from "./components/navbar/Navbar";
// import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";
import { userTokenContext } from "./Contexts/userTokenContext";

function RootLayout() {
  return (
    <userTokenContext.Provider value={localStorage.getItem("userToken")}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: "100vh",
        }}
      >
        {/* <Navbar /> */}
        <main>
          <Outlet />
        </main>
        {/* <Footer /> */}
      </div>
    </userTokenContext.Provider>
  );
}

export default RootLayout;
