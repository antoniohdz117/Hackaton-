package com.example.hackathon.model;

import jakarta.persistence.*;

@Entity
@Table (name = "sede")
public class Sede {
    @Id
    @Column(name = "idsede")
    private int idsede;

    @Column(name = "nombre")
    private String nombre;

}

