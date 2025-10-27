import React from "react";
import "../styles/ReservationTable.css";


//DATOS DE PRUEBA
const reservations = [
  {
    id: 1,
    recinto: "Frontón Cerrado",
    categoria: "Charla",
    evento: "Bienvenida nuevo ingreso",
    fecha: "05-08-2025",
    solicita: "Coordinación Informática",
    horaInicio: "9:00",
    horaFin: "11:00",
    estatus: "Rechazada",
  },
  {
    id: 2,
    recinto: "Auditorio Mtro. Pérez",
    categoria: "Conferencia",
    evento: "IA conversacional: chatbots",
    fecha: "09-08-2025",
    solicita: "Vinculación",
    horaInicio: "11:00",
    horaFin: "13:00",
    estatus: "Aceptada",
  },
  {
    id: 3,
    recinto: "Auditorio Echeverría",
    categoria: "Conferencia",
    evento: "El Ministerio del Futuro",
    fecha: "21-08-2025",
    solicita: "Coordinación Contaduría",
    horaInicio: "11:00",
    horaFin: "13:00",
    estatus: "Pendiente",
  },
];


//TABLA QEUE MUESTRA LAS RESERVACIONES


//SE DEBE INTEGRAR UNA TABLA CON FILTROS CON MATERIAL UI CONTEMPLANDO LAS COLUMNAS DE ARRIBA
const ReservationTable = () => {
  return (
    <div className="table-container">
      <table className="reservation-table">
        <thead>
          <tr>
            <th>Folio</th>
            <th>Recinto</th>
            <th>Categoría</th>
            <th>Evento</th>
            <th>Fecha</th>
            <th>Solicita</th>
            <th>Hora inicio</th>
            <th>Hora fin</th>
            <th>Estatus</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((r) => (
            <tr key={r.id}>
              <td>{r.id}</td>
              <td>{r.recinto}</td>
              <td>{r.categoria}</td>
              <td>{r.evento}</td>
              <td>{r.fecha}</td>
              <td>{r.solicita}</td>
              <td>{r.horaInicio}</td>
              <td>{r.horaFin}</td>
              <td>
                <span className={`status ${r.estatus.toLowerCase()}`}>
                  {r.estatus}
                </span>
              </td>
              <td>
                <button className="btn-accept">✔</button>
                <button className="btn-decline">✖</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReservationTable;
