import React from "react";
import "../../styles/FilterBar.css";
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';


const FilterBar = () => {
  return (
    <div className="filter-bar">
      <input type="text" placeholder="🔍 Nombre" className="filter-input" />

      <select className="filter-select">
        <option>05 Ago 25 – 22 Oct 25</option>
        <option>23 Oct 25 – 31 Dic 25</option>
      </select>

      <button className="filter-btn">
          <FilterListOutlinedIcon/>
          Filtrar
      </button>
      <button className="download-btn">
          <FileDownloadOutlinedIcon/>
          Descargar</button>
    </div>
  );
};

export default FilterBar;
