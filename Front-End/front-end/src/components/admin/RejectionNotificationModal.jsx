import React from 'react';
import {
    Dialog, DialogContent, DialogActions, Button, Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const RejectionNotificationModal = ({ isOpen, reservation, onClose }) => {

    if (!isOpen || !reservation) return null;

    const title = `Se ha rechazado la solicitud de ${reservation.evento} en el ${reservation.recinto}`;

    const message = "Se le notificará al usuario del rechazo";

    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
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
                        border: '2px solid #FF9800',
                        backgroundColor: '#FFFDE7',
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

                <Typography variant="body1" color="text.secondary" sx={{ marginBottom: 3, fontSize: '1.1rem' }}>
                    {message}
                </Typography>

            </DialogContent>

            <DialogActions sx={{ padding: '0 24px 0 0', justifyContent: 'flex-end' }}>
                <Button
                    onClick={onClose}
                    variant="contained"
                    sx={{
                        backgroundColor: '#F44336', // Rojo
                        '&:hover': { backgroundColor: '#D32F2F' }
                    }}
                    autoFocus
                >
                    Aceptar
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default RejectionNotificationModal;