/*Tabla usuario*/
export interface gestionUsuario {
    idUsuario: number;
    nombreUsuario: string;
    paternoUsuario: string;
    maternoUsuario: string;
    numeroFijo: number;
    numeroCelular: number;
    correo: string;
}

/*Tabla Area*/
export interface gestionUsuArea{
    nombreArea: string;
}

/*tabla puesto*/
export interface gestionUsuaPuesto{
    nombrePuesto: string;
}

