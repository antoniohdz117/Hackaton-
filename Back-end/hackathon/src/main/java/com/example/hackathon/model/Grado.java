package com.example.hackathon.model;

import jakarta.persistence.*;

@Entity
@Table (name = "grado")
public class Grado {

    @Id
    @Column (name = "idgrado", nullable = false)
    private Long idgrado;

    @Column (length = 20, nullable = false)
    private String nombre;


}
