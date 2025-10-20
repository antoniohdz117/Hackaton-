/*Tabla evento*/
export interface regristroEvento{

    nombreMegaEvento?: string;
    nombreEvento: string;
    fechaInicio: string;    /*NOTA: al final las fechas se tendran que convertir al tipo de dato string*/
    fechaFin: string;
    horaInicio: string;
    horaFinal: string;
}

/* catalogo categoria */
export interface registroCategoria{
    categoria: string;
}


/*tabla recinto*/
export interface registroRecinto {
    nombreRecinto: string;
}


/*tabla mienbros para el registro de PONENETES / INTEGRANTES / PRESIDIUM*/
export interface registroPonente{
    nombrePonente: string;
    paternoPonente: string;
    maternoPonente: string;
    semblanza?: File;
}


/*tabla grado para el registro de grado del ponente*/
export interface registroGrado {
    nombreGrado: string;
}

/*PARA EL REGISTRO DE RECURSOS*/

/*tabla area*/
export interface registroArea{
    nombreArea: string;
}

/*tabla recursos*/
export interface registroRecurso{
    nombreRecurso: string;
}