package com.example.hackathon.dto;

import jakarta.validation.constraints.NotBlank;

public class LoginRequest {

    @NotBlank(message = "El RFC es obligatorio")
    private String rfc;

    @NotBlank(message = "La contraseña es obligatoria")
    private String contrasenia;

    public String getRfc() {

        return rfc;
    }

    public void setRfc(String rfc) {

        this.rfc = rfc;
    }

    public String getContrasenia() {

        return contrasenia;
    }

    public void setContrasenia(String contrasenia) {

        this.contrasenia = contrasenia;
    }

}
