import React, { useState } from "react";
import NavBar from "../../components/academic/NavBar.jsx";
import "../../styles/DashboardPage.css";

import {
    Container,
    Box,
    Typography,
    Grid,
    TextField,
    Select,
    MenuItem,
    FormGroup,
    FormControlLabel,
    Checkbox,
    Button,
    IconButton,
    FormControl,
    ListSubheader
} from "@mui/material";
import { AddCircleOutline, Delete as DeleteIcon } from "@mui/icons-material";

const primaryGreen = '#899E39';
const listHeaderColor = '#EADD74';

const resourcesByArea = {
    'medios_audiovisuales': ['Equipo de sonido', 'Pantalla', 'Videoproyector'],
    'sala_juntas_a': ['Pantalla', 'Videoproyector', 'Pizarra inteligente'],
    'auditorio_magno': ['Equipo de sonido', 'Pantalla', 'Videoproyector', 'Podium', 'Micrófonos'],
};

const areaOptions = [
    { value: 'medios_audiovisuales', label: 'Medios audiovisuales' },
    { value: 'sala_juntas_a', label: 'Sala de Juntas A' },
    { value: 'auditorio_magno', label: 'Auditorio Magno' },
];

const gradosAcademicos = [
    { value: 'Lic.', label: 'Licenciatura (Lic.)' },
    { value: 'Ing.', label: 'Ingeniería (Ing.)' },
    { value: 'Mtro.', label: 'Maestría (Mtro.)' },
    { value: 'Mtra.', label: 'Maestría (Mtra.)' },
    { value: 'Dr.', label: 'Doctorado (Dr.)' },
    { value: 'Dra.', label: 'Doctorado (Dra.)' },
    { value: 'C.', label: 'Candidato (C.)' },
    { value: 'Otro', label: 'Otro' },
];


const FormField = ({ label, children }) => (
    <Box sx={{ mb: 2.5, width: '100%' }}>
        <Typography variant="body2" sx={{ fontWeight: 600, color: '#444', mb: 0.5 }}>
            {label}
        </Typography>
        {children}
    </Box>
);

const SectionHeader = ({ title }) => (
    <Typography
        variant="h5"
        sx={{
            fontWeight: 'bold',
            color: 'black',
            borderBottom: 4,
            borderColor: primaryGreen,
            pb: 0.5,
            mb: 3,
            display: 'inline-block'
        }}
    >
        {title}
    </Typography>
);

const MenuHeader = ({ text }) => (
    <ListSubheader sx={{
        bgcolor: listHeaderColor,
        color: 'black',
        fontWeight: 'bold',
        lineHeight: '36px' // Ajuste de altura
    }}>
        {text}
    </ListSubheader>
);



const RegisterReservations = () => {

    const [selectedArea, setSelectedArea] = useState('');

    const [selectedResources, setSelectedResources] = useState({});

    const [ponentes, setPonentes] = useState([
        { nombre: '', apPaterno: '', apMaterno: '', grado: '', semblanza: null }
    ]);

    const [integrantes, setIntegrantes] = useState([
        { nombre: '', apPaterno: '', apMaterno: '', grado: '' }
    ]);



    const handleAreaChange = (e) => {
        const newArea = e.target.value;
        setSelectedArea(newArea);

        const newResourcesCheckboxes = {};
        if (resourcesByArea[newArea]) {
            resourcesByArea[newArea].forEach(resource => {
                newResourcesCheckboxes[resource] = false;
            });
        }
        setSelectedResources(newResourcesCheckboxes);
    };

    const handleResourceChange = (e) => {
        const { name, checked } = e.target;
        setSelectedResources(prevResources => ({
            ...prevResources,
            [name]: checked,
        }));
    };

    // Manejadores para Ponentes
    const handlePonenteChange = (index, field, value) => {
        const newPonentes = [...ponentes];
        newPonentes[index][field] = value;
        setPonentes(newPonentes);
    };

    const handleFileChange = (index, e) => {
        if (e.target.files && e.target.files[0]) {
            const newPonentes = [...ponentes];
            newPonentes[index].semblanza = e.target.files[0];
            setPonentes(newPonentes);
            console.log("Archivo seleccionado:", e.target.files[0].name);
        }
    };

    const handleAddPonente = () => {
        setPonentes([...ponentes, { nombre: '', apPaterno: '', apMaterno: '', grado: '', semblanza: null }]);
    };

    const handleRemovePonente = (index) => {
        if (ponentes.length <= 1) return;
        setPonentes(ponentes.filter((_, i) => i !== index));
    };

    const handleIntegranteChange = (index, field, value) => {
        const newIntegrantes = [...integrantes];
        newIntegrantes[index][field] = value;
        setIntegrantes(newIntegrantes);
    };

    const handleAddIntegrante = () => {
        setIntegrantes([...integrantes, { nombre: '', apPaterno: '', apMaterno: '', grado: '' }]);
    };

    const handleRemoveIntegrante = (index) => {
        if (integrantes.length <= 1) return;
        setIntegrantes(integrantes.filter((_, i) => i !== index));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Formulario enviado");
        console.log("Área:", selectedArea);
        console.log("Recursos:", selectedResources);
        console.log("Ponentes:", ponentes);
        console.log("Integrantes:", integrantes);
    };


    return (
        <>
            <NavBar />

            <Container maxWidth="lg" sx={{ py: 4 }}>
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{ p: { xs: 2, md: 4 }, borderRadius: 2 }}
                >
                    {/* Encabezado de la página */}
                    <header style={{
                        color: "black",
                        textAlign: "center",
                        marginBottom: '32px'
                    }}>
                        <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold' }}>
                            Registrar reservación
                        </Typography>
                    </header>

                    <Box sx={{ mb: 4 }}>
                        <SectionHeader title="Evento" />
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={3}>
                                <FormField label="Nombre del evento:">
                                    <TextField fullWidth variant="outlined" placeholder="Nombre*" size="small" />
                                </FormField>
                            </Grid>
                            <Grid item xs={12} sm={6} md={2}>
                                <FormField label="Categoría:">
                                    <Select fullWidth variant="outlined" defaultValue="" displayEmpty size="small">
                                        <MenuItem value="" disabled><em>Selecciona una categoría*</em></MenuItem>

                                        <MenuHeader text="Categoría" />
                                        <MenuItem value="conferencia">Conferencia</MenuItem>
                                        <MenuItem value="taller">Taller</MenuItem>
                                        <MenuItem value="seminario">Seminario</MenuItem>
                                        <MenuItem value="charla">Charla</MenuItem>
                                        <MenuItem value="conversatorio">Conversatorio</MenuItem>
                                    </Select>
                                </FormField>
                            </Grid>
                            <Grid item xs={12} sm={6} md={2}>
                                <FormField label="Fecha:">
                                    <TextField
                                        type="date"
                                        fullWidth
                                        variant="outlined"
                                        size="small"
                                        InputLabelProps={{ shrink: true }}
                                    />
                                </FormField>
                            </Grid>
                            <Grid item xs={12} sm={6} md={2}>
                                <FormField label="Horario:">
                                    <Select fullWidth variant="outlined" defaultValue="" displayEmpty size="small">
                                        <MenuItem value="" disabled><em>Selecciona un horario*</em></MenuItem>
                                        <MenuHeader text="Horarios" />
                                        <MenuItem value="9:00">9:00 - 11:00</MenuItem>
                                        <MenuItem value="11:00">11:00 - 13:00</MenuItem>
                                        <MenuItem value="13:00">13:00 - 15:00</MenuItem>
                                    </Select>
                                </FormField>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <FormField label="Recinto:">
                                    <Select fullWidth variant="outlined" defaultValue="" displayEmpty size="small">
                                        <MenuItem value="" disabled><em>Selecciona un recinto*</em></MenuItem>
                                        {/* NUEVO: Encabezado de lista */}
                                        <MenuHeader text="Recintos" />
                                        <MenuItem value="auditorio_a">Auditorio A</MenuItem>
                                        <MenuItem value="auditorio_b">Auditorio B</MenuItem>
                                    </Select>
                                </FormField>
                            </Grid>
                        </Grid>
                    </Box>


                    <Grid container spacing={5}>
                        <Grid item xs={12} md={7}>
                            <SectionHeader title="Ponentes" />

                            {ponentes.map((ponente, index) => (
                                <Box key={index} sx={{ position: 'relative', mb: 2, p: 2, border: '1px solid #eee', borderRadius: 2 }}>
                                    {ponentes.length > 1 && (
                                        <IconButton
                                            aria-label="Eliminar ponente"
                                            onClick={() => handleRemovePonente(index)}
                                            sx={{ position: 'absolute', top: 8, right: 8, color: 'grey.600' }}
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    )}

                                    <Grid container spacing={3}>
                                        <Grid item xs={12} sm={6}>
                                            <FormField label="Nombre:">
                                                <TextField
                                                    fullWidth variant="outlined" placeholder="Nombre*" size="small"
                                                    value={ponente.nombre}
                                                    onChange={(e) => handlePonenteChange(index, 'nombre', e.target.value)}
                                                />
                                            </FormField>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <FormField label="Apellido Paterno:">
                                                <TextField
                                                    fullWidth variant="outlined" placeholder="Apellido paterno*" size="small"
                                                    value={ponente.apPaterno}
                                                    onChange={(e) => handlePonenteChange(index, 'apPaterno', e.target.value)}
                                                />
                                            </FormField>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <FormField label="Apellido Materno:">
                                                <TextField
                                                    fullWidth variant="outlined" placeholder="Apellido materno" size="small"
                                                    value={ponente.apMaterno}
                                                    onChange={(e) => handlePonenteChange(index, 'apMaterno', e.target.value)}
                                                />
                                            </FormField>
                                        </Grid>

                                        <Grid item xs={12} sm={6}>
                                            <FormField label="Grado académico:">
                                                <FormControl fullWidth size="small">
                                                    <Select
                                                        variant="outlined"
                                                        value={ponente.grado}
                                                        onChange={(e) => handlePonenteChange(index, 'grado', e.target.value)}
                                                        displayEmpty
                                                    >
                                                        <MenuItem value="" disabled>
                                                            <em>Grado académico</em>
                                                        </MenuItem>
                                                        {/* NUEVO: Encabezado de lista */}
                                                        <MenuHeader text="Grados" />
                                                        {gradosAcademicos.map((grado) => (
                                                            <MenuItem key={grado.value} value={grado.value}>
                                                                {grado.label}
                                                            </MenuItem>
                                                        ))}
                                                    </Select>
                                                </FormControl>
                                            </FormField>
                                        </Grid>

                                        <Grid item xs={12}>
                                            <FormField label="Semblanza:">
                                                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                                                    <Button
                                                        variant="contained"
                                                        component="label"
                                                        sx={{ bgcolor: '#eee', color: '#555', '&:hover': { bgcolor: '#ddd' }, textTransform: 'none', fontWeight: 'normal' }}
                                                    >
                                                        Añadir archivo PDF
                                                        <input type="file" hidden onChange={(e) => handleFileChange(index, e)} accept=".pdf" />
                                                    </Button>
                                                    {ponente.semblanza && (
                                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                                            {ponente.semblanza.name}
                                                        </Typography>
                                                    )}
                                                </Box>
                                            </FormField>
                                        </Grid>
                                    </Grid>
                                </Box>
                            ))}

                            <Button
                                startIcon={<AddCircleOutline />}
                                sx={{ color: primaryGreen, textTransform: 'none', fontWeight: 'bold', mt: 1 }}
                                onClick={handleAddPonente}
                            >
                                Agregar otro ponente
                            </Button>
                        </Grid>

                        <Grid item xs={12} md={5}>
                            <Box sx={{ mb: 4 }}>
                                <SectionHeader title="Recursos" />
                                <FormField label="Área:">
                                    <Select
                                        fullWidth
                                        variant="outlined"
                                        value={selectedArea}
                                        onChange={handleAreaChange}
                                        size="small"
                                        displayEmpty
                                    >
                                        <MenuItem value="" disabled>
                                            <em>Selecciona un área*</em>
                                        </MenuItem>
                                        <MenuHeader text="Áreas" />
                                        {areaOptions.map(option => (
                                            <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                                        ))}
                                    </Select>
                                </FormField>

                                <FormField label="Recursos:">
                                    {selectedArea ? (
                                        <FormGroup>
                                            {resourcesByArea[selectedArea] ? (
                                                resourcesByArea[selectedArea].map(resourceName => (
                                                    <FormControlLabel
                                                        key={resourceName}
                                                        control={
                                                            <Checkbox
                                                                checked={!!selectedResources[resourceName]}
                                                                onChange={handleResourceChange}
                                                                name={resourceName}
                                                                sx={{ '&.Mui-checked': { color: primaryGreen } }}
                                                            />
                                                        }
                                                        label={resourceName}
                                                    />
                                                ))
                                            ) : (
                                                <Typography variant="body2" color="textSecondary">
                                                    No hay recursos definidos para esta área.
                                                </Typography>
                                            )}
                                        </FormGroup>
                                    ) : (
                                        <Typography variant="body2" color="textSecondary">
                                            Selecciona un área para ver los recursos disponibles.
                                        </Typography>
                                    )}
                                </FormField>

                            </Box>
                        </Grid>
                    </Grid>

                    <Box sx={{ mb: 4 }}>
                        <SectionHeader title="Integrante/s del presidium" />

                        {integrantes.map((integrante, index) => (
                            <Box key={index} sx={{ position: 'relative', mb: 2, p: 2, border: '1px solid #eee', borderRadius: 2 }}>
                                {integrantes.length > 1 && (
                                    <IconButton
                                        aria-label="Eliminar integrante"
                                        onClick={() => handleRemoveIntegrante(index)}
                                        sx={{ position: 'absolute', top: 8, right: 8, color: 'grey.600' }}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                )}

                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={6} md={3}>
                                        <FormField label="Nombre:">
                                            <TextField
                                                fullWidth variant="outlined" placeholder="Nombre*" size="small"
                                                value={integrante.nombre}
                                                onChange={(e) => handleIntegranteChange(index, 'nombre', e.target.value)}
                                            />
                                        </FormField>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={3}>
                                        <FormField label="Apellido Paterno:">
                                            <TextField
                                                fullWidth variant="outlined" placeholder="Apellido paterno*" size="small"
                                                value={integrante.apPaterno}
                                                onChange={(e) => handleIntegranteChange(index, 'apPaterno', e.target.value)}
                                            />
                                        </FormField>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={3}>
                                        <FormField label="Apellido Materno:">
                                            <TextField
                                                fullWidth variant="outlined" placeholder="Apellido materno" size="small"
                                                value={integrante.apMaterno}
                                                onChange={(e) => handleIntegranteChange(index, 'apMaterno', e.target.value)}
                                            />
                                        </FormField>
                                    </Grid>

                                    <Grid item xs={12} sm={6} md={3}>
                                        <FormField label="Grado académico:">
                                            <FormControl fullWidth size="small">
                                                <Select
                                                    variant="outlined"
                                                    value={integrante.grado}
                                                    onChange={(e) => handleIntegranteChange(index, 'grado', e.target.value)}
                                                    displayEmpty
                                                >
                                                    <MenuItem value="" disabled>
                                                        <em>Grado académico</em>
                                                    </MenuItem>
                                                    <MenuHeader text="Grados" />
                                                    {gradosAcademicos.map((grado) => (
                                                        <MenuItem key={grado.value} value={grado.value}>
                                                            {grado.label}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                        </FormField>
                                    </Grid>
                                </Grid>
                            </Box>
                        ))}

                        <Button
                            startIcon={<AddCircleOutline />}
                            sx={{ color: primaryGreen, textTransform: 'none', fontWeight: 'bold', mt: 1 }}
                            onClick={handleAddIntegrante}
                        >
                            Agregar otro integrante
                        </Button>
                    </Box>

                    <Box sx={{ textAlign: 'center', mt: 4 }}>
                        <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            sx={{
                                bgcolor: primaryGreen,
                                '&:hover': { bgcolor: '#5a7000' },
                                color: 'white',
                                textTransform: 'none',
                                fontSize: '1.1rem',
                                fontWeight: 'bold',
                                px: 6,
                                py: 1.5,
                                borderRadius: '8px'
                            }}
                        >
                            Enviar
                        </Button>
                    </Box>
                </Box>
            </Container>
        </>
    );
};

export default RegisterReservations;