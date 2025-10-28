import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";                     // principal
import { AuthProvider } from "./context/AuthContext"; //proceso y ruta de autenticación



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
