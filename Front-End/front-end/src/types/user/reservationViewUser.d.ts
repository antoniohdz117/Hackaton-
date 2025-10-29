/*Tabla evento*/
export interface vistaEvento {
    idEvento: number;
    nombreEvento: string;
    fechaInicio: string;
    fechaFin: string;
    horaInicio: string;
    horaFinal: string;
}


/*Tabla recinto*/
export interface vistaRecinto {
    nombreRecinto: string;
}

/*Tabla categoria*/
export interface vistaCategoria {
    nombreCategoria: string;
}