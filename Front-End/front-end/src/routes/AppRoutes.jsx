import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";



//RUTAS DE LA PLATAFORMA WEEB
import LoginPage from "../pages/auth/LoginPage";
import DashboardPage from "../pages/admin/DashboardPage";
import ProtectedRoute from "../components/ProtectedRoute";



const AppRoutes = () => {
  const { user } = useAuth();

  return (
    <Routes>

      {/* inicio de sesión */}
      <Route path="/login" element={<LoginPage />} />

      {/*administrador */}      
      <Route path="/admin/dashboard" element={<DashboardPage />} />

      {/*administrador */}      
      <Route path="/solicitante/dashboard" element={<DashboardPage />} />

      {/*user */}      
      <Route path="/user/dashboard" element={<DashboardPage />} />

      {/* Redirección por defetco   */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default AppRoutes;
