import React from "react";
import "../styles/LoginPage.css";
import LoginForm from "../components/LoginForm";
import fcaBg from "../assets/images/02.jpg";

const LoginPage = () => {
  return (
    <div className="login-container">
      {/* Imagen izquierda */}
      <div className="login-left">
        <img src={fcaBg} alt="Facultad FCA" className="login-bg" />
      </div>

      {/* Formulario derecha */}
      <div className="login-right">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
