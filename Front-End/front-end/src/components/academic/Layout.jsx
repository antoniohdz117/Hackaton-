import React from "react";
import Header from "./Header.jsx";
import NavBar from "../NavBar.jsx";

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <NavBar />
      <div className="layout-content">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
