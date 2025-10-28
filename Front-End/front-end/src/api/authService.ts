import React from "react";
//traemos las interfaces de types
import { Login, LoginResponse } from "../types/login"; //trae las interfaces


//importar las interfaces necesarias
//CONSTANTE DE LA RUTA DE MI API
const URL = "http://localhost:3000/api";

//funcion para iniciar sesion
export const login = async (data: Login): Promise<LoginResponse> => {
    //peticion a la api
    const response = await fetch('${URL}/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    //debera regresar la respuesta en formato json
    return await response.json();
}

