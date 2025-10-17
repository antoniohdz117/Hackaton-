import React from "react";
import "../../styles/components/FilterBar.css";

const FilterBar = () => {
  return (
    <div className="filter-bar">
      <input type="text" placeholder="🔍 Nombre" className="filter-input" />

      <select className="filter-select">
        <option>05 Ago 25 – 22 Oct 25</option>
        <option>23 Oct 25 – 31 Dic 25</option>
      </select>

      <button className="filter-btn">Filtrar</button>
      <button className="download-btn">Descargar</button>
    </div>
  );
};

export default FilterBar;
