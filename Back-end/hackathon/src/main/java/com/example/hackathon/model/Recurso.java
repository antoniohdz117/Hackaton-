package com.example.hackathon.model;

import jakarta.persistence.*;

@Entity
@Table (name = "recurso")
public class Recurso {

    @Id
    @Column(name = "idrecurso", nullable = false)
    private int idrecurso;

    private String nombre;

    @ManyToOne
    @JoinColumn(name = "idarea", nullable = false)
    private Area area;

}
