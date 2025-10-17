import React, { useState } from "react";
import "../styles/LoginPage.css";
import logoFCA from "../assets/logos/logoFCA_Color.png";

const LoginForm = () => {
  const [rfc, setRfc] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("RFC:", rfc);
    console.log("Contraseña:", password);
  };

  return (
    <div className="login-form">
      <img src={logoFCA} alt="Logo FCA" className="login-logo" />

      <h2>
        Facultad de Contaduría <br /> y Administración
      </h2>

      <h3 className="login-title">BIENVENIDO DE NUEVO!</h3>

      <form onSubmit={handleSubmit}>
        <label>RFC</label>
        <input
          type="text"
          placeholder="Introduce tu RFC"
          value={rfc}
          onChange={(e) => setRfc(e.target.value)}
        />

        <label>Contraseña</label>
        <input
          type="password"
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="login-options">
          <label>
            <input type="checkbox" /> Recuérdame
          </label>
          <a href="#" className="forgot-password">
            Olvidé contraseña
          </a>
        </div>

        <button type="submit" className="login-btn">
          Acceder
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
