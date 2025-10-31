import React, { useState } from "react";
import ConfirmationModal from "./ConfirmationModal";
import RejectionModal from "./RejectionModal";
import SuccessModal from "./SuccessModal";
import RejectionNotificationModal from "./RejectionNotificationModal";
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
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const [isRejectNotificationOpen, setIsRejectNotificationOpen] = useState(false); // NUEVO
    const [selectedReservation, setSelectedReservation] = useState(null);



    const handleOpenAcceptModal = (reservation) => {
        setSelectedReservation(reservation);
        setIsAcceptModalOpen(true);
    };

    const handleCloseAcceptModal = () => {
        setIsAcceptModalOpen(false);
    };

    const handleConfirmAccept = (id) => {
        let acceptedReservation = null;

        setReservations(prevReservations =>
            prevReservations.map(r => {
                if (r.id === id) {
                    acceptedReservation = { ...r, estatus: 'Aceptada' };
                    return acceptedReservation;
                }
                return r;
            })
        );

        handleCloseAcceptModal();
        if (acceptedReservation) {
            setSelectedReservation(acceptedReservation);
            setIsSuccessModalOpen(true);
        }
    };

    const handleCloseSuccessModal = () => {
        setIsSuccessModalOpen(false);
        setSelectedReservation(null);
    };



    const handleOpenRejectModal = (reservation) => {
        setSelectedReservation(reservation);
        setIsRejectModalOpen(true);
    };

    const handleCloseRejectModal = () => {
        setIsRejectModalOpen(false);
    };

    const handleConfirmReject = (id, motivo) => {
        let rejectedReservation = null;

        setReservations(prevReservations =>
            prevReservations.map(r => {
                if (r.id === id) {
                    rejectedReservation = { ...r, estatus: 'Rechazada' };
                    return rejectedReservation;
                }
                return r;
            })
        );

        handleCloseRejectModal();
        if (rejectedReservation) {
            setSelectedReservation(rejectedReservation);
            setIsRejectNotificationOpen(true);
        }
    };

    const handleCloseRejectNotification = () => {
        setIsRejectNotificationOpen(false);
        setSelectedReservation(null);
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

            <SuccessModal
                isOpen={isSuccessModalOpen}
                reservation={selectedReservation}
                onClose={handleCloseSuccessModal}
            />

            <RejectionModal
                isOpen={isRejectModalOpen}
                reservation={selectedReservation}
                onConfirmReject={handleConfirmReject}
                onCancel={handleCloseRejectModal}
            />

            <RejectionNotificationModal
                isOpen={isRejectNotificationOpen}
                reservation={selectedReservation}
                onClose={handleCloseRejectNotification}
            />
        </div>
    );
};

export default ReservationTable;