package com.example.hackathon.model;

import jakarta.persistence.*;

@Entity
@Table (name = "rol")
public class Rol {

    @Id
    @Column (name = "idrol", nullable = false)
    private int idrol;

    @Column(length = 20, nullable = false)
    private String nombre;


    public int getIdrol() {
        return idrol;
    }

    public void setIdrol(int idrol) {
        this.idrol = idrol;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
}
