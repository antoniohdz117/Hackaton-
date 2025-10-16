import React from 'react';
import { Box, Typography, TextField, Button, Paper } from '@mui/material';

const Login = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      sx={{
        background: 'linear-gradient(135deg, #0d47a1, #1976d2)', // tu fondo o color actual
        color: 'white',
      }}
    >
      {/* Logo y nombre */}
      <Box textAlign="center" sx={{ mt: -8, mb: 3 }}>
        <img
          src="/logo.png"
          alt="Logo"
          style={{ width: 100, height: 'auto' }}
        />
        <Typography variant="h5" sx={{ mt: 1, fontWeight: 'bold' }}>
          Nombre de tu sitio
        </Typography>
      </Box>

      {/* Texto Bienvenido */}
      <Typography variant="h6" sx={{ mb: 3 }}>
        Bienvenido
      </Typography>

      {/* Formulario dentro de una caja */}
      <Paper
        elevation={6}
        sx={{
          p: 4,
          width: 320,
          borderRadius: 3,
          textAlign: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.9)', // Blanco con transparencia
          color: '#000',
        }}
      >
        <TextField
          label="Usuario"
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Contraseña"
          type="password"
          fullWidth
          sx={{ mb: 2 }}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
        >
          Ingresar
        </Button>
      </Paper>
    </Box>
  );
};

export default Login;
