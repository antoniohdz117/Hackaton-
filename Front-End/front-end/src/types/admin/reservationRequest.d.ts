/*Tabla recinto*/
export interface reservacionRecinto{
    nombreRecinto: string;
}

/*Tabla evento*/
export interface reservacionEvento{

    idEvento: number;
    nombreMegaEvento?: string;
    nombreEvento: string;
    fechaInicio: string;    /*NOTA: al final las fechas se tendran que convertir al tipo de dato string*/
    fechaFin: string;
    horaInicio: string;
    horaFinal: string;
}

/*tabala estatus*/
export interface reservacionEstatus {
    nombreEstatus: string;
}

/*tabla area*/
export interface reservacionArea {
    nombreArea: string;
}

/*tabla categoria*/
export interface reservacionCateoria {
    nombreCategoria: string;
}