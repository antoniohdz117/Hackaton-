-- Creación de la Base de Datos
CREATE DATABASE dala;

\c dala;

/*
Padres: sede, categoria, estatus, tipo, grado, rol, area
Padres-Hijas: usuario, recinto, evento, miembro, recursos, puesto
Hijas: alumno, academico, eventoxrecurso, eventoxmiembro, eventoxrecinto, fotografia
*/


-- Creación de tablas Padres
CREATE TABLE sede (
    idSede NUMERIC (5,0) NOT NULL,
    nombre VARCHAR (30) NOT NULL,

    CONSTRAINT pkSede
    PRIMARY KEY (idSede)
);

CREATE TABLE categoria(
    idCategoria NUMERIC (5,0) NOT NULL,
    nombre VARCHAR (30) NOT NULL,
    prioridad CHAR (1) NOT NULL,

    CONSTRAINT pkCategoria
    PRIMARY KEY (idCategoria),

    CONSTRAINT ckPrioridad
    CHECK (prioridad IN ('1', '2', '3', '4', '5'))
);

CREATE TABLE estatus(
    idEstatus NUMERIC (5,0) NOT NULL,
    nombre VARCHAR (20) NOT NULL,

    CONSTRAINT pkEstatus
    PRIMARY KEY (idEstatus)
);

CREATE TABLE tipo(
    idTipo NUMERIC (5,0) NOT NULL,
    nombre VARCHAR (20) NOT NULL,

    CONSTRAINT pkTipo
    PRIMARY KEY (idTipo)
);

CREATE TABLE grado(
    idGrado NUMERIC (5,0) NOT NULL,
    nombre VARCHAR (20) NOT NULL,

    CONSTRAINT pkGrado
    PRIMARY KEY (idGrado)
);

CREATE TABLE rol(
    idRol NUMERIC (5,0) NOT NULL,
    nombre VARCHAR (20) NOT NULL,

    CONSTRAINT pkRol
    PRIMARY KEY (idRol)
);

CREATE TABLE area(
    idArea NUMERIC (5,0) NOT NULL,
    nombre VARCHAR (80) NOT NULL,

    CONSTRAINT pkArea
    PRIMARY KEY (idArea)
);

-- Creación de tablas Padres-Hijas
CREATE TABLE usuario(
    idUsuario NUMERIC (5,0) NOT NULL,
    nombre VARCHAR (50) NOT NULL,
    paterno VARCHAR (50) NOT NULL,
    materno VARCHAR (50) NOT NULL,
    numeroFijo CHAR (10) NOT NULL,
    numeroCelular CHAR (10) NOT NULL,
    correo VARCHAR (50) NOT NULL,
    contrasenia VARCHAR (255) NOT NULL,
    idRol NUMERIC (5,0) NOT NULL,

    CONSTRAINT pkUsuario
    PRIMARY KEY (idUsuario),

    CONSTRAINT fkUsuarioRol
    FOREIGN KEY (idRol)
    REFERENCES rol(idRol)
    ON DELETE RESTRICT
    ON UPDATE CASCADE,

    CONSTRAINT uqUsuarioNumeroFijo
    UNIQUE (numeroFijo),

    CONSTRAINT uqUsuarioNumeroCelular
    UNIQUE (numeroCelular),

    CONSTRAINT uqUsuarioCorreo
    UNIQUE (correo)
);

CREATE TABLE recinto(
    idRecinto NUMERIC (5,0) NOT NULL,
    nombre VARCHAR (80) NOT NULL,
    ubicacion VARCHAR (80) NOT NULL,
    aforo NUMERIC (3,0) NOT NULL,
    equipamiento VARCHAR (150) NOT NULL,
    croquisUbicacion VARCHAR (100) NOT NULL,
    idSede NUMERIC (5,0) NOT NULL,

    CONSTRAINT pkRecinto
    PRIMARY KEY (idRecinto),

    CONSTRAINT fkRecintoSede
    FOREIGN KEY (idSede)
    REFERENCES sede (idSede)
    ON DELETE RESTRICT
    ON UPDATE CASCADE,

    CONSTRAINT uqRecintoNombre
    UNIQUE (nombre)
);

CREATE TABLE evento (
    idEvento NUMERIC (5,0) NOT NULL,
    nombre VARCHAR (150) NOT NULL,
    horaInicio TIME NOT NULL,
    horaFinal TIME NOT NULL,
    fechaInicio DATE NOT NULL,
    fechaFin DATE NOT NULL,
    idCategoria NUMERIC (5,0) NOT NULL,
    idMegaEvento NUMERIC (5,0) NULL,
    idUsuario NUMERIC (5,0) NOT NULL,

    CONSTRAINT pkEvento
    PRIMARY KEY (idEvento),

    CONSTRAINT fkEventoCategoria
    FOREIGN KEY (idCategoria)
    REFERENCES categoria(idCategoria)
    ON DELETE RESTRICT
    ON UPDATE CASCADE,

    CONSTRAINT fkEventoMegaEvento
    FOREIGN KEY (idMegaEvento)
    REFERENCES evento(idEvento)
    ON DELETE RESTRICT
    ON UPDATE CASCADE,

    CONSTRAINT fkEventoUsuario
    FOREIGN KEY (idUsuario)
    REFERENCES usuario(idUsuario)
    ON DELETE RESTRICT
    ON UPDATE CASCADE
);

CREATE TABLE miembro(
    idMiembro NUMERIC (5,0) NOT NULL,
    nombre VARCHAR (50) NOT NULL,
    paterno VARCHAR (50) NOT NULL,
    materno VARCHAR (50) NOT NULL,
    semblanza VARCHAR (80) NULL,
    idGrado NUMERIC (5,0) NOT NULL,
    idTipo NUMERIC (5,0) NOT NULL,

    CONSTRAINT pkMiembro
    PRIMARY KEY (idMiembro),

    CONSTRAINT fkMiembroGrado
    FOREIGN KEY (idGrado)
    REFERENCES grado (idGrado)
    ON DELETE RESTRICT
    ON UPDATE CASCADE,

    CONSTRAINT fkMiembroTipo
    FOREIGN KEY (idTipo)
    REFERENCES tipo (idTipo)
    ON DELETE RESTRICT
    ON UPDATE CASCADE
);

CREATE TABLE recursos(
    idRecursos NUMERIC (5,0) NOT NULL,
    nombre VARCHAR (50) NOT NULL,
    idArea NUMERIC (5,0) NOT NULL,

    CONSTRAINT pkRecursos
    PRIMARY KEY (idRecursos),

    CONSTRAINT fkRecursosArea
    FOREIGN KEY (idArea)
    REFERENCES area (idArea)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE puesto(
    idPuesto NUMERIC (5,0) NOT NULL,
    nombre VARCHAR (120) NOT NULL,
    idArea NUMERIC (5,0) NOT NULL,

    CONSTRAINT pkPuesto
    PRIMARY KEY (idPuesto),

    CONSTRAINT fkPuestoArea
    FOREIGN KEY (idArea)
    REFERENCES area (idArea)
    ON DELETE RESTRICT
    ON UPDATE CASCADE
);

-- Creación de tablas Hijas
CREATE TABLE alumno(
    idUsuario NUMERIC (5,0) NOT NULL,
    numeroCuenta CHAR (9) NOT NULL,

    CONSTRAINT pkAlumno
    PRIMARY KEY (idUsuario),

    CONSTRAINT uqAlumnoNumeroCuenta
    UNIQUE (numeroCuenta),

    CONSTRAINT fkAlumnoUsuario
    FOREIGN KEY (idUsuario)
    REFERENCES usuario(idUsuario)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE academico (
    idUsuario NUMERIC (5,0) NOT NULL,
    rfc CHAR (13) NOT NULL,
    idPuesto NUMERIC (5,0) NOT NULL,

    CONSTRAINT pkAcademico
    PRIMARY KEY (idUsuario),

    CONSTRAINT uqAcademicoRfc
    UNIQUE (rfc),

    CONSTRAINT uqAcademicoPuesto
    UNIQUE (idPuesto),

    CONSTRAINT fkAcademicoUsuario
    FOREIGN KEY (idUsuario)
    REFERENCES usuario(idUsuario)
    ON DELETE CASCADE
    ON UPDATE CASCADE,

    CONSTRAINT fkAcademicoPuesto
    FOREIGN KEY (idPuesto)
    REFERENCES puesto(idPuesto)
    ON DELETE RESTRICT
    ON UPDATE CASCADE
);

CREATE TABLE eventoxrecurso(
    idEvento NUMERIC (5,0) NOT NULL,
    idRecursos NUMERIC (5,0) NOT NULL,

    CONSTRAINT pkEventoXRecurso
    PRIMARY KEY (idEvento, idRecursos),

    CONSTRAINT fkEventoXRecursoEvento
    FOREIGN KEY (idEvento)
    REFERENCES evento (idEvento)
    ON DELETE RESTRICT
    ON UPDATE CASCADE,

    CONSTRAINT fkEventoXRecursoRecursos
    FOREIGN KEY (idRecursos)
    REFERENCES recursos (idRecursos)
    ON DELETE RESTRICT
    ON UPDATE CASCADE
);

CREATE TABLE eventoxmiembro(
    idEvento NUMERIC (5,0) NOT NULL,
    idMiembro NUMERIC (5,0) NOT NULL,

    CONSTRAINT pkEventoXMiembro
    PRIMARY KEY (idEvento, idMiembro),

    CONSTRAINT fkEventoXMiembroEvento
    FOREIGN KEY (idEvento)
    REFERENCES evento (idEvento)
    ON DELETE RESTRICT
    ON UPDATE CASCADE,

    CONSTRAINT fkEventoXMiembroMiembro
    FOREIGN KEY (idMiembro)
    REFERENCES miembro (idMiembro)
    ON DELETE RESTRICT
    ON UPDATE CASCADE
);

CREATE TABLE eventoxrecinto(
    idEvento NUMERIC (5,0) NOT NULL,
    idRecinto NUMERIC (5,0) NOT NULL,
    numeroSolicitud NUMERIC (5,0) NOT NULL,
    motivo VARCHAR (200) NULL,
    idEstatus NUMERIC (5,0) NOT NULL,
    fechaCreacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    fechaActualizacion TIMESTAMP NULL,

    CONSTRAINT pkEventoXRecinto
    PRIMARY KEY (idEvento, idRecinto),

    CONSTRAINT fkEventoXRecintoEvento
    FOREIGN KEY (idEvento)
    REFERENCES evento (idEvento)
    ON DELETE RESTRICT
    ON UPDATE CASCADE,

    CONSTRAINT fkEventoXRecintoRecinto
    FOREIGN KEY (idRecinto)
    REFERENCES recinto(idRecinto)
    ON DELETE RESTRICT
    ON UPDATE CASCADE,

    CONSTRAINT uqEventoXRecintoNumeroSolicitud
    UNIQUE (numeroSolicitud),

    CONSTRAINT fkEventoXRecintoEstatus
    FOREIGN KEY (idEstatus)
    REFERENCES estatus (idEstatus)
    ON DELETE RESTRICT
    ON UPDATE CASCADE
);

CREATE TABLE fotografia(
    idFotografia NUMERIC (5,0) NOT NULL,
    urlFotografia VARCHAR (150) NOT NULL,
    idRecinto NUMERIC (5,0) NOT NULL,

    CONSTRAINT pkFotografia
    PRIMARY KEY (idFotografia),

    CONSTRAINT fkFotografiaRecinto
    FOREIGN KEY (idRecinto)
    REFERENCES recinto (idRecinto)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);
