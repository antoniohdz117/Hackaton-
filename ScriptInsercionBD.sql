-- Inserción de datos de prueba
INSERT INTO sede
VALUES
    (1, 'Licenciatura'),
    (2, 'Posgrado e Investigación');

INSERT INTO categoria
VALUES
    (1, 'Conferencia Magistral', '1'),
    (2, 'Taller', '2'),
    (3, 'Conferencia', '2'),
    (4, 'Panel', '2'),
    (5, 'Conversatorio', '3'),
    (6, 'Concurso', '3'),
    (7, 'Análisis', '4'),
    (8, 'Charla', '5');

INSERT INTO estatus
VALUES
    (1, 'Pendiente'),
    (2, 'Autorizada'),
    (3, 'Realizada'),
    (4, 'Cancelada');

INSERT INTO tipo
VALUES
    (1, 'Integrante Presidium'),
    (2, 'Moderador'),
    (3, 'Ponente'),
    (4, 'Instructor');

INSERT INTO grado
VALUES
    (1, 'Licenciado'),
    (2, 'Ingeniero'),
    (3, 'Maestro'),
    (4, 'Doctor'),
    (5, 'Especialista');

INSERT INTO puesto
VALUES
    (1, 'Presidente de APAFCA'),
    (2, 'Encargada de Requisitos de Titulacion'),
    (3, 'Jefe del Departamento de Administracion Escolar'),
    (4, 'Oficial de Servicios Administrativos'),
    (5, 'Oficinista de Servicios Escolares'),
    (6, 'Responsable de Informatica'),
    (7, 'Responsable de Modalidad Abierta'),
    (8, 'Secretaria'),
    (9, 'Apoyo Secretarial'),
    (10, 'Apoyo a la Coordinacion de Formacion Docente, Titulacion y Extension'),
    (11, 'Apoyo al Centro de Educacion a Distancia'),
    (12, 'Asesoria Pedagogica y Diseno Instruccional'),
    (13, 'Asistente de Plataformas: Programas Formales y Extension'),
    (14, 'Jefatura'),
    (15, 'Responsable Administrativo'),
    (16, 'Responsable de Multimedios'),
    (17, 'Responsable de Proyectos Educativos'),
    (18, 'Responsable de Proyectos Especiales'),
    (19, 'Responsable de Elaboracion de Material Didactico'),
    (20, 'Responsable de Plataformas: Cursos en Linea Institucionales'),
    (21, 'Apoyo a Administracion de Servidores'),
    (22, 'Apoyo a Laboratorios de Computo'),
    (23, 'Atencion en Ventanillas'),
    (24, 'Coordinador de Administracion de Servidores'),
    (25, 'Coordinador de Aplicaciones'),
    (26, 'Coordinador de Infraestructura'),
    (27, 'Coordinador de Soporte Tecnico'),
    (28, 'Coordinador de Telecomunicaciones'),
    (29, 'Coordinadora UX/UI'),
    (30, 'Coordinadora de Capacitacion Especializada en TIC (CETIC) y Laboratorios de Computo'),
    (31, 'Coordinadora de Desarrollo de Sitios Web'),
    (32, 'Jefa del Centro de Informatica'),
    (33, 'Responsable de Administracion de Servidores'),
    (34, 'Responsable de Telecomunicaciones'),
    (35, 'Responsable de Soporte Tecnico'),
    (36, 'Coordinador de Asuntos Internacionales'),
    (37, 'Coordinador de Auditoria'),
    (38, 'Coordinadora de Contabilidad Avanzada'),
    (39, 'Coordinador de Contabilidad Basica'),
    (40, 'Coordinadora de Derecho'),
    (41, 'Coordinadora de Finanzas'),
    (42, 'Jefe de la Licenciatura en Administracion'),
    (43, 'Jefa de la Licenciatura en Contaduria'),
    (44, 'Jefe de la Licenciatura en Informatica'),
    (45, 'Jefe de la Licenciatura en Negocios Internacionales'),
    (46, 'Coordinadora de Fiscal'),
    (47, 'Coordinador de Informatica'),
    (48, 'Coordinadora de Matematicas'),
    (49, 'Coordinadora de Mercadotecnia'),
    (50, 'Coordinadora de Metodologia de la Investigacion y Etica'),
    (51, 'Coordinadora de Operaciones y Adquisiciones'),
    (52, 'Coordinadora de Recursos Humanos');

INSERT INTO rol
VALUES
    (1, 'Administrador'),
    (2, 'Funcionario'),
    (3, 'Servicio Social');

INSERT INTO recinto
VALUES
    (1, 'Aula Magna de Profesores Emeritos',
     'Edificio Principal, planta baja, junto al auditorio de la FCA',
     120,
     '1 proyector, 4 bocinas de audio, 1 laptop, 2 microfonos inalambricos',
     'https://www.fca.unam.mx/ubicaciones/aula_magna_profesores_emeritos',
     1),

    (2, 'C.P. Alfonso Ochoa Ravize',
     'Edificio B, segundo piso, ala poniente',
     80,
     '1 proyector, 2 bocinas, 1 laptop, 1 microfono',
     'https://www.fca.unam.mx/ubicaciones/alfonso_ochoa_ravize',
     1),

    (3, 'Fronton Cerrado',
     'Zona deportiva FCA, detras del Edificio D',
     200,
     'Sistema de audio ambiental, microfonos, proyector portatil',
     'https://www.fca.unam.mx/ubicaciones/fronton_cerrado',
     1),

    (4, 'Maestro Carlos Perez del Toro',
     'Edificio C, planta alta, salon 204',
     90,
     '1 proyector, 2 bocinas, 1 laptop, 1 microfono',
     'https://www.fca.unam.mx/ubicaciones/carlos_perez_del_toro',
     1),

    (5, 'Maestro Jose Antonio Echenique Garcia',
     'Edificio D, planta baja, junto al estacionamiento interno',
     150,
     '1 proyector, 2 bocinas de audio, 1 laptop, 1 amplificador de audio, 2 microfonos',
     'https://www.fca.unam.mx/ubicaciones/echenique_garcia',
     1),

    (6, 'Zoom',
     'Plataforma virtual institucional de la FCA',
     300,
     'Aula virtual con soporte para videoconferencias, microfonos y grabacion de sesiones',
     'https://www.fca.unam.mx/aulas_virtuales/zoom',
     1),

    (7, 'Aula I Metodo de Caso',
     'Edificio de Posgrado, primer nivel, aula 1',
     60,
     '1 proyector, 2 bocinas, 1 laptop, 1 microfono',
     'https://www.fca.unam.mx/posgrado/aula1_metodo_de_caso',
     2),

    (8, 'Aula II Metodo de Caso',
     'Edificio de Posgrado, primer nivel, aula 2',
     60,
     '1 proyector, 2 bocinas, 1 laptop, 1 microfono',
     'https://www.fca.unam.mx/posgrado/aula2_metodo_de_caso',
     2),

    (9, 'Aula III Metodo de Caso',
     'Edificio de Posgrado, primer nivel, aula 3',
     60,
     '1 proyector, 2 bocinas, 1 laptop, 1 microfono',
     'https://www.fca.unam.mx/posgrado/aula3_metodo_de_caso',
     2),

    (10, 'Aula IV Metodo de Caso',
     'Edificio de Posgrado, primer nivel, aula 4',
     60,
     '1 proyector, 2 bocinas, 1 laptop, 1 microfono',
     'https://www.fca.unam.mx/posgrado/aula4_metodo_de_caso',
     2),
    (11, 'Aula Magna de Investigacion',
     'Edificio de Posgrado, planta alta, aula principal',
     140,
     '1 proyector, sistema de audio, 2 microfonos, laptop institucional',
     'https://www.fca.unam.mx/posgrado/aula_magna_investigacion',
     2),
    (12, 'C.P. Arturo Elizundia Charles',
     'Edificio de Posgrado, planta baja, aula especial',
     100,
     '1 proyector, 2 bocinas, 1 laptop, 1 microfono',
     'https://www.fca.unam.mx/posgrado/arturo_elizundia_charles',
     2);

INSERT INTO usuario
VALUES
    (1, 'Silvia Berenice', 'Villamil', 'Rodriguez', '5550000001', '5551000001',
     'svillamil@fca.unam.mx', 'VillamilAdmin2025', 1),
    (2, 'Maria Gloria', 'Arevalo', 'Guerrero', '5550000002', '5551000002',
     'garevalo@fca.unam.mx', 'Arevalo2025', 2),
    (3, 'Gabriel', 'Guevara', 'Gutierrez', '5550000003', '5551000003',
     'gguevara@fca.unam.mx', 'Guevara2025', 2),
    (4, 'Hugo Javier', 'Buenrostro', 'Aguilar', '5550000004', '5551000004',
     'hbuenrostro@fca.unam.mx', 'Buenrostro2025', 2),
    (5, 'Isis Alibeth', 'Vargas', 'Santamaria', '5550000005', '5551000005',
     'ivargas@fca.unam.mx', 'Vargas2025', 2),
    (6, 'Eva Elizabeth', 'Del Valle', 'Cordova', '5550000006', '5551000006',
     'evalle@fca.unam.mx', 'Valle2025', 2),
    (7, 'Pedro Eduardo', 'Quezada', 'Garcia', '5550000007', '5551000007',
     'pquezada@fca.unam.mx', 'Quezada2025', 2),
    (8, 'Graciela', 'Enriquez', 'Guadarrama', '5550000008', '5551000008',
     'geguadarrama@fca.unam.mx', 'Guadarrama2025', 2),
    (9, 'Jose Alfredo', 'Sosa', 'Benitez', '5550000009', '5551000009',
     'jsosa@fca.unam.mx', 'Sosa2025', 2),
    (10, 'Ana', 'Lopez', 'Ramirez', '5550000010', '5551000010',
     'ana.lopez@alumno.unam.mx', 'AnaSS2025', 3),
    (11, 'Carlos', 'Mendez', 'Paredes', '5550000011', '5551000011',
     'carlos.mendez@alumno.unam.mx', 'CarlosSS2025', 3),
    (12, 'Fernanda', 'Martinez', 'Diaz', '5550000012', '5551000012',
     'fernanda.martinez@alumno.unam.mx', 'FerSS2025', 3),
    (13, 'Luis', 'Perez', 'Hernandez', '5550000013', '5551000013',
     'luis.perez@alumno.unam.mx', 'LuisSS2025', 3),
    (14, 'Gustavo', 'Almaguer', 'Perez', '5550000014', '5551000014',
     'galmaguer@fca.unam.mx', 'Almaguer2025', 2),
    (15, 'Adriana', 'Garcia', 'Vargas', '5550000015', '5551000015',
     'agarciav@fca.unam.mx', 'Garcia2025', 2),
    (16, 'Pablo Vicente', 'Cano', 'Tapia', '5550000016', '5551000016',
     'pcano@fca.unam.mx', 'Cano2025', 2),
    (17, 'Rafael', 'Torres', 'Jimenez', '5550000017', '5551000017',
     'rtorres@fca.unam.mx', 'Torres2025', 2),
    (18, 'Antonio', 'Calvo', 'Martinez', '5550000018', '5551000018',
     'acalvo@fca.unam.mx', 'Calvo2025', 2),
    (19, 'Elena', 'Rivera', 'Martinez', '5550000019', '5551000019',
     'eriveram@fca.unam.mx', 'Rivera2025', 2);

INSERT INTO area
VALUES
    (1, 'Licenciatura en Contaduria', 2),
    (2, 'Licenciatura en Administracion', 1),
    (3, 'Licenciatura en Informatica', 3),
    (4, 'Licenciatura en Negocios Internacionales', 4),
    (5, 'Area de Fiscal', 5),
    (6, 'Area de Metodologia de la Investigacion y Etica', 6),
    (7, 'Area de Operaciones y Adquisiciones', 7),
    (8, 'Area de Recursos Humanos', 8),
    (9, 'Area de Finanzas', 9),
    (10, 'Publicaciones y Fomento Editorial', 14),
    (11, 'Centro de Innovacion y Formacion en Contaduria y Administracion (CIFCA)', 15),
    (12, 'Secretaria Administrativa', 16),
    (13, 'Centro de Informatica', 17),
    (14, 'Departamento de Medios Audiovisuales', 18),
    (15, 'Departamento de Actos Academicos', 19);

INSERT INTO recursos
VALUES
    (1, 'Paño azul', 15),
    (2, 'Mesa adicional', 15),
    (3, 'Personalizadores', 15),
    (4, 'Laptop', 13),
    (5, 'Zoom', 13),
    (6, 'Equipo de sonido', 14),
    (7, 'Pantalla', 14),
    (8, 'Videoproyector', 14),
    (9, 'Fotografo', 10),
    (10, 'Boletin Algo Mas (Reportero)', 10),
    (11, 'Vigilancia', 12),
    (12, 'Presidium', 12),
    (13, 'Otros', 12),
    (14, 'Limpieza entrada', 12),
    (15, 'Limpieza de auditorio', 12),
    (16, 'Limpieza banos', 12),
    (17, 'Limpieza vestidores', 12),
    (18, 'Abrir auditorio', 12);

INSERT INTO miembro
VALUES
    (1, 'Claudia', 'Ramirez', 'Lopez', 'https://fca.unam.mx/semblanzas/claudia-ramirez', 3, 3),
    (2, 'Hector', 'Mendoza', 'Rios', 'https://fca.unam.mx/semblanzas/hector-mendoza', 4, 3),
    (3, 'Patricia', 'Gomez', 'Cortes', 'https://fca.unam.mx/semblanzas/patricia-gomez', 3, 3),
    (4, 'Luis', 'Fernandez', 'Torres', 'https://fca.unam.mx/semblanzas/luis-fernandez', 3, 4),
    (5, 'Alejandra', 'Morales', 'Diaz', 'https://fca.unam.mx/semblanzas/alejandra-morales', 3, 4),
    (6, 'Jorge', 'Castillo', 'Perez', NULL, 2, 2),
    (7, 'Veronica', 'Lozano', 'Campos', NULL, 3, 2),
    (8, 'Rafael', 'Garcia', 'Nunez', NULL, 4, 1),
    (9, 'Mariana', 'Gutierrez', 'Flores', NULL, 1, 1),
    (10, 'Carlos', 'Santos', 'Delgado', 'https://fca.unam.mx/semblanzas/carlos-santos', 2, 4);


INSERT INTO academico (idUsuario, rfc, idPuesto, idArea)
VALUES
    (1, 'VILR890101ABC', 42, 2),
    (2, 'AAGM810202BCD', 43, 1),
    (3, 'GEGG830303CDE', 44, 3),
    (4, 'HBAG850404DEF', 45, 4),
    (8, 'GEGU890808HIJ', 41, 9),
    (14, 'GAPZ910101JKL', 14, 10),
    (15, 'AGVG920202KLM', 32, 13),
    (18, 'ACMM950505NOP', 14, 14),
    (19, 'ERMM960606OPQ', 14, 10);

INSERT INTO alumno
VALUES
    (10, '321456789'),
    (11, '321456790'),
    (12, '321456791'),
    (13, '321456792');


INSERT INTO evento
VALUES
    (1, 'Semana academica', '2025-06-09 09:00:00', '2025-06-13 20:00:00', '2025-06-09', '2025-06-13', 8, NULL),

    (2, 'Beneficiario controlador', '2025-06-09 09:40:00', '2025-06-09 11:00:00', '2025-06-09', '2025-06-09', 5, 1),
    (3, 'La sustentabilidad en una empresa de produccion', '2025-06-09 11:00:00', '2025-06-09 13:00:00', '2025-06-09', '2025-06-09', 5, 1),
    (4, 'Optimizacion de Costos con implantacion de la Filosofia Kaizen', '2025-06-09 09:00:00', '2025-06-09 11:00:00', '2025-06-09', '2025-06-09', 2, 1),
    (5, 'Violencia y poder en el mundo de los negocios', '2025-06-09 16:00:00', '2025-06-09 18:00:00', '2025-06-09', '2025-06-09', 2, 1),
    (6, 'El talento humano en la organizacion ante los retos de la Inteligencia Artificial', '2025-06-10 09:00:00', '2025-06-10 11:00:00', '2025-06-10', '2025-06-10', 2, 1),
    (7, 'El CFDI como eje de la fiscalizacion del SAT', '2025-06-10 11:00:00', '2025-06-10 13:00:00', '2025-06-10', '2025-06-10', 7, 1),
    (8, 'Normas Internacionales de Gestion de Calidad', '2025-06-10 18:00:00', '2025-06-10 20:00:00', '2025-06-10', '2025-06-10', 7, 1),
    (9, 'Del grano a la barra, generando sonrisas a traves del chocolate', '2025-06-10 09:00:00', '2025-06-10 11:00:00', '2025-06-10', '2025-06-10', 5, 1),
    (10, 'Administracion de operaciones en el deporte de alto rendimiento', '2025-06-10 11:00:00', '2025-06-10 13:00:00', '2025-06-10', '2025-06-10', 5, 1),
    (11, 'El Ministerio del Futuro', '2025-06-13 09:00:00', '2025-06-13 11:00:00', '2025-06-13', '2025-06-13', 6, 1);

INSERT INTO eventoxrecurso
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

INSERT INTO eventoxmiembro
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

INSERT INTO eventoxusuario
VALUES
    (2, 2),
    (3, 3),
    (4, 4),
    (5, 5),
    (6, 6),
    (7, 7),
    (8, 8),
    (9, 9),
    (10, 14),
    (11, 15);

INSERT INTO eventoxrecinto
VALUES
    (2, 4, 1001, NULL, 3),
    (3, 4, 1002, NULL, 3),
    (4, 4, 1003, NULL, 2),
    (5, 4, 1004, NULL, 3),
    (6, 4, 1005, NULL, 2),
    (7, 5, 1006, NULL, 3),
    (8, 5, 1007, NULL, 3),
    (9, 5, 1008, NULL, 3),
    (10, 5, 1009, NULL, 3),
    (11, 5, 1010, NULL, 2);

INSERT INTO fotografia
VALUES
    (1,  'https://www.fca.unam.mx/imagenes/aula_magna_profesores_emeritos/foto1.jpg', 1),
    (2,  'https://www.fca.unam.mx/imagenes/aula_magna_profesores_emeritos/foto2.jpg', 1),
    (3,  'https://www.fca.unam.mx/imagenes/aula_magna_profesores_emeritos/foto3.jpg', 1),
    (4,  'https://www.fca.unam.mx/imagenes/aula_magna_profesores_emeritos/foto4.jpg', 1),
    (5,  'https://www.fca.unam.mx/imagenes/alfonso_ochoa_ravize/foto1.jpg', 2),
    (6,  'https://www.fca.unam.mx/imagenes/alfonso_ochoa_ravize/foto2.jpg', 2),
    (7,  'https://www.fca.unam.mx/imagenes/alfonso_ochoa_ravize/foto3.jpg', 2),
    (8,  'https://www.fca.unam.mx/imagenes/alfonso_ochoa_ravize/foto4.jpg', 2),
    (9,  'https://www.fca.unam.mx/imagenes/fronton_cerrado/foto1.jpg', 3),
    (10, 'https://www.fca.unam.mx/imagenes/fronton_cerrado/foto2.jpg', 3),
    (11, 'https://www.fca.unam.mx/imagenes/fronton_cerrado/foto3.jpg', 3),
    (12, 'https://www.fca.unam.mx/imagenes/fronton_cerrado/foto4.jpg', 3),
    (13, 'https://www.fca.unam.mx/imagenes/carlos_perez_del_toro/foto1.jpg', 4),
    (14, 'https://www.fca.unam.mx/imagenes/carlos_perez_del_toro/foto2.jpg', 4),
    (15, 'https://www.fca.unam.mx/imagenes/carlos_perez_del_toro/foto3.jpg', 4),
    (16, 'https://www.fca.unam.mx/imagenes/carlos_perez_del_toro/foto4.jpg', 4),
    (17, 'https://www.fca.unam.mx/imagenes/echenique_garcia/foto1.jpg', 5),
    (18, 'https://www.fca.unam.mx/imagenes/echenique_garcia/foto2.jpg', 5),
    (19, 'https://www.fca.unam.mx/imagenes/echenique_garcia/foto3.jpg', 5),
    (20, 'https://www.fca.unam.mx/imagenes/echenique_garcia/foto4.jpg', 5),
    (21, 'https://www.fca.unam.mx/imagenes/zoom/foto1.jpg', 6),
    (22, 'https://www.fca.unam.mx/imagenes/zoom/foto2.jpg', 6),
    (23, 'https://www.fca.unam.mx/imagenes/zoom/foto3.jpg', 6),
    (24, 'https://www.fca.unam.mx/imagenes/zoom/foto4.jpg', 6),
    (25, 'https://www.fca.unam.mx/imagenes/aula1_metodo_de_caso/foto1.jpg', 7),
    (26, 'https://www.fca.unam.mx/imagenes/aula1_metodo_de_caso/foto2.jpg', 7),
    (27, 'https://www.fca.unam.mx/imagenes/aula1_metodo_de_caso/foto3.jpg', 7),
    (28, 'https://www.fca.unam.mx/imagenes/aula1_metodo_de_caso/foto4.jpg', 7),
    (29, 'https://www.fca.unam.mx/imagenes/aula2_metodo_de_caso/foto1.jpg', 8),
    (30, 'https://www.fca.unam.mx/imagenes/aula2_metodo_de_caso/foto2.jpg', 8),
    (31, 'https://www.fca.unam.mx/imagenes/aula2_metodo_de_caso/foto3.jpg', 8),
    (32, 'https://www.fca.unam.mx/imagenes/aula2_metodo_de_caso/foto4.jpg', 8),
    (33, 'https://www.fca.unam.mx/imagenes/aula3_metodo_de_caso/foto1.jpg', 9),
    (34, 'https://www.fca.unam.mx/imagenes/aula3_metodo_de_caso/foto2.jpg', 9),
    (35, 'https://www.fca.unam.mx/imagenes/aula3_metodo_de_caso/foto3.jpg', 9),
    (36, 'https://www.fca.unam.mx/imagenes/aula3_metodo_de_caso/foto4.jpg', 9),
    (37, 'https://www.fca.unam.mx/imagenes/aula4_metodo_de_caso/foto1.jpg', 10),
    (38, 'https://www.fca.unam.mx/imagenes/aula4_metodo_de_caso/foto2.jpg', 10),
    (39, 'https://www.fca.unam.mx/imagenes/aula4_metodo_de_caso/foto3.jpg', 10),
    (40, 'https://www.fca.unam.mx/imagenes/aula4_metodo_de_caso/foto4.jpg', 10),
    (41, 'https://www.fca.unam.mx/imagenes/aula_magna_investigacion/foto1.jpg', 11),
    (42, 'https://www.fca.unam.mx/imagenes/aula_magna_investigacion/foto2.jpg', 11),
    (43, 'https://www.fca.unam.mx/imagenes/aula_magna_investigacion/foto3.jpg', 11),
    (44, 'https://www.fca.unam.mx/imagenes/aula_magna_investigacion/foto4.jpg', 11),
    (45, 'https://www.fca.unam.mx/imagenes/arturo_elizundia_charles/foto1.jpg', 12),
    (46, 'https://www.fca.unam.mx/imagenes/arturo_elizundia_charles/foto2.jpg', 12),
    (47, 'https://www.fca.unam.mx/imagenes/arturo_elizundia_charles/foto3.jpg', 12),
    (48, 'https://www.fca.unam.mx/imagenes/arturo_elizundia_charles/foto4.jpg', 12);






