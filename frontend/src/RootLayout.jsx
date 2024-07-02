import React from "react";
// import Navbar from "./components/navbar/Navbar";
// import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";
// import { useAuthContext } from "./context/AuthContext";

function RootLayout() {
  // const authContext = useAuthContext()
  return (
    // <useAuthContext.Provider value={localStorage.getItem("budget-user")}>
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
    // </useAuthContext.Provider>
  );
}

export default RootLayout;
