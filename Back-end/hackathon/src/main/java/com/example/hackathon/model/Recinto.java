package com.example.hackathon.model;

import jakarta.persistence.*;

@Entity
@Table (name = "recinto")
public class Recinto {

    @Id
    @Column (name = "idrecinto")
    private int idrecinto;

    @Column(length = 80, nullable = false)
    private String nombre;
    @Column(length = 80, nullable = false)
    private String ubicacion;
    @Column(nullable = false)
    private int aforo;
    @Column(length = 80, nullable = false)
    private String equipamiento;
    @Column(length = 80, nullable = false)
    private String croquisubicacion;

    @ManyToOne
    @JoinColumn(name = "idsede", referencedColumnName = "idsede")
    private Sede sede;


}
