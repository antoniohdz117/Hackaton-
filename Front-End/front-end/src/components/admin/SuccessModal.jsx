import React from 'react';
import {
    Dialog, DialogContent, DialogActions, Button, Typography,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const SuccessModal = ({ isOpen, reservation, onClose }) => {

    if (!isOpen || !reservation) return null;

    const title = "Usted ha aceptado la solicitud";

    const message = `Se ha asignado el recinto ${reservation.recinto} para el evento "${reservation.evento}"`;

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
                <CheckCircleIcon
                    sx={{
                        color: '#8BC34A',
                        fontSize: 40,
                        marginBottom: 2,
                        border: '2px solid #8BC34A',
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
                        backgroundColor: '#8BC34A',
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

export default SuccessModal;