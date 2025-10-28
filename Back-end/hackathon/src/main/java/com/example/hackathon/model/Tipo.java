package com.example.hackathon.model;


import jakarta.persistence.*;

@Entity
@Table (name = "tipo")
public class Tipo {

    @Id
    @Column (name = "idtipo")
    private int idtipo;

    @Column (name = "nombre")
    private String nombre;
}
