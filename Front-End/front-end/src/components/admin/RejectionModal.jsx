
import React, { useState } from 'react';
import {
    Dialog, DialogContent, DialogActions, Button, Typography,
    TextField
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const RejectionModal = ({ isOpen, reservation, onConfirmReject, onCancel }) => {

    const [rejectionReason, setRejectionReason] = useState('');

    if (!isOpen || !reservation) return null;


    const title = `¿Está seguro de rechazar la solicitud de "${reservation.evento}" (${reservation.recinto})?`;


    const handleConfirm = () => {

        if (rejectionReason.trim() !== '') {
            onConfirmReject(reservation.id, rejectionReason);
            setRejectionReason(''); // Limpiar el campo
        }
    };


    const handleClose = () => {
        setRejectionReason('');
        onCancel();
    };


    return (
        <Dialog
            open={isOpen}
            onClose={handleClose}
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

                <CloseIcon
                    sx={{
                        color: '#F44336', // Rojo
                        fontSize: 40,
                        marginBottom: 2,
                        border: '2px solid #F44336',
                        borderRadius: '50%',
                        padding: '2px'
                    }}
                />

                <Typography
                    variant="h5"
                    component="h2"
                    fontWeight="600"
                    lineHeight="1.3"
                    marginBottom={1}
                >
                    {title}
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 3 }}>
                    Esta acción es irreversible
                </Typography>


                <Typography variant="subtitle1" fontWeight="500" sx={{ marginTop: 1, marginBottom: 1 }}>
                    Favor de agregar el motivo de rechazo
                </Typography>


                <TextField
                    fullWidth
                    required
                    label="Motivo*"
                    variant="outlined"
                    value={rejectionReason}
                    onChange={(e) => setRejectionReason(e.target.value)}
                    error={rejectionReason.trim() === '' && !handleClose}
                    helperText={rejectionReason.trim() === '' ? 'Este campo es obligatorio' : ''}
                    sx={{ marginBottom: 2 }}
                />

            </DialogContent>

            <DialogActions sx={{ padding: '0 24px 0 0' }}>
                <Button
                    onClick={handleClose}
                    sx={{ color: '#757575' }}
                >
                    Cancelar
                </Button>
                <Button
                    onClick={handleConfirm}
                    variant="contained"
                    sx={{
                        backgroundColor: '#F44336',
                        '&:hover': { backgroundColor: '#D32F2F' }
                    }}
                    disabled={rejectionReason.trim() === ''}
                    autoFocus
                >
                    Rechazar
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default RejectionModal;