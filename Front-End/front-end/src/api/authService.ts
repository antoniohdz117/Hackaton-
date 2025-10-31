import React from "react";
//traemos las interfaces de types
import { Login, LoginResponse } from "../types/login"; //trae las interfaces


//importar las interfaces necesarias
//CONSTANTE DE LA RUTA DE MI API
const URL = "http://localhost:8080/api";


// http://localhost:8080/api/auth/login
//funcion para iniciar sesion
export const login = async (data: Login): Promise<LoginResponse> => {
    //peticion a la api
    //fetch a la ruta de login
    try {
        const response = await fetch(`${URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        //validar errores de la respuesta
        if(!response.ok){
            throw new Error('Error al iniciar sesión');
        } else {
            throw new Error(`Error en el servidor: ${response.status}`);
          }

        //convertir la respuesta a json
        const usuario: LoginResponse = await response.json();
        return usuario;

        } catch (error) {
            console.error('Error en la petición:', error);
            throw error;
        }
    };




