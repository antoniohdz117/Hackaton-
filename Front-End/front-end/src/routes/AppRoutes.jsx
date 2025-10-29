import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";



//RUTAS DE LA PLATAFORMA WEEB
import LoginPage from "../pages/auth/LoginPage";
import DashboardPage from "../pages/admin/DashboardPage";
import DashboardPageAcademic from "../pages/academic/DashboardPage";
import RegisterReservations from "../pages/academic/RegisterReservations.jsx";
import ProtectedRoute from "../components/ProtectedRoute";



const AppRoutes = () => {
  const { user } = useAuth();

  return (
    <Routes>

      {/* inicio de sesión */}
      <Route path="/login" element={<LoginPage />} />

      {/*administrador */}      
      <Route path="/admin/dashboard" element={<DashboardPage />} />

      {/*funcionario */}
      <Route path="/academic/dashboard" element={<DashboardPageAcademic />} />

        {/*Registro de reservaciones por el funcionario */}
        <Route path="/academic/reservations" element={<RegisterReservations />} />


        {/*user */}
      <Route path="/user/dashboard" element={<DashboardPage />} />

      {/* Redirección por defetco   */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default AppRoutes;
