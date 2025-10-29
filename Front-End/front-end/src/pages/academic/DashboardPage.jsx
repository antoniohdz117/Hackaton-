import React from "react";
import Layout from "../../components/academic/Layout.jsx";
import FilterBar from "../../components/academic/FilterBar.jsx";
import ReservationTable from "../../components/academic/ReservationTable.jsx";
import "../../styles/DashboardPage.css";

const DashboardPageAcademic = () => {
  return (
    <Layout>
      <div className="dashboard-container">
          {/* Barra de filtros */}
        <FilterBar />

        {/* Tabla de solicitudes */}
        <ReservationTable />
      </div>
    </Layout>
  );
};

export default DashboardPageAcademic;
