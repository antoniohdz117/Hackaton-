import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Checkbox,
  FormControlLabel,
} from "@mui/material";


//importar imagen de visibilidad
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

//importar imagenes y logos

import imagenAuditorio from "../../assets/images/02.jpg";
import logoFCA from "../../assets/logos/logoFCA_Color.png";

//CONEXION CON BACKEND PARA AUTENTIFICACION

import axios from "axios";
import { useState } from "react";
//import autentificacion from "../../api/authService";


//IMPORTAR API DE AUTENTIFICACION
//import authService from "../../api/authService";

const LoginPage = () => {
  return (
    <Box sx={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      {/*  Imagen izquierda  */}
      <Box
        sx={{
          flex: 1.2,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={imagenAuditorio}
          alt="FCA"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "120%", // 
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </Box>

      {/* Formulario derecha */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f7f7f7",
        }}
      >
        
        <Paper
          elevation={8}
          sx={{
            width: 380,
            p: 4,
            borderRadius: 3,
            textAlign: "center",
            backgroundColor: "white",
          }}
        >
          {/* Logo y títulos */}
          <Box sx={{ mb: 2 }}>
            <Box
              component="img"
              src={logoFCA}
              alt="Logo FCA"
              sx={{
                width: 100,
                height: "auto",
                mb: 1,
                mt: -1, // Ajuste 
              }}
            />
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", lineHeight: 1.3 }}
            >
              Facultad de Contaduría <br /> y Administración
            </Typography>
          </Box>

          {/* Texto “Bienvenido de nuevo” */}
          <Typography
            variant="h6"
            sx={{
              mb: 3,
              mt: 2,
              fontWeight: 600,
              color: "text.primary",
            }}
          >
            ¡Bienvenido de nuevo!
          </Typography>

          {/* Formulario */}
          <Box component="form" noValidate autoComplete="off">
            <TextField
              label="RFC"
              variant="outlined"
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField
              label="Contraseña"
              type="password"
              variant="outlined"
              fullWidth
              sx={{ mb: 1 }}
              //agregar icono de visibilidad
              
            />

            {/* Opciones */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
              }}
            >
              <FormControlLabel
                control={<Checkbox size="small" color="success" />}
                label={
                  <Typography sx={{ fontSize: "0.85rem" }}>
                    Recuérdame
                  </Typography>
                }
              />
              <Typography
                component="a"
                href="#"
                sx={{
                  fontSize: "0.85rem",
                  color: "text.secondary",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Olvidé contraseña
              </Typography>
            </Box>

            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#8dc63f",
                color: "white",
                fontWeight: "bold",
                borderRadius: "10px",
                py: 1,
                "&:hover": {
                  backgroundColor: "#7ab02d",
                },
              }}
            >
              Acceder
            </Button>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default LoginPage;
