import React from "react";
import Layout from "../../components/Layout";
import FilterBar from "../../components/FilterBar";
import ReservationTable from "../../components/ReservationTable";
import "../../styles/DashboardPage.css";

const DashboardPage = () => {
  return (
    <Layout>
      <div className="dashboard-container">
        <h1 className="dashboard-title">Solicitudes de reservaciones</h1>

        {/* Barra de filtros */}
        <FilterBar />

        {/* Tabla de solicitudes */}
        <ReservationTable />
      </div>
    </Layout>
  );
};

export default DashboardPage;
