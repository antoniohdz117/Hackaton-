/*Tabla usuario*/
export interface registroUsuario {

    nombreUsuario: string;
    paternoUsuario: string;
    maternoUsuario: string;
    numeroFijo: number;
    numeroCelular: number;
    correo: string;
}

/*Tabla academico*/
export interface registroUsuarioAcade {
    rfc: string;
}

/*Tabla puesto*/
export interface registroUsuarioPuesto {
    nombrePuesto: string;
}