import React from 'react';
import { Dialog, DialogContent, DialogActions, Button, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ConfirmationModal = ({ isOpen, reservation, onConfirm, onCancel }) => {
    if (!isOpen || !reservation) return null;

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

            </DialogContent>

            <DialogActions sx={{ padding: '0 24px 0 0' }}>
                <Button
                    onClick={onCancel}
                    sx={{ color: '#757575' }}
                >
                    Cancel
                </Button>
                <Button
                    onClick={() => onConfirm(reservation.id)}
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

export default ConfirmationModal;