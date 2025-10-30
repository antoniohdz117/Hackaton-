import React, { useState } from "react";
import CancellationModal from "./CancellationModal";
import "../../styles/ReservationTable.css";
import { IconButton } from "@mui/material";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

//DATOS DE PRUEBA
const initialReservations = [
  {
    id: 1,
    recinto: "Frontón Cerrado",
    categoria: "Charla",
    evento: "Bienvenida nuevo ingreso",
    fecha: "05-08-2025",
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
    horaInicio: "11:00",
    horaFin: "13:00",
    estatus: "Pendiente",
  },
];


const ReservationTable = () => {
    const [reservations, setReservations] = useState(initialReservations);
    
    const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
    
    const [selectedReservation, setSelectedReservation] = useState(null);



    const handleOpenCancelModal = (reservation) => {
        setSelectedReservation(reservation);
        setIsCancelModalOpen(true);
    };

    const handleCloseCancelModal = () => {
        setIsCancelModalOpen(false);
        setSelectedReservation(null);
    };

    const handleConfirmCancel = (id) => {
        console.log(`Reservación ${id} CANCELADA y ELIMINADA!`);
        
        setReservations(prevReservations =>
            prevReservations.filter(r => r.id !== id)
        );
        
        handleCloseCancelModal(); 
    };

    // TABLA QEUE MUESTRA LAS RESERVACIONES DE LOS FUNCIONARIOS
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
                        <th>Hora inicio</th>
                        <th>Hora fin</th>
                        <th>Descargar</th>
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
                            <td>{r.horaInicio}</td>
                            <td>{r.horaFin}</td>
                            <td>
                                <IconButton className="btn-download">
                                    <FileDownloadOutlinedIcon />
                                </IconButton>
                            </td>
                            <td>
                                <IconButton className="btn-edit">
                                    <EditOutlinedIcon />
                                </IconButton>

                                <IconButton
                                    className="btn-delete"
                                    onClick={() => handleOpenCancelModal(r)}
                                >
                                    <DeleteOutlineOutlinedIcon />
                                </IconButton>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <CancellationModal
                isOpen={isCancelModalOpen}
                reservation={selectedReservation}
                onConfirmCancel={handleConfirmCancel}
                onCancel={handleCloseCancelModal}
            />
        </div>
    );
};

export default ReservationTable;