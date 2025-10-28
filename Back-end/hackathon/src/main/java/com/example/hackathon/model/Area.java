package com.example.hackathon.model;

import jakarta.persistence.*;

@Entity
@Table (name = "area")
public class Area {

    @Id
    @Column(name = "idarea", nullable = false)
    private int idarea;

    @Column(length = 80, nullable = false)
    private String nombre;

    @ManyToOne
    @JoinColumn(name = "idusuario", nullable = false)
    private Usuario usuario;

}
