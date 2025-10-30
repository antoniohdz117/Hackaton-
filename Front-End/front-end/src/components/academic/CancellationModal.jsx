import React from 'react';
import {
    Dialog, DialogContent, DialogActions, Button, Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const CancellationModal = ({ isOpen, reservation, onConfirmCancel, onCancel }) => {

    if (!isOpen || !reservation) return null;

    const title = "¿Está seguro de cancelar la reservación?";

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

                <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 3 }}>
                    Esta acción es irreversible
                </Typography>

            </DialogContent>

            <DialogActions sx={{ padding: '0 24px 0 0' }}>
                <Button
                    onClick={onCancel}
                    sx={{ color: '#757575' }}
                >
                    Cancelar
                </Button>
                <Button
                    onClick={() => onConfirmCancel(reservation.id)}
                    variant="contained"
                    sx={{
                        backgroundColor: '#F44336',
                        '&:hover': { backgroundColor: '#D32F2F' }
                    }}
                    autoFocus
                >
                    Confirmar
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default CancellationModal;