import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Sidebar />
      <div className="layout-content">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
