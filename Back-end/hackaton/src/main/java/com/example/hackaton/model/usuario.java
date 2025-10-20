package com.example.hackaton.model;

import jakarta.persistence.*;


@Entity
//nombre de la base de datos
@Table(name = "usuario")
public class usuario{

    //datos de la tabla
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String nombre;
    private String constrasenia;
    private String rfc;


    //constructor

    public usuario(long id, String nombre, String contrasenia, String rfc) {
        this.id = id;
        this.nombre = nombre;
        this.constrasenia = contrasenia;
        this.rfc = rfc;

    }

    public usuario() {

    }

    //getters y setters


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getConstrasenia() {
        return constrasenia;
    }

    public void setConstrasenia(String constrasenia) {
        this.constrasenia = constrasenia;
    }

    public String getRfc() {
        return rfc;
    }

    public void setRfc(String rfc) {
        this.rfc = rfc;
    }
}
