import React, { useState } from "react";
import ConfirmationModal from "./ConfirmationModal";
import RejectionModal from "./RejectionModal";
import "../../styles/ReservationTable.css";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { IconButton } from "@mui/material";


// DATOS DE PRUEBA
const initialReservations = [
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
    const [reservations, setReservations] = useState(initialReservations);

    const [isAcceptModalOpen, setIsAcceptModalOpen] = useState(false);
    const [isRejectModalOpen, setIsRejectModalOpen] = useState(false);
    const [selectedReservation, setSelectedReservation] = useState(null);


    const handleOpenAcceptModal = (reservation) => {
        setSelectedReservation(reservation);
        setIsAcceptModalOpen(true);
    };

    const handleCloseAcceptModal = () => {
        setIsAcceptModalOpen(false);
        setSelectedReservation(null);
    };

    const handleConfirmAccept = (id) => {
        console.log(`Reservación ${id} ACEPTADA!`);

        setReservations(prevReservations =>
            prevReservations.map(r =>
                r.id === id ? { ...r, estatus: 'Aceptada' } : r
            )
        );

        handleCloseAcceptModal();
    };


    const handleOpenRejectModal = (reservation) => {
        setSelectedReservation(reservation);
        setIsRejectModalOpen(true);
    };

    const handleCloseRejectModal = () => {
        setIsRejectModalOpen(false);
        setSelectedReservation(null);
    };

    const handleConfirmReject = (id, motivo) => {
        console.log(`Reservación ${id} RECHAZADA por motivo: ${motivo}`);

        setReservations(prevReservations =>
            prevReservations.map(r =>
                r.id === id ? { ...r, estatus: 'Rechazada' } : r
            )
        );

        handleCloseRejectModal();
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

                                <IconButton
                                    className="btn-accept"
                                    onClick={() => handleOpenAcceptModal(r)}
                                    disabled={r.estatus === 'Rechazada'}
                                >
                                    <DoneOutlinedIcon/>
                                </IconButton>


                                <IconButton
                                    className="btn-decline"
                                    onClick={() => handleOpenRejectModal(r)}
                                    disabled={r.estatus === 'Rechazada'}
                                >
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

            <ConfirmationModal
                isOpen={isAcceptModalOpen}
                reservation={selectedReservation}
                onConfirm={handleConfirmAccept}
                onCancel={handleCloseAcceptModal}
            />

            <RejectionModal
                isOpen={isRejectModalOpen}
                reservation={selectedReservation}
                onConfirmReject={handleConfirmReject}
                onCancel={handleCloseRejectModal}
            />
        </div>
    );
};

export default ReservationTable;