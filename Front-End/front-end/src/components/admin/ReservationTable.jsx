// ReservationTable.jsx

import React, { useState } from "react";
import ConfirmationModal from "./ConfirmationModal"; // Asegúrate de que esta ruta sea correcta
import "../../styles/ReservationTable.css";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import {IconButton} from "@mui/material";


// DATOS DE PRUEBA
const initialReservations = [ // Cambié el nombre a initialReservations
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


const ReservationTable = () => {
    // Usar estado local para simular la actualización del estatus
    const [reservations, setReservations] = useState(initialReservations);
    
    // 1. Estado para controlar si el modal está abierto
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    // 2. Estado para guardar los datos de la reservación seleccionada
    const [selectedReservation, setSelectedReservation] = useState(null);

    // Función para abrir el modal (se llama al hacer clic en el botón verde)
    const handleOpenModal = (reservation) => {
        setSelectedReservation(reservation);
        setIsModalOpen(true);
    };

    // Función para cerrar el modal
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedReservation(null);
    };

    // Función que se ejecuta al darle 'Aceptar' dentro del modal
    const handleConfirmAccept = (id) => {
        console.log(`Reservación ${id} ACEPTADA!`);
        
        // Simulación: Actualizar el estatus de la reservación en el estado local
        setReservations(prevReservations => 
            prevReservations.map(r => 
                r.id === id ? { ...r, estatus: 'Aceptada' } : r
            )
        );
        
        // Aquí iría la llamada a la API o la lógica de negocio real
        
        handleCloseModal(); // Cerrar el modal después de la acción
    };


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
                        <th>Descarga</th>
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
                                {/* Botón ACEPTAR: Abre el modal */}
                                <IconButton 
                                    className="btn-accept"
                                    onClick={() => handleOpenModal(r)}
                                >
                                    <DoneOutlinedIcon/>
                                </IconButton>

                                {/* Botón RECHAZAR: (Actualmente no abre modal) */}
                                <IconButton className="btn-decline">
                                    <CloseOutlinedIcon/>
                                </IconButton>
                            </td>
                            <td>
                                <IconButton className="btn-download">
                                    <FileDownloadOutlinedIcon />
                                </IconButton>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
            {/* Componente Modal de Confirmación */}
            <ConfirmationModal
                isOpen={isModalOpen}
                reservation={selectedReservation}
                onConfirm={handleConfirmAccept}
                onCancel={handleCloseModal}
            />
        </div>
    );
};

export default ReservationTable;