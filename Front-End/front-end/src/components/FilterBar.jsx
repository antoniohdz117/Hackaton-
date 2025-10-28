import React from "react";
import "../styles/FilterBar.css";

const FilterBar = () => {
  return (
    
    <div className="filter-bar">
      <input type="text" placeholder="Nombre del evento" className="filter-input" />

      <select className="filter-select">
        <option>FECHA</option>
        <option>FECHA</option>
      </select>

      <button className="filter-btn">Filtrar</button>
      <button className="download-btn">Descargar</button>
    </div>
  );
};

export default FilterBar;
