package com.example.hackathon.dto;

public class LoginResponse {



    //NUEVOS DATOS DE REGRESO PARA LA CONFIGURACION DE LA CUENTA

    private int idusuario;
    private String nombre;
    private String paterno;
    private String materno;
    private String numerofijo;
    private String numerocelular;
    private String correo;
    private int idrol;

    public LoginResponse(int idusuario, String nombre,String paterno, String materno, String numerofijo, String numerocelular, String correo, int idrol) {
        //inicializamos
        this.idusuario = idusuario;
        this.nombre = nombre;
        this.paterno = paterno;
        this.materno = materno;
        this.numerofijo = numerofijo;
        this.numerocelular = numerocelular;
        this.correo = correo;
        this.idrol = idrol;
    }

/*
    public LoginResponse(boolean success, String message) {
        this.success = success;
        this.message = message;
    }

    */
    //VALORES DE EXITO O NO



    public int getIdusuario() {
        return idusuario;
    }

    public void setIdusuario(int idusuario) {
        this.idusuario = idusuario;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getPaterno() {
        return paterno;
    }

    public void setPaterno(String paterno) {
        this.paterno = paterno;
    }

    public String getMaterno() {
        return materno;
    }

    public void setMaterno(String materno) {
        this.materno = materno;
    }

    public String getNumerofijo() {
        return numerofijo;
    }

    public void setNumerofijo(String numerofijo) {
        this.numerofijo = numerofijo;
    }

    public String getNumerocelular() {
        return numerocelular;
    }

    public void setNumerocelular(String numerocelular) {
        this.numerocelular = numerocelular;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public int getIdrol() {
        return idrol;
    }

    public void setIdrol(int idrol) {
        this.idrol = idrol;
    }
}
