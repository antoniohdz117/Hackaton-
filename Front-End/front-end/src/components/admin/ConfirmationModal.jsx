// ConfirmationModal.jsx
import React from 'react';
import { Dialog, DialogContent, DialogActions, Button, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ConfirmationModal = ({ isOpen, reservation, onConfirm, onCancel }) => {
    // Si la reservación es null o no está abierto, no renderizar
    if (!isOpen || !reservation) return null;

    // Generar el texto del título dinámicamente
    const title = `¿Está seguro de aceptar la solicitud de "${reservation.evento}" (${reservation.recinto})?`;

    return (
        <Dialog
            open={isOpen}
            onClose={onCancel}
            maxWidth="sm"
            fullWidth
            sx={{ '& .MuiDialog-paper': { padding: 3, borderRadius: '8px' } }}
        >
            <DialogContent
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    paddingTop: '0px'
                }}
            >
                {/* Icono de check verde */}
                <CheckCircleIcon
                    sx={{
                        color: '#4CAF50',
                        fontSize: 40,
                        marginBottom: 2,
                        border: '2px solid #4CAF50',
                        borderRadius: '50%',
                        padding: '2px'
                    }}
                />

                {/* Título de la confirmación */}
                <Typography
                    variant="h5"
                    component="h2"
                    fontWeight="600"
                    lineHeight="1.3"
                    marginBottom={1}
                >
                    {title}
                </Typography>

                {/* Mensaje de acción irreversible */}
                <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 3 }}>
                    Esta acción es irreversible
                </Typography>

            </DialogContent>

            {/* Botones de acción */}
            <DialogActions sx={{ padding: '0 24px 0 0' }}>
                <Button
                    onClick={onCancel}
                    sx={{ color: '#757575' }}
                >
                    Cancel
                </Button>
                <Button
                    onClick={() => onConfirm(reservation.id)} // Llama a la función de confirmar con el ID
                    variant="contained"
                    sx={{
                        backgroundColor: '#8BC34A', // Verde olivo
                        '&:hover': { backgroundColor: '#7CB342' }
                    }}
                    autoFocus
                >
                    Aceptar
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ConfirmationModal;