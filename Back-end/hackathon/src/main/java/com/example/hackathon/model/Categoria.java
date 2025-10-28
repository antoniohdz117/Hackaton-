package com.example.hackathon.model;


import jakarta.persistence.*;

@Entity
@Table (name = "categoria")

public class Categoria {

    @Id
    @Column(name = "idcategoria")
    private int idcategoria;

    @Column (name = "nombre")
    private String nombre;

    @Column (name = "prioridad")
    private Character prioridad;

}
