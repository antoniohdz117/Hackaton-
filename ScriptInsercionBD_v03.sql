-- Inserción de datos de prueba

-- TABLAS PADRES

INSERT INTO sede (nombre)
VALUES 
    ('Licenciatura'),
    ('Posgrado e Investigación');

INSERT INTO categoria (nombre, prioridad)
VALUES 
    ('Conferencia Magistral', '1'),   
    ('Taller', '2'),                  
    ('Conferencia', '2'),             
    ('Panel', '2'),                   
    ('Conversatorio', '3'),           
    ('Concurso', '3'),                
    ('Análisis', '4'),                
    ('Charla', '5');                  

INSERT INTO estatus (nombre)
VALUES 
    ('Pendiente'),
    ('Autorizada'),
    ('Realizada'),
    ('Cancelada');

INSERT INTO tipo (nombre)
VALUES 
    ('Integrante Presidium'),
    ('Moderador'),
    ('Ponente'),
    ('Instructor');

INSERT INTO grado (nombre)
VALUES 
    ('Licenciado'),
    ('Ingeniero'),
    ('Maestro'),
    ('Doctor'),
    ('Especialista');

INSERT INTO rol (nombre)
VALUES
    ('Administrador'),
    ('Funcionario'),
    ('Servicio Social');

INSERT INTO area (nombre)
VALUES
    ('Licenciatura en Contaduria'),
    ('Licenciatura en Administracion'),
    ('Licenciatura en Informatica'),
    ('Licenciatura en Negocios Internacionales'),
    ('Area de Fiscal'),
    ('Area de Metodologia de la Investigacion y Etica'),
    ('Area de Operaciones y Adquisiciones'),
    ('Area de Recursos Humanos'),
    ('Area de Finanzas'),
    ('Publicaciones y Fomento Editorial'), 
    ('Centro de Innovacion y Formacion en Contaduria y Administracion (CIFCA)'),
    ('Secretaria Administrativa'),
    ('Centro de Informatica'),
    ('Departamento de Medios Audiovisuales'),
    ('Departamento de Actos Academicos');

-- TABLAS PADRES-HIJAS

INSERT INTO usuario (nombre, paterno, materno, numeroFijo, numeroCelular, correo, contrasenia, idRol)
VALUES
    ('Silvia Berenice', 'Villamil', 'Rodriguez', '5550000001', '5551000001', 'svillamil@fca.unam.mx', 'VillamilAdmin2025', 1),
    ('Maria Gloria', 'Arevalo', 'Guerrero', '5550000002', '5551000002', 'garevalo@fca.unam.mx', 'Arevalo2025', 2),
    ('Gabriel', 'Guevara', 'Gutierrez', '5550000003', '5551000003', 'gguevara@fca.unam.mx', 'Guevara2025', 2),
    ('Hugo Javier', 'Buenrostro', 'Aguilar', '5550000004', '5551000004', 'hbuenrostro@fca.unam.mx', 'Buenrostro2025', 2),
    ('Isis Alibeth', 'Vargas', 'Santamaria', '5550000005', '5551000005', 'ivargas@fca.unam.mx', 'Vargas2025', 2),
    ('Eva Elizabeth', 'Del Valle', 'Cordova', '5550000006', '5551000006', 'evalle@fca.unam.mx', 'Valle2025', 2),
    ('Pedro Eduardo', 'Quezada', 'Garcia', '5550000007', '5551000007', 'pquezada@fca.unam.mx', 'Quezada2025', 2),
    ('Graciela', 'Enriquez', 'Guadarrama', '5550000008', '5551000008', 'geguadarrama@fca.unam.mx', 'Guadarrama2025', 2),
    ('Jose Alfredo', 'Sosa', 'Benitez', '5550000009', '5551000009', 'jsosa@fca.unam.mx', 'Sosa2025', 2),
    ('Ana', 'Lopez', 'Ramirez', '5550000010', '5551000010', 'ana.lopez@alumno.unam.mx', 'AnaSS2025', 3),
    ('Carlos', 'Mendez', 'Paredes', '5550000011', '5551000011', 'carlos.mendez@alumno.unam.mx', 'CarlosSS2025', 3),
    ('Fernanda', 'Martinez', 'Diaz', '5550000012', '5551000012', 'fernanda.martinez@alumno.unam.mx', 'FerSS2025', 3),
    ('Luis', 'Perez', 'Hernandez', '5550000013', '5551000013', 'luis.perez@alumno.unam.mx', 'LuisSS2025', 3),
    ('Gustavo', 'Almaguer', 'Perez', '5550000014', '5551000014', 'galmaguer@fca.unam.mx', 'Almaguer2025', 2),
    ('Adriana', 'Garcia', 'Vargas', '5550000015', '5551000015', 'agarciav@fca.unam.mx', 'Garcia2025', 2),
    ('Pablo Vicente', 'Cano', 'Tapia', '5550000016', '5551000016', 'pcano@fca.unam.mx', 'Cano2025', 2),
    ('Rafael', 'Torres', 'Jimenez', '5550000017', '5551000017', 'rtorres@fca.unam.mx', 'Torres2025', 2),
    ('Antonio', 'Calvo', 'Martinez', '5550000018', '5551000018', 'acalvo@fca.unam.mx', 'Calvo2025', 2),
    ('Elena', 'Rivera', 'Martinez', '5550000019', '5551000019', 'eriveram@fca.unam.mx', 'Rivera2025', 2);

INSERT INTO recinto (nombre, ubicacion, aforo, equipamiento, croquisUbicacion, idSede)
VALUES
    ('Aula Magna de Profesores Emeritos', 'Edificio Principal, planta baja, junto al auditorio de la FCA', 120, '1 proyector, 4 bocinas de audio, 1 laptop, 2 microfonos inalambricos', 'https://www.fca.unam.mx/ubicaciones/aula_magna_profesores_emeritos', 1),
    ('C.P. Alfonso Ochoa Ravize', 'Edificio B, segundo piso, ala poniente', 80, '1 proyector, 2 bocinas, 1 laptop, 1 microfono', 'https://www.fca.unam.mx/ubicaciones/alfonso_ochoa_ravize', 1),
    ('Fronton Cerrado', 'Zona deportiva FCA, detras del Edificio D', 200, 'Sistema de audio ambiental, microfonos, proyector portatil', 'https://www.fca.unam.mx/ubicaciones/fronton_cerrado', 1),
    ('Maestro Carlos Perez del Toro', 'Edificio C, planta alta, salon 204', 90, '1 proyector, 2 bocinas, 1 laptop, 1 microfono', 'https://www.fca.unam.mx/ubicaciones/carlos_perez_del_toro', 1),
    ('Maestro Jose Antonio Echenique Garcia', 'Edificio D, planta baja, junto al estacionamiento interno', 150, '1 proyector, 2 bocinas de audio, 1 laptop, 1 amplificador de audio, 2 microfonos', 'https://www.fca.unam.mx/ubicaciones/echenique_garcia', 1),
    ('Zoom', 'Plataforma virtual institucional de la FCA', 300, 'Aula virtual con soporte para videoconferencias, microfonos y grabacion de sesiones', 'https://www.fca.unam.mx/aulas_virtuales/zoom', 1),
    ('Aula I Metodo de Caso', 'Edificio de Posgrado, primer nivel, aula 1', 60, '1 proyector, 2 bocinas, 1 laptop, 1 microfono', 'https://www.fca.unam.mx/posgrado/aula1_metodo_de_caso', 2),
    ('Aula II Metodo de Caso', 'Edificio de Posgrado, primer nivel, aula 2', 60, '1 proyector, 2 bocinas, 1 laptop, 1 microfono', 'https://www.fca.unam.mx/posgrado/aula2_metodo_de_caso', 2),
    ('Aula III Metodo de Caso', 'Edificio de Posgrado, primer nivel, aula 3', 60, '1 proyector, 2 bocinas, 1 laptop, 1 microfono', 'https://www.fca.unam.mx/posgrado/aula3_metodo_de_caso', 2),
    ('Aula IV Metodo de Caso', 'Edificio de Posgrado, primer nivel, aula 4', 60, '1 proyector, 2 bocinas, 1 laptop, 1 microfono', 'https://www.fca.unam.mx/posgrado/aula4_metodo_de_caso', 2),
    ('Aula Magna de Investigacion', 'Edificio de Posgrado, planta alta, aula principal', 140, '1 proyector, sistema de audio, 2 microfonos, laptop institucional', 'https://www.fca.unam.mx/posgrado/aula_magna_investigacion', 2),
    ('C.P. Arturo Elizundia Charles', 'Edificio de Posgrado, planta baja, aula especial', 100, '1 proyector, 2 bocinas, 1 laptop, 1 microfono', 'https://www.fca.unam.mx/posgrado/arturo_elizundia_charles', 2);

INSERT INTO miembro (nombre, paterno, materno, semblanza, idGrado, idTipo)
VALUES
    ('Claudia', 'Ramirez', 'Lopez', 'https://fca.unam.mx/semblanzas/claudia-ramirez', 3, 3),
    ('Hector', 'Mendoza', 'Rios', 'https://fca.unam.mx/semblanzas/hector-mendoza', 4, 3),
    ('Patricia', 'Gomez', 'Cortes', 'https://fca.unam.mx/semblanzas/patricia-gomez', 3, 3),
    ('Luis', 'Fernandez', 'Torres', 'https://fca.unam.mx/semblanzas/luis-fernandez', 3, 4),
    ('Alejandra', 'Morales', 'Diaz', 'https://fca.unam.mx/semblanzas/alejandra-morales', 3, 4),
    ('Jorge', 'Castillo', 'Perez', NULL, 2, 2),
    ('Veronica', 'Lozano', 'Campos', NULL, 3, 2),
    ('Rafael', 'Garcia', 'Nunez', NULL, 4, 1),
    ('Mariana', 'Gutierrez', 'Flores', NULL, 1, 1),
    ('Carlos', 'Santos', 'Delgado', 'https://fca.unam.mx/semblanzas/carlos-santos', 2, 4);

INSERT INTO recursos (nombre, idArea)
VALUES
    ('Paño azul', 15),
    ('Mesa adicional', 15),
    ('Personalizadores', 15),
    ('Laptop', 13),
    ('Zoom', 13),
    ('Equipo de sonido', 14),
    ('Pantalla', 14),
    ('Videoproyector', 14),
    ('Fotografo', 10),
    ('Boletin Algo Mas (Reportero)', 10),
    ('Vigilancia', 12),
    ('Presidium', 12),
    ('Otros', 12),
    ('Limpieza entrada', 12),
    ('Limpieza de auditorio', 12),
    ('Limpieza banos', 12),
    ('Limpieza vestidores', 12),
    ('Abrir auditorio', 12);

-- TABLAS HIJAS

INSERT INTO puesto (nombre, idArea)
VALUES
    ('Presidente de APAFCA', 2),
    ('Encargada de Requisitos de Titulacion', 1),
    ('Jefe del Departamento de Administracion Escolar', 12),
    ('Oficial de Servicios Administrativos', 12),
    ('Oficinista de Servicios Escolares', 12),
    ('Responsable de Informatica', 13),
    ('Responsable de Modalidad Abierta', 13),
    ('Secretaria', 12),
    ('Apoyo Secretarial', 12),
    ('Apoyo a la Coordinacion de Formacion Docente, Titulacion y Extension', 11),
    ('Apoyo al Centro de Educacion a Distancia', 11),
    ('Asesoria Pedagogica y Diseno Instruccional', 11),
    ('Asistente de Plataformas: Programas Formales y Extension', 11),
    ('Jefatura', 11),
    ('Responsable Administrativo', 12),
    ('Responsable de Multimedios', 14),
    ('Responsable de Proyectos Educativos', 14),
    ('Responsable de Proyectos Especiales', 14),
    ('Responsable de Elaboracion de Material Didactico', 14),
    ('Responsable de Plataformas: Cursos en Linea Institucionales', 14),
    ('Apoyo a Administracion de Servidores', 13),
    ('Apoyo a Laboratorios de Computo', 13),
    ('Atencion en Ventanillas', 12),
    ('Coordinador de Administracion de Servidores', 13),
    ('Coordinador de Aplicaciones', 13),
    ('Coordinador de Infraestructura', 13),
    ('Coordinador de Soporte Tecnico', 13),
    ('Coordinador de Telecomunicaciones', 13),
    ('Coordinadora UX/UI', 13),
    ('Coordinadora de Capacitacion Especializada en TIC (CETIC) y Laboratorios de Computo', 13),
    ('Coordinadora de Desarrollo de Sitios Web', 13),
    ('Jefa del Centro de Informatica', 13),
    ('Responsable de Administracion de Servidores', 13),
    ('Responsable de Telecomunicaciones', 13),
    ('Responsable de Soporte Tecnico', 13),
    ('Coordinador de Asuntos Internacionales', 2),
    ('Coordinador de Auditoria', 1),
    ('Coordinadora de Contabilidad Avanzada', 1),
    ('Coordinador de Contabilidad Basica', 1),
    ('Coordinadora de Derecho', 2),
    ('Coordinadora de Finanzas', 9),
    ('Jefe de la Licenciatura en Administracion', 2),
    ('Jefa de la Licenciatura en Contaduria', 1),
    ('Jefe de la Licenciatura en Informatica', 3),
    ('Jefe de la Licenciatura en Negocios Internacionales', 4),
    ('Coordinadora de Fiscal', 5),
    ('Coordinador de Informatica', 13),
    ('Coordinadora de Matematicas', 6),
    ('Coordinadora de Mercadotecnia', 2),
    ('Coordinadora de Metodologia de la Investigacion y Etica', 6),
    ('Coordinadora de Operaciones y Adquisiciones', 7),
    ('Coordinadora de Recursos Humanos', 8);

INSERT INTO academico (idUsuario, rfc, idPuesto)
VALUES
    (1, 'VILR890101ABC', 42),  
    (2, 'AAGM810202BCD', 43), 
    (3, 'GEGG830303CDE', 44),  
    (4, 'HBAG850404DEF', 45),  
    (8, 'GEGU890808HIJ', 41),  
    (14, 'GAPZ910101JKL', 14),
    (15, 'AGVG920202KLM', 32), 
    (18, 'ACMM950505NOP', 16), 
    (19, 'ERMM960606OPQ', 10);

INSERT INTO alumno (idUsuario, numeroCuenta)
VALUES
    (10, '321456789'),
    (11, '321456790'),
    (12, '321456791'),
    (13, '321456792');

INSERT INTO evento (nombre, horaInicio, horaFinal, fechaInicio, fechaFin, idCategoria, idMegaEvento, idUsuario)
VALUES
    ('Semana academica', '09:00:00', '20:00:00', '2025-06-09', '2025-06-13', 8, NULL, 1),
    ('Beneficiario controlador', '09:40:00', '11:00:00', '2025-06-09', '2025-06-09', 5, 1, 2),
    ('La sustentabilidad en una empresa de produccion', '11:00:00', '13:00:00', '2025-06-09', '2025-06-09', 5, 1, 3),
    ('Optimizacion de Costos con implantacion de la Filosofia Kaizen', '09:00:00', '11:00:00', '2025-06-09', '2025-06-09', 2, 1, 4),
    ('Violencia y poder en el mundo de los negocios', '16:00:00', '18:00:00', '2025-06-09', '2025-06-09', 2, 1, 5),
    ('El talento humano en la organizacion ante los retos de la Inteligencia Artificial', '09:00:00', '11:00:00', '2025-06-10', '2025-06-10', 2, 1, 6),
    ('El CFDI como eje de la fiscalizacion del SAT', '11:00:00', '13:00:00', '2025-06-10', '2025-06-10', 7, 1, 7),
    ('Normas Internacionales de Gestion de Calidad', '18:00:00', '20:00:00', '2025-06-10', '2025-06-10', 7, 1, 8),
    ('Del grano a la barra, generando sonrisas a traves del chocolate', '09:00:00', '11:00:00', '2025-06-10', '2025-06-10', 5, 1, 9),
    ('Administracion de operaciones en el deporte de alto rendimiento', '11:00:00', '13:00:00', '2025-06-10', '2025-06-10', 5, 1, 14),
    ('El Ministerio del Futuro', '09:00:00', '11:00:00', '2025-06-13', '2025-06-13', 6, 1, 15);

INSERT INTO eventoxrecurso (idEvento, idRecursos)
VALUES
    (2, 6),
    (2, 7),
    (2, 8),
    (3, 6),
    (3, 7),
    (3, 8),
    (4, 4),
    (4, 5),
    (5, 4),
    (5, 6),
    (6, 4),
    (6, 7),
    (7, 4),
    (7, 7),
    (7, 8),
    (8, 6),
    (8, 7),
    (8, 8),
    (9, 6),
    (9, 7),
    (9, 8),
    (10, 6),
    (10, 7),
    (10, 8),
    (11, 9),
    (11, 10);

INSERT INTO eventoxmiembro (idEvento, idMiembro)
VALUES
    (2, 1),
    (2, 6),
    (3, 2),
    (3, 7),
    (4, 3),
    (4, 8),
    (5, 4),
    (5, 9),
    (6, 5),
    (6, 7),
    (7, 2),
    (7, 8),
    (8, 1),
    (8, 6),
    (9, 3),
    (9, 7),
    (10, 4),
    (10, 9),
    (11, 5),
    (11, 10);

INSERT INTO eventoxrecinto (idEvento, idRecinto, motivo, idEstatus)
VALUES
    (2, 4, NULL, 3),
    (3, 4, NULL, 3),
    (4, 4, NULL, 2),
    (5, 4, NULL, 3),
    (6, 4, NULL, 2),
    (7, 5, NULL, 3),
    (8, 5, NULL, 3),
    (9, 5, NULL, 3),
    (10, 5, NULL, 3),
    (11, 5, NULL, 2);

INSERT INTO fotografia (urlFotografia, idRecinto)
VALUES
    ('https://www.fca.unam.mx/imagenes/aula_magna_profesores_emeritos/foto1.jpg', 1),
    ('https://www.fca.unam.mx/imagenes/aula_magna_profesores_emeritos/foto2.jpg', 1),
    ('https://www.fca.unam.mx/imagenes/aula_magna_profesores_emeritos/foto3.jpg', 1),
    ('https://www.fca.unam.mx/imagenes/aula_magna_profesores_emeritos/foto4.jpg', 1),
    ('https://www.fca.unam.mx/imagenes/alfonso_ochoa_ravize/foto1.jpg', 2),
    ('https://www.fca.unam.mx/imagenes/alfonso_ochoa_ravize/foto2.jpg', 2),
    ('https://www.fca.unam.mx/imagenes/alfonso_ochoa_ravize/foto3.jpg', 2),
    ('https://www.fca.unam.mx/imagenes/alfonso_ochoa_ravize/foto4.jpg', 2),
    ('https://www.fca.unam.mx/imagenes/fronton_cerrado/foto1.jpg', 3),
    ('https://www.fca.unam.mx/imagenes/fronton_cerrado/foto2.jpg', 3),
    ('https://www.fca.unam.mx/imagenes/fronton_cerrado/foto3.jpg', 3),
    ('https://www.fca.unam.mx/imagenes/fronton_cerrado/foto4.jpg', 3),
    ('https://www.fca.unam.mx/imagenes/carlos_perez_del_toro/foto1.jpg', 4),
    ('https://www.fca.unam.mx/imagenes/carlos_perez_del_toro/foto2.jpg', 4),
    ('https://www.fca.unam.mx/imagenes/carlos_perez_del_toro/foto3.jpg', 4),
    ('https://www.fca.unam.mx/imagenes/carlos_perez_del_toro/foto4.jpg', 4),
    ('https://www.fca.unam.mx/imagenes/echenique_garcia/foto1.jpg', 5),
    ('https://www.fca.unam.mx/imagenes/echenique_garcia/foto2.jpg', 5),
    ('https://www.fca.unam.mx/imagenes/echenique_garcia/foto3.jpg', 5),
    ('https://www.fca.unam.mx/imagenes/echenique_garcia/foto4.jpg', 5),
    ('https://www.fca.unam.mx/imagenes/zoom/foto1.jpg', 6),
    ('https://www.fca.unam.mx/imagenes/zoom/foto2.jpg', 6),
    ('https://www.fca.unam.mx/imagenes/zoom/foto3.jpg', 6),
    ('https://www.fca.unam.mx/imagenes/zoom/foto4.jpg', 6),
    ('https://www.fca.unam.mx/imagenes/aula1_metodo_de_caso/foto1.jpg', 7),
    ('https://www.fca.unam.mx/imagenes/aula1_metodo_de_caso/foto2.jpg', 7),
    ('https://www.fca.unam.mx/imagenes/aula1_metodo_de_caso/foto3.jpg', 7),
    ('https://www.fca.unam.mx/imagenes/aula1_metodo_de_caso/foto4.jpg', 7),
    ('https://www.fca.unam.mx/imagenes/aula2_metodo_de_caso/foto1.jpg', 8),
    ('https://www.fca.unam.mx/imagenes/aula2_metodo_de_caso/foto2.jpg', 8),
    ('https://www.fca.unam.mx/imagenes/aula2_metodo_de_caso/foto3.jpg', 8),
    ('https://www.fca.unam.mx/imagenes/aula2_metodo_de_caso/foto4.jpg', 8),
    ('https://www.fca.unam.mx/imagenes/aula3_metodo_de_caso/foto1.jpg', 9),
    ('https://www.fca.unam.mx/imagenes/aula3_metodo_de_caso/foto2.jpg', 9),
    ('https://www.fca.unam.mx/imagenes/aula3_metodo_de_caso/foto3.jpg', 9),
    ('https://www.fca.unam.mx/imagenes/aula3_metodo_de_caso/foto4.jpg', 9),
    ('https://www.fca.unam.mx/imagenes/aula4_metodo_de_caso/foto1.jpg', 10),
    ('https://www.fca.unam.mx/imagenes/aula4_metodo_de_caso/foto2.jpg', 10),
    ('https://www.fca.unam.mx/imagenes/aula4_metodo_de_caso/foto3.jpg', 10),
    ('https://www.fca.unam.mx/imagenes/aula4_metodo_de_caso/foto4.jpg', 10),
    ('https://www.fca.unam.mx/imagenes/aula_magna_investigacion/foto1.jpg', 11),
    ('https://www.fca.unam.mx/imagenes/aula_magna_investigacion/foto2.jpg', 11),
    ('https://www.fca.unam.mx/imagenes/aula_magna_investigacion/foto3.jpg', 11),
    ('https://www.fca.unam.mx/imagenes/aula_magna_investigacion/foto4.jpg', 11),
    ('https://www.fca.unam.mx/imagenes/arturo_elizundia_charles/foto1.jpg', 12),
    ('https://www.fca.unam.mx/imagenes/arturo_elizundia_charles/foto2.jpg', 12),
    ('https://www.fca.unam.mx/imagenes/arturo_elizundia_charles/foto3.jpg', 12),
    ('https://www.fca.unam.mx/imagenes/arturo_elizundia_charles/foto4.jpg', 12);
