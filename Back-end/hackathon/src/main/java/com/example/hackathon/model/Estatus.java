package com.example.hackathon.model;

import jakarta.persistence.*;

@Entity
@Table (name = "estatus")
public class Estatus {

    @Id
    @Column(name = "idestatus")
    private int idestatus;

    @Column (name = "nombre")
    private String nombre;


}
